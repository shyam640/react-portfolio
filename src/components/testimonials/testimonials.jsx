import React from "react";
import "./testimonial.css";
import Speaker1 from "../../assets/profile192.png";
import { MdNotInterested } from "react-icons/md";

// import Swiper core and required modules
import {Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    avatar: {MdNotInterested},
    name: "No Data Available",
    review: "No text Available Yet",
  },
  // {
  //   avatar: Speaker1,
  //   name: "Speaker Name2",
  //   review: "This is what speaker has to say about me.",
  // },
  // {
  //   avatar: Speaker1,
  //   name: "Speaker Name",
  //   review: "This is what speaker has to say about me.",
  // },
  // {
  //   avatar: Speaker1,
  //   name: "Speaker Name",
  //   review: "This is what speaker has to say about me.",
  // },
];

const testimonials = () => {
  return (
    <section id="testinomials">
      <h5>What Other Thinks About Me !!</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial_container" // install Swiper modules
        modules={[Navigation,Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="speakers_image">
                <img src={avatar} alt={name} />
                <h5 className="speaker_name">{name}</h5>
                <small className="speaker_text">{review}</small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default testimonials;
