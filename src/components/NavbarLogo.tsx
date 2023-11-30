import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <Link to="/">
      <Box>
        <HStack>
          <Image src={logo} boxSize="80px"></Image>
        </HStack>
      </Box>
    </Link>
  );
};

export default NavbarLogo;
