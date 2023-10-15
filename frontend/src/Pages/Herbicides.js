import React from 'react';
import ProductCard from '../Components/ProductCard';
import { Box, Container } from '@mui/material';
import herbicides from '../assets/herbicides.png';

function Herbicides() {
  const productList =
    'http://localhost:4000/api/v1/products?category=Herbicides';
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          marginTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '5rem',
          justifyContent: 'space-between',
        }}
      >
        <ProductCard link={productList} img={herbicides} />
      </Box>
    </Container>
  );
}

export default Herbicides;
