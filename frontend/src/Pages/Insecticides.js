import React from 'react';
import ProductCard from '../Components/ProductCard';
import { Box, Container } from '@mui/material';
import insecticides from '../assets/insecticides.png';

function Insecticidies() {
  const productList =
    'http://localhost:4000/api/v1/products?category=Insecticides';
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
        <ProductCard link={productList} img={insecticides} />
      </Box>
    </Container>
  );
}

export default Insecticidies;
