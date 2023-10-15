import React from "react";
import MarkAsUnreadOutlinedIcon from "@mui/icons-material/MarkAsUnreadOutlined";
import { Container, Grid, Input, Typography, Button, Box } from "@mui/material";

function NewsLetter() {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg" sx={{ padding: "2rem" }}>
        <Grid
          container
          spacing={2}
          sx={{ justifyItems: "center", alignItems: "center" }}
        >
          <Grid item xs={12} lg={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <MarkAsUnreadOutlinedIcon />
              <Typography variant="h6" component="h6">
                SIGN UP TO NEWSLETTER
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Input
                fullWidth
                label="Email"
                name="email"
                autoComplete="email"
                placeholder="Email"
              />
              <Button variant="contained" color="success">
                SUBSCRIBE
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default NewsLetter;
