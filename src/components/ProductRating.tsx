import { Badge } from "@chakra-ui/react";

interface Props {
  rate: number;
}

const ProductRating = ({ rate }: Props) => {
  let color = rate > 2.5 ? "green" : rate > 1 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} fontSize="14px" borderRadius="5px">
      {rate}
    </Badge>
  );
};

export default ProductRating;
