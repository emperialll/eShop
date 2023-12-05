import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Checkout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "checkout" "footer"`,
        lg: `"nav nav" "banner banner" "main checkout" " footer footer"`,
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
        <GridItem area="banner">Banner</GridItem>
      </Show>

      {/* ----******---- MAIN ----******---- */}
      <GridItem area="main">Order List</GridItem>

      {/* ----******---- Chcekout Section ----******---- */}
      <GridItem area="checkout">Checkout Summary</GridItem>

      {/* ----******---- FOOTER ----******---- */}
      <GridItem area="footer">Footer</GridItem>
    </Grid>
  );
};

export default Checkout;
