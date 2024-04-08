import { useContext } from "react";
import { AuthContext } from "../../Prrovider/AuthProvider";
import { Helmet } from "react-helmet-async";


const UserProfile = () => {

    const{user}=useContext(AuthContext)
    return (
        <div>
            <Helmet>
                <title>AvenueApartment | UserProfile</title>
            </Helmet>
            <h1 className="text-2xl text-center text-purple-600 font-bold">User profile Information</h1>

            <div className="space-y-3 text-center mt-10">
                <img src={user.photoURL} className="w-64 mx-auto" alt="" />

                <h1 className="text-xl">Name : {user.displayName
}</h1>
                <h1 className="text-xl">email : {user.email}</h1>
            </div>
        </div>
    );
};

export default UserProfile;