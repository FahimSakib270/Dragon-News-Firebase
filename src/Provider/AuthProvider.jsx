import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../FireBase/firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Register user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   stateChange
  useEffect(() => {
    const unSubsCribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubsCribed();
    };
  }, []);

  //   LogOut

  const signOutUser = () => {
    return signOut(auth);
  };

  const [user, setUser] = useState(null);
  console.log(user);

  const authData = {
    user,
    setUser,
    createUser,
    signOutUser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
