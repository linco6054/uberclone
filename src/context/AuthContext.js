import React, { useReducer, useContext, useState, useEffect } from "react";
import { reducer } from "./reducer";
import { auth, db } from "./../firebase";
const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
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
  // collect logged in user info
  useEffect(() => {
    if (currentUser) {
      db.collection("Users")
        .doc(currentUser.uid)
        .get()
        .then((querySnapshot) => {
          const response = querySnapshot.data();
          dispatch({ type: "UpdateUser", payload: response });
        });
    }
  }, [currentUser]);
  //   set our current user to user
  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged((user) => {
      dispatch({ type: "UpdateUser", payload: user });
      setCurrentUser(user);
      dispatch({ type: "NotLoading" });
    });
    return unsubscriber;
  }, []);
  const closeModal = () => {
    dispatch({ type: "CloseModal" });
  };
  const defaultValues = {
    loading: true,
    currentUserInfo: [],
    error: "",
    message: "",
  };
  const [state, dispatch] = useReducer(reducer, defaultValues);
  const value = {
    closeModal,
    state,
    db,
    dispatch,
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
      {!state.loading ? children : null}
    </AuthContext.Provider>
  );
}
