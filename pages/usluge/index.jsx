import Head from 'next/head';
import Section from '../../containers/section/section'
import SectionMainTitle from '../../components/sectionMainTitle/sectionMainTitle'
import SecondaryLayout from '../../components/layout/secondaryLayout';
import List from '../../components/list/list';

import usluge from '../../data/uslugeData.json';

import styles from './index.module.scss';

export default function Usluge() {
  return (
    <>
      <Head>
        <title>Usluge | Poliklinika ProNatal Zagreb</title>
        <meta
          name="description"
          content="Ginekološke usluge Poliklinike ProNatal Zagreb - ginekologija, opstetricija, vođenje trudnoće, ultrazvuk, interna medicina. Cjelovita zdravstvena skrb za žene."
        />
        <link rel="canonical" href="https://www.pronatal.hr/usluge" />
      </Head>
      <SecondaryLayout>
      <div className={styles.margin}>
        <SectionMainTitle align={'center'}>Usluge</SectionMainTitle>
        <Section id={'ginekologija'}  title={<SectionMainTitle>Ginekologija</SectionMainTitle>}><List items={usluge.ginekologija}/></Section>
        <Section id={'opstetricija'}   title={<SectionMainTitle>Opstetricija</SectionMainTitle>}><List items={usluge.opstetricija}/></Section>
        <Section id={'interna-medicina'}   title={<SectionMainTitle>Interna medicina</SectionMainTitle>}><List items={usluge['interna medicina']}/></Section>
        <Section id={'ultrazvuk-dojke'}   title={<SectionMainTitle>Ultrazvuk dojke</SectionMainTitle>}>
          <p>Ultrazvučni pregled dojki je neinvazivna dijagnostička metoda koja omogućuje rano otkrivanje promjena u tkivu dojke. Preporučuje se kao dio redovitog pregleda za žene svih dobnih skupina, posebno kao dopuna mamografiji.</p>
          <p style={{marginTop: '1rem'}}>Za više informacija i zakazivanje termina, molimo kontaktirajte nas.</p>
        </Section>
      </div>
      </SecondaryLayout>
    </>
  );
}
