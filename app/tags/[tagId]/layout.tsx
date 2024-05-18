import styles from './layout.module.css';
import SideMenu from '@/components/SideMenu';

type Props = {
  children: React.ReactNode;
};

export default async function TagsLayout({ children }: Props) {
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
