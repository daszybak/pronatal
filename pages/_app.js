import Head from 'next/head';

import 'normalize.css';
import '../styles/index.css';

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Pronatal</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
