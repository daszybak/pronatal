import Section from '../section/section';
import Person from '../../components/person/person';
import SectionMainTitle from '../../components/layout/secondaryLayout';

const Team = () => {
  return (
    <>
      <Section title={'Prof. dr. sc. Marina Ivanišević'}>
        <Person
          src="/images/profesori/marina.jpg"
          alt={'Prof. dr. sc. Marina Ivanišević'}
        />
      </Section>
      <Section title={'Prof. dr. sc. Josip Đelmiš'} align="right">
        <Person
          src="/images/profesori/josip.jpeg"
          alt={'Prof. dr. sc. Josip Đelmiš'}
          right
        >
          Rođen u Subotici 1947. Diplomirao je na Medicinskom fakultetu
          Sveučilišta u Zagrebu 1971. Specijalistički ispit iz ginekologije i
          opstetricije položio je u Zagrebu 1977. U Medicinskom centru u
          Subotici vodio je Odjel konzervativne ginekologije od 1979. do 1982.
          Od 1982. godine zaposlen je u Klinici za ženske bolesti i porode,
          Centar za perinatalnu medicinu, a kumulativni radni odnos sa
          Medicinskim fakultetom, u Katedri za ginekologiju i opstetriciju
          zasnovao je 1985. kada je izabran u zvanje asistenta. Završio je tri
          postdiplomska studija: Medicinska citologija, Perinatologija i
          neonatologija i Dijabetologija na Medicinskom u Zagrebu. Boravi na
          usavršavanjima u Engleskoj u Nottinghamu na Klinici za ginekologiju
          (1986), uz stipendiju Brown University iz Rhode Islanda radi u
          laboratoriju Odjela za perinatologiju (1988.-1989.). Član istraživačke
          grupe Placenta (SAD). Godine 1989. Docent za predmet Ginekologija i
          opstetricija na Medicinskom fakultetu u Zagrebu, a 1994. izvanredni
          profesor.
        </Person>
      </Section>
    </>
  );
};

export default Team;
