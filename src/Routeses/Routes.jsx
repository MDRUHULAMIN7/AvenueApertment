import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import ErrorPage from "./ErrorPage";

import UserProfile from "./Components/UserProfile";
import UpdateProfile from "./Components/UpdateProfile";
import PrivateRoute from "./PrivateRoute";


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
            },{
                path:'/userprofile',
                element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path:'/updateprofile',
                element:<UpdateProfile></UpdateProfile>
            }
        ]
    }
])


export default router;