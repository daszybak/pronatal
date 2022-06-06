import Head from 'next/head';
import Layout from '../components/layout/layout';
import Content from '../containers/content/content';
import Hero from '../containers/hero/hero';
import Footbar from '../containers/footbar/footbar';
import Team from '../containers/team/team';
import SectionMainTitle from '../components/sectionMainTitle/sectionMainTitle';

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Poliklinika, ProNatal, ginekologija, opstetricija, porodništvo, privatna, ordinacija, Zagreb, centar, Hrvatska, natal, ginekološki, pregled, Marina, Ivanišević"
        />
      </Head>
      <Layout>
        <Hero>
          <Content />
        </Hero>
        <SectionMainTitle align={'center'}>
          Naši priznati stručnjaci
        </SectionMainTitle>
        <Team />
        <Footbar />
      </Layout>
    </>
  );
}
