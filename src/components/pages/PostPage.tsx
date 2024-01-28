import type {BlogPosting, WithContext} from 'schema-dts';
import type PostData from '@/lib/types/PostData';
import styles from './styles/PostPage.module.css';

interface PostPageProps {
  post: PostData;
  schemaOrgData: WithContext<BlogPosting>;
}

export default function PostPage(props: PostPageProps) {
  const {post, schemaOrgData} = props;
  const {title, date, html} = post;

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaOrgData)}} />
      <h1 className={styles.mainTitle}>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{__html: html}} />
    </main>
  );
}
