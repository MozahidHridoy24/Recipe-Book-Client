import React, { createContext, useEffect, useState } from 'react';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { app } from '../Firebase/firebase.init';

// import firebaseConfig from '../firebase.config';

// Initialize Firebase app and auth instance
const auth = getAuth(app);

// Create authentication context
export const AuthContext = createContext();

// AuthProvider component to provide authentication functions and state to the entire app
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Track the current authenticated user
  const [loading, setLoading] = useState(true); // Track if the auth state is still loading

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  // Function to register a new user with email and password
  const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  
  // Function to login existing user
  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

  // Function to log out user
  const logout = () => signOut(auth);

  // Function to login with Google using popup
  const googleLogin = () => signInWithPopup(auth, new GoogleAuthProvider());

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, googleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;