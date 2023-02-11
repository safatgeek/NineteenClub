import './gallery.css'
import React from 'react'
import JZSmorning from '../img/jzsMorning.jpeg'
import JZSday from '../img/jzsDay.jpg'
import highSchool from '../img/hSchool.jpg'
import BangabandhuScl from '../img/Bangabandhu.jpg'
import ShahjamalScl from '../img/sahjamal.jpg'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'


const Gallery = () => {
  return (
    <div className="gallery">
        <span>SSC Batch</span>
        <span>2k19</span>

        <div className="slider">
            
        </div>

        {/* <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='gallery-slider'>

            <SwiperSlide>
                <img src={JZSmorning} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={JZSday} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={highSchool} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={BangabandhuScl} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={ShahjamalScl} alt="" />
            </SwiperSlide>
        


        </Swiper> */}
    </div>
  )
}

export default Gallery