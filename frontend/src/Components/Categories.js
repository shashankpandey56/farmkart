import { Container, Typography, Divider, Grid, Box } from "@mui/material";
import React from "react";
import CategoryCard from "./CategoryCard";
import fungicides from "../assets/fungicide.png";
import herbicides from "../assets/herbicides.png";
import insecticides from "../assets/insecticides.png";
import machinery from "../assets/machinery.png";

function Categories() {
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
          <CategoryCard
            type="FUNGICIDES"
            send="fungicides"
            image={fungicides}
          />
          <CategoryCard
            type="HERBICIDES"
            send="herbicides"
            image={herbicides}
          />
          <CategoryCard
            type="INSECTICIDES"
            send="insecticides"
            image={insecticides}
          />
          <CategoryCard type="MACHINERY" send="machinery" image={machinery} />
        </Grid>
      </Container>
    </Box>
  );
}

export default Categories;
