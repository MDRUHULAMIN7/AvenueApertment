import {useLoaderData,useParams} from "react-router-dom"
import { Link } from "react-router-dom";

import { IoLocationSharp } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
const EstateDetails = () => {

    const estates=useLoaderData();
    const {id}=useParams();
    const numId=parseInt(id)
    console.log(numId,estates);

    const estate= estates.find(estate=> estate.id == numId);
    console.log(estate);
    const {image,segment_name,estate_title,price,status,area,location,description,facilities} =estate;
    return (
        <div  className="bg-gradient-to-r from-violet-500 to-fuchsia-500  pt-5 ">
          <Helmet> <title>AvenueApartment |EstateDetails</title></Helmet>

      
            <div data-aos="zoom-in" data-aos-duration='1000' className="card mx-5  bg-gradient-to-r from-purple-500 to-pink-500  shadow-xl ">



 <h1 className="mb-4 text-center md:text-5xl text-2xl font-bold text-white">{segment_name}</h1>
            

            <div className=" " data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" >
<figure><img     className=" rounded-2xl mx-5 h-[500px] w-full " src={image} alt="Shoes" /></figure>




<div>
 
<div className="card-body" data-aos="fade-left" data-aos-duration='1000'data-aos-delay='500'>
          <h2 data-aos="fade-right" className="card-title mb-5 md:text-3xl text-2xl text-white font-bold">{estate_title}</h2>
<hr />
    
        <p className="text-xl text-white ">{description}</p>
        <hr />
          <p className="bg-purple-500 text-white rounded-3xl px-3 py-1 w-fit mt-5 flex justify-center items-center"><span className="pr-3">Area : {area}   </span>  |
          <span className="flex justify-center items-center gap-1"> <span><IoLocationSharp></IoLocationSharp></span><span>{location}</span></span> </p>
       
        <div className="w-fit my-4 "> 
            <h1 className="text-xl text-white text-center my-2">Our Speacial Services</h1>
            <div className="grid grid-cols-6  space-x-2 space-y-2">
                <p className="col-span-2 bg-purple-400 px-2 py-2 rounded-full text-white font-bold text-center">{facilities[0]}</p>
                <p className="col-span-2  bg-purple-400 px-2 py-2 rounded-full text-white font-bold text-center">{facilities[1]}</p>
                <p className="col-span-2  bg-purple-400 px-2 py-2 rounded-full text-white font-bold text-center">{facilities[2]}</p>
                <p className="col-span-3  bg-purple-400 px-2 py-2 rounded-full text-white font-bold text-center">{facilities[3]}</p>
                <p className="col-span-3  bg-purple-400 px-2 py-2 rounded-full text-white font-bold text-center">{facilities[4]}</p>
              
            </div>
        </div>
          <div className=" flex justify-between">

            <div className="bg-purple-500 text-white rounded-xl px-3 py-3 w-fit">
            <span>For : {status}</span> | 
          <span>      Price : {price}</span>
            </div>
            <div>
            <Link to={'/estates'}>
            <button className="btn btn-primary">View All Propertys</button>
            </Link>
            </div>
          
           
          
          </div>
        </div>
</div>
            </div>
        
        
       
      </div>
        </div>

        
    );
};

export default EstateDetails;