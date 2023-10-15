import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';

const defaultTheme = createTheme();

export default function ForgotPassword() {
  const [allowed, setAllowed] = React.useState(false);
  const [inputData, setInputData] = React.useState({
    email: '',
  });
  const [emailError, setEmailError] = React.useState(false);

  const handleEmail = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    setEmailError(
      !(inputData.email.includes('.') && inputData.email.includes('@'))
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post('http://localhost:4000/api/v1/password/forgot', inputData)
      .then((res) => {
        // console.log(res);
        setAllowed(res.data.success);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(allowed);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Forgot Password
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Typography variant="body2">
              Enter the email address associated with your account and we'll
              send you a link to reset your password
            </Typography>
            <TextField
              required
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              value={inputData.email}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              error={emailError}
              helperText={emailError ? 'Enter valid Email' : null}
              onChange={handleEmail}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2 }}
            >
              {allowed ? (
                <Link
                  to="/signin"
                  style={{ textDecoration: 'none', color: '#fff' }}
                >
                  Continue
                </Link>
              ) : (
                'Continue'
              )}
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/signup" variant="body2" style={{ color: '#1976d2' }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
