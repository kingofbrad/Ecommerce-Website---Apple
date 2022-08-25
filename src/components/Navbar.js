import {
  Box,
  Flex,
  Icon,
  Text,
  Image,
  Link,
  MenuButton,
  Menu,
  Button,
  MenuList,
  MenuItem,
  MenuDivider,
  PopoverArrow,
} from "@chakra-ui/react";
import React from "react";
import {
  AppleBasketIcon,
  AppleLogoIcon,
  AppleSearchIcon,
  DropDownText,
} from "./Apple_Components";
import { DropDownList, MainNavList } from "../data/data.db";
import BasketIcon from "../assets/Apple_Menu_Icons/BasketIcon.svg";

const Navbar = () => {
  return (
    <Box bg={"white"} position={"relative"}>
      <Box
        position={"fixed"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        fontSize={"11.5px"}
        bg={"rgba(0,0,0,0.86)"}
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
      <Box
        display={"flex"}
        width={"980px"}
        m={"0 -8px"}
        userSelect={"none"}
        cursor={"default"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <AppleLogoIcon />
        {MainNavList &&
          MainNavList.map((data) => {
            return <Text pl={"17px"}>{data.title}</Text>;
          })}
        <AppleSearchIcon />
        {/* <AppleBasketIcon /> */}
        <Menu placement="bottom">
          <MenuButton
            as={Button}
            bg={"none"}
            _hover={{ background: "none" }}
            _focus={{ background: "none" }}
            _active={{ background: "none" }}
          >
            <AppleBasketIcon />
          </MenuButton>

          <MenuList
            width={"286px"}
            borderRadius={"20px"}
            border={"2px solid #d2d2d7"}
            bg={"white"}
            color={"black"}
          >
            <div className="MenuArrow" />
            <MenuItem display={"block"}>
              <Text
                textAlign={"center"}
                fontSize={"14px"}
                color={"#6e6e73"}
                p={"35px 0 23px"}
              >
                Your Bag is empty
              </Text>
            </MenuItem>
            {DropDownList &&
              DropDownList.map((data) => {
                return (
                  <MenuItem h={"20px"} m={"12px 0 0"} display={""}>
                    <Box m={"0"} p={"0"}>
                      <Box
                        borderTop={"1px solid #d2d2d7"}
                        position={"relative"}
                        paddingTop={"10px"}
                        whiteSpace={"nowrap"}
                        overflow={"hidden"}
                        textOverflow={"ellipsis"}
                        display={"flex"}
                      >
                        <Flex
                          className="bagview-nav-link bagview-icons"
                          fontSize={"14px"}
                        >
                          {data.icon}
                          <Box _hover={{ borderBottom: "1px solid #06c" }}>
                            {data.title}
                          </Box>
                        </Flex>
                      </Box>
                    </Box>
                  </MenuItem>
                );
              })}
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export const CharityBar = () => {
  return (
    <>
      <Box w={"100%"} h={"60px"} color={"white"} bg={"blackAlpha.900"}>
        <Box
          gap={"15px"}
          display={"flex"}
          pos={"relative"}
          alignItems={"center"}
          justifyContent={"center"}
          top={"12px"}
        >
          <Image
            src="https://www.apple.com/v/home/aq/images/logos/unicef-relief-fund/unicef_logo_light__dcs7ftrtc88y_large.png"
            alt="https://www.apple.com/v/home/aq/images/logos/unicef-relief-fund/unicef_logo_light__dcs7ftrtc88y_large.png"
            class="transparent"
          />
          <Link color={"blue.400"} fontSize={"14px"}>
            Donate to support families affected by the was in Ukraine &#8599;
          </Link>
        </Box>
      </Box>
    </>
  );
};
