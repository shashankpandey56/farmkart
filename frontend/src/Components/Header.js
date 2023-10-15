import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import profile from '../assets/prof.png';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import logo from '../assets/logo.png';
import { useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';

import axios from 'axios';
import useLogin from '../shared/useLogin';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const cartItems = useSelector((store) => store.cart.items);
  const logged = useLogin();

  const user = JSON.parse(sessionStorage.getItem('user'));
  // console.log(user);

  const handleLogOut = async () => {
    axios
      .get('http://localhost:4000/api/v1/logout')
      .then((res) => {
        console.log(res);
        if (logged) {
          JSON.parse(sessionStorage.removeItem('user'));
        } else {
          console.log('user not yet loggedin');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ marginBottom: '1rem' }}>
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: '#fff',
        }}
      >
        <Toolbar
          disableGutters
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Box
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'block' },
              fontFamily: 'monospace',
              width: '100px',
            }}
          >
            <Link to="/">
              <img width="100%" src={logo} alt="Logo" />
            </Link>
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <List
                sx={{
                  width: '100%',
                  bgcolor: 'background.paper',
                }}
                component="nav"
              >
                <ListItem>
                  <Link to="/">HOME</Link>
                </ListItem>
                <ListItem>
                  <Link to="/fungicides">FUNGICIDES</Link>
                </ListItem>
                <ListItem>
                  <Link to="/herbicides">HERBICIDES</Link>
                </ListItem>
                <ListItem>
                  <Link to="/insecticides">INSECTISIDES</Link>
                </ListItem>
                <ListItem>
                  <Link to="/machinery">MACHINERY</Link>
                </ListItem>
                <ListItem>
                  <Link to="/blogs">BLOGS</Link>
                </ListItem>
              </List>
            </Menu>
          </Box>
          <Box
            component="a"
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'block', md: 'none' },
              fontFamily: 'monospace',
              width: '100px',
            }}
          >
            <img width="100%" src={logo} alt="Logo" />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex', gap: '1rem' } }}>
            <List
              sx={{
                width: '100%',
                display: 'flex',
                bgcolor: 'background.paper',
              }}
              component="nav"
            >
              <ListItem>
                <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
                  HOME
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  style={{ textDecoration: 'none', color: '#000' }}
                  to="/fungicides"
                >
                  FUNGICIDES
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  style={{ textDecoration: 'none', color: '#000' }}
                  to="/herbicides"
                >
                  HERBICIDES
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  style={{ textDecoration: 'none', color: '#000' }}
                  to="/insecticides"
                >
                  INSECTISIDES
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  style={{ textDecoration: 'none', color: '#000' }}
                  to="/machinery"
                >
                  MACHINERY
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  style={{ textDecoration: 'none', color: '#000' }}
                  to="/blogs"
                >
                  BLOGS
                </Link>
              </ListItem>
            </List>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <Box>
              <Tooltip title="Open settings">
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  {/* {logged && user.user.role === 'admin' ? (
                    <Typography component="span" color="black">
                      <Link
                        style={{ textDecoration: 'none', color: '#000' }}
                        to="/admin"
                      >
                        Add Item
                      </Link>
                    </Typography>
                  ) : null} */}
                  {/* <Typography component="span" color="black">
                    {!logged ? (
                      <Link
                        style={{ textDecoration: 'none', color: '#000' }}
                        to="/signin"
                      >
                        Sign In
                      </Link>
                    ) : (
                      user.user.name || 'Sign In'
                    )}
                  </Typography> */}
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Avtar" src={profile} />
                  </IconButton>
                </Box>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <List
                  sx={{
                    width: '100%',
                    bgcolor: 'background.paper',
                  }}
                  component="nav"
                >
                  <ListItem>
                    <Button>
                      <Link
                        to="/profile"
                        style={{ textDecoration: 'none', color: '#000' }}
                      >
                        Profile
                      </Link>
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button onClick={handleLogOut}>
                      <Link
                        to="/signin"
                        style={{
                          textDecoration: 'none',
                          color: '#000',
                          cursor: 'pointer',
                        }}
                      >
                        Logout
                      </Link>
                    </Button>
                  </ListItem>
                </List>
              </Menu>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}
            >
              <Link to="/cart">
                <ShoppingCartOutlinedIcon color="success" fontSize="large" />
              </Link>
              <Typography component="span" color="black">
                <sup>{cartItems.length}</sup>
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
