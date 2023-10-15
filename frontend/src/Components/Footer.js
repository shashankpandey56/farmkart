import { Container, Typography, Box, Grid, Divider } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', marginTop: '3rem' }}>
      <Container maxWidth="lg" sx={{ padding: '2rem' }}>
        <Divider />
        <Grid container spacing={2} sx={{ padding: '2rem', textAlign: 'left' }}>
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="h6">Contact Us</Typography>
            <Box>
              <Typography variant="subtitle1">
                Address: X Colony, Mars
              </Typography>
              <Typography variant="subtitle1">Phone: 123456789</Typography>
              <Typography variant="subtitle1">
                Email: support@greenkart.com
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="h6">Products</Typography>
            <Box>
              <Typography variant="subtitle1">
                <Link
                  to="/fungicides"
                  style={{ textDecoration: 'none', color: '#000' }}
                >
                  Fungicides
                </Link>
              </Typography>
              <Typography variant="subtitle1">
                <Link
                  to="/herbicides"
                  style={{ textDecoration: 'none', color: '#000' }}
                >
                  Herbicides
                </Link>
              </Typography>
              <Typography variant="subtitle1">
                <Link
                  to="/insecticides"
                  style={{ textDecoration: 'none', color: '#000' }}
                >
                  Insecticides
                </Link>
              </Typography>
              <Typography variant="subtitle1">
                <Link
                  to="/machinery"
                  style={{ textDecoration: 'none', color: '#000' }}
                >
                  Machinery
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="h6">Service</Typography>
            <Box>
              <Typography variant="subtitle1">
                <Link
                  to="/about"
                  style={{ textDecoration: 'none', color: '#000' }}
                >
                  About Us
                </Link>
              </Typography>
              <Typography variant="subtitle1">
                <Link
                  to="/privacy"
                  style={{ textDecoration: 'none', color: '#000' }}
                >
                  Privacy & Policy
                </Link>{' '}
              </Typography>
              <Typography variant="subtitle1">
                <Link
                  to="/tandcs"
                  style={{ textDecoration: 'none', color: '#000' }}
                >
                  Terms & Conditions
                </Link>{' '}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
