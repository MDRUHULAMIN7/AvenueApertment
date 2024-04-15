import { Helmet } from "react-helmet-async";

import pic1 from "../../../public/images/room1.jpg"
import pic2 from "../../../public/images/rooom 2.jpg"
const About = () => {
    return (
        <div className="" >
            <Helmet><title>AvenueApartment | About</title></Helmet>
            <div   className="text-center pt-20   bg-no-repeat bg-cover " style={{backgroundImage:'url("https://i.ibb.co/d5px2FS/aboutr.jpg")'}}>

                <div data-aos="zoom-in-right" data-aos-duration="1000" className="border-2 border-blue-500 w-fit py-12 px-5 mx-auto ">
                <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold"><span className="text-white mx-5 ">About</span>us</h1>
                <p className="text-xl text-black mt-20 text-center space-y-4 line-clamp-6">AvenueApartment is a residential property <br /> company operating in West and <br /> Central London.br <br />

Honest and to-the-point, our aim is <br /> to get things done with efficiency <br /> and skill.</p>
                
                </div>
                <div className="lg:flex mt-48 py-16 gap-10 pb-8 px-10 space-y-3  bg-gradient-to-r from-sky-500 to-indigo-500">
                    <div className="md:flex lg:w-1/2 gap-4"  data-aos="fade-up"
     data-aos-duration="2000">
                        <div className="md:w-1/2  gap-4">

                        <img  data-aos="zoom-in" className="h-72 rounded-2xl" src={pic1} alt="" />

                        </div>
                        <div className="md:w-1/2 gap-4 my-auto"  >
                            <h1 className="text-2xl text-white">

                            Management
                            </h1>
                            <p className="mt-5">
                            Every property under our management has a dedicated property manager assigned to it, thereby enabling us to provide a more personal service.

They will have usually managed the property for a number of years, which means most enquiries are answered quickly and accurately. 
                            </p>
                        </div>
                    </div>
                    <div className="md:flex lg:w-1/2 gap-4" data-aos="fade-up"
     data-aos-duration="2000"   data-aos-delay="1000">


                    <div  className="md:w-1/2 gap-4 md:mt-0 mt-5" >

<img  data-aos="zoom-in" className="h-72 rounded-2xl" src={pic2} alt="" />

</div>
<div  className="md:w-1/2 gap-4 my-auto">
    <h1 className="text-2xl text-white ">

    Acquisitions
    </h1>
    <p className="mt-5">
    Your search agent will use their
experience to ask you incisive
questions, then scour the market to
find a property matching your requirements, either as a home or
as an investment.
    </p>
</div>
                    </div>
                </div>


                </div>
              
            
        </div>
    );
};

export default About;