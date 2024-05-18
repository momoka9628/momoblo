import Footer from '@/components/Footer';
import './globals.css';
import styles from './layout.module.css';
import Navbar from '@/components/Navbar';


export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'Simple Blog',
  description: 'A simple blog presented by microCMS',
  openGraph: {
    title: 'Simple Blog',
    description: 'A simple blog presented by microCMS',
    images: '/ogp.png',
  },
  alternates: {
    canonical: '/',
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <body>
        {/* <Header /> */}
        <Navbar></Navbar>
        <div className={styles.container}>
          <main className={styles.main}>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
