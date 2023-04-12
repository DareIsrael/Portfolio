import React from "react";
import { BsArrowRight, BsArrowLeft} from "react-icons/bs";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Data = [
    {
        image: "three.jpeg",
        name: "Wilton",
        review: " You always keep to time and deadline and you still do a great job as always, you never disappoint, I am impressed by that "
    },

    {
        image: "two.jpeg",
        name: "Margaret",
        review: " I already share your contact with some of my friends and business partners, they saw the website you designed for us and they love it keep it up  "
    },
    {
        image: "one.jpeg",
        name: "Becky",
        review: " The website you made for our company has incredibly increase our sales, thank you so much, keep it up "
    }
]



function Testimonials () {
    return(
        <div id="testimonial" className="testy_1">
        <h3 className="slideh3">Clients Review</h3>
        <h1>Testimonial</h1>
        <Swiper className="testy_2">
    {Data.map(({image, name, review}, index) => {
        return (
            <SwiperSlide key={index} className="testy_3">
            <div className="testy_4">
            <img src={image}></img>
            <h2>{name}</h2>
            <p>{review}</p>
            </div>
            </SwiperSlide>
            

        )
    })
    
    }
        

        </Swiper>
        <BsArrowRight className="swipe" />  <BsArrowLeft className="swipe" />
        <p>Swipe</p>

        </div>
    )
}

export default Testimonials;