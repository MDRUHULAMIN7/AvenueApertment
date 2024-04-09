import { useEffect, useState } from "react";
import Estate from "./Estate";


const Estates = () => {

    const [estates,setEstates]=useState([])

    useEffect(()=>{
        fetch('Estate.json')
        .then(res => res.json())
        .then(data=>setEstates(data))
    },[])
    console.log(estates);
    return (
        <div className="pt-20  bg-gradient-to-r from-sky-500 to-indigo-500">
            <h1 className="md:text-5xl text-3xl text-black font-semibold
            text-center "> Our Estate Categoryes</h1>
            <div className="grid grid-cols-1 md:gap-10 gap-5 md:grid-cols-2 mx-10"> {
                estates.map(estate=><Estate key={estate.id} 
                estate={estate}></Estate>)
            }

            </div>
           
        </div>
    );
};

export default Estates;