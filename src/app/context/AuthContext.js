import React, {createContext, useReducer} from 'react';

export const AuthContext = createContext();

const initialState = {
  isLogin: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'user_login':
      return {
        isLogin: action.payload,
      };
    case 'user_logout':
      return {
        isLogin: action.payload,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};
