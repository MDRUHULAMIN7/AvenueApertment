import { useEffect, useState } from "react";
import Project from "./Project";
import { Helmet } from "react-helmet-async";


const Projects = () => {

    const [projects,setProjects]=useState([])
console.log(projects);
    useEffect(()=>{
        fetch('project.json')
        .then(res=>res.json())
        .then(data=>setProjects(data))
    },[])
    return (
        <div className="mx-10 my-10">
            <Helmet><title>AvenueApartment |Projects</title></Helmet>
            <h1 className="lg:text-6xl md:text-5xl text-3xl text-center mt-20 mb-5">Our Completed Projects</h1>

            <div className="  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {
                projects.map(project=><Project key={project.id} project={project}></Project>)
            }
            </div>
          
        </div>
    );
};

export default Projects;