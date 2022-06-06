import SecondaryLayout from '../../components/layout/secondaryLayout';
import Team from '../../containers/team/team';
import SectionMainTitle from '../../components/sectionMainTitle/sectionMainTitle';
import Section from '../../containers/section/section';

export default function ONama() {
  return (
    <SecondaryLayout>
      <div style={{marginTop: '6rem'}}>
        <Section
          title={<SectionMainTitle>Naši priznati stručnjaci</SectionMainTitle>}
        >
          <Team />
        </Section>
      </div>
      <Section
        title={<SectionMainTitle>Naša klinika</SectionMainTitle>}
        align={'right'}
      >
        <div>Klinika</div>
      </Section>
    </SecondaryLayout>
  );
}
