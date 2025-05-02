import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../FireBase/firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // hadling loading
  const [loading, setLoading] = useState(true);

  //Register user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //stateChange
  useEffect(() => {
    const unSubsCribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubsCribed();
    };
  }, []);

  //   LogOut
  const signOutUser = () => {
    return signOut(auth);
  };

  //Login
  const Login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //setting up the user
  const [user, setUser] = useState(null);

  const authData = {
    user,
    setUser,
    createUser,
    signOutUser,
    Login,
    loading,
    setLoading,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
