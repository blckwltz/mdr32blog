import fs from 'fs';
import matter from 'gray-matter';
import {join} from 'path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import {unified} from 'unified';
import type PostData from '@/lib/types/PostData';

let parser: ReturnType<typeof getParserPre> | undefined;

async function getParserPre() {
  return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings);
}

function getParser() {
  if (!parser) {
    parser = getParserPre().catch((error) => {
      parser = undefined;

      throw error;
    });
  }

  return parser;
}

export async function getPostById(id: string): Promise<PostData> {
  const pageId = id.replace(/\.md$/, '');
  const fullPath = join('_posts', `${pageId}.md`);
  const {data, content} = matter(await fs.promises.readFile(fullPath, 'utf8'));
  const parser = await getParser();
  const html = await parser.process(content);

  return {
    ...data,
    id: pageId,
    title: data.title,
    description: data.description,
    date: data.date,
    html: html.value.toString(),
  };
}

export async function getAllPosts(): Promise<PostData[]> {
  const posts = await Promise.all(fs.readdirSync('_posts').map((id) => getPostById(id)));

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}
