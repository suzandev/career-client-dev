import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const faceBookProvider = new FacebookAuthProvider();

  // ====== create User with firebase ======
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ====== Sign In User with firebase =======
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ===== Sign In With Facebook
  const signInWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, faceBookProvider);
  };

  // ====== Sign In With Google ======
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // ====== Log Out =====
  const logout = () => {
    setLoading(true);
    localStorage.removeItem("token");
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser?.email) {
        const userData = { email: currentUser.email };

        axios
          .post("http://localhost:3000/jwt", userData, {
            withCredentials: true,
          })
          .then((res) => {
            const token = res.data.token;
            localStorage.setItem("token", token);
          })
          .catch((error) => console.log(error));
      } else {
        localStorage.removeItem("token");
      }
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    loading,
    user,
    createUser,
    signInUser,
    logout,
    signInWithFacebook,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
