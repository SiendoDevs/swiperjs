import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import 'swiper/css/bundle';

function Slider() {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={20}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    
  >
    <SwiperSlide>
        <img src="img/hydroptima-agua.jpg" alt="h1" style={{width: "100%"}} />
    </SwiperSlide>
    <SwiperSlide>
        <img src="img/hydroptima-vaso.jpg" alt="h1" style={{width: "100%"}} />
    </SwiperSlide>
    <SwiperSlide>
        <img src="img/hydroptima-vaso2.jpg" alt="h1" style={{width: "100%"}}  />
    </SwiperSlide>
    <SwiperSlide>
        <img src="img/hydroptima-vaso3.jpg" alt="h1" style={{width: "100%"}} />
    </SwiperSlide>

  </Swiper>
  )
}

export default Slider
