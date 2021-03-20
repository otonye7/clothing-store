import React from 'react';
import { SalesContainer } from './sales.styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';



const Sales = () => {
    return(


    <SalesContainer>
           <Swiper
                spaceBetween={50}
                slidesPerView= 'auto'
            >
                <SwiperSlide className='image'></SwiperSlide>
                <SwiperSlide className='second-image'></SwiperSlide>
                <SwiperSlide className='third-image'></SwiperSlide>
                <SwiperSlide className='fourth-image'></SwiperSlide>
                {/* <SwiperSlide className='fifth-image'></SwiperSlide> */}
      ...
             </Swiper>
            {/* <div className='image'></div>
			<div className='second-image'></div>
			<div className='third-image'></div>
			<div className='fourth-image'></div> */}
        </SalesContainer>
    )
}

export default Sales;