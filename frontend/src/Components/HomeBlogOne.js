import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import plant from '../assets/plant.png';

function HomeBlogOne() {
  return (
    <Grid item xs={12} lg={6}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            <Box>
              <img width="222px" src={plant} alt="Plant" />
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
                June 6, 2023
              </Typography>
              <Typography variant="subtitle2" component="h6">
                Fish Farming
              </Typography>
              <Typography variant="body2" component="p">
                Fish meal serves as a vital protein-rich feed supplement for
                fish and crustaceans in aquaculture. It is a concentrated source
                of essential nutrients, amino acids, vitamins, and minerals that
                promote healthy growth in animals. The industry’s sustainability
                is of utmost importance to ensure the well-being of fish
                farmers, preserve marine ecosystems, and meet the growing demand
                for quality fish products.
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

export default HomeBlogOne;
