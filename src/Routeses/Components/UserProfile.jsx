import { useContext } from "react";
import { AuthContext } from "../../Prrovider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const UserProfile = () => {

    const{user}=useContext(AuthContext)
    console.log(user,user.displayName ,user.email);
    return (
        <div className="bg-orange-100 h-[500px]">
            <Helmet>
                <title>AvenueApartment | UserProfile</title>
            </Helmet>
            <h1 className="text-2xl text-center  text-purple-600 font-bold">User profile Information</h1>

            <div className="space-y-3 text-center mt-10">
                <img src={user.photoURL} className="w-44 h-64 rounded-2xl mx-auto" alt="" />



                <h1 className="text-xl">Name : {user.displayName ? user.displayName :<small className="text-black">user name not found</small>
}</h1>
                <h1 className="text-xl">Email : {user.email ? user.email :<small className="text-black">user email not found</small>
}</h1>
               
            </div>
            <div className="flex justify-center">
            <Link to={'/updateprofile'} className="bg-fuchsia-400 px-5 py-3 rounded-xl text-xl mt-3 mb-3 text-white ">Update Your Profile</Link>
            </div>
        </div>
    );
};

export default UserProfile;