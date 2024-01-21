import type PostData from '@/lib/types/PostData';
import styles from './styles/PostPage.module.css';

interface PostPageProps {
  post: PostData;
}

export default function PostPage(props: PostPageProps) {
  const {post} = props;
  const {title, date, html} = post;

  return (
    <main className={styles.main}>
      <h1 className={styles.mainTitle}>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{__html: html}} />
    </main>
  );
}
