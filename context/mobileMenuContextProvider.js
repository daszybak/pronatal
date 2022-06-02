import {useReducer} from 'react';
import MobileMenuContext from './mobileMenuContext';

const initial = {
  showMenu: false,
};

const menuReducer = (state, action) => {
  if (action.type === 'toggle') {
    return {
      showMenu: !state.showMenu,
    };
  }
  if (action.type === 'close') {
    return {
      showMenu: false,
    };
  }
};

const MobileMenuContextProvider = ({children}) => {
  const [menu, dispatchMenu] = useReducer(menuReducer, initial);

  const handleShowMenuOnClick = () => {
    dispatchMenu({type: 'toggle'});
  };

  const closeMenu = () => {
    dispatchMenu({type: 'close'});
  };

  const initialValue = {
    showMenu: menu.showMenu,
    closeMenu,
    handleShowMenuOnClick,
  };

  return (
    <MobileMenuContext.Provider value={initialValue}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export default MobileMenuContextProvider;
