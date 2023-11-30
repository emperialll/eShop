import {
  Box,
  Card,
  CardBody,
  Flex,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const ProductCardSkeleton = () => {
  return (
    <Card>
      <Box height="300px" position="relative">
        <Skeleton width="450px" />
      </Box>
      <CardBody>
        <Flex direction="column" justifyContent="space-between" height="100%">
          <Box>
            <SkeletonText />
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProductCardSkeleton;
