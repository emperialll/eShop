import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Navbar";
import CheckoutProductCard from "./CheckoutProductCard";

const Checkout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer" "checkout"`,
        lg: `"nav nav" "banner banner" "main checkout" "footer footer"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "70% 1fr",
      }}
    >
      {/* ----******---- NAVBAR ----******---- */}
      <GridItem area="nav">
        <Navbar />
      </GridItem>

      {/* ----******---- HERO SECTION ----******---- */}
      <Show above="lg">
        <GridItem area="banner">Banner</GridItem>
      </Show>

      {/* ----******---- MAIN ----******---- */}
      <GridItem area="main" padding="10px">
        <CheckoutProductCard />
      </GridItem>

      {/* ----******---- Chcekout Section ----******---- */}
      <GridItem area="checkout">Checkout Summary</GridItem>

      {/* ----******---- FOOTER ----******---- */}
      <GridItem area="footer">Footer</GridItem>
    </Grid>
  );
};

export default Checkout;
