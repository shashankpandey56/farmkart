import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import bg from '../assets/bg1.jpg';
import prof from '../assets/prof.png';

import { useSelector } from 'react-redux';

function Profile() {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    isLoggedIn && (
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: 'left',
          }}
        >
          <Box
            sx={{
              width: '100%',
            }}
          >
            <img width="100%" src={bg} alt="Background" />
          </Box>
          <Box
            sx={{
              width: '10%',
              marginX: 'auto',
            }}
          >
            <img width="100%" src={prof} alt="Logo" />
          </Box>
        </Box>

        <Box>
          <Box sx={{ margin: '1rem' }}>
            <Typography
              variant="body1"
              component="span"
              sx={{ fontWeight: '400' }}
            >
              Name: {user.user.name}
            </Typography>
          </Box>

          <Box sx={{ margin: '1rem' }}>
            <Typography
              variant="body1"
              component="span"
              sx={{ fontWeight: '400' }}
            >
              Email: {user.user.email}
            </Typography>
          </Box>

          <Box sx={{ margin: '1rem' }}>
            <Typography
              variant="body1"
              component="span"
              sx={{ fontWeight: '400' }}
            >
              Role: {user.user.role}
            </Typography>
          </Box>
        </Box>

        {/* <Button
        variant="contained"
        onClick={() => {
          setChanged(!changed);
        }}
      >
        {changed ? 'Save Profile' : 'Update Profile'}
      </Button> */}
      </Container>
    )
  );
}

export default Profile;
