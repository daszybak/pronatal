import Head from 'next/head'

import 'normalize.css';
import '../styles/index.css';

function MyApp({Component, pageProps}) {
  return <>
  <Head>
  <title>ProNatal d.o.o, poliklinika za ginekologiju i opstetriciju, internu medicinu, radiologiju - mamografiju i urologiju</title>
  <meta name="author" content="Karlo Đelmiš"/>
  <meta name="keywords" content="Poliklinika, ProNatal, ginekologija, opstetricija, porodništvo, privatna, ordinacija, Zagreb, centar, Hrvatska, natal" />
  </Head>
  <Component {...pageProps} />;
  </>
}

export default MyApp;
