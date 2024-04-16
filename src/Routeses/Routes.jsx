import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import ErrorPage from "./ErrorPage";

import UserProfile from "./Components/UserProfile";
import UpdateProfile from "./Components/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import EstateDetails from "./Components/EstateDetails";

import Estates from "./Components/Estates";

import Projects from "./Components/Projects";


const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },{
                path:'/register',
                element:<Register></Register>
            },{
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/estates',
                element:<Estates></Estates>
            },
            {
                path:'/userprofile',
                element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path:'/updateprofile',
                element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },{
                path:'/estate/:id',
                element:<PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
                loader:()=>fetch('/Estate.json')
            },{
                path:'/projects',
                element:<PrivateRoute><Projects></Projects></PrivateRoute>
            }
        ]
    }
])


export default router;