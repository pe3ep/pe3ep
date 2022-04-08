import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
// import { React, useState } from 'react'

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { React, useState } from 'react'

const Navbar = ({ children }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <div className={styles.nav}>
        <nav className={styles.navigationFlow}>
          <Link href="/">
            <img
              src="assets/img/png/logo.png"
              alt="Website logo"
              className={styles.logo}
            />
          </Link>
          <button onClick={() => setOpen(!open)} className={styles.btn}>
            <FontAwesomeIcon
              className={styles.btnIcon}
              data-active={`${!open}`}
              icon={faBars}
              width={24}
            />
            <FontAwesomeIcon
              className={styles.btnIcon}
              data-active={`${open}`}
              icon={faXmark}
              width={24}
            />
          </button>
          <ul aria-expanded={`${open}`} className={styles.primaryNav}>
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
