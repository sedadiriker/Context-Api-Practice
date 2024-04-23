import { createContext, useContext, useState } from "react";

//! 1-Context oluştur
export const LoginContext = createContext();

//! 2-Sarmalayıcı component oluşturma
const LoginProvider = (props) => {
  const [signed, setSigned] = useState(false);

  const values = { signed, setSigned };

  return (
    <LoginContext.Provider value={values}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider


//! Consuming işlemi- custom hook
export const useLoginContext = () => {
    return useContext(LoginContext)
}
