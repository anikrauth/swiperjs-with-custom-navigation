
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import { HiChevronRight,HiChevronLeft } from "react-icons/hi2";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const ImageSlider = ({ images }) => {

  return (
    <>


      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {
          images ?
            images?.map((item, idx) => {
              return (
                <SwiperSlide  key={idx} className="w-full h-full keen-slider__slide ">
                  <Image objectFit="cover" className="w-full h-full" src={item?.sourceUrl} width="1200" height="1200" alt="sddfdsf" />
                </SwiperSlide>
              )
            })
            : null
        }
        <div className="bg-white flex justify-center items-center absolute top-[50%] z-10 left-5 w-8 h-8 rounded-full shadow-md cursor-pointer "><HiChevronLeft className="w-5 h-5" /> </div>
        <div className="bg-white flex justify-center items-center absolute top-[50%] z-10 right-5 w-8 h-8 rounded-full shadow-md cursor-pointer " ><HiChevronRight className="w-5 h-5" /></div>
    

      </Swiper>

    </>
  )
}


export default ImageSlider;
