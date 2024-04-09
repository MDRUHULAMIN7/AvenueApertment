import { Link } from "react-router-dom";

import { IoLocationSharp } from "react-icons/io5";
const Estate = ({estate}) => {
    const {id,image,segment_name,estate_title,price,status,area,location} =estate;
    return (
        <div className="card  bg-base-100 shadow-xl">
         <h1 className="p-2 text-center md:text-3xl text-2xl font-bold text-primary">{segment_name}</h1>
        <figure><img className="rounded-xl p-2" src={image} alt="Shoes" /></figure>
        <hr />
        <div className="card-body">
          <h2 className="card-title mb-5 md:text-3xl text-2xl text-secondary font-semibold">{estate_title}</h2>
<hr />
    
        
          <p className="bg-purple-500 text-white rounded-3xl px-3 py-1 w-fit mt-5 flex justify-center items-center"><span className="pr-3">Area : {area}   </span>  |
          <span className="flex justify-center items-center gap-1"> <span><IoLocationSharp></IoLocationSharp></span><span>{location}</span></span> </p>
       
        
          <div className=" flex justify-between">

            <div className="bg-purple-500 text-white rounded-xl px-3 py-3 w-fit">
            <span>For : {status}</span> | 
          <span>      Price : {price}</span>
            </div>
            <div>
            <Link to={`/estate/${id}`}>
            <button className="btn btn-primary">View Property</button>
            </Link>
            </div>
          
           
          
          </div>
        </div>
      </div>
    );
};

export default Estate;