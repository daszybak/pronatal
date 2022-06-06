import Section from '../../containers/section/section';
import Layout from '../../components/layout/secondaryLayout';
import Accordion from '../../components/accordion/accordion';
import CarskiRez from '../../data/html-text/carskiRez';
import DisanjeUPorodu from '../../data/html-text/disanjeUPorodu';
import VjestinaDojenja from '../../data/html-text/vjestinaDojenja';
import KakoPrehrana from '../../data/html-text/kakoPrehrana';
import KakoPrepoznati from '../../data/html-text/kakoPrepoznati';
import SectionMainTitle from '../../components/sectionMainTitle/sectionMainTitle';
import {GiScalpel, GiBabyBottle, GiLifeInTheBalance} from 'react-icons/gi';
import {WiStrongWind} from 'react-icons/wi';
import {BiTimer} from 'react-icons/bi';

export default function CestaPitanja() {
  return (
    <Layout>
      <Section
        title={
          <SectionMainTitle align={'left'}>Zanimljivosti</SectionMainTitle>
        }
      >
        <Accordion
          title={
            <h4>
              <GiScalpel />
              &nbsp; Carski rez
            </h4>
          }
          key={'Carski rez'}
        >
          <CarskiRez />
        </Accordion>
        <Accordion
          title={
            <h4>
              <WiStrongWind />
              &nbsp; Disanje u porodu
            </h4>
          }
          key={'Disanje u porodu'}
        >
          <DisanjeUPorodu />
        </Accordion>
        <Accordion
          title={
            <h4>
              <GiBabyBottle />
              &nbsp; Vještina dojenja
            </h4>
          }
          key={'Vještina dojenja'}
        >
          <VjestinaDojenja />
        </Accordion>
        <Accordion
          title={
            <h4>
              <GiLifeInTheBalance />
              &nbsp; Kako prehrana, lijekovi i stil života utječu na dojenje
            </h4>
          }
          key={'Kako prehrana, lijekovi i stil života utječu na dojenje'}
        >
          <KakoPrehrana />
        </Accordion>
        <Accordion
          title={
            <h4>
              <BiTimer />
              &nbsp; Kako prepoznati početak poroda
            </h4>
          }
          key={'Kako prepoznati početak poroda'}
        >
          <KakoPrepoznati />
        </Accordion>
      </Section>
    </Layout>
  );
}
