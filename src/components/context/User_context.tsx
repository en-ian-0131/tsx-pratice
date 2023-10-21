import { createContext, useCallback, useState } from "react";

// interface ValueType {
//   getLoginFrorm: Promise<void>;
//   myAccount: string;
//   setMyAccount: React.Dispatch<React.SetStateAction<string>>;
//   myPassword: string;
//   setMyPassword: React.Dispatch<React.SetStateAction<string>>;
// }
// const init = {
//     getLoginFrorm: getLoginFrorm(),
//     myAccount: "",
//     setMyAccount: setMyAccount(""),
//     myPassword: "",
//     setMyPassword: setMyPassword,
// }

export const UserContext = createContext({});

export const UserProvider = ({ children }: any) => {
  const [myAccount, setMyAccount] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const getLoginFrorm = useCallback(async () => {
    const body = {
      account: myAccount,
      password: myPassword,
    };

    const jsonBody = JSON.stringify(body);

    const res = await fetch("http://localhost:3002/login", {
      method: "POST",
      body: jsonBody,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const r = await res.json();
    return r;
    console.log(r);
  }, []);

  const value: any = {
    getLoginFrorm: getLoginFrorm(),
    myAccount: myAccount,
    setMyAccount: setMyAccount,
    myPassword: myPassword,
    setMyPassword: setMyPassword,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
