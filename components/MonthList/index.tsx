import styles from './index.module.css';
import { getMonthList } from '@/libs/microcms';
import { groupByMonth, dateCount } from '@/libs/utils';
import Link from 'next/link';
type dateType = {
  publishedAt: string
}
export default async function MonthList() {
  const dates: dateType[] = await getMonthList();
  const MonthList: dateCount[] = groupByMonth(dates)
  return (
    <>
      <ul>
        {MonthList.map((month) => (
          <Link href={`/monthly/${month.publishedAt.split("/").join("")}`} key={month.publishedAt}>
            <li>{(month.publishedAt) + '(' + (month.count) + ')'}</li>
          </Link>
        ))}
      </ul>
    </>
  )
}
