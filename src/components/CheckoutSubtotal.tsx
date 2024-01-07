import { Button, Checkbox, Heading, Text } from "@chakra-ui/react";
import { Stack } from "react-bootstrap";

function CheckoutSubtotal() {
  return (
    <Stack>
      <Heading size="md">Subtotal (0 items ): $0.00</Heading>
      <Checkbox size="sm">This order contains a gift.</Checkbox>
      <Button colorScheme="yellow" variant="solid" marginTop="40px">
        Checkout
      </Button>
    </Stack>
  );
}

export default CheckoutSubtotal;
