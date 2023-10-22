import React, { useState } from 'react';
import AuthService from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const defaultTheme = createTheme();

export default function SignUp() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [nameError, setNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
    setNameError(name.length < 1 || name.length > 30);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError(!(email.includes('.') && email.includes('@')));
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError(password.length < 8);
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   await axios
  //     .post('http://localhost:4000/api/v1/register', inputData)
  //     .then((res) => {
  //       // console.log(res);
  //       // console.log(res.status);
  //       if (res.status == '201') {
  //         navigate('/signin');
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // console.log(allowed);
  // };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await AuthService.signup(email, password).then(
        (response) => {
          // check for token and user already exists with 200
          //   console.log("Sign up successfully", response);
          navigate('/');
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSignup}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  value={name}
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  error={nameError}
                  helperText={
                    nameError
                      ? 'Name length should not be more than 30 charachters'
                      : null
                  }
                  onChange={handleName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={email}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={emailError}
                  helperText={emailError ? 'Enter valid Email' : null}
                  onChange={handleEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={passwordError}
                  helperText={
                    passwordError
                      ? 'Password must have atleast 8 charachters'
                      : null
                  }
                  onChange={handlePassword}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin" variant="body2" style={{ color: '#1976d2' }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
