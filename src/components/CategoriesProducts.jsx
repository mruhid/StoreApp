import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

export default function CategotiesProducts({ categories }) {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <div className="category">
                    {categories.slice(1, 5).map((a) => (<SwiperSlide key={a.id} ><NavLink to={`${a.name}/${a.id}/all`} >
                        <div className='category__image'> <img src={a.image} alt="" /></div>

                        <div className="category_information">
                            <h1>{a.name}</h1>
                            <div><button>Detailed</button></div>

                        </div></NavLink></SwiperSlide>))}
                </div>

            </Swiper>
        </>
    );
}
