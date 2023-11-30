import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Navbar";
import HeroCarousel from "./HeroCarousel";
import ProductGrid from "./ProductGrid";
import CategoryList from "./CategoryList";

function Home() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "hero hero" "aside main" " footer footer"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      {/* ----******---- NAVBAR ----******---- */}
      <GridItem area="nav">
        <Navbar />
      </GridItem>

      {/* ----******---- HERO SECTION ----******---- */}
      <Show above="lg">
        <GridItem area="hero">
          <HeroCarousel />
        </GridItem>
      </Show>

      {/* ----******---- SIDE MENU ----******---- */}
      <Show above="lg">
        <GridItem area="aside">
          <CategoryList />
        </GridItem>
      </Show>

      {/* ----******---- MAIN ----******---- */}
      <GridItem area="main">
        <ProductGrid />
      </GridItem>

      {/* ----******---- FOOTER ----******---- */}
      <GridItem area="footer">Footer</GridItem>
    </Grid>
  );
}

export default Home;
