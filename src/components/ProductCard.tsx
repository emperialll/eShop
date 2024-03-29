import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Product } from "../hooks/useProducts";
import ProductRating from "./ProductRating";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface Props {
  product: Product;
}
const ProductCard = ({ product }: Props) => {
  const { increaseCartQuantity } = useShoppingCart();
  return (
    <Card>
      <Box height="300px" position="relative">
        <Image
          src={product.image}
          alt={product.title}
          objectFit="cover"
          height="100%"
          width="100%"
        />
      </Box>
      <CardBody>
        <Flex direction="column" justifyContent="space-between" height="100%">
          <Box>
            <Heading fontSize={"xl"}>{product.title}</Heading>
          </Box>
          <HStack justifyContent={"space-between"}>
            <Text fontSize={"lg"}>USD {product.price}</Text>
            <ProductRating rate={product.rating.rate} />
          </HStack>
          <Box>
            <Flex justifyContent="center">
              <Button
                colorScheme="teal"
                variant="outline"
                onClick={() => increaseCartQuantity(product.id)}
              >
                Add to cart
              </Button>
            </Flex>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
