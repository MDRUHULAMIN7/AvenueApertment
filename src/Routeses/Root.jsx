
import {Outlet} from "react-router-dom"



import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar2 from "./Components/Navbar2";
const Root = () => {
    return (
        <div  >
           
            <Navbar2></Navbar2>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default Root;