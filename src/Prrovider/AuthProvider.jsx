import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext=createContext(null);


const googleProvider=new GoogleAuthProvider()
const githubProvider= new GithubAuthProvider()
const auth= getAuth(app)

const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    }

    const signInGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const signInGithub=()=>{
        setLoading(true)
return signInWithPopup(auth,githubProvider)
    }
    useEffect(()=>{
        const Unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log('usseffect',currentUser);
        })
        return()=>{
            Unsubscribe()
        }
    },[])
    const AuthInformations ={createUser,user,signInUser, logOut,signInGoogle,signInGithub,loading}
    return (
        <AuthContext.Provider value={ AuthInformations }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;