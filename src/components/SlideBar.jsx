import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Product from './Product';

export default function App({ data, slidesPerView }) {

  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <div className='products' >{data.slice(0, 20).map((a, index) => (<SwiperSlide key={index} ><Product product={a} /></SwiperSlide>))}</div>


      </Swiper>
    </>
  );
}
