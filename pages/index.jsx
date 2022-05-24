import Head from 'next/head'
import Image from 'next/image';
import Layout from '../components/layout/layout';
import Hero from '../containers/hero/hero';

export default function Home() {
  return (
    <>
    <Head>
      <meta name="description" content="Poliklinika, ProNatal, ginekologija, opstetricija, porodništvo, privatna, ordinacija, Zagreb, centar, Hrvatska, natal, ginekološki, pregled, Marina, Ivanišević" />
    </Head>
    <Layout>
      <Hero />
    </Layout>
    </>
  );
}
