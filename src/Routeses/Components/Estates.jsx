import { useEffect, useState } from "react";
import Estate from "./Estate";

// import 'animate.css';




const Estates = () => {

    const [estates,setEstates]=useState([])

    useEffect(()=>{
        fetch('Estate.json')
        .then(res => res.json())
        .then(data=>setEstates(data))
    },[])
    console.log(estates);
    return (
        <div className="pt-20 mt-72   " >
           
            <h1 className="md:text-5xl text-3xl text-black font-semibold
            text-center " data-aos="fade-up-right"> Our Estate Categoryes</h1>
            <div className="grid grid-cols-1 md:gap-10 gap-5 md:grid-cols-2 lg:grid-cols-3 mx-10 my-10"> {
                estates.map(estate=><Estate key={estate.id} 
                estate={estate}></Estate>)
            }

            </div>
           
        </div>
    );
};

export default Estates;