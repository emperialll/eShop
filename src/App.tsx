import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "hero hero" "aside main" " footer footer"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="hero">Hero</GridItem>
      </Show>
      <Show above="lg">
        <GridItem area="aside">Side</GridItem>
      </Show>
      <GridItem area="main">Main</GridItem>
      <GridItem area="footer">Footer</GridItem>
    </Grid>
  );
}

export default App;
