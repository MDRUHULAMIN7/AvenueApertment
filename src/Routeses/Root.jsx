
import {Outlet} from "react-router-dom"



import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
const Root = () => {
    return (
        <div  >
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;