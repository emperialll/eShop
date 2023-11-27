import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Text>Imperial Shop</Text>
    </HStack>
  );
};

export default Navbar;
