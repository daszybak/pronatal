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
};

const MobileMenuContextProvider = ({children}) => {
  const [menu, dispatchMenu] = useReducer(menuReducer, initial);

  const handleShowMenuOnClick = () => {
    dispatchMenu({type: 'toggle'});
  };

  const initialValue = {
    showMenu: menu.showMenu,
    handleShowMenuOnClick,
  };

  return (
    <MobileMenuContext.Provider value={initialValue}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export default MobileMenuContextProvider;
