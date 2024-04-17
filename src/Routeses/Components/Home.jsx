import { Helmet } from "react-helmet-async";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'animate.css';


// import { EffectFade } from 'swiper/modules';

import 'swiper/css';

import Estates from "./Estates";
import About from "./About";



const Home = () => {

    return (
      <div className="">
         <div className="bg-no-repeat    bg-contain   bg-[url('https://i.ibb.co/XFpC7hc/istockphoto-1289383957-612x612.jpg')]" >
          <Helmet> <title>AvenueApartment |Home</title></Helmet>
          <div className="lg:flex gap-4 lg:pt-8 mx-10 bg-opacity-60 ">
            <div className="w-3/1 lg:leading-8 lg:mt-44 text-center mx-auto "    >
    <h1 className="lg:text-7xl md:text-6xl text-4xl font-bold animate__bounceIn"> Avenue 
          </h1>
    <h1 className="lg:text-7xl  md:text-6xl text-4xl font-bold animate__animated  animate__bounceIn animate__slower	2s"  > Apartment
          <span><h1  className="text-xl mt-4 font-normal text-white ">For You safe Housing</h1></span></h1>
          <button className="btn bg-purple-600 text-white font-semibold mt-5 animate__animated animate__backInLeft 	animate__slower	2s">Boking Now</button>
            </div>

            <div className="lg:w-2/3 md:mx-auto  md:pt-7 pt-4 lg:h-[600px] md:h-[450px] h-[350px]">

<Swiper
       // install Swiper modules
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={1}
      //  effect="fade"
       slidesPerView={2}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
    >
      <SwiperSlide className="text-center ">

        <div className="bg-cover bg-no-repeat lg:h-[500px] md:h-[450px] h-[350px]  rounded-xl bg-[url('https://i.ibb.co/WKPSfd3/single.jpg')]">
        <h1 className="text-white text-2xl md:text-4xl w-fit px-4 pt-72 md:pt-96 lg:pt-[430px] mx-auto text-center rounded-b-lg">Single Family</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className="text-center ">

        <div className="bg-cover bg-no-repeat lg:h-[500px] md:h-[450px] h-[350px]   rounded-xl bg-[url('https://i.ibb.co/VwRD7gR/townhouse.jpg')]">
        <h1 className="text-white text-2xl md:text-4xl w-fit px-4 pt-72 md:pt-96 lg:pt-[430px] mx-auto text-center rounded-b-lg">Townhouses</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className="text-center ">

        <div className="bg-cover bg-no-repeat lg:h-[500px] md:h-[450px] h-[350px]  rounded-xl bg-[url('https://i.ibb.co/5LLsC83/apartment.jpg')]">
        <h1 className="text-white text-2xl md:text-4xl w-fit px-4 pt-72 md:pt-96 lg:pt-[430px] mx-auto text-center rounded-b-lg">Apertments</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className="text-center ">

        <div className=" bg-cover bg-no-repeat lg:h-[500px] md:h-[450px] h-[350px]  rounded-xl bg-[url('https://i.ibb.co/0q2V6GV/student.jpg')]">
        <h1 className="text-green-600 text-2xl md:text-4xl px-4 pt-72 md:pt-96  lg:pt-[430px] mx-auto text-center rounded-b-lg">Students House</h1>
        </div>
      </SwiperSlide>
      
      ...
    </Swiper>

{/*  */}
            </div>
          </div>





<div>
<Estates></Estates>
</div>

<div>
<About></About> 
</div>
         
  
        </div>
      </div>
       
    );
};

export default Home;