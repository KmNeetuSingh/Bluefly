import React from "react";
import { Box, Img, SimpleGrid, Text, Button } from "@chakra-ui/react";
import Slider from "react-slick";
import avva from "../../Utils/Homepage/Slider2";
import { useNavigate } from "react-router-dom";

const Slider2 = () => {
  const navigate = useNavigate();
  const [showArrows, setShowArrows] = React.useState(false);

  const buttonStyles = {
    display: showArrows ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.5)",
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    padding: "12px",
    zIndex: 1,
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.2s ease, background 0.2s ease",
    _hover: {
      transform: "scale(1.1)",
      background: "rgba(0, 0, 0, 0.7)",
    },
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <Box aria-label="Next" as="button" sx={{ ...buttonStyles, right: "20px" }} onClick={onClick}>
        &#10095;
      </Box>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <Box aria-label="Previous" as="button" sx={{ ...buttonStyles, left: "20px" }} onClick={onClick}>
        &#10094;
      </Box>
    );
  }

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const totalStars = fullStars + halfStar;

    return (
      <>
        {Array.from({ length: fullStars }, (_, i) => (
          <span key={`full-${i}`}>&#9733;</span>
        ))}
        {halfStar ? <span>&#9734;</span> : null}
        {Array.from({ length: 5 - totalStars }, (_, i) => (
          <span key={`empty-${i}`}>&#9734;</span>
        ))}
      </>
    );
  };

  // ✅ Redirect to the category page
  const handleProductClick = (product) => {
    navigate(`/products?category=${encodeURIComponent(product.category)}`);
  };

  return (
    <Box
      p={["4", "6", "12", "16"]}
      pt={[6, 6, 6, 6]}
      pb={[12, 12, 12, 12]}
      w="full"
      h="auto"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <Text fontWeight={650} fontSize={["24px", "28px", "40px"]} textAlign="center">
        BestSeller
      </Text>

      <Slider {...settings}>
        {avva.map((elem) => (
          <SimpleGrid key={elem.id} cursor="pointer" padding="10px" onClick={() => handleProductClick(elem)}>
            <SimpleGrid
              boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2), 0px 2px 4px rgba(0, 0, 0, 0.15)"
              _hover={{ transform: "translateY(-5px)" }}
              p={["10px", "20px", "20px", "20px"]}
            >
              <Box mb="10px" mx="auto" w={["100px", "150px", "200px"]}>
                <Img alt="slider" width="80%" src={elem.image} />
              </Box>
              <Text fontSize={["10px", "12px"]} fontWeight={700} textAlign={["center", "left"]}>
                {elem.title}
              </Text>
              <Text
                fontWeight={400}
                fontSize={["12px", "14px", "16px"]}
                whiteSpace="prewrap"
                textAlign={["center", "left"]}
              >
                {elem.description}
              </Text>
              <Text
                fontWeight={700}
                fontSize={["10px", "12px", "14px"]}
                color="Black.500"
                textAlign={["center", "left"]}
              >
                {renderStars(elem.rating)}
              </Text>
              <Text fontSize={["14px", "16px", "18px"]} fontWeight={700} textAlign={["center", "left"]}>
                {elem.price.includes("-")
                  ? `$${elem.price.split("-")[0]} - $${elem.price.split("-")[1]}`
                  : `$${elem.price}`}
              </Text>
              <Button
                mt={3}
                bg="black"
                color="white"
                padding="10px 20px"
                _hover={{ bg: "gray.800" }}
                onClick={() => handleProductClick(elem)} // ✅ Redirect to the category
              >
                View Category
              </Button>
            </SimpleGrid>
          </SimpleGrid>
        ))}
      </Slider>
    </Box>
  );
};

export default Slider2;
