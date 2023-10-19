import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../components/layouts/MainLayout.module.css'
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'
import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app';

const inter = Inter({ subsets: ['latin'] })

const AboutPage:NextPageWithLayout = () => {
  return (
    <>
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
        <div><h1>ABOUT PAGE</h1> </div>
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
    </>
  )
}

AboutPage.getLayout = function getLayout( page: ReactElement ){
  return(
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}

export default AboutPage;