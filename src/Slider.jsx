import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider() {
  const breakpoints = {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      breakpoints={breakpoints}
    >
      <SwiperSlide>
        <div className="slide-content">
          <h1>Titulo 1</h1>
          <h3>Subtítulo 1</h3>
          <img src="img/hydroptima-agua.jpg" alt="Img1" style={{ width: "100%" }} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <h1>Titulo 2</h1>
          <h3>Subtítulo 2</h3>
          <img src="img/hydroptima-vaso.jpg" alt="Img2" style={{ width: "100%" }} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <h1>Titulo 3</h1>
          <h3>Subtítulo 3</h3>
          <img src="img/hydroptima-vaso2.jpg" alt="Img3" style={{ width: "100%" }} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <h1>Titulo 4</h1>
          <h3>Subtítulo 4</h3>
          <img src="img/hydroptima-vaso3.jpg" alt="Img4" style={{ width: "100%" }} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
