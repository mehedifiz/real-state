import { useContext } from "react";
import { AuthContext } from "../Firebase/Authprovider/Authprovider";

const Register = () => {
    const {createuserwithemail} = useContext(AuthContext)


const handleRegister =(e)=>{
    e.preventDefault()

const form = new FormData(e.currentTarget)

 const email = form.get('email');
 const name = form.get('name');
 const password = form.get('password');
 const Cpassword = form.get('Cpassword');
 console.log(email , name , password , Cpassword)

 createuserwithemail(email , password)
 
 .then(result =>{
    console.log(result.user)
 })


}



    return (
       
        <form  onSubmit={handleRegister}>
<div className="flex flex-col gap-4 items-center h-[100vh] mt-32 ">

<input name="name" type="text" placeholder="Your name" className="input input-bordered w-full max-w-xs" />

<input name="email" type="email" placeholder="email" className="input input-bordered w-full max-w-xs" />

<input name="password" type="password" placeholder="password" className="input input-bordered w-full max-w-xs" />
<input name="Cpassword" type="password" placeholder="Confrim-password" className="input input-bordered w-full max-w-xs" />


<button className="btn  w-full max-w-xs" type="submit"> Register </button>
</div>


        </form>
        
    );
};

export default Register;