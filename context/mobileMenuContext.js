import {createContext} from 'react';

const MobileMenuContext = createContext({
  showMenu: false,
  handleShowMenuOnClick: () => {},
});

export default MobileMenuContext;
