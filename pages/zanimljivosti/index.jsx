import Section from '../../containers/section/section';
import Layout from '../../components/layout/secondaryLayout';
import Accordion from '../../components/accordion/accordion';
import CarskiRez from '../../data/html-text/carskiRez';
import DisanjeUPorodu from '../../data/html-text/disanjeUPorodu';
import VjestinaDojenja from '../../data/html-text/vjestinaDojenja';
import KakoPrehrana from '../../data/html-text/kakoPrehrana';
import KakoPrepoznati from '../../data/html-text/kakoPrepoznati';
import SectionMainTitle from '../../components/sectionMainTitle/sectionMainTitle';

export default function CestaPitanja() {
  return (
    <Layout>
      <Section
        title={
          <SectionMainTitle align={'left'}>Zanimljivosti</SectionMainTitle>
        }
      >
        <Accordion title={'Carski rez'} key={'Carski rez'}>
          <CarskiRez />
        </Accordion>
        <Accordion title={'Disanje u porodu'} key={'Disanje u porodu'}>
          <DisanjeUPorodu />
        </Accordion>
        <Accordion title={'Vještina dojenja'} key={'Vještina dojenja'}>
          <VjestinaDojenja />
        </Accordion>
        <Accordion
          title={'Kako prehrana, lijekovi i stil života utječu na dojenje'}
          key={'Kako prehrana, lijekovi i stil života utječu na dojenje'}
        >
          <KakoPrehrana />
        </Accordion>
        <Accordion
          title={'Kako prepoznati početak poroda'}
          key={'Kako prepoznati početak poroda'}
        >
          <KakoPrepoznati />
        </Accordion>
      </Section>
    </Layout>
  );
}
