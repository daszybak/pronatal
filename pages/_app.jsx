import Head from 'next/head';

import 'normalize.css';
import MobileMenuContextProvider from '../context/mobileMenuContextProvider';
import CookieConsent from '../components/cookieConsent/cookieConsent';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/index.scss';

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>
          ProNatal d.o.o, poliklinika za ginekologiju i opstetriciju, internu
          medicinu, radiologiju - mamografiju i urologiju
        </title>
        <meta name="author" content="Karlo Đelmiš" />
        <meta
          name="keywords"
          content="Poliklinika, ProNatal, ginekologija, opstetricija, porodništvo, privatna, ordinacija, Zagreb, centar, Hrvatska, natal"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Poliklinika ProNatal" />
        <meta property="og:locale" content="hr_HR" />
        <meta
          property="og:title"
          content="Poliklinika ProNatal Zagreb | Ginekologija i Opstetricija"
        />
        <meta
          property="og:description"
          content="Specijalizirana privatna klinika za ginekologiju, opstetriciju i vođenje trudnoće u Zagrebu. Vrhunski stručnjaci Prof. dr. sc. Marina Ivanišević i Prof. dr. sc. Josip Đelmiš."
        />
        <meta property="og:url" content="https://www.pronatal.hr" />
        <meta
          property="og:image"
          content="https://www.pronatal.hr/images/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Poliklinika ProNatal Zagreb | Ginekologija i Opstetricija"
        />
        <meta
          name="twitter:description"
          content="Specijalizirana privatna klinika za ginekologiju, opstetriciju i vođenje trudnoće u Zagrebu."
        />
        <meta
          name="twitter:image"
          content="https://www.pronatal.hr/images/og-image.jpg"
        />
      </Head>
      <MobileMenuContextProvider>
        <Component {...pageProps} />
        <CookieConsent />
      </MobileMenuContextProvider>
    </>
  );
}

export default MyApp;
