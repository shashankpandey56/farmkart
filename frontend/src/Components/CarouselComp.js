import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Button, Typography } from "@mui/material";
import hero from "../assets/hero.png";
import slider from "../assets/slider.png";
import { Link } from "react-router-dom";

function CarouselComp() {
  return (
    <Carousel>
      <Box>
        <Box
          sx={{
            position: "absolute",
            left: "5rem",
            top: "5rem",
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            style={{ fontFamily: " Pacifico,cursive", color: "#518432" }}
          >
            Get 40% off
          </Typography>
          <Typography component="h2" variant="h3">
            Organic Fertilizers
          </Typography>
        </Box>
        <Box>
          <img width="100%" src={hero} alt="Plant" />
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Typography
            component="h1"
            variant="h4"
            style={{ fontFamily: " Pacifico,cursive", color: "#518432" }}
          >
            Get 40% off
          </Typography>
          <Typography component="h2" variant="h3">
            Organic Fertilizers
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            position: "absolute",
            left: "5rem",
            top: "5rem",
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            style={{ fontFamily: " Pacifico,cursive", color: "#518432" }}
          >
            Get 30% off
          </Typography>
          <Typography component="h2" variant="h3">
            Organic Compost
          </Typography>
        </Box>
        <Box>
          <img width="100%" src={slider} alt="Plant" />
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Typography
            component="h1"
            variant="h4"
            style={{ fontFamily: " Pacifico,cursive", color: "#518432" }}
          >
            Get 30% off
          </Typography>
          <Typography component="h2" variant="h3">
            Organic Compost
          </Typography>
        </Box>
      </Box>
    </Carousel>
  );
}

export default CarouselComp;
