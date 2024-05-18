import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Pagination from '@/components/Pagination';
import ArticleList from '@/components/ArticleList';
import SideMenu from '@/components/SideMenu';
import styles from './page.module.css'
export const revalidate = 60;

type Props = {
  params: {
    current: string;
  };
};


export default async function Page({ params }: Props) {
  const current = parseInt(params.current as string, 10);
  const data = await getList({
    limit: LIMIT,
    offset: LIMIT * (current - 1),
  });
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <ArticleList articles={data.contents} />
          <Pagination totalCount={data.totalCount} current={current} />
        </div>
        {/* @ts-expect-error Server Component */}
        <SideMenu></SideMenu>
      </div>
    </>
  );
}
