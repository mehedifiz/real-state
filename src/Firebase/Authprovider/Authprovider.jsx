import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";


export const AuthContext = createContext(null)


const Authprovider = ({children}) => {
    const [loading ,setLoaing] = useState(true)
    const [user ,setUser] = useState(null)


    const createuserwithemail =(email , password)=>{
        setLoaing(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }





    const login = ( email , password)=>{
        setLoaing(true)
 
    
        return signInWithEmailAndPassword(auth ,email , password)
    }

    const logout =()=>{
        setLoaing(true)

        signOut(auth)

    }


    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth , currentUser =>{
            console.log('user state is change ' ,currentUser)
            setUser(currentUser);
            setLoaing(false)
        });
        return ()=> {unsubcribe()}
    },[])


   

    const Authinfo = {user,createuserwithemail , login , logout, loading}
    return (
    <AuthContext.Provider value={Authinfo}>
    {children}
            
        </AuthContext.Provider>
    );
};

export default Authprovider;