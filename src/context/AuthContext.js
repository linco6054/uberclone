import React, { useContext, useState, useEffect } from "react";
import { auth } from "./../firebase";
const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  // login to page
  const loginUser = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  // create user with email and passs
  const signUpUser = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const logout = () => {
    return auth.signOut();
  };
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }
  //  function update email
  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }
  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }
  //   set our current user to user
  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscriber;
  }, []);

  const value = {
    updateEmail,
    updatePassword,
    currentUser,
    signUpUser,
    loginUser,
    logout,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : null}
    </AuthContext.Provider>
  );
}
