import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Banner from './Banner';
import Banner1 from './Banner1';
import 'swiper/css';
import 'swiper/css/effect-creative';
import {EffectCreative} from 'swiper';

const BannerContainer = () => {
  return (
    <section>
        <Swiper grabCursor={true} 
        effect={"creative"} 
        creativeEffect={{
            prev : {
                shadow: true,
                translate: ["120%", 0, -500]
            },
            next: {
                shadow: true,
                translate: ["120%", 0, -500]

            }
        }}
        modules={[EffectCreative]}
        className='mySwiper5'
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        
        >

        <SwiperSlide>
            <Banner/>

            
        </SwiperSlide>
        <SwiperSlide>
            <Banner1/>
                
            
        </SwiperSlide>
        </Swiper>

    </section>
  )
}

export default BannerContainer