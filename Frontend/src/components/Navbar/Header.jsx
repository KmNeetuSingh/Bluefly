import React, { useEffect, useState } from "react";
import { Box, Container, HStack, IconButton, Text } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Header = () => {
  const [count, setCount] = useState(0);
  const textArr = [
    "🎁 Free Gift on all PREPAID Orders",
    "Get any 3 100ml PERFUMES for just ₹1298",
    "Bellavita's Birthday is Here! Buy 1 Get 1 FREE SITEWIDE*",
    "Get any 2 100ml PERFUMES for just ₹949",
  ];

  useEffect(() => {
    let id = setInterval(() => {
      setCount((prev) => (prev < textArr.length - 1 ? prev + 1 : 0));
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const handleIncrement = () => setCount((prev) => (prev < textArr.length - 1 ? prev + 1 : 0));
  const handleDecrement = () => setCount((prev) => (prev === 0 ? textArr.length - 1 : prev - 1));

  return (
    <Box bg="black" w="100%" p={2} color="white">
      <Container maxW="container.xl">
        <HStack fontSize="16px" justify="center" spacing={2}>
          {/* Left Arrow Close to Text */}
          <IconButton
            onClick={handleDecrement}
            fontSize="20px"
            variant="ghost"
            colorScheme="whiteAlpha"
            _hover={{ bg: "gray.700" }}
            icon={<IoIosArrowBack />}
            aria-label="Previous"
          />
          
          {/* Text */}
          <Text textAlign="center" whiteSpace="nowrap" overflow="hidden">
            {textArr[count]}
          </Text>

          {/* Right Arrow Close to Text */}
          <IconButton
            onClick={handleIncrement}
            fontSize="20px"
            variant="ghost"
            colorScheme="whiteAlpha"
            _hover={{ bg: "gray.700" }}
            icon={<IoIosArrowForward />}
            aria-label="Next"
          />
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
