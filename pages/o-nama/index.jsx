import Head from 'next/head';
import SecondaryLayout from '../../components/layout/secondaryLayout';
import Team from '../../containers/team/team';
import SectionMainTitle from '../../components/sectionMainTitle/sectionMainTitle';
import Section from '../../containers/section/section';
import styles from './index.module.scss';

export default function ONama() {
  return (
    <>
      <Head>
        <title>O nama | Poliklinika ProNatal Zagreb</title>
        <meta
          name="description"
          content="Upoznajte stručni tim Poliklinike ProNatal - Prof. dr. sc. Marina Ivanišević i Prof. dr. sc. Josip Đelmiš. Vrhunski ginekolozi s dugogodišnjim iskustvom u Zagrebu."
        />
        <link rel="canonical" href="https://www.pronatal.hr/o-nama" />
      </Head>
      <SecondaryLayout>
      <div className={styles.title}>
        <Section
          title={<SectionMainTitle>Naši priznati stručnjaci</SectionMainTitle>}
        >
          <Team />
        </Section>
      </div>
      <Section
        title={<SectionMainTitle>Naša klinika</SectionMainTitle>}
        align={'left'}
        id={'naša-klinika'}
      >
        <p style={{marginBottom: '1.5rem'}}>
          <strong>Dobrodošli u Polikliniku ProNatal.</strong> Od 2008. godine pružamo
          specijaliziranu ginekološku i opstetričku skrb u srcu Zagreba, u ugodnom
          okruženju namijenjenom vašoj dobrobiti.
        </p>
        <p style={{marginBottom: '1.5rem'}}>
          Naša misija je jednostavna: brinemo se o vašem reproduktivnom i ukupnom
          zdravlju s pažnjom i stručnošću koju zaslužujete. Svaki pregled, svaka
          konzultacija - pristupamo vam kao pojedincu, ne samo kao pacijentu.
        </p>
        <p style={{marginBottom: '1.5rem'}}>
          Naš stručni tim predvode Prof. dr. sc. Marina Ivanišević i Prof. dr. sc.
          Josip Đelmiš, vrhunski stručnjaci s višedesetljetnim iskustvom u ginekologiji,
          opstetriciji i perinatalnoj medicini. Njihovo bogato kliničko iskustvo i
          znanstveni rad osiguravaju vam najbolju moguću skrb.
        </p>
        <p>
          Primjenjujemo najnovije dijagnostičke metode i terapije, prateći svjetske
          standarde u reproduktivnoj medicini. Bilo da dolazite na redoviti pregled,
          vođenje trudnoće ili specijalistički savjet, ovdje ste na pravom mjestu.
        </p>
      </Section>
      </SecondaryLayout>
    </>
  );
}
