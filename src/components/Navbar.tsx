import { Box, HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import NavbarCart from "./NavbarCart";
import NavbarSignIn from "./NavbarSignIn";
import NavbarLogo from "./NavbarLogo";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <NavbarLogo />
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
