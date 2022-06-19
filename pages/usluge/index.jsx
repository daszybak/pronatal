import Section from '../../containers/section/section'
import SectionMainTitle from '../../components/sectionMainTitle/sectionMainTitle'
import SecondaryLayout from '../../components/layout/secondaryLayout';
import List from '../../components/list/list';

import usluge from '../../data/uslugeData.json';

import styles from './index.module.scss';

export default function Usluge() {
  return (
    <SecondaryLayout>
      <div className={styles.margin}>
        <SectionMainTitle align={'center'}>Usluge</SectionMainTitle>
        <Section id={'ginekologija'}  title={<SectionMainTitle>Ginekologija</SectionMainTitle>}><List items={usluge.ginekologija}/></Section>
        <Section id={'opstetricija'}   title={<SectionMainTitle>Opstetricija</SectionMainTitle>}><List items={usluge.opstetricija}/></Section>
        <Section id={'interna-medicina'}   title={<SectionMainTitle>Interna medicina</SectionMainTitle>}><List items={usluge['interna medicina']}/></Section>
        <Section id={'ultrazvuk-dojke'}   title={<SectionMainTitle>Ultrazvuk dojke</SectionMainTitle>}> </Section>
      </div>
    </SecondaryLayout>
  );
}
