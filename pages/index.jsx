import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Main page</title>
      </Head>

      <div className={styles.opener}>
        <h1>Welcome to my website.</h1>
        <div className={styles.btnWrapper}>
          <Link href="/about">
            <button data-type="primary" className="btn">
              <FontAwesomeIcon icon={faUser} height={'2.5em'} />
              About me
            </button>
          </Link>
          <button
            onClick={() => (window.location = 'https://github.com/pe3ep')}
            data-type="secondary"
            className="btn"
          >
            <FontAwesomeIcon icon={faGithub} height={'2.5em'} />
            My GitHub
          </button>
        </div>
      </div>
    </>
  )
}
