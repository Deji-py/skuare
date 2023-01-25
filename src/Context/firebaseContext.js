import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../firebse_config";

const Authenticator = createContext();

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      setCurrentUser(user);
      setLoading(false);
    } else {
      setLoading(true);
    }
  });

  return (
    <Authenticator.Provider value={{ user: currentUser, loading: loading }}>
      {props.children}
    </Authenticator.Provider>
  );
};

export { AuthProvider, Authenticator };
