import { HStack, List, ListItem, Text } from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { GiBigDiamondRing } from "react-icons/gi";
import { TbTie } from "react-icons/tb";
import { PiDressBold } from "react-icons/pi";
import { FaReact } from "react-icons/fa";

const CategoryList = () => {
  const { categories } = useCategories();

  const renderIcon = (category: string) => {
    switch (category) {
      case "electronics":
        return <PiTelevisionSimpleBold fontSize="25px" />;
      case "jewelery":
        return <GiBigDiamondRing fontSize="25px" />;
      case "men's clothing":
        return <TbTie fontSize="25px" />;
      case "women's clothing":
        return <PiDressBold fontSize="25px" />;
      default:
        return <FaReact fontSize="25px" />;
    }
  };

  return (
    <List padding="15px">
      {categories.map((category) => (
        <ListItem key={category} paddingY="5px">
          <HStack justifyContent={"space-between"}>
            {renderIcon(category)}
            <Text fontSize="lg" textAlign="left" width="100%">
              {category}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
