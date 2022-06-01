import Navbar from '../navbar/navbar';

function Layout({children}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
