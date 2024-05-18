import { formatRichText } from '@/libs/utils';
import { type Article } from '@/libs/microcms';
import PublishedDate from '../Date';
import styles from './index.module.css';
import TagList from '../TagList';
import Profile from '../Profile';

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  return (
    <main className={styles.main}>
      <picture>
        <source
          type="image/webp"
          media="(max-width: 640px)"
          srcSet={`${data.thumbnail?.url}?fm=webp&w=414 1x, ${data.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
        />
        <source
          type="image/webp"
          srcSet={`${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504 1x, ${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504&dpr=2 2x`}
        />
        <img
          src={data.thumbnail?.url}
          alt=""
          className={styles.thumbnail}
          width={100}
          height={data.thumbnail?.height}
        />
      </picture>
      <div className={styles.subContent}>
        <h1 className={styles.title}>{data.title}</h1>
        <PublishedDate date={data.publishedAt || data.createdAt} />
        <TagList tags={data.tags} />
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(data.content)}`,
        }}
      />
      <Profile writer={data.writer} />
    </main>
  );
}
