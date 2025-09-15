
'use client'
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

interface PaymentCarouselProps {
  logos: string[];
}

const PaymentCarousel: React.FC<PaymentCarouselProps> = ({ logos }) => {
  // Duplicate logos for smooth infinite scrolling
  const repeatedLogos = [...logos, ...logos];

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // 0 for smooth continuous scroll
    speed: 5000,      // animation duration
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="relative w-full overflow-hidden  py-4 bg-gray-100">
     <div className="max-w-7xl mx-auto">
         <Slider {...settings}>
        {repeatedLogos.map((logo, idx) => (
          <div key={idx} className="flex justify-center items-center ">
            <Image
              src={logo}
              alt={`logo-${idx}`}
              width={150}
              height={80}
              className="object-contain "
            />
          </div>
        ))}
      </Slider>
     </div>
    </div>
  );
};

export default PaymentCarousel;
