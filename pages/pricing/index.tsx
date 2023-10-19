import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { MainLayout } from '@/components/layouts/MainLayout'
import styles from '../../components/layouts/MainLayout.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <MainLayout > 
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <div><h1>PRICING PAGE</h1> </div>
        <div className={styles.grid}>
          <Link
            href="/"
            className={styles.card}
          >
            <h2>
              Ir a Home <span>-&gt;</span>
            </h2>
          </Link>
        </div>
      </MainLayout>
    </>
  )
}
