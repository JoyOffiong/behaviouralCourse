import React from 'react';

interface GlobalContextProps {
  user: any
  setUser: any
}

const GlobalContext: any = React.createContext<GlobalContextProps | null>({
  user: {},
  setUser: () => { }
});

export default GlobalContext;
