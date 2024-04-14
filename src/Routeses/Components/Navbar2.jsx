import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Prrovider/AuthProvider";
import 'animate.css';
import icons from '../../../public/images/icon.png'

import toast from 'react-hot-toast';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
const Navbar2 = () => {
    const{user,logOut,loading}=useContext(AuthContext)

    if(loading){
        return <div className="flex justify-center items-center mx-auto  mt-24"><span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span></div>
      }
    
     const HandleSignOut=()=>{
        logOut()
        .then(()=>{
  toast.success('LogOut Succesfully')
        })
        .catch(error=>{
           toast(error)
        })
     }

    return (
        <div className="navbar bg-purple-300  flex justify-between ">

 
<Link to={'/'}>   <a className="  lg:text-2xl md:text-xl text-xl font-bold  text-gradient-to-r from-cyan-500 to-blue-500 animate__animated animate__bounce 
        "> <h1 className="flex"><img className="w-6 mr-3" src={icons} alt="" />
       <span className="text-purple-700">A</span>veneu 
        </h1> 
        <h1>  <span className="text-purple-700">A</span>pertment</h1>
       </a></Link>



       
        {/* <Link to={'/'}>   <a className=" pt-2 lg:text-2xl md:text-xl text-xl font-bold  text-gradient-to-r from-cyan-500 to-blue-500 animate__animated animate__bounce 
        "> <span className="flex" >  veneu <br />Apertment</span>  <br />
       </a></Link> */}

{/*  */}
<div className="navbar-start">
            
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            
            <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500' : isActive ? 'text-green-500  rounded-lg px-3' :''} to={"/"} >Home</NavLink>
          
            
            <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500' : isActive ? 'text-green-500  rounded-lg px-3' :''} to={"/about"} >About</NavLink>
          
          <NavLink className={({isActive,isPending})=>
isPending ? 'text-blue-500' : isActive ? 'text-green-500 rounded-lg px-3 ' :''} to={"/register"} >Register</NavLink>

<NavLink className={({isActive,isPending})=>
isPending ? 'text-blue-500' : isActive ? 'text-green-500  rounded-lg px-3 ' :''} to={"/userprofile"} >User Profile</NavLink>
           {user &&     <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500' : isActive ? 'text-green-500 rounded-lg px-3 ' :''} to={"/updateprofile"} >Update Profile</NavLink> }
            </ul>
            
          </div>
          
          </div>       
{/*  */}
<div className="navbar-center hidden lg:flex lg:pr-[555px] md:pr-[144px] " >
          <ul className="menu menu-horizontal px-1 text-xl font-semibold space-x-3 md:space-x-6 lg:space-x-8 ">
           

           <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500 animate__bounceOutLeft' : isActive ? 'text-white animate__bounceOutLeft  rounded-lg px-3 ' :'' } to={"/"} >Home</NavLink>
        
            
        <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500' : isActive ? 'text-white  rounded-lg px-3' :''} to={"/about"} >About</NavLink>
          
        <NavLink className={({isActive,isPending})=>
isPending ? 'text-blue-500' : isActive ? 'text-white  rounded-lg px-3 ' :''} to={"/register"} >Register</NavLink>
 
         {user &&     <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500' : isActive ? 'text-white  rounded-lg px-3 ' :''} to={"/updateprofile"} >Update Profile</NavLink> }

        
<NavLink className={({isActive,isPending})=>
isPending ? 'text-blue-500' : isActive ? 'text-white  rounded-lg px-3 ' :''} to={"/userprofile"} >User Profile</NavLink>


        
          </ul>
        </div>
        
        <div className=" ">
      
          <div className="dropdown dropdown-end mr-5">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div>
                {
                  !user ?
                  <div  className=" border-2 border-purple-600 pt-2 pb-2 pr-2 pl-1 rounded-lg text-white bg-purple-500 mt-2"><Link to={'/login'}className=""> Login</Link> </div>

                   :    <div  className="w-12 h-12 rounded-full border-purple-800 border-2 mr-2">
                    <Tippy content={user.displayName}>
                       
                       <img className="rounded-full" src={user.photoURL} alt="" />
                       </Tippy>
                       
                    </div>
         }
                

              
     
              </div>
            </div>

            {
                user ?
<ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-purple-300 rounded-box w-52 space-y-4">


{/*  */}
<h1 className="text-xl text-center text-white">{user.displayName}</h1>

<button className="btn-secondary rounded-full w-fit px-3 py-2 mx-auto bg-purple-800 text-white" onClick={HandleSignOut}>LogOut</button>

{/*  */}

</ul>:<div><h1></h1></div>


            }
            
          </div>
        </div>
      </div>
    );
};

export default Navbar2;