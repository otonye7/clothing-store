import React from 'react';
import { SalesContainer } from './recently-viewed-images.styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';




const RecentlyViewedImages = () => {
    return(


    <SalesContainer>
            <Swiper
                // spaceBetween={50}
                // slidesPerView= {4}
                breakpoints={{
                    767: {
                    slidesPerView: 'auto'
                  },

                  768: {
                    slidesPerView: 'auto',
                  },
                  1737: {
                      slidesPerView: 4
                  },
                  1738: {
                    slidesPerView: 4
                }

                  }}
            
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

export default RecentlyViewedImages ;