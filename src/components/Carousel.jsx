import {Swiper,SwiperSlide} from "swiper/react"
import { Navigation,Autoplay } from "swiper"

import "swiper/css"
import "swiper/css/navigation"

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white" >
        <Swiper 
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation,Autoplay]}
        autoplay={{
          delay :3500
        }}
        className="h-[50%]"
        >
          <SwiperSlide>
              <img src={"../images/carousel_7.jpg"}/>
          </SwiperSlide>
          <SwiperSlide className="bg-black">
                <video controls muted="muted">
                  <source src={"../images/carousel_vid.mp4"} type="video/mp4" />
                </video>
          </SwiperSlide>
          <SwiperSlide>
              <img src={"../images/carousel_1.jpg"}/>
          </SwiperSlide>
          <SwiperSlide>
              <img src={"../images/carousel_6.jpg"}/>
          </SwiperSlide>
          <SwiperSlide>
              <img src={"../images/carousel_11.jpg"}/>
          </SwiperSlide>
          
          <SwiperSlide>
              <img src={"../images/carousel_8.jpg"}/>
          </SwiperSlide>
          <SwiperSlide>
              <img src={"../images/carousel_9.jpg"}/>
          </SwiperSlide>
          <SwiperSlide>
              <img src={"../images/carousel_10.jpg"}/>
          </SwiperSlide>
          <SwiperSlide>
              <img src={"../images/carousel_2.jpg"}/>
          </SwiperSlide>
          <SwiperSlide>
              <img src={"../images/carousel_4.jpg"}/>
          </SwiperSlide>
          <SwiperSlide>
              <img src={"../images/carousel_5.jpg"}/>
          </SwiperSlide>
         
          


        </Swiper>
        <div className="h-[50%] bg-gradient-to-b from-stone-900" />
      
    </div>
  )
}

export default Carousel
