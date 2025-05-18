import React from "react";
import { Box, Image, useBreakpointValue } from "@chakra-ui/react";

const Section1 = () => {
  const imageUrl = "https://bellavitaorganic.com/cdn/shop/files/Offer-Banner-2-UPB.webp?v=1727436765&width=1920";

  // Adjust image size based on screen size
  const imageSize = useBreakpointValue({ base: "100%", sm: "100%", md: "100%" });

  return (
    <Box w="100%" p={5}>
      <Image
        src={imageUrl}
        alt="Offer Banner"
        w={imageSize}
        h="auto"
        objectFit="cover"
        borderRadius="md"
      />
    </Box>
  );
};

export default Section1;
