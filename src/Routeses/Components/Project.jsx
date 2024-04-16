

const Project = ({project}) => {

  const{image,title,detail,budget,date,location}=project
    return (
        <div className="">
            <div className="hero  bg-lime-300 rounded-xl ">
  <div className=" ">
    <img src={image}className="h-72 w-full p-2 rounded-2xl shadow-2xl" />
    <div className="m-3">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6">{detail}</p>

      <p className="flex m-3 gap-6 justify-center items-center">
      <p className="bg-purple-400 p-2 rounded-2xl font-semibold">Budget : <span className="text-white">{budget}</span>
      </p> <p className="bg-purple-400 p-2 rounded-2xl font-semibold">Complete Date : <span className="text-white">{date}</span></p>
      </p>
     
      <button className="btn w-full btn-accent">{location}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Project;