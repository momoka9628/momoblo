import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Pagination from '@/components/Pagination';
import ArticleList from '@/components/ArticleList';
import SideMenu from '@/components/SideMenu';
import styles from './page.module.css'
export const revalidate = 60;

export default async function Page() {
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <ArticleList articles={data.contents} />
          <Pagination totalCount={data.totalCount} />
        </div>
        {/* @ts-expect-error Server Component */}
        <SideMenu></SideMenu>
      </div>
    </>
  );
}
