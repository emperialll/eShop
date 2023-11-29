import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Product } from "../hooks/useProducts";

interface Props {
  product: Product;
}
const ProductCard = ({ product }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={product.image}></Image>
      <CardBody>
        <Heading fontSize={"2xl"}>{product.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
