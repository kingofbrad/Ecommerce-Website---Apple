import { Heading, Box, Image } from "@chakra-ui/react";
import React from "react";
import { AppleBaskIcon2 } from "../components/Apple_Components";
import Navbar, { CharityBar } from "../components/Navbar";
import { DropDownList } from "../data/data.db";
import BasketIcon from "../assets/Apple_Menu_Icons/BasketIcon.svg";

export const Landingpage = () => {
  return (
    <>
      <Box name={'Home'} bg={"white"} color={"black"} h={"100vh"} pt={"44px"}>
        <CharityBar/>
      </Box>
    </>
  );
};
