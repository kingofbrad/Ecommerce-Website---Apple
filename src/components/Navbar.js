import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import {AiFillApple} from 'react-icons/ai'

const Navbar = () => {
  return (
    <Box>
      <Box display={"flex"} position={'fixed'} alignItems={'center'} justifyContent={'center'} gap={'40px'} fontSize={'15px'}>
        <Icon as={AiFillApple} />
        <Text>Store</Text>
        <Text>Mac</Text>
        <Text>iPad</Text>
        <Text>iPhone</Text>
        <Text>Watch</Text>
        <Text>AirPods</Text>
        <Text>TV &#38; Home</Text>
        <Text>Only on Apple</Text>
        <Text>Accessories</Text>
        <Text>Support</Text>
      </Box>
    </Box>
  );
};

export default Navbar;
