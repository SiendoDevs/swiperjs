import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider() {
  const breakpoints = {
    // Cuando el ancho de la ventana es igual o inferior a 640px, muestra solo 1 imagen por diapositiva.
    640: {
      slidesPerView: 1,
    },
    // Cuando el ancho de la ventana es superior a 640px, muestra 3 imágenes por diapositiva.
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
      breakpoints={breakpoints} // Aplicar reglas de responsive definidas anteriormente
    >
      <SwiperSlide>
        <img src="img/hydroptima-agua.jpg" alt="Img1" style={{ width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/hydroptima-vaso.jpg" alt="Img2" style={{ width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/hydroptima-vaso2.jpg" alt="Img3" style={{ width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/hydroptima-vaso3.jpg" alt="Img4" style={{ width: "100%" }} />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
