import Head from 'next/head';
import SecondaryLayout from '../../components/layout/secondaryLayout';
import Contact from '../../containers/contact/contact';

export default function Kontakt() {
  return (
    <>
      <Head>
        <title>Kontakt | Poliklinika ProNatal Zagreb</title>
        <meta
          name="description"
          content="Kontaktirajte Polikliniku ProNatal Zagreb. Adresa: Tratinska 36, Zagreb. Telefon: +385 1 3821 411. Naručite se na pregled kod vrhunskih ginekologa."
        />
        <link rel="canonical" href="https://www.pronatal.hr/kontakt" />
      </Head>
      <SecondaryLayout>
        <Contact />
      </SecondaryLayout>
    </>
  );
}
