import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import fungicide from '../assets/fungicide.png';

function HomeBlog() {
  return (
    <Grid item xs={12} lg={6}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            <Box>
              <img width="222px" src={fungicide} alt="Plant" />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            lg={7}
            sx={{ textAlign: { xs: 'center', lg: 'left' } }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Typography variant="caption" component="p">
                January 1, 2023
              </Typography>
              <Typography variant="subtitle2" component="h6">
                AGRI 4.0: FUTURE OF INDIAN AGRICULTURE
              </Typography>
              <Typography variant="body2" component="p">
                Agriculture 4.0 is a considerably advanced version of precision
                farming methods. The idea of revolution in agriculture involves
                the use of the Internet of Things (IoT), big data, artificial
                intelligence, and robotics to accelerate and improve the
                efficiency of activities throughout the entire production chain.
              </Typography>
              <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
                <Button
                  variant="outlined"
                  color="success"
                  sx={{
                    width: 200,
                    paddingY: 1,
                    paddingX: 2,
                  }}
                >
                  <Link
                    to="/blogs"
                    style={{ textDecoration: 'none', color: 'green' }}
                  >
                    {' '}
                    Read More
                  </Link>
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default HomeBlog;

// Add code for next and previous once blogs available
// https://codesandbox.io/s/testimonial-silder-8y5d7?file=/src/Components/NextBtn.jsx
