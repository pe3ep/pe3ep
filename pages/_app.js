import Navbar from '../layouts/Navbar'
import Head from 'next/head'
import ProgressBar from '@badrap/bar-of-progress'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const progress = new ProgressBar({
  size: 2,
  color: '#DC2626',
  className: 'bar-of-progress',
  delay: 50,
})

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', progress.start)
    router.events.on('routeChangeComplete', progress.finish)
    router.events.on('routeChangeError', progress.finish)

    return () => {
      router.events.off('routeChangeStart', progress.start)
      router.events.off('routeChangeComplete', progress.finish)
      router.events.off('routeChangeError', progress.finish)
    }
  }, [router])

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </>
  )
}

export default MyApp
