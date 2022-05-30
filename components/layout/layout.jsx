import Navbar from '../navbar/navbar';
import Footbar from '../../containers/footbar/footbar';

function Layout({children}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footbar />
    </>
  );
}

export default Layout;
