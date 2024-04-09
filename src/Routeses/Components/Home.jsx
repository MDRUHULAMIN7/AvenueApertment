import { Helmet } from "react-helmet-async";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import slide1 from "../../../public/images/single.jpg"
import slide2 from "../../../public/images/townhouse.jpg"
import slide3 from "../../../public/images/apartment.jpg"
import slide4 from "../../../public/images/student.jpeg"
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import './styles.css';
// import { FreeMode, Pagination } from 'swiper/modules';
const Home = () => {
    return (
        <div className="bg-cover bg-no-repeat h-screen hero-overlay bg-opacity-55" style={{backgroundImage:'url("https://i.ibb.co/yVPbkGL/rea.png")'}}>
          <Helmet> <title>AvenueApartment |Home</title></Helmet>
          <div className="lg:flex gap-4  mx-10">
            <div className="w-3/1 space-y-4 text-center mx-auto mt-20">
    <h1 className="text-7xl font-bold my-5"> Avenue 
          </h1>
    <h1 className="text-7xl font-bold "> Apartment
          <span><h1 className="text-xl mt-4 font-normal text-purple-500">For You safe Housing</h1></span></h1>
          <button className="btn bg-purple-600 text-white font-semibold">Boking Now</button>
            </div>

            <div className="w-2/3 my-5  h-[600px]">
{/*  */}

{/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}

{/*  */}

<Swiper
      spaceBetween={50}
      slidesPerView={2}
     
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={ slide1} alt="" className="bg-cover"/></SwiperSlide>
      <SwiperSlide><img src={ slide2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={ slide3} alt="" /></SwiperSlide>
      <SwiperSlide><img src={ slide4} alt="" /></SwiperSlide>
     
      ...
    </Swiper>

{/*  */}
            </div>
          </div>
  
        </div>
    );
};

export default Home;