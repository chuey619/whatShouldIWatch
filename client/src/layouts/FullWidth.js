import React from "react";
import { Grid } from "@chakra-ui/core";
import { Navbar, Footer } from "../components";

function FullWidth({ children }) {
  return (
    <Grid
      gridTemplateAreas={`
        "nav"
        "main"
        "footer"
      `}
      gridTemplateRows="[top] auto [main-start] 75vh [main-end] 15vh [bottom]"
      height="100vh"
    >
      <Navbar />
      {children}
      <Footer />
    </Grid>
  );
}

export default FullWidth;
