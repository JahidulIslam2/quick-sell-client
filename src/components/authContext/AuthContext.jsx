import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,onAuthStateChanged, signOut } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import app from './../../firebase/firebase.config';
import { useEffect } from 'react';


export const ContextProvider=createContext()
const auth =getAuth(app)

const googleAuth = new GoogleAuthProvider()

const AuthContext = ({children}) => {
    const [user,setUser] =useState();
    const [loader,setLoader] = useState(true);

    const signUp = (email,password) =>{
        setLoader(true)
       return createUserWithEmailAndPassword(auth,email,password);

    }

    const signInUserWithEmailpass = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const GoogleSignIn =()=>{
        setLoader(true)
        return signInWithPopup(auth,googleAuth)
    }


    const logOutMethod = () =>{
        return signOut(auth);
    }


    useEffect(()=>{
        const Unsubscribed =onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoader(false)
        })

        return ()=> Unsubscribed();
    },[])





    const authInfo ={
        signUp,
        signInUserWithEmailpass,
        GoogleSignIn,
        user,
        loader,
        logOutMethod,



    }

    return (
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthContext;