"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import one from "@/../public/images/m-one.jpg";
import two from "@/../public/images/m-two.jpg";
import three from "@/../public/images/m-three.jpg";
import four from "@/../public/images/m-profile.jpg";
import { motion } from "framer-motion";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      cssEase: "linear",
    };

    return (
      <motion.div
        className="gallery"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Slider {...settings}>
          <div>
            <Image className="g-image" src={two} alt="mohamed hamed" />
          </div>
          <div>
            <Image className="g-image" src={one} alt="mohamed hamed" />
          </div>
          <div>
            <Image className="g-image" src={three} alt="mohamed hamed" />
          </div>

          <div>
            <Image className="g-image" src={four} alt="mohamed hamed" />
          </div>
        </Slider>
      </motion.div>
    );
  }
}
