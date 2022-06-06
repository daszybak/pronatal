import SecondaryLayout from '../../components/layout/secondaryLayout';
import Team from '../../containers/team/team';
import SectionMainTitle from '../../components/sectionMainTitle/sectionMainTitle';
import Section from '../../containers/section/section';

export default function ONama() {
  return (
    <SecondaryLayout>
      <Section
        title={<SectionMainTitle>Naši priznati stručnjaci</SectionMainTitle>}
      >
        <Team />
      </Section>
    </SecondaryLayout>
  );
}
