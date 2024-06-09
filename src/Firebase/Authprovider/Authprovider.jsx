import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";


export const AuthContext = createContext(null)


const Authprovider = ({children}) => {
    const [user ,setUser] = useState(null)


    const createuserwithemail =(email , password)=>{
        return createUserWithEmailAndPassword(auth , email , password)
    }





    const login = ( email , password)=>{
 
    
        return signInWithEmailAndPassword(auth ,email , password)
    }

    const logout =()=>{

        signOut(auth)

    }


    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth , currentUser =>{
            console.log('user state is change ' ,currentUser)
            setUser(currentUser)
        });
        return ()=> {unsubcribe()}
    },[])


   

    const Authinfo = {user,createuserwithemail , login , logout}
    return (
    <AuthContext.Provider value={Authinfo}>
    {children}
            
        </AuthContext.Provider>
    );
};

export default Authprovider;