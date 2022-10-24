import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    // initial state
    const [user, setUser] = useState({
        name: 'Robiul islam',
        age: 20
    });
    const [loading, setLoading] = useState(true);

    // Provide this value
    const authInfo = {
        user
    };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider