import React, { useState, createContext, useEffect } from 'react'
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [disLogin, setDisLogin] = useState(true);
    // const [localToken,setLocalToken] = useState(null);
    const [loading, setLoading] = useState(false);

    
    const fetchtoken = async () => {
        if (localStorage.getItem('authToken')){
            const token = localStorage.getItem('authToken');
            console.log("u", token);
            const response = await fetch('http://localhost:5000/api/auth/checktoken', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "authToken": token
                }
            });
            const json = await response.json();
            console.log(json);
            // console.log(json.who);
            if (json.status) {
                if (json.who === 'user') {
                    setIsLogin(true);
                    setDisLogin(false);
                } else if (json.who === 'doctor') {
                    setDisLogin(true);
                    setIsLogin(false);
                }
            } else if (!json.status) {
                setDisLogin(false);
                setIsLogin(false);
            }
        } else if (!localStorage.getItem('authToken')) {
            setDisLogin(false);
            setIsLogin(false);
        }
    }

    const tokenfetching = () => {
        return localStorage.getItem('authToken');
    }

    useEffect(() => {
        fetchtoken();
    }, [])

    const value = {
        isLogin,
        setIsLogin,
        disLogin,
        setDisLogin,
        loading,
        setLoading,
        tokenfetching,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;