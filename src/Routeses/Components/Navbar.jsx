import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Prrovider/AuthProvider";

import toast from 'react-hot-toast';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';


const Navbar = () => {

   
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
         toast.warning(error)
      })
   }

    return (
      
        <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            
            <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500' : isActive ? 'text-white bg-blue-700 rounded-lg px-3 py-2' :''} to={"/"} >Home</NavLink>
          
           <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500' : isActive ? 'text-white bg-blue-700 rounded-lg px-3 py-2' :''} to={"/register"} >Register</NavLink>
         <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500' : isActive ? 'text-white bg-blue-700 rounded-lg px-3 py-2' :''} to={"/userprofile"} >User Profile</NavLink>
           <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500' : isActive ? 'text-white bg-blue-700 rounded-lg px-3 py-2' :''} to={"/login"} >Login</NavLink>

           {user &&     <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500' : isActive ? 'text-white bg-blue-700 rounded-lg px-3 py-2' :''} to={"/updateprofile"} >Update Profile</NavLink> }
            </ul>
          </div>

          <Link to={'/'}>   <a className=" lg:text-3xl md:text-2xl text-xl font-bold">AveneuApertment</a></Link>
        
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-semibold space-x-3">
           

           <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500' : isActive ? 'text-white bg-blue-700 rounded-lg px-3 py-2' :''} to={"/"} >Home</NavLink>

       
         
           <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500' : isActive ? 'text-white bg-blue-700 rounded-lg px-3 py-2' :''} to={"/register"} >Register</NavLink>
           <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500' : isActive ? 'text-white bg-blue-700 rounded-lg px-3 py-2' :''} to={"/login"} >Login</NavLink>

  <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500' : isActive ? 'text-white bg-blue-700 rounded-lg px-3 py-2' :''} to={"/userprofile"} >User Profile</NavLink> 
         {user &&     <NavLink className={({isActive,isPending})=>
        isPending ? 'text-blue-500' : isActive ? 'text-white bg-blue-700 rounded-lg px-3 py-2' :''} to={"/updateprofile"} >Update Profile</NavLink> }


        
          </ul>
        </div>
        <div className="navbar-end">
       

         {
            user?
            
            
            
            <div
            className="flex
            justify-center items-center gap-3
         " >
            <div>
            <Tippy content={user.displayName}>
               
               <img className="w-10 h-10 rounded-full " src={user.
                  photoURL} alt="" />
               </Tippy>
               
            </div>
           
              
                 <a className="btn" onClick={HandleSignOut}>SignOut</a></div> : 
                 <Link to={'/login'}> <a className="btn">Login</a></Link>
         }
         
        </div>
  
      </div>
    );
};

export default Navbar;