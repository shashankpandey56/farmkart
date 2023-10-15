import { Container, Typography, Divider, Grid, Box } from "@mui/material";
import React from "react";
import Products from "./Products";

function Catagories() {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", paddingY: "2rem" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          component="h6"
          sx={{ textAlign: { xs: "center", lg: "left" } }}
        >
          PRODUCT CATEGORIES
        </Typography>
        <Divider />

        <Grid
          container
          spacing={3}
          sx={{
            paddingTop: "2rem",
          }}
        >
          <Products />
          <Products />
          <Products />
          <Products />
        </Grid>
      </Container>
    </Box>
  );
}

export default Catagories;
