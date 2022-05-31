import {createContext} from 'react';

const MobileMenuContext = createContext({
  showMenu: false,
  footerIsVisible: null,
  handleShowMenuOnClick: () => {},
});

export default MobileMenuContext;
