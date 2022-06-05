import Head from 'next/head';
import Layout from '../components/layout/layout';
import Content from '../containers/content/content';
import Hero from '../containers/hero/hero';
import Footbar from '../containers/footbar/footbar';
import Section from '../containers/section/section';
import SectionMainTitle from '../components/sectionMainTitle/sectionMainTitle';
import Person from '../components/person/person';

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
        <SectionMainTitle>
          Najveći ginekološki stručnjaci u Hrvatskoj
        </SectionMainTitle>
        <Section title={'Prof. dr. sc. Marina Ivanišević'}>
          <Person
            src="/images/profesori/marina.jpg"
            alt={'Prof. dr. sc. Marina Ivanišević'}
          />
        </Section>
        <Section title={'Prof. dr. sc. Josip Đelmiš'} right>
          <Person
            src="/images/profesori/josip.jpeg"
            alt={'Prof. dr. sc. Josip Đelmiš'}
            right
          />
        </Section>
        <Footbar />
      </Layout>
    </>
  );
}
