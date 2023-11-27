import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const NavbarSearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input borderRadius={20} placeholder="Search eShop..." variant="filled" />
    </InputGroup>
  );
};

export default NavbarSearchInput;
