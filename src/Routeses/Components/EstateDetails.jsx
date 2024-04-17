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
        <div  className="  ">
          <Helmet> <title>AvenueApartment |EstateDetails</title></Helmet>

      
            <div data-aos="zoom-in" data-aos-duration='1000' className="bg-indigo-50 pt-5 text-black shadow-2xl ">



 <h1 className=" text-center md:text-5xl text-2xl font-bold ">{segment_name}</h1>
            

            <div className=" mt-10   px-5" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" >
<figure><img     className="rounded-2xl lg:h-[500px] md:h-[400px] h-[300px] w-full  " src={image} alt="Shoes" /></figure>




<div>
 
<div className="card-body" data-aos="fade-left" data-aos-duration='1000'data-aos-delay='500'>
          <h2 data-aos="fade-right" className="card-title mb-5 md:text-3xl text-2xl font-bold">{estate_title}</h2>
<hr />
    
        <p className="text-xl ">{description}</p>
        <hr />


<div className="lg:flex justify-around">
  <div >
  <div>
        <p className="bg-indigo-200  rounded-3xl px-3 py-1 w-fit mt-5 flex justify-center items-center"><span className="pr-3">Area : {area}   </span>  |
          <span className="flex justify-center items-center gap-1"> <span><IoLocationSharp></IoLocationSharp></span><span>{location}</span></span> </p>
        </div>
        <div className=" flex justify-between mt-5">

<div className="bg-indigo-200 rounded-xl px-3 py-3 w-fit">
<span>For : {status}</span> | 
<span>      Price : {price}</span>
</div>




</div>
  </div>
  <div>
  <div className="w-fit my-4 "> 
            <h1 className="text-xl  text-center my-2">Our Speacial facilities</h1>
            <div className="grid grid-cols-6  space-x-2 space-y-2">
                <p className="col-span-2 bg-purple-200 px-2 py-2 rounded-full  font-bold text-center">{facilities[0]}</p>
                <p className="col-span-2  bg-purple-200 px-2 py-2 rounded-full  font-bold text-center">{facilities[1]}</p>
                <p className="col-span-2  bg-purple-200 px-2 py-2 rounded-full font-bold text-center">{facilities[2]}</p>
                <p className="col-span-3  bg-purple-200 px-2 py-2 rounded-full  font-bold text-center">{facilities[3]}</p>
                <p className="col-span-3  bg-purple-200 px-2 py-2 rounded-full  font-bold text-center">{facilities[4]}</p>
              
            </div>
        </div>
  </div>

  
</div>
        
          
       
        
<div className="mx-auto">
<Link to={'/estates'}>
<button className="btn bg-indigo-200">View All Propertys</button>
</Link>
</div>
        </div>
</div>
            </div>
        
        
       
      </div>
        </div>

        
    );
};

export default EstateDetails;