import React from 'react';
import ProductCard from '../Components/ProductCard';
import { Box, Container } from '@mui/material';
import machinery from '../assets/machinery.png';

function Machinery() {
  const productList =
    'http://localhost:4000/api/v1/products?category=Machinery';

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
        <ProductCard link={productList} img={machinery} />
      </Box>
    </Container>
  );
}

export default Machinery;
