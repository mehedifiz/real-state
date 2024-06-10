import { useContext, useState } from "react";
import { AuthContext } from "../Firebase/Authprovider/Authprovider";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
    const { createuserwithemail } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
       

        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const name = form.get('name');
        const password = form.get('password');
        const Cpassword = form.get('Cpassword');

        // Validation
        if (!name) {
            toast.error("Name is required", { theme: "colored" });
            return;
        }
        if (!email) {
            toast.error("Email is required", { theme: "colored" });
            return;
        }
        if (!password) {
            toast.error("Password is required", { theme: "colored" });
            return;
        }
        if (password !== Cpassword) {
            toast.error("Passwords do not match", { theme: "colored" });
            return;
        }
        if (password.length < 6) {
            toast.error("Password should be at least 6 characters long", { theme: "colored" });
            return;
        }

        createuserwithemail(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Wow, you are registered!", { theme: "colored" });
            })
            .catch(error => {
                console.log(error);
                toast.error("There is an error: " + error.message, { theme: "colored" });
            });
    };

    return (
        <div>
            <form onSubmit={handleRegister}>
                <div className="flex flex-col gap-4 items-center mt-32">
                    <input name="name" type="text" placeholder="Your name" className="input input-bordered w-full max-w-xs" />
                    <input name="email" type="email" placeholder="email" className="input input-bordered w-full max-w-xs" />
                    <input name="password" type="password" placeholder="password" className="input input-bordered w-full max-w-xs" />
                    <input name="Cpassword" type="password" placeholder="Confirm password" className="input input-bordered w-full max-w-xs" />
                    <button className="btn w-full max-w-xs" type="submit"> Register </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Register;
