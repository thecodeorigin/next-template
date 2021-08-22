import { createContext, useContext, useState } from 'react';

import Cookies from 'js-cookie'

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const setAuth = (auth) => {
    setState({...state, auth})
    if (auth) {
      Cookies.set('auth', JSON.stringify(auth))
    } else {
      Cookies.remove('auth')
    }
  }

  const context = {
    auth: props.auth || null,
    setAuth,
  }

  const [state, setState] = useState(context)

  return <AuthContext.Provider value={state} {...props} />;
};

export const useAuth = () => useContext(AuthContext)
