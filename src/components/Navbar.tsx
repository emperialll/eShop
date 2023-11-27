import { Box, ColorModeContext, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import NavbarCart from "./NavbarCart";
import NavbarSignIn from "./NavbarSignIn";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize="80px"></Image>
      <Box>
        <HStack>
          <NavbarSignIn />
          <NavbarCart />
          <ColorModeSwitch />
        </HStack>
      </Box>
    </HStack>
  );
};

export default Navbar;
