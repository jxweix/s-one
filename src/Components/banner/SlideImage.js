"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from '@nextui-org/react';

export default function SlideImage() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    arrows: false,
    autoplaySpeed: 5000

  };

  const images = [
    "images/banner/banner_promotion_01.jpg",
    "images/banner/banner_promotion_02.jpg",
    "images/banner/SOne_index_banner.jpg"
  ]

  return (
    <div className="slider-container my-[auto] col-span-1 items-center md:col-span-2">
      <Slider className="bg-black text-white" {...settings}>
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-[250px] md:h-[324px]">
            <Image src={src} height={350} alt={`Slide ${index}`} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}