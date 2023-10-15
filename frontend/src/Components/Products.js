import { Box, Button, Grid } from "@mui/material";
import React from "react";
import fungicide from "../assets/fungicide.png";

function Products() {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "200px",
            height: "200px",
            transition: "all 0.5s ease 0s",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
            borderRadius: "1rem",
          }}
        >
          <img width="90%" src={fungicide} alt="Fungicide" />
        </Box>
        <Box sx={{ mt: "-0.75rem", width: "100%" }}>
          <Button variant="contained" width="90%" color="success">
            Fungicide
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

export default Products;
