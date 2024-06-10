import { Outlet } from "react-router-dom";
import Nav from "../Comp/Nav";
import { ToastContainer } from "react-toastify";


const Root = () => {
    return (
        <div className="container">
           <Nav></Nav>
            <Outlet></Outlet>

           

            <ToastContainer />
        </div>
    );
};

export default Root;