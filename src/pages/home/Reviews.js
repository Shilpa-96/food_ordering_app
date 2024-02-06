import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./reviews.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Reviews() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="user1"
            className="review-img"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            odio dolores libero corrupti earum quasi possimus voluptas, tempora
            aliquam debitis minima nemo veritatis sequi molestiae placeat? Nobis
            nesciunt odit necessitatibus.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="review-img"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="user1"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            odio dolores libero corrupti earum quasi possimus voluptas, tempora
            aliquam debitis minima nemo
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="review-img"
            src="data:image/jpeg;base64,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"
            alt="user2"
          />
          <p>
            Lorem ipsum dolor sit amet earum quasi possimus voluptas, tempora
            aliquam debitis minima nemo veritatis sequi molestiae placeat? Nobis
            nesciunt odit necessitatibus.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="review-img"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="user3"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            odio dolores libero nemo veritatis sequi molestiae placeat? Nobis
            nesciunt odit necessitatibus.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="review-img"
            src="https://pics.craiyon.com/2023-07-04/56c71820281544d79a2c31fb89140450.webp"
            alt="user4"
          />
          <p>
            Lorem ipsum minima nemo veritatis sequi molestiae placeat? Nobis
            nesciunt odit necessitatibus.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="review-img"
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            alt="user5"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            odio dolores libero corrupti earum quasi possimus voluptas, tempora
            aliquam debitis minima nemo veritatis sequi
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
