import { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../../Prrovider/AuthProvider";

import toast from 'react-hot-toast';

import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Helmet } from "react-helmet-async";
import UpdateProfile from "./UpdateProfile";



const Register = () => {

  const[RegisterError,setRegistererror]=useState('');
  const [showPassword,setShowPassword]=useState(false)

    const{createUser}=useContext(AuthContext)
    const navigate = useNavigate()

    const HandleRegister=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const photourl=e.target.photourl.value;
        const password=e.target.password.value;
        setRegistererror('');
        if(password.length < 6){
          setRegistererror('password should be at least 6 character');
          return;
        }
        else if(!/[A-Z]/.test(password)){
          setRegistererror('password should be a Uppercase character')
          return;
        }
        else if(!/[a-z]/.test(password)){
          setRegistererror('password should be a Lowercase character')
          return;
        }
        createUser(email,password)
        .then(result=>{
            console.log(result)
         UpdateProfile(result.user,{
          displayName:name,
          PhotoUrl: photourl
         })
         .then(result=>{
  console.log('profile updated',result);
         })
.catch(error=>{
  console.error(error)
})
            e.target.reset();
            navigate('/')
            toast('Register Succesgully')
            return;
        })
        .catch(error=>{
          console.error(error)
            toast(error)
            return;
        })
        console.log(name,email,photourl,password);
    }
    return (
        <div className="hero ">

          <Helmet> <title>AvenueApartment | Register</title></Helmet>
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          
          </div>
          <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={HandleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input type="text" name="photourl" placeholder="PhotoUrl" className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={showPassword ? "text ":"password" } placeholder="password" name="password" className="input input-bordered" required />
                <span className="absolute top-12 right-6"
                 onClick={()=>setShowPassword(!showPassword)}>
                  {showPassword ? <IoMdEye></IoMdEye> :<IoIosEyeOff></IoIosEyeOff>}
                </span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>

              <p className="text-center font-bold">Already have an account ? <Link className="text-purple-600 font-bold underline" to={'/login'}>Login</Link></p>
            </form>

            {RegisterError && <p className="text-center text-red-600 font-semibold">{RegisterError}</p>}
          </div>
        </div>
      
      </div>
    );
};

export default Register;