import {
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

function CheckoutProductCard() {
  return (
    <Card
      direction={{ base: "column", lg: "column" }}
      overflow="hidden"
      variant="outline"
    >
      <HStack>
        <Image
          padding="5px"
          borderRadius="10px"
          objectFit="cover"
          maxW={{ base: "100%", lg: "200px", sm: "200px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <CardBody>
          <Heading size="md">The perfect latte</Heading>
          <HStack justifyContent="space-between">
            <Text py="2">
              Caffè latte is a coffee beverage of Italian origin made with
              espresso and steamed milk.
            </Text>
            <Button size="sm" variant="outline" colorScheme="red">
              Remove
            </Button>
          </HStack>
        </CardBody>
      </HStack>
    </Card>
  );
}

export default CheckoutProductCard;
