import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { clearCart, incrementItem, decrementItem } from '../shared/cartSlice';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import plant from '../assets/plant.png';
// import DeleteIcon from '@mui/icons-material/Delete';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';
// RT
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // const [total, setTotal] = React.useState(0);

  // React.useEffect(() => {
  //   setTotal(cartItems.reduce((acc, curr) => acc + Number(curr.price), 0));
  // }, [cartItems]);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginY: '2rem',
        }}
      >
        <Typography variant="h6">Cart Items - {cartItems.length}</Typography>
        <Button
          variant="outlined"
          onClick={() => dispatch(clearCart())}
          color="error"
          disabled={cartItems.length > 0 ? false : true}
        >
          Clear Cart
        </Button>
      </Box>
      <Box sx={{ marginY: '2rem' }}>
        {cartItems?.length === 0 && (
          <h1> Cart is empty. Add Items to the cart!</h1>
        )}
      </Box>

      {cartItems.map((item) => {
        return (
          <Card
            sx={{
              width: '100%',
              color: 'black',
              borderRadius: '0px',
              padding: '1rem 3rem',
            }}
            key={item._id}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                sx={{ width: '60px', height: '60px' }}
                image={plant}
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h5" component="span">
                  {item.name}
                </Typography>
                <Typography variant="body2" component="span">
                  ({item.category})
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Button onClick={() => dispatch(decrementItem(item))}>
                  <RemoveCircleIcon />
                </Button>

                <span className="mx-2">{item.itemCount}</span>

                <Button onClick={() => dispatch(incrementItem(item))}>
                  <AddCircleIcon />
                </Button>
              </Box>
              {/* <Button>
                <DeleteIcon onClick={() => dispatch(removeItem(item.id))} />
              </Button> */}
              {/* { setTotalCost((prevCost) => prevCost + {item.price})} */}
              <Typography> {item.itemCount * item?.price}</Typography>
            </Box>
          </Card>
        );
      })}

      {cartItems.length == 0 ? null : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            marginY: '2rem',
          }}
        >
          Total price: Rs.
          {cartItems.length &&
            cartItems
              .map((item) => item.itemCount * item?.price)
              .reduce((acc, curr) => acc + curr, 0)}
        </Box>
      )}
      <Box
        sx={{ display: 'flex', flexDirection: 'row-reverse', marginY: '2rem' }}
      >
        <Button variant="contained" color="success">
          <Link
            to={`/checkout`}
            style={{ textDecoration: 'none', color: '#fff' }}
          >
            Proceed To Payment
          </Link>
        </Button>
      </Box>
    </Container>
  );
};

export default Cart;
