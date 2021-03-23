import React from 'react';
import { SalesContainer } from './sales.styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';



const Sales = () => {
    return(


    <SalesContainer>
           <Swiper
                spaceBetween={60}
                slidesPerView= 'auto'
            >
                <SwiperSlide className='image'></SwiperSlide>
                <SwiperSlide className='second-image'></SwiperSlide>
                <SwiperSlide className='third-image'></SwiperSlide>
                <SwiperSlide className='fourth-image'></SwiperSlide>
                {/* <SwiperSlide className='fifth-image'></SwiperSlide> */}
      ...
             </Swiper>
           
        </SalesContainer>
    )
}

export default Sales;