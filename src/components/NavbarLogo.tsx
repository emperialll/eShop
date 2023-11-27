import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const NavbarLogo = () => {
  return (
    <Box>
      <HStack>
        <Image src={logo} boxSize="80px"></Image>
        <Text margin="0" fontSize="larger" fontWeight="bold">
          eSHOP
        </Text>
      </HStack>
    </Box>
  );
};

export default NavbarLogo;
