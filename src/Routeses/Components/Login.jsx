import { useContext, useState } from "react";
import { AuthContext } from "../../Prrovider/AuthProvider";
import toast from 'react-hot-toast';

import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link,useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Login = () => {
  const[RegisterError,setRegistererror]=useState('');
  const [showPassword,setShowPassword]=useState(false);

  const navigate=useNavigate()

    const{signInUser,signInGoogle,signInGithub}=useContext(AuthContext)

    const HandleRegister=e=>{
        e.preventDefault();
       
        const email=e.target.email.value;

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
        signInUser(email,password)
        .then(result=>{
            console.log(result)
            e.target.reset();
            navigate('/');
            toast('Login Succesgully')
        })
        .catch(error=>{
          console.error(error)
            toast(error.message)
        })
        console.log(email,password);
    }

    const HandleGoogleLogin=()=>{
      signInGoogle()
      .then(result=>{
        console.log(result);
      
        console.log('user ------',result.user);
      })
      .catch(error=>{
        console.error(error)
      })
    }

    const HandleGithubLogin=()=>{
      signInGithub()
      .then(result=>{
        console.log(result);
      })
      .then(error=>{
        console.error(error)
      })
    }
    return (
      <div className="hero ">
        
       
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        <Helmet> <title>AvenueApartment |Login</title></Helmet>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={HandleRegister} className="card-body">
          
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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

              {/*  */}

              <div className="form-control">
              <label className="label">
                

                <button onClick={HandleGoogleLogin} className="border-2 border-blue-500 rounded-xl text-center mx-auto px-14 py-2 text-orange-500 font-bold">Login With Google</button>
              </label>
            
            </div>
              {/*  */}

              <div className="form-control">
              <label className="label">
                

                <button onClick={HandleGithubLogin} className="border-2 border-blue-500 rounded-xl text-center mx-auto px-14 py-2 text-gray-600 font-bold">Login With Github</button>
              </label>
 </div>
              {/*  */}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>

            <p className="text-center font-bold">Do not have an account ? <Link className="text-purple-600 font-bold underline" to={'/register'}>Register</Link></p>
          </form>

          {RegisterError && <p className="text-center text-red-600 font-semibold">{RegisterError}</p>}
        </div>
      </div>

    </div>
    );
};

export default Login;