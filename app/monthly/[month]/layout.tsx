import { getTag } from '@/libs/microcms';
import styles from './layout.module.css';
import SideMenu from '@/components/SideMenu';

type Props = {
  children: React.ReactNode;
  params: {
    tagId: string;
  };
};

export default async function MonthlyLayout({ children, params }: Props) {
  const { tagId } = params;
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          {children}
        </div>
      </div>
      {/* @ts-expect-error Server Component */}
      <SideMenu></SideMenu>
    </div>
  );
}
