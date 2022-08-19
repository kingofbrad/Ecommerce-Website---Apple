import { Box, Flex, Icon, Text, Image, Link } from "@chakra-ui/react";
import React from "react";
import {
  AppleBasketIcon,
  AppleLogoIcon,
  AppleSearchIcon,
} from "./Apple_Components";

const Navbar = () => {
  return (
    <Box bg={"white"} position={"relative"}>
      <Box
        position={"fixed"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        fontSize={"12px"}
        bg={"rgba(0,0,0,0.8)"}
        backdropBlur={"20px"}
        backdropSaturate={"180%"}
        w={"100%"}
        zIndex={9999}
      >
        <DeskTopNav />
      </Box>
    </Box>
  );
};

export default Navbar;

const DeskTopNav = () => {
  return (
    <Box Maxw={"980px"}>
      <Box display={"flex"} gap={"41px"} alignItems={"center"}>
        <AppleLogoIcon />
        <Text>Store</Text>
        <Text>Mac</Text>
        <Text>iPad</Text>
        <Text>iPhone</Text>
        <Text>Watch</Text>
        <Text>AirPods</Text>
        <Text>Tv &#38; Home</Text>
        <Text>Only on Apple</Text>
        <Text>Accessories</Text>
        <Text>Support</Text>
        <AppleSearchIcon />
        <AppleBasketIcon />
      </Box>
    </Box>
  );
};

export const CharityBar = () => {
  return (
    <>
      <Box w={"100%"} h={"60px"} color={"white"} bg={"blackAlpha.900"}>
        <Box gap={'15px'} display={'flex'} pos={'relative'} alignItems={'center'} justifyContent={'center'} top={'12px'}>
          <Image
            src="https://www.apple.com/v/home/aq/images/logos/unicef-relief-fund/unicef_logo_light__dcs7ftrtc88y_large.png"
            alt="https://www.apple.com/v/home/aq/images/logos/unicef-relief-fund/unicef_logo_light__dcs7ftrtc88y_large.png"
            class="transparent"
          />
          <Link color={'blue.400'} fontSize={'14px'}>Donate to support families affected by the was in Ukraine &#8599;</Link>
        </Box>
      </Box>
    </>
  );
};
