import SecondaryLayout from '../../components/layout/secondaryLayout';
import Team from '../../containers/team/team';
import SectionMainTitle from '../../components/sectionMainTitle/sectionMainTitle';
import Section from '../../containers/section/section';
import styles from './index.module.scss';

export default function ONama() {
  return (
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
        ProNatal d.o.o, poliklinika za ginekologiju i opstetriciju, internu medicinu, radiologiju - mamografiju i urologiju registrirano je zdravstveno poduzeće u 2008. godini. Poliklinika ProNatal d.o.o. je usmjerena ka održanju i poboljšanju reproduktivnog i ukupnog zdravlja svake žene i muškarca, kao i dobrobit svih pacijenata koji dolaze na pregled, zahvat ili konzultaciju. Stručno osoblje poliklinike ProNatal d.o.o će svoju misiju ostvariti kroz pružanje medicinske usluge najbolje kvalitete, zdravstvenu zaštitu orijentiranu prema pacijentu u poliklinici i izvan nje organizirajući u skladu sa svojim mogućnostima i temeljem ugovora sa ostalim zdravstvenim ustanovama dodatnu brigu za pacijenta. Ujedno razvijajući i primjenjivajući kroz istraživački rad suradnika najnovije metode dijagnostike, liječenja i terapije. Sve to će doprinjeti da misija poliklinike Pronatal bude na tragu najsuvremenijih spoznaja u reproduktivnoj medicini, ginekologiji, opstetriciji, internoj medicini, radiologiji - mamografiji i urologiji.
      </Section>
    </SecondaryLayout>
  );
}
