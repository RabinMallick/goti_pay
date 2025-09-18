'use client'
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { imagePath } from "@/utils/baseurl";

interface PaymentCarouselProps {
  logos: string[];
}

const PaymentCarousel: React.FC<PaymentCarouselProps> = ({ logos }) => {
  // Duplicate logos for smooth infinite scrolling
  const repeatedLogos = [...logos, ...logos];

  const settings = {
    infinite: true,
    slidesToShow: 8, // default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // continuous scroll
    speed: 5000,      // smooth animation
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 8 } },
      { breakpoint: 1024, settings: { slidesToShow: 6 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <div className="relative w-full overflow-hidden  mb-6">
      <div className="max-w-7xl mx-auto pt-2 ">
        <Slider {...settings}>
          {repeatedLogos.map((logo, idx) => (
            <div key={idx} className="flex justify-center items-center px-2">
              <Image
                src={`${imagePath + logo}`}
                alt={`logo-${idx}`}
                width={0}
                height={0}
                sizes="100vw"
                className="h-8 sm:h-12 md:h-14 lg:h-16 w-auto object-contain border border-gray-200"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PaymentCarousel;
