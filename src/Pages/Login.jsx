import { useContext } from "react";
import { AuthContext } from "../Firebase/Authprovider/Authprovider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate()

    const location = useLocation();

    console.log('logiin ' , location)

    const handleLogin = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        login(email, password)
            .then(result => {
                console.log(result);


                    navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="flex items-center justify-center ">
            <form className="flex flex-col w-full max-w-sm" onSubmit={handleLogin}>
                <input name="email" type="email" placeholder="Email" className="input input-bordered w-full mb-2" />
                <input name="password" type="password" placeholder="Password" className="input input-bordered w-full mb-2" />
                <button className="btn w-full" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
