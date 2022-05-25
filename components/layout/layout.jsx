import Navbar from '../navbar/navbar';
import Footbar from '../footbar/footbar';
import MobileMenu from '../mobileMenu/mobileMenu';
import {useContext} from 'react';
import MobileMenuContext from '../../context/mobileMenuContext';

function Layout({children}) {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <main>{children}</main>
      <Footbar />
    </>
  );
}

export default Layout;
