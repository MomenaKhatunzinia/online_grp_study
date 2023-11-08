import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
   const [user, setUSer] = useState(null);
   const [loading, setLoding] = useState(true);

   const creatUser = (email, password) =>
   {
    setLoding(true)
    return createUserWithEmailAndPassword(auth, email, password)
   }

   const SignIn = (email, password)=>
   {
    setLoding(true)
    return signInWithEmailAndPassword(auth, email, password)
   }

   const googleSignIn = () =>
   {
    setLoding(true)
    return signInWithPopup(auth,provider);
   }

   const logOut = () =>
   {
    setLoding(true)
    return signOut(auth);
   }
   useEffect(()=>
   {
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = {email: userEmail}
        console.log('current user:', currentUser);
        setUSer(currentUser);
        setLoding(false)
        if(currentUser)
        {
           
            axios.post('http://localhost:5000/jwt',loggedUser, {withCredentials: true})
            .then(res =>
                {
                    console.log(res.data)
                })


        }
        else 
        {
            axios.post('http://localhost:5000/logout', loggedUser, {
                withCredentials: true
            })
            .then(res =>
                {
                    console.log(res.data)
                })
        }
        
    });
    return() =>
    {
        unSubscribe();
    }
   },[])


   const AuthInfo = 
   {
    user,
    creatUser,
    SignIn,
    googleSignIn,
    logOut,
    loading
   }

    return (
        <div>
            <AuthContext.Provider
            value={AuthInfo}
            >
                {children}

            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;