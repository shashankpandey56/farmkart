import { Container, Typography, Divider, Grid } from '@mui/material';
import React from 'react';
import HomeBlog from './HomeBlog';
import HomeBlogOne from './HomeBlogOne';

function HomeBlogComp() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: '2rem 0',
      }}
    >
      <Typography
        variant="h6"
        component="h6"
        sx={{ textAlign: { xs: 'center', lg: 'left' } }}
      >
        LATEST BLOGS
      </Typography>
      <Divider />

      <Grid
        container
        spacing={2}
        sx={{
          paddingTop: '2rem',
        }}
      >
        <HomeBlog />
        <HomeBlogOne />
      </Grid>
    </Container>
  );
}

export default HomeBlogComp;
