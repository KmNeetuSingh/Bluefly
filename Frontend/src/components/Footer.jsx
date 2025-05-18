import { ArrowForwardIcon } from '@chakra-ui/icons'
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Box, Container, VStack, Text, HStack, Input, InputGroup, InputRightElement, Icon } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <Box pt={10} pb={10} color="white" bg="blackAlpha.800">
            <Container maxW="container.lg" >
                <HStack justify="space-between" align="flex-start" spacing={10}>
                    <VStack >
                        <Text mb={6} cursor="pointer" alignSelf="flex-start" fontWeight="bold" fontSize="14" letterSpacing={2}>BESTSELLERS</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">Ultimate Perfume Box</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">Perfume Gift Set For Men</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">Perfume Gift Set For</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">Women</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">Under Eye Cream for</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">Dark Circles</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">Perfume For Men</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">Perfume For Women</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">Unisex Perfume</Text>
                    </VStack>

                    <VStack >
                        <Text mb={6} cursor="pointer" alignSelf="flex-start" fontWeight="bold" fontSize="14" letterSpacing={2}>INFORMATION</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">Blogs</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">Newsroom</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">Terms & Conditions</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">Privacy Policy</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">Refund and Return</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">Shipping Policy</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">Bulk Order - GST Invoice</Text>
                    </VStack>

                    <VStack >
                        <Text mb={6} cursor="pointer" alignSelf="flex-start" fontWeight="bold" fontSize="14" letterSpacing={2}>SUPPORT</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">About Us</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">Contact Us</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">Order Tracking</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">All Products</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">FAQ</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">Sitemap</Text>
                    </VStack>

                    <VStack >
                        <Text mb={6} cursor="pointer" alignSelf="flex-start" fontWeight="bold" fontSize="14" letterSpacing={2}>CONTACT US</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">Office Location: Plot no.</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">417, Udyog Vihar Phase</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">III, Gurgaon, Haryana,</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">India</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14"></Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">shop@bellavitaorganic.com</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14"></Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">+91-9311732440</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14"></Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">Timing: 10:00 AM to 7:00</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14">PM, Monday to Sunday</Text>
                    </VStack>

                    <VStack >
                        <Text mb={6} cursor="pointer" alignSelf="flex-start" fontWeight="bold" fontSize="14" letterSpacing={2}>EXCLUSIVE</Text>
                        <InputGroup>
                            <Input focusBorderColor='white' variant="flushed" placeholder='Enter amount' />
                            <InputRightElement>
                                <ArrowForwardIcon />
                            </InputRightElement>
                        </InputGroup>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14"></Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14"></Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14"></Text>
                        <Text cursor="pointer" alignSelf="flex-start" fontWeight="500" fontSize="14">Sign up here to get the latest news, updates and special</Text>
                        <Text cursor="pointer" alignSelf="flex-start" fontWeight="500" fontSize="14">offers delivered to your inbox.</Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14"></Text>
                        <Text cursor="pointer" alignSelf="flex-start" _hover={{ textDecoration: "underline" }} fontWeight="500" fontSize="14"></Text>
                        <Text cursor="pointer" alignSelf="flex-start" fontWeight="500" fontSize="14">Plus, you'll be the first to know about our discounts!</Text>
                        <Text cursor="pointer" alignSelf="flex-start" fontWeight="500" fontSize="14">Unisex Perfume</Text>

                        <HStack spacing={8} my={4} alignSelf="flex-start" >
                            <Icon cursor="pointer" borderRadius="50%" _hover={{ bg: "white", color: "blackAlpha.800" }} as={TiSocialFacebook} boxSize={8} />
                            <Icon cursor="pointer" borderRadius="50%" _hover={{ bg: "white", color: "blackAlpha.800" }} as={FaTwitter} boxSize={6} />
                            <Icon cursor="pointer" borderRadius="50%" _hover={{ bg: "white", color: "blackAlpha.800" }} as={FaPinterestP} boxSize={6} />
                            <Icon cursor="pointer" borderRadius="50%" _hover={{ bg: "white", color: "blackAlpha.800" }} as={FaInstagram} boxSize={6} />
                            <Icon cursor="pointer" borderRadius="50%" _hover={{ bg: "white", color: "blackAlpha.800" }} as={FaYoutube} boxSize={6} />
                        </HStack>
                    </VStack>
                </HStack>
                <Text my={6}>MOST SEARCHED KEYWORDS</Text>
                <Text fontSize="12px" fontWeight="500">Perfume
                    Best perfume for men
                    Perfume for men
                    Vitamin C Face Wash
                    Perfume for women
                    Best perfume for women
                    Perfume set for women
                    Gift for Men
                    Face wash for oily skin
                    Body scrub
                    Dark circle
                    Perfume for girls
                    Dark circles removal cream
                    Acne face wash
                    under eye cream
                    Gift sets for women
                    Body wash for women
                    Pocket perfume for men
                    De tan face pack
                    Pimple removal cream
                    Lip scrub
                    Tan removal face pack
                    Face wash for acne
                    Exfoliate scrub
                    Gift set for men
                    Coffee Body Scrub
                    Best long lasting perfume for men
                    Perfumes for men under 500
                    Perfumes for women under 500
                    Perfume gift sets
                    Oud perfume
                    Ceo perfume
                    Under eye cream for dark circles
                    Acne cream
                    Vitamin c cream for face
                    Body lotion for women
                    Long lasting perfume for women
                    Perfume gift pack for her
                    Perfume gift pack for him
                    Charcoal face wash
                    Body wash for men
                    Best shower gel for women
                    Shower Gel for men and Women
                    Body lotion for dry skin
                    Body Lotion for men
                    Body Lotion for women
                    Shower Gel and Perfume Combo
                    Shower Travel Kit
                    Travel Mini Kit
                    Birthday Gift for Women/Girls
                    Wedding Gifts for Couples
                    Gifts for Men Under 500
                    Gifts for Women Under 500
                    Birthday Gift for Men/ Boys
                    Corporate Gifts</Text>

                    <Text mt={10} fontSize="12px" fontWeight="500">© 2025, Bella Vita Organic (IDAM Natural Wellness Pvt. Ltd.).</Text>
            </Container>
        </Box>
    )
}

export default Footer
