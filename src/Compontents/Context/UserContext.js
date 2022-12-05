import React, { createContext, useEffect, useState} from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from "../Firebase/Firebase.int";
export const Athcontext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setuser] = useState(null);
    const [loading, setloding] = useState(true);
    const creatPassword = (email, password)=> {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWith = (email, password)=> {
        setloding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
      return  signOut(auth)
    }
    useEffect(()=>{
        const unserceribe =  onAuthStateChanged(auth, currentUser =>{
            console.log('Currens User', currentUser);
            setuser(currentUser)
            setloding(false)
        });
        return()=> unserceribe();

    },[])
    const authinfo={user,creatPassword,signInWith,logOut,loading}

    return (
        <Athcontext.Provider value={authinfo}>
            {children}
        </Athcontext.Provider>
    );
};

export default UserContext;