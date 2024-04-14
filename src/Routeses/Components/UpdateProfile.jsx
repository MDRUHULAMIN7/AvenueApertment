import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Prrovider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const UpdateProfile = () => {

    const{updateUserProfile}=useContext(AuthContext)

   const navigate =useNavigate()
    const HandleUpdateProfile=e=>{
        e.preventDefault()
        const name =e.target.name.value;
        const image =e.target.photoURL.value;
        console.log(name,image);

        updateUserProfile(name,image)
        .then(()=>{

          e.target.reset();
          navigate('/')
          toast('Profile Updated Succesgully')
        })
    }
    return (
        <div className="h-[64vh] bg-lime-300">
            <Helmet> <title>AvenueApartment | UpdateProfile</title></Helmet>
            <h1 className="lg:text-3xl text-2xl  text-center py-4 text-secondary">Update Your Profile</h1>
            <div className="w-1/4 mx-auto shadow-2xl rounded-2xl  bg-gradient-to-r from-violet-500 to-fuchsia-500  p-7">

               <h1 className="text-white text-centre mx-auto mb-3">You can update your name and image here</h1>
                <form  onSubmit={HandleUpdateProfile}>
                    <label >
                        <span className=" font-semibold ml-3"> Name</span> <br />

                        <input className="border-2 border-fuchsia-200 w-full px-8 py-3 my-3 rounded-2xl" placeholder="input name" name="name"  type="text" />
                    </label>
                    <label >
                        <span className=" font-semibold ml-3"> PhotoURL</span> <br />

                        <input className="border-2 border-fuchsia-200 w-full px-8 py-3 mt-3 rounded-2xl" placeholder="input photoURL" name="photoURL"  type="text" />
                    </label>

                    <button  className="btn w-full mt-3 btn-secondary">Save Changes</button>
                </form>
            </div>
            <div className="flex justify-center">
            <Link to={'/userprofile'} className="bg-fuchsia-400 px-5 py-3 rounded-xl text-xl mt-3 mb-3 text-white ">See UserProfile</Link>
            </div>
            
        </div>
    );
};

export default UpdateProfile;