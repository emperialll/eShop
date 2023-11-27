import { Box, HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import NavbarCart from "./NavbarCart";
import NavbarSignIn from "./NavbarSignIn";
import NavbarLogo from "./NavbarLogo";
import NavbarSearchInput from "./NavbarSearchInput";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <NavbarLogo />
      <NavbarSearchInput />
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
