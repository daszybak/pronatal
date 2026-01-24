import Head from 'next/head';
import SecondaryLayout from '../../components/layout/secondaryLayout';
import SectionMainTitle from '../../components/sectionMainTitle/sectionMainTitle';
import styles from './index.module.scss';

export default function Privatnost() {
  return (
    <>
      <Head>
        <title>Izjava o privatnosti | Poliklinika ProNatal Zagreb</title>
        <meta
          name="description"
          content="Izjava o privatnosti i zaštita osobnih podataka Poliklinike ProNatal Zagreb. Saznajte kako štitimo vaše osobne podatke u skladu s GDPR uredbom."
        />
      </Head>
      <SecondaryLayout>
        <div className={styles.container}>
          <SectionMainTitle>Izjava o privatnosti</SectionMainTitle>

          <section className={styles.section}>
            <h2>1. Uvod</h2>
            <p>
              Poliklinika ProNatal d.o.o. (u daljnjem tekstu: &quot;mi&quot;, &quot;nas&quot; ili
              &quot;Poliklinika&quot;) posvećena je zaštiti vaše privatnosti i osobnih podataka.
              Ova Izjava o privatnosti objašnjava kako prikupljamo, koristimo, obrađujemo i
              štitimo vaše osobne podatke u skladu s Općom uredbom o zaštiti podataka (GDPR)
              i hrvatskim Zakonom o provedbi Opće uredbe o zaštiti podataka.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Voditelj obrade podataka</h2>
            <p>
              <strong>ProNatal d.o.o.</strong>
              <br />
              Tratinska 36, 10000 Zagreb, Hrvatska
              <br />
              OIB: [OIB broj]
              <br />
              Email: pronatal@pronatal.hr
              <br />
              Telefon: +385 (1) 3821 411
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Koje podatke prikupljamo</h2>
            <p>Možemo prikupljati sljedeće vrste osobnih podataka:</p>
            <ul>
              <li>
                <strong>Identifikacijski podaci:</strong> ime, prezime, datum rođenja, OIB
              </li>
              <li>
                <strong>Kontakt podaci:</strong> adresa, email adresa, broj telefona
              </li>
              <li>
                <strong>Zdravstveni podaci:</strong> medicinska dokumentacija, nalazi pretraga,
                povijest bolesti (isključivo u svrhu pružanja zdravstvene skrbi)
              </li>
              <li>
                <strong>Podaci o komunikaciji:</strong> upiti putem kontaktnog obrasca, email
                korespondencija
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Svrha obrade podataka</h2>
            <p>Vaše osobne podatke obrađujemo u sljedeće svrhe:</p>
            <ul>
              <li>Pružanje zdravstvenih usluga i medicinske skrbi</li>
              <li>Zakazivanje i upravljanje terminima pregleda</li>
              <li>Komunikacija s pacijentima</li>
              <li>Ispunjavanje zakonskih obveza (vođenje medicinske dokumentacije)</li>
              <li>Poboljšanje kvalitete naših usluga</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Pravna osnova za obradu</h2>
            <p>Vaše podatke obrađujemo temeljem:</p>
            <ul>
              <li>Vašeg izričitog pristanka</li>
              <li>Izvršenja ugovora o pružanju zdravstvenih usluga</li>
              <li>Ispunjavanja zakonskih obveza (Zakon o zdravstvenoj zaštiti)</li>
              <li>Zaštite vitalnih interesa ispitanika (u hitnim medicinskim slučajevima)</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>6. Vaša prava</h2>
            <p>Sukladno GDPR-u, imate sljedeća prava:</p>
            <ul>
              <li>
                <strong>Pravo na pristup:</strong> možete zatražiti uvid u svoje osobne podatke
              </li>
              <li>
                <strong>Pravo na ispravak:</strong> možete zatražiti ispravak netočnih podataka
              </li>
              <li>
                <strong>Pravo na brisanje:</strong> možete zatražiti brisanje podataka (uz
                zakonska ograničenja za medicinsku dokumentaciju)
              </li>
              <li>
                <strong>Pravo na ograničenje obrade:</strong> možete zatražiti ograničenje
                obrade u određenim slučajevima
              </li>
              <li>
                <strong>Pravo na prenosivost:</strong> možete zatražiti prijenos podataka
                drugom voditelju obrade
              </li>
              <li>
                <strong>Pravo na prigovor:</strong> možete uložiti prigovor na obradu podataka
              </li>
            </ul>
            <p>
              Za ostvarivanje svojih prava, kontaktirajte nas na: pronatal@pronatal.hr
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Čuvanje podataka</h2>
            <p>
              Vaše osobne podatke čuvamo onoliko dugo koliko je potrebno za ispunjenje svrhe
              za koju su prikupljeni. Medicinska dokumentacija čuva se sukladno Zakonu o
              zdravstvenoj zaštiti i podzakonskim aktima (minimalno 10 godina za odrasle
              pacijente, odnosno do navršene 28. godine života za maloljetne pacijente).
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Sigurnost podataka</h2>
            <p>
              Primjenjujemo odgovarajuće tehničke i organizacijske mjere za zaštitu vaših
              osobnih podataka od neovlaštenog pristupa, gubitka, uništenja ili otkrivanja.
              Pristup vašim podacima ima samo ovlašteno osoblje koje je obvezano čuvanjem
              profesionalne tajne.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Kolačići (Cookies)</h2>
            <p>
              Naša web stranica koristi kolačiće za poboljšanje korisničkog iskustva.
              Kolačići su male tekstualne datoteke koje se pohranjuju na vašem uređaju.
              Korištenjem naše stranice pristajete na upotrebu kolačića. Možete upravljati
              postavkama kolačića u svom pregledniku.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Kontakt i pritužbe</h2>
            <p>
              Za sva pitanja vezana uz zaštitu osobnih podataka, molimo kontaktirajte nas:
            </p>
            <p>
              Email: pronatal@pronatal.hr
              <br />
              Telefon: +385 (1) 3821 411
              <br />
              Adresa: Tratinska 36, 10000 Zagreb
            </p>
            <p>
              Ako smatrate da smo povrijedili vaša prava, imate pravo podnijeti pritužbu
              Agenciji za zaštitu osobnih podataka (AZOP):
              <br />
              <a
                href="https://azop.hr"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.azop.hr
              </a>
            </p>
          </section>

          <section className={styles.section}>
            <p className={styles.updated}>
              <em>Posljednje ažuriranje: Siječanj 2026.</em>
            </p>
          </section>
        </div>
      </SecondaryLayout>
    </>
  );
}
