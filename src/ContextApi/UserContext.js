import React, { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const facebookLogin = () => {
    return signInWithPopup(auth, facebookProvider);
  };
  const updateUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  const logOut = (email, password) => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // dark mode
  const [darkMode, setDarkMode] = useState("light")

  const handleDarkMode = ( ) =>{
    if(darkMode === "light"){
      setDarkMode("dark")
      localStorage.setItem("dark-mode", "dark")
    }
    else{
      setDarkMode("light")
      localStorage.setItem("dark-mode", "light")
    }
  }
  useEffect(()=>{
    document.querySelector("html").setAttribute("data-theme", localStorage.getItem("dark-mode"))
  },[darkMode])

  const AuthInfo = {
    user,
    signIn,
    signUp,
    logOut,
    updateUser,
    googleLogin,
    facebookLogin,
    loading,
    handleDarkMode,
    darkMode
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
