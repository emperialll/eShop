import { CiShoppingBasket } from "react-icons/ci";
import { HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const NavbarCart = () => {
  const { cartQuantity } = useShoppingCart();
  return (
    <Link to="/checkout">
      <HStack>
        <CiShoppingBasket fontSize={25} />
        <Text fontSize="sm" fontWeight="bold" color="red.500">
          {cartQuantity}
        </Text>
      </HStack>
    </Link>
  );
};

export default NavbarCart;
