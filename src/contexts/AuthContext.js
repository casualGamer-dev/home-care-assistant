import React, { createContext, useCallback, useEffect, useState } from 'react';
import { authFirebase } from '../firebaseConfig';
import { saveProfileValuesAction } from '../components/profiles/reducers/ProfileActions';
import { ADD_FORM_TEXT } from '../commons/globalText';

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingState, setLoadingState] = useState(false);
  const [errorState, setErrorState] = useState(null);

  useEffect(() => {
    const unsubscribe = authFirebase.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const setAndClearErrorState = error => {
    setErrorState(error);
    const timeOut = setTimeout(() => {
      setErrorState(null);
      clearTimeout(timeOut);
    }, 10000);
  };

  const signInUser = async ({ email, password }) => {
    setLoadingState(true);
    try {
      await authFirebase.signInWithEmailAndPassword(email, password);
    } catch (e) {
      setAndClearErrorState(e);
    }
    setLoadingState(false);
  };

  const signOutUser = () => authFirebase.signOut();

  const signUpUser = useCallback(async ({ email, password, passwordConfirm, ...values }) => {
    setLoadingState(true);
    try {
      const { user } = await authFirebase.createUserWithEmailAndPassword(email, password);
      await saveProfileValuesAction({ ...values, user: { id: user.uid, email: user.email } }, ADD_FORM_TEXT);
    } catch (e) {
      setAndClearErrorState(e);
    }
    setLoadingState(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signInUser,
        signOutUser,
        signUpUser,
        loadingState,
        errorState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
