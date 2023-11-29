import {
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Product } from "../hooks/useProducts";
import ProductRating from "./ProductRating";

interface Props {
  product: Product;
}
const ProductCard = ({ product }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={product.image}></Image>
      <CardBody>
        <Heading fontSize={"2xl"}>{product.title}</Heading>
        <Text fontSize={"lg"}>{product.price}</Text>
        <ProductRating rate={product.rating.rate} />
        <Flex justifyContent="center">
          <Button colorScheme="teal" variant="outline">
            Add to cart
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
