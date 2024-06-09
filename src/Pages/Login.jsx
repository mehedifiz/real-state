import { useContext } from "react";
import { AuthContext } from "../Firebase/Authprovider/Authprovider";

const Login = () => {
    const { login } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        login(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form className="flex flex-col w-full max-w-sm" onSubmit={handleLogin}>
                <input name="email" type="email" placeholder="Email" className="input input-bordered w-full mb-2" />
                <input name="password" type="password" placeholder="Password" className="input input-bordered w-full mb-2" />
                <button className="btn w-full" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
