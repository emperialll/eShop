import { Text, VStack } from "@chakra-ui/react";

const NavbarSignIn = () => {
  return (
    <VStack marginRight={3}>
      <Text fontSize="sm" lineHeight="1.5" marginBottom="-1">
        Hello Guest
      </Text>
      <Text
        fontSize="sm"
        lineHeight="1.5"
        marginTop="-1"
        marginBottom="0"
        fontWeight="bold"
      >
        Sign In
      </Text>
    </VStack>
  );
};

export default NavbarSignIn;
