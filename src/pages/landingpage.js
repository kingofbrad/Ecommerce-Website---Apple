import { Heading, Box } from "@chakra-ui/react";
import React from "react";
import Navbar, { CharityBar } from "../components/Navbar";

export const Landingpage = () => {
  return (
    <>
      <Box name={'Home'} bg={"white"} color={"black"} h={"100vh"} pt={"44px"}>
        <CharityBar/>
      </Box>
    </>
  );
};
