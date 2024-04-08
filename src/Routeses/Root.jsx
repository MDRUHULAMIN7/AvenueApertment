
import {Outlet} from "react-router-dom"
import Navbar from "./Components/Navbar";


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Root = () => {
    return (
        <div className="bg-cover bg-no-repeat h-screen" style={{backgroundImage:'url("https://i.ibb.co/FxhCdVQ/bg.jpg")'}} >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default Root;