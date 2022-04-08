import Navbar from '../layouts/Navbar'
import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
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
