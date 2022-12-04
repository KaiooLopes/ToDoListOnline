import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  const checkIfIsCancelled = () => {
    if (cancelled) {
      return;
    }
  };

  //register
  const createUser = async (data) => {
    checkIfIsCancelled();
    setLoading(true);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      setLoading(false);

      await updateProfile(user, {
        displayName: data.displayName,
      });

      return user;
    } catch (error) {
      console.log(error.message);

      let systemErrorMessage = {
        date: Date.now(),
        msg: "",
      };

      if (error.message.includes("Password")) {
        systemErrorMessage.msg =
          "The password must be at least 6 characters long";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage.msg = "this email is already being used";
      } else {
        systemErrorMessage.msg = "An error has occurred, please, try later";
      }

      setLoading(false);

      setError(systemErrorMessage);
    }
  };

  const logout = () => {
    checkIfIsCancelled();
    setLoading(true);

    signOut(auth);
  };

  const signIn = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(false);

    try {
      await signInWithEmailAndPassword(auth, data.loginEmail, data.password);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      let systemErrorMessage = {
        date: Date.now(),
        msg: "",
      };

      if (error.message.includes("wrong-password")) {
        systemErrorMessage.msg = "Wrong password";
      } else if (error.message.includes("user-not-found")) {
        systemErrorMessage.msg = "Email not found";
      } else {
        systemErrorMessage.msg = "An error as ocurred, please, try later";
      }

      setLoading(false);

      setError(systemErrorMessage);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    signIn,
  };
};
