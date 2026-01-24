import Head from 'next/head';
import SecondaryLayout from '../../components/layout/secondaryLayout';
import SectionMainTitle from '../../components/sectionMainTitle/sectionMainTitle';
import styles from './index.module.scss';

export default function Impressum() {
  return (
    <>
      <Head>
        <title>Impressum | Poliklinika ProNatal Zagreb</title>
        <meta
          name="description"
          content="Pravne informacije o Poliklinici ProNatal d.o.o. Zagreb - podaci o tvrtki, registracija, kontakt informacije."
        />
      </Head>
      <SecondaryLayout>
        <div className={styles.container}>
          <SectionMainTitle>Impressum</SectionMainTitle>

          <section className={styles.section}>
            <h2>Podaci o tvrtki</h2>
            <p>
              <strong>ProNatal d.o.o.</strong>
              <br />
              Poliklinika za ginekologiju i opstetriciju, internu medicinu,
              radiologiju - mamografiju i urologiju
            </p>
          </section>

          <section className={styles.section}>
            <h2>Sjedište</h2>
            <p>
              Tratinska 36
              <br />
              10000 Zagreb
              <br />
              Republika Hrvatska
            </p>
          </section>

          <section className={styles.section}>
            <h2>Registracijski podaci</h2>
            <p>
              <strong>OIB:</strong> [Unesite OIB]
              <br />
              <strong>MB:</strong> [Unesite matični broj]
              <br />
              <strong>Registrirano:</strong> Trgovački sud u Zagrebu
              <br />
              <strong>MBS:</strong> [Unesite MBS broj]
              <br />
              <strong>Temeljni kapital:</strong> [Unesite iznos] kn, uplaćen u cijelosti
            </p>
          </section>

          <section className={styles.section}>
            <h2>Odgovorne osobe</h2>
            <p>
              <strong>Direktor:</strong> [Ime direktora]
              <br />
              <strong>Voditelj poliklinike:</strong> Prof. dr. sc. Marina Ivanišević
            </p>
          </section>

          <section className={styles.section}>
            <h2>Kontakt</h2>
            <p>
              <strong>Telefon:</strong>{' '}
              <a href="tel:+38513821411">+385 (1) 3821 411</a>
              <br />
              <strong>Email:</strong>{' '}
              <a href="mailto:pronatal@pronatal.hr">pronatal@pronatal.hr</a>
              <br />
              <strong>Web:</strong>{' '}
              <a href="https://www.pronatal.hr">www.pronatal.hr</a>
            </p>
          </section>

          <section className={styles.section}>
            <h2>Radno vrijeme</h2>
            <p>
              <strong>Ponedjeljak - Petak:</strong> 08:00 - 20:00
              <br />
              <strong>Subota:</strong> Po dogovoru
              <br />
              <strong>Nedjelja:</strong> Zatvoreno
            </p>
          </section>

          <section className={styles.section}>
            <h2>Nadzorno tijelo</h2>
            <p>
              Ministarstvo zdravstva Republike Hrvatske
              <br />
              Ksaver 200a, 10000 Zagreb
              <br />
              <a
                href="https://zdravstvo.gov.hr"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.zdravstvo.gov.hr
              </a>
            </p>
          </section>

          <section className={styles.section}>
            <h2>Profesionalna komora</h2>
            <p>
              Hrvatska liječnička komora
              <br />
              Tuškanova 37, 10000 Zagreb
              <br />
              <a
                href="https://www.hlk.hr"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.hlk.hr
              </a>
            </p>
          </section>

          <section className={styles.section}>
            <h2>Uvjeti korištenja web stranice</h2>
            <p>
              Sadržaj ove web stranice namijenjen je isključivo informativnim svrhama
              i ne predstavlja medicinsku dijagnozu, savjet ili preporuku za liječenje.
              Za sve zdravstvene probleme obratite se liječniku.
            </p>
            <p>
              Sva autorska prava na sadržaj ove stranice pripadaju ProNatal d.o.o.
              Neovlašteno kopiranje ili distribucija sadržaja je zabranjeno.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Povezane informacije</h2>
            <p>
              <a href="/privatnost">Izjava o privatnosti</a>
            </p>
          </section>
        </div>
      </SecondaryLayout>
    </>
  );
}
