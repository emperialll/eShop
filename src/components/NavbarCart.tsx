import { CiShoppingBasket } from "react-icons/ci";
import { HStack, Text } from "@chakra-ui/react";

const NavbarCart = () => {
  return (
    <HStack>
      <CiShoppingBasket fontSize={25} />
      <Text fontSize="sm" fontWeight="bold" color="red.500">
        0
      </Text>
    </HStack>
  );
};

export default NavbarCart;
