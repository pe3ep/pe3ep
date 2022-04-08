import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/404.module.css'

export default function FourOhFour() {
  return (
    <>
      <div className={styles.main}>
        <img
          src="assets/img/svg/404.svg"
          alt="404 illustration"
          className={styles.img}
        />
        <h1>404 - Page Not Found</h1>
        <Link href="/">
          <a>Go back home</a>
        </Link>
      </div>
    </>
  )
}
