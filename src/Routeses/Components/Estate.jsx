import { Link } from "react-router-dom";

import { IoLocationSharp } from "react-icons/io5";
const Estate = ({estate}) => {
    const {id,image,segment_name,estate_title,price,status,area,location} =estate;
    return (
      
        <div className="">

        
          <div className=" bg-indigo-50 rounded-xl  "  data-aos="zoom-in" data-aos-duration="1000">
         <h1 className="p-2 text-center md:text-3xl text-2xl font-bold text-black">{segment_name}</h1>
        <figure><img  data-aos="zoom-in-left" data-aos-duration="1000"  className="rounded-xl p-2 h-[250px] w-full" src={image} alt="Shoes" /></figure>
        <hr />
        <div className="card-body" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="500">
          <h2  className="card-title mb-5 md:text-3xl text-2xl text-black font-semibold">{estate_title}</h2>
<hr />
    
        
          <p className="bg-indigo-200 text-black rounded-3xl px-3 py-1 w-fit mt-5 flex justify-center items-center"><span className="pr-3">Area : {area}   </span>  
          </p>
        
          <p className="bg-indigo-200 text-black rounded-3xl px-3 py-1 w-fit  flex justify-center items-center">
          <span className="flex justify-center items-center gap-1"> <span><IoLocationSharp></IoLocationSharp></span><span>{location}</span></span> </p>
       
        
          <div className=" flex justify-between">

            <div className="bg-indigo-200 text-black rounded-3xl px-3 flex justify-center items-center gap-1  w-fit">
            For : {status} | 
               Price : {price}
            </div>
            <div>
            <Link to={`/estate/${id}`}>
            <button className="btn bg-indigo-200 m-2">View Property</button>
            </Link>
            </div>
          
           
          
          </div>
        </div>
      </div>
        </div>
    );
};

export default Estate;