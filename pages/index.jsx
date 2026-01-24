import Head from 'next/head';
import Layout from '../components/layout/layout';
import Content from '../containers/content/content';
import Hero from '../containers/hero/hero';
import Footbar from '../containers/footbar/footbar';
import Team from '../containers/team/team';
import Testimonials from '../components/testimonials/testimonials';
import SectionMainTitle from '../components/sectionMainTitle/sectionMainTitle';

export default function Home() {
  return (
    <>
      <Head>
        <title>Poliklinika ProNatal Zagreb | Ginekologija i Opstetricija</title>
        <meta
          name="description"
          content="Poliklinika ProNatal Zagreb - specijalizirana privatna klinika za ginekologiju, opstetriciju i vođenje trudnoće. Prof. dr. sc. Marina Ivanišević i Prof. dr. sc. Josip Đelmiš. Tratinska 36, Zagreb."
        />
        <link rel="canonical" href="https://www.pronatal.hr/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              '@id': 'https://www.pronatal.hr',
              name: 'Poliklinika ProNatal',
              alternateName: 'ProNatal d.o.o.',
              description:
                'Specijalizirana privatna poliklinika za ginekologiju, opstetriciju, internu medicinu i ultrazvuk dojke u Zagrebu.',
              url: 'https://www.pronatal.hr',
              telephone: '+385-1-3821-411',
              email: 'pronatal@pronatal.hr',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Tratinska 36',
                addressLocality: 'Zagreb',
                postalCode: '10000',
                addressCountry: 'HR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 45.80224,
                longitude: 15.95994,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '20:00',
                },
              ],
              medicalSpecialty: [
                'Gynecology',
                'Obstetrics',
                'Internal Medicine',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Medicinske usluge',
                itemListElement: [
                  {
                    '@type': 'OfferCatalog',
                    name: 'Ginekologija',
                  },
                  {
                    '@type': 'OfferCatalog',
                    name: 'Opstetricija',
                  },
                  {
                    '@type': 'OfferCatalog',
                    name: 'Interna medicina',
                  },
                  {
                    '@type': 'OfferCatalog',
                    name: 'Ultrazvuk dojke',
                  },
                ],
              },
              priceRange: '$$',
              currenciesAccepted: 'EUR',
              paymentAccepted: 'Cash, Credit Card',
              image: 'https://www.pronatal.hr/images/og-image.jpg',
              sameAs: [],
            }),
          }}
        />
      </Head>
      <Layout>
        <Hero>
          <Content />
        </Hero>
        <SectionMainTitle align={'center'}>
          Naši priznati stručnjaci
        </SectionMainTitle>
        <Team />
        <Testimonials />
        <Footbar />
      </Layout>
    </>
  );
}
