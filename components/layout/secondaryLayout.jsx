import CopyrightCard from '../copyrightCard/copyrightCard';
import Navbar from '../navbar/navbar';

function SecondaryLayout({children}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <CopyrightCard />
    </>
  );
}

export default SecondaryLayout;
