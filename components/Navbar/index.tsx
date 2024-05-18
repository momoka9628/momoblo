'use client'
import Link from 'next/link';
import styles from './index.module.css';
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname();
  return (
    <>
      <nav className={styles.nav}>
        <Link href={'/'} className={styles.navTitle}>Home</Link>
        <div className={styles.ham} onClick={() => setMenuOpen(!menuOpen)}>
          <span className={styles.hamBar}></span>
          <span className={styles.hamBar}></span>
          <span className={styles.hamBar}></span>
        </div>
        <ul className={`${styles.navMenues} ${menuOpen ? styles.open : ""}`}>
          <Link href={'/aboutme'}><li className={`${styles.navMenu} ${pathname === '/aboutme' ? styles.active : ""}`}>プロフィール</li></Link>
          <Link href={'/contact'}><li className={`${styles.navMenu} ${pathname === '/contact' ? styles.active : ""}`}>お問い合わせ</li></Link>
        </ul>
      </nav>
    </>
  )
}