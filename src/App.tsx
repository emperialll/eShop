import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import ProductGrid from "./components/ProductGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "hero hero" "aside main" " footer footer"`,
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
        <GridItem area="aside">Side</GridItem>
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

export default App;
