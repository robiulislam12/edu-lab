import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    // initial state
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google sign in
    const googleProvider = new GoogleAuthProvider();
    const signInGoogle = () =>{
      setLoading(true)
      return signInWithPopup(auth, googleProvider);
    }



    // Provide this value
    const authInfo = {
        user,
        setUser,
        signInGoogle
    };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider