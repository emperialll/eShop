import { CiShoppingBasket } from "react-icons/ci";
import { HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavbarCart = () => {
  return (
    <Link to="/checkout">
      <HStack>
        <CiShoppingBasket fontSize={25} />
        <Text fontSize="sm" fontWeight="bold" color="red.500">
          0
        </Text>
      </HStack>
    </Link>
  );
};

export default NavbarCart;
