import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <IconButton
      colorScheme="blue"
      aria-label="Toggle dark mode"
      onClick={toggleColorMode}
      icon={
        colorMode === "dark" ? (
          <SunIcon w={6} h={6} />
        ) : (
          <MoonIcon w={6} h={6} />
        )
      }
      variant="ghost"
      color={colorMode === "dark" ? "yellow.100" : "blue.700"}
    />
  );
};

export default ColorModeSwitch;
