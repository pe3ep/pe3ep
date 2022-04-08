import Link from 'next/link'
import Head from 'next/head'

import styles from '../styles/Layout.module.css'

const Navbar = ({ children }) => {
  return (
    <>
      <Head>
        <title>About me.</title>
      </Head>

      <div className={styles.nav}>
        <nav className={styles.primaryNavigation}>
          <img
            src="assets/img/png/logo.png"
            alt="Website logo"
            className={styles.logo}
          />
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>

      <main className={styles.mainContent}>{children}</main>
    </>
  )
}

export default Navbar
