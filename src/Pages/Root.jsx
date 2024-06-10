import { Outlet } from "react-router-dom";
import Nav from "../Comp/Nav";
import { ToastContainer } from "react-toastify";


const Root = () => {
    return (
        <div>
           <Nav></Nav>
            <Outlet></Outlet>

            <ToastContainer />
        </div>
    );
};

export default Root;