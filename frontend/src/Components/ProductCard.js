import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// RT
import { useDispatch } from 'react-redux';
import { addItem } from '../shared/cartSlice';
import axios from 'axios';

function ProductCard({ link, img }) {
  const dispatch = useDispatch();

  const [productList, setProductList] = React.useState([]);

  React.useEffect(() => {
    axios.get(link).then((res) => {
      // console.log(res.data);
      setProductList(res.data.products);
    });
  }, []);

  return (
    <React.Fragment>
      {productList.map((item) => {
        return (
          <Card
            sx={{
              width: '300px',
              height: '450px',
              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
              borderRadius: '1rem',
            }}
            key={item._id}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              sx={{ width: '70%', margin: 'auto' }}
              image={img}
            />
            <CardContent>
              <Typography variant="p" sx={{ color: '#18d39e' }}>
                {item.category}
              </Typography>
              <Typography variant="h5" component="p" sx={{ fontWeight: '500' }}>
                {item.name}
              </Typography>
              <Typography variant="body2">{item.price} Rs.</Typography>
              <Typography sx={{ color: '#a1a1a1' }}>
                Only {item.stock} items in Stock
              </Typography>{' '}
            </CardContent>
            <CardActions
              disableSpacing
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                variant="contained"
                color="success"
                sx={{
                  padding: '0.5rem',
                  borderRadius: '0.5rem',
                }}
                onClick={() => {
                  dispatch(addItem(item));
                }}
              >
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </React.Fragment>
  );
}

export default ProductCard;
