import {
  Box,
  Flex,
  Img,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const handleNavigation = useNavigate();

  const TextCreate = ({ text, fontWeight, category }) => {
    return (
      <Text
        fontFamily="Georgia, serif"
        _hover={{ textDecoration: "underline" }}
        fontWeight={fontWeight}
        fontSize={"14px"}
        onClick={() => handleClick(category)}
      >
        {text}
      </Text>
    );
  };

  const handleClick = (elem) => {
    const category = elem;
    handleNavigation(`/products`);
    handleNavigation(
      `/products?category=${category.replace(" & ", "%20%26%20")}`
    );
    onclose();
  };

  return (
    <Box>
      <Flex
        display={["none", "none", "none", "flex"]}
        gap={"40px"}
        justifyContent={"center"}
        bgColor={"white"}
        p={"50px"}
        pt={"7px"}
        pb={"10px"}
      >
        {/* Bluefly Categories */}
        <Text
          color={"black"}
          cursor={"pointer"}
          fontWeight={600}
          fontSize={"14px"}
          fontFamily="Georgia, serif"
          onClick={() => handleNavigation("/products?category=Skincare")}
        >
          WOMEN MEN
        </Text>

        <Popover trigger="hover">
          <PopoverTrigger>
            <Text
              bgColor={"white"}
              color={"black"}
              cursor={"pointer"}
              fontWeight={600}
              fontSize={"14px"}
              fontFamily="Georgia, serif"
              onClick={() => handleNavigation("/products?category=Hair")}
            >
              DESIGNERS
            </Text>
          </PopoverTrigger>
          <PopoverContent w={"100vw"}>
            <PopoverArrow />
            <PopoverBody>
              <Text fontFamily="Georgia, serif">Designer dropdown content placeholder</Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover trigger="hover">
          <PopoverTrigger>
            <Text
              bgColor={"white"}
              color={"black"}
              cursor={"pointer"}
              fontWeight={600}
              fontSize={"14px"}
              fontFamily="Georgia, serif"
              onClick={() => handleNavigation("/products?category=Makeup")}
            >
              CLOTHING
            </Text>
          </PopoverTrigger>
          <PopoverContent w={"100vw"}>
            <PopoverArrow />
            <PopoverBody>
              <Text fontFamily="Georgia, serif">Clothing dropdown content placeholder</Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover trigger="hover">
          <PopoverTrigger>
            <Text
              bgColor={"white"}
              color={"black"}
              cursor={"pointer"}
              fontWeight={600}
              fontSize={"14px"}
              fontFamily="Georgia, serif"
              onClick={() => handleNavigation("/products")}
            >
              SHOES
            </Text>
          </PopoverTrigger>
          <PopoverContent w={"100vw"}>
            <PopoverArrow />
            <PopoverBody>
              <Text fontFamily="Georgia, serif">Shoes dropdown content placeholder</Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover trigger="hover">
          <PopoverTrigger>
            <Text
              bgColor={"white"}
              color={"black"}
              cursor={"pointer"}
              fontWeight={600}
              fontSize={"14px"}
              fontFamily="Georgia, serif"
              onClick={() => handleNavigation("/products")}
            >
              HANDBAGS
            </Text>
          </PopoverTrigger>
          <PopoverContent w={"100vw"}>
            <PopoverArrow />
            <PopoverBody>
              <Text fontFamily="Georgia, serif">Handbags dropdown content placeholder</Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover trigger="hover">
          <PopoverTrigger>
            <Text
              bgColor={"white"}
              color={"black"}
              cursor={"pointer"}
              fontWeight={600}
              fontSize={"14px"}
              fontFamily="Georgia, serif"
              onClick={() => handleNavigation("/products")}
            >
              SUNGLASSES
            </Text>
          </PopoverTrigger>
          <PopoverContent w={"100vw"}>
            <PopoverArrow />
            <PopoverBody>
              <Text fontFamily="Georgia, serif">Sunglasses dropdown content placeholder</Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover trigger="hover">
          <PopoverTrigger>
            <Text
              bgColor={"white"}
              color={"black"}
              cursor={"pointer"}
              fontWeight={600}
              fontSize={"14px"}
              fontFamily="Georgia, serif"
              onClick={() => handleNavigation("/products")}
            >
              JEWELRY
            </Text>
          </PopoverTrigger>
          <PopoverContent w={"100vw"}>
            <PopoverArrow />
            <PopoverBody>
              <Text fontFamily="Georgia, serif">Jewelry dropdown content placeholder</Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover trigger="hover">
          <PopoverTrigger>
            <Text
              bgColor={"white"}
              color={"black"}
              cursor={"pointer"}
              fontWeight={600}
              fontSize={"14px"}
              fontFamily="Georgia, serif"
              onClick={() => handleNavigation("/products?category=Tools&Brushes")}
            >
              ACCESSORIES
            </Text>
          </PopoverTrigger>
          <PopoverContent w={"100vw"}>
            <PopoverArrow />
            <PopoverBody>
              <Text fontFamily="Georgia, serif">Accessories dropdown content placeholder</Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover trigger="hover">
          <PopoverTrigger>
            <Text
              bgColor={"white"}
              color={"black"}
              cursor={"pointer"}
              fontWeight={600}
              fontSize={"14px"}
              fontFamily="Georgia, serif"
              onClick={() => handleNavigation("/products")}
            >
              UNDER $50
            </Text>
          </PopoverTrigger>
          <PopoverContent w={"100vw"}>
            <PopoverArrow />
            <PopoverBody>
              <Text fontFamily="Georgia, serif">Under $50 dropdown content placeholder</Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover trigger="hover">
          <PopoverTrigger>
            <Text
              bgColor={"white"}
              color={"black"}
              cursor={"pointer"}
              fontWeight={600}
              fontSize={"14px"}
              fontFamily="Georgia, serif"
              onClick={() => handleNavigation("/products")}
            >
              CLEARANCE
            </Text>
          </PopoverTrigger>
          <PopoverContent w={"100vw"}>
            <PopoverArrow />
            <PopoverBody>
              <Text fontFamily="Georgia, serif">Clearance dropdown content placeholder</Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </Box>
  );
};

export default Navbar2;
