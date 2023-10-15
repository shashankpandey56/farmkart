import { Button, Box, Container, Typography } from "@mui/material";
import plant from "../assets/plant.png";
import { Link } from "react-router-dom";

function Editorial() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.75rem",
        p: "2rem",
      }}
    >
      <Box
        sx={{
          width: "75px",
          height: "75px",
        }}
      >
        <img width="100%" src={plant} alt="Plant" />
      </Box>
      <Typography variant="h6" component="h6">
        HOW GREENKART HELP YOU TO GROW YOUR CROPS
      </Typography>
      <Typography variant="body2" component="p">
        Welcome to GreenKart, the ultimate online platform for farmers who want
        to grow their crops with the best products and solutions available in
        the market. At GreenKart, we understand the challenges and opportunities
        that farmers face every day, and we are committed to providing them with
        the most reliable, affordable, and effective products and solutions for
        their farming needs.
      </Typography>

      <Button variant="contained" color="success">
        <Link to="/about" style={{ textDecoration: "none", color: "#fff" }}>
          Read More
        </Link>
      </Button>
    </Container>
  );
}

export default Editorial;
