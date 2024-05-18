import { getList, getTag } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Pagination from '@/components/Pagination';
import ArticleList from '@/components/ArticleList';

type Props = {
  params: {
    month: string
    current: string
  };
};

export const revalidate = 60;

export default async function Page({ params }: Props) {
  const { month } = params;
  const current = parseInt(params.current as string, 10);
  const start = new Date(Number(month.substring(0, 4)), Number(month.substring(4, 6)) - 1, 1)
  const end = new Date(Number(month.substring(0, 4)), Number(month.substring(4, 6)), 0)
  const data = await getList({
    limit: LIMIT,
    offset: LIMIT * (current - 1),
    filters: `publishedAt[greater_than]${start.toISOString()}[and]publishedAt[less_than]${end.toISOString()}`,
  });
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} current={current} basePath={`/monthly/${month}`} />
    </>
  );
}
