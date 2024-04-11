import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Carousel.css'
import { EffectCoverflow, Autoplay } from 'swiper/modules';

function Carousel() {
  return (
    <>
    <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
          autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
        }}
        
        modules={[EffectCoverflow, Autoplay]}
        className="swiper_container"
      >
          <SwiperSlide >
            <img src='/images/image1.png' alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img src='/images/image2.png' alt="" />
          </SwiperSlide>
          <SwiperSlide  >
            <img src='/images/image3.png' alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img src='/images/image4.png' alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img src='/images/image2.png' alt="" />
          </SwiperSlide>
      <div className='carousel-screen-card'>
          <div className='text-[26px] font-bold text-white w-[445px] px-4'>
             ACCELERATING CONNECTIONS
             <br /><span className='text-blue-600 text-shadow-lg'>YOUR LOCAL VENDING EXPERTS</span>
          </div>
          <div className='text-[16px] w-[760px] text-white text-justify text-shadow-lg pt-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam obcaecati consequuntur autem ut libero unde fugit voluptate laborum. Suscipit repudiandae obcaecati reiciendis rerum eaque voluptatem ipsum quae? Ex, id praesentium?
          </div>
          <div className='carousel-button'>
          <button className="shadow-xl w-full bg-blue-700 font-bold py-3 px-4 text-white ">LEARN MORE</button>
          </div>
      </div>
      </Swiper>
    </div>
    </>
  );
}

export default Carousel;