import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import ProductCardContainer from "./ProductCardContainer";

const ProductGrid = () => {
  const { products, error, isLoading } = useProducts();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing="10px"
        padding="20px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <ProductCardContainer>
              <ProductCardSkeleton key={skeleton} />
            </ProductCardContainer>
          ))}
        {products.map((product) => (
          <ProductCardContainer>
            <ProductCard key={product.id} product={product} />
          </ProductCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductGrid;
