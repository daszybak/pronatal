import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout/layout';
import Hero from '../containers/hero';

export default function Home() {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}
