import React from 'react';
import ProductCard from '../Components/ProductCard';
import { Box, Container } from '@mui/material';
import fungicides from '../assets/fungicide.png';

function Fungicides() {
  const productList =
    'http://localhost:4000/api/v1/products?category=Fungicides';

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
        <ProductCard link={productList} img={fungicides} />
      </Box>
    </Container>
  );
}

export default Fungicides;
