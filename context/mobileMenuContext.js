import {createContext} from 'react';

const MobileMenuContext = createContext({
  showMenu: false,
  closeMenu: () => {},
  handleShowMenuOnClick: () => {},
});

export default MobileMenuContext;
