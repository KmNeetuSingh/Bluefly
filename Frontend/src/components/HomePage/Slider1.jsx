import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Img, SimpleGrid, Text } from "@chakra-ui/react";
import slides from "../../Utils/Homepage/Slider1";

const Slider1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Add state to control visibility of arrows and dot color
  const [showArrows, setShowArrows] = useState(false); // Control arrow visibility
  const [dotColor, setDotColor] = useState("black"); // Control dot color

  React.useEffect(() => {
    setTimeout(() => {
      setShowArrows(true); // Show arrows after 5 seconds (example)
      setDotColor("black"); // Set dots to black color after 5 seconds (example)
    }, 100);
  }, []);

  const settings = {
    infinite: true,
    speed: 100, // Transition speed between images (1 second)
    slidesToShow: 1, // Default for larger screens
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Change image every 1 second
    nextArrow: showArrows ? <div>&#10095;</div> : null, // Conditional arrow
    prevArrow: showArrows ? <div>&#10094;</div> : null, // Conditional arrow
    dots: true, // Enable dots for navigation
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          background: i === currentIndex ? dotColor : "#ddd", // Change dot color dynamically
          borderRadius: "50%",
          margin: "5px",
          cursor: "pointer",
        }}
      ></div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          position: "absolute",
          bottom: "10px", // Slightly raise the dots
          width: "100%",
          color: "#fff",
        }}
      >
        {dots}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
        },
      },
      {
        breakpoint: 768, // For small screens (mobile)
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
          slidesToScroll: 1,
          dots: true, // Enable dots for navigation
          arrows: false, // Hide arrows on small screens
        },
      },
    ],
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  return (
    <Box
      className="slider-container"
      position="relative"
      maxWidth="100%"
      overflow="hidden"
    >
      <Slider {...settings}>
        {slides.map((elem, i) => (
          <SimpleGrid
            key={i}
            cursor="pointer"
            p="10px"
            width={{ base: "100%", md: "90%", lg: "80%" }}
            mx="auto"
          >
            <Box mb="10px" mx="auto" width="100%">
              <Img
                src={elem.img}
                alt="slider image"
                width="100%"
                height={{ base: "300px", md: "400px", lg: "500px" }}
                objectFit="cover"
                cursor="pointer"
                borderRadius="md"
              />
            </Box>
          </SimpleGrid>
        ))}
      </Slider>
    </Box>
  );
};

export default Slider1;
