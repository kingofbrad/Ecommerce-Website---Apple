import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillApple } from "react-icons/ai";

const Navbar = () => {
  return (
    <Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"40px"}
        fontSize={"17px"}
        bg={"rgba(0,0,0,0.8)"}
        backdropBlur={"20px"}
        backdropSaturate={"180%"}
        h={"48px"}
        MaxH={"44px"}
      >
        
        <DeskTopNav />
      </Box>
    </Box>
  );
};

export default Navbar;

const DeskTopNav = () => {
  return (
    <Box display={"flex"} gap={"40px"}>
      <ul className="nav">
        <li className="navitem">
          <a href="" className="navlink">
            <Icon as={AiFillApple} w={"6"} />
          </a>
        </li>
        <li className="navitem">
          <a href="" className="navlink">
            Store
          </a>
        </li>
        <li className="navitem">
          <a href="" className="navlink">
            Mac
          </a>
        </li>
        <li className="navitem">
          <a href="" className="navlink">
            iPad
          </a>
        </li>
        <li className="navitem">
          <a href="" className="navlink">
            iPhone
          </a>
        </li>
        <li className="navitem">
          <a href="" className="navlink">
            Watch
          </a>
        </li>
        <li className="navitem">
          <a href="" className="navlink">
            AirPods
          </a>
        </li>
        <li className="navitem">
          <a href="" className="navlink">
            TV &#38; Home
          </a>
        </li>
        <li className="navitem">
          <a href="" className="navlink">
            Only on Apple
          </a>
        </li>
        <li className="navitem">
          <a href="" className="navlink">
            Acessories
          </a>
        </li>
        <li className="navitem">
          <a href="" className="navlink">
            Support
          </a>
        </li>
        <li className="navitem">
          <a href="" className="navlink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="44"
              viewBox="0 0 13 44"
            >
              <rect width="15" height="44" fill="none" />
              <path
                d="M13.98,27.343l-3.5-3.5a5.436,5.436,0,1,0-.778.777l3.5,3.5a.55.55,0,1,0,.778-.778ZM1.959,20.418a4.319,4.319,0,1,1,4.319,4.32A4.323,4.323,0,0,1,1.959,20.418Z"
                fill="#fff"
              />
              <rect y="44" width="15" height="44" fill="none" />
              <path
                d="M13.98,71.593l-3.5-3.5a5.436,5.436,0,1,0-.778.777l3.5,3.5a.55.55,0,1,0,.778-.778ZM1.959,64.668a4.319,4.319,0,1,1,4.319,4.32A4.323,4.323,0,0,1,1.959,64.668Z"
                fill="#86868b"
              />
            </svg>
          </a>
        </li>
        <li className="navitem">
          <a href="" className="navlink">
            <svg
              height="44"
              viewBox="0 0 13 44"
              width="13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="m0 44h13v-44h-13z" />
                <path
                  d="m12 25.9c0 .6-.5 1.1-1.1 1.1h-8.8c-.6 0-1.1-.5-1.1-1.1v-7.9c0-.5.5-1 1.1-1h8.9c.6 0 1.1.5 1.1 1.1v7.8zm-5.5-11.9c1.2 0 2.1.9 2.3 2h-4.6c.2-1.1 1.1-2 2.3-2zm4.4 2h-1.1c-.2-1.7-1.6-3-3.3-3s-3.1 1.3-3.3 3h-1.1c-1.2 0-2.1.9-2.1 2.1v7.9c0 1.1.9 2 2.1 2h8.9c1.1 0 2.1-.9 2.1-2.1v-7.9c-.1-1.1-1-2-2.2-2z"
                  fill="#fff"
                />
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </Box>
  );
};
