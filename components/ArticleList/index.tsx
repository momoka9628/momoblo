import { Article, Tag } from '@/libs/microcms';
import ArticleListItem from '../ArticleListItem';
import styles from './index.module.css'

type Props = {
  articles?: Article[]
  tag?: Tag
};

export default function ArticleList({ articles, tag }: Props) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return (
      <>
        <ul className={styles.listWrap}>
          <h2 className={styles.title}>
            {
              tag &&
              (
                <>
                  <span className={styles.tag}>{tag?.name}</span>
                  <span>の</span>
                </>
              )
            }
            記事一覧
          </h2>
          <p>記事がありません。</p>
        </ul>
      </>
    )
  }
  return (
    <>
      <ul className={styles.listWrap}>
        <h2 className={styles.title}>
          {tag &&
            (
              <>
                <span className={styles.tag}>{tag?.name}</span>
                <span>の</span>
              </>)
          }
          記事一覧
        </h2>
        {articles.map((article) => (
          <ArticleListItem key={article.id} article={article} />
        ))}
      </ul>
    </>
  );
}
