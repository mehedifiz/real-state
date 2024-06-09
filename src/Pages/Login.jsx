import { useContext } from "react";
import { AuthContext } from "../Firebase/Authprovider/Authprovider";


const Login = () => {

    const {login}=useContext(AuthContext)


    const handleLogin =(e)=>{
        e.preventDefault()
    
    const form = new FormData(e.currentTarget)
    
     const email = form.get('email');
     const password = form.get('password');
     console.log(email , password )

     login(email , password)
     .then(result =>{
        console.log(result)

    
     })
     .catch(error =>{
        console.log(error)
    })
    }

    return (
        <div className="  w-full h-full max-w-sm mx-auto my-auto ">

<form className="flex flex-col  mx-auto" onSubmit={handleLogin}>

<input   name="email" type="email" placeholder="email" className="input input-bordered w-full max-w-xs my-1" />

<input  name="password" type="password" placeholder="password" className="input input-bordered w-full max-w-xs my-1" />

<button className="btn  w-full max-w-xs my-1" type="submit"> Login </button>
</form>
            
        </div>
    );
};

export default Login;