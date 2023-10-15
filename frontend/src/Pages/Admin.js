import * as React from 'react';
import axios from 'axios';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Container,
} from '@mui/material';

function Admin() {
  // const [name, setName] = React.useState('');
  // const [description, setDescription] = React.useState('');
  // const [price, setPrice] = React.useState('');
  // const [category, setCategory] = React.useState('');
  // const [rating, setRating] = React.useState('');
  // const [stock, setStock] = React.useState('');
  // const [url, setUrl] = React.useState('');
  // const [public_id, setPublic_id] = React.useState('');

  const user = JSON.parse(sessionStorage.getItem('user'));
  const token = user.token;
  // console.log(token);

  const [formData, setFormData] = React.useState({
    name: '',
    description: '',
    price: '',
    category: '',
    rating: '',
    // images: {
    //   public_id: '',
    //   url: '',
    // },
    stock: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // const handleChangeImgURL = (e) => {
  //   setFormData({
  //     ...formData,
  //     e.target.images.url : e.target.value,
  //   });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const {
      name,
      description,
      price,
      stock,
      // images: { public_id, url },
      category,
      rating,
    } = formData;

    await axios
      .post(
        'http://localhost:4000/api/v1/admin/product/new',
        {
          name,
          description,
          price,
          stock,
          // public_id,
          // url,
          category,
          rating,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container maxWidth="lg">
      <Typography gutterBottom variant="h6" align="center">
        Add New Product
      </Typography>
      <Grid>
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    placeholder="Product Name"
                    label="Product Name"
                    variant="outlined"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    fullWidth
                    required
                    value={formData.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Description"
                    multiline
                    placeholder="Description"
                    variant="outlined"
                    name="description"
                    id="description"
                    onChange={handleChange}
                    fullWidth
                    value={formData.description}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    placeholder="Price"
                    label="Price"
                    variant="outlined"
                    name="price"
                    id="price"
                    onChange={handleChange}
                    fullWidth
                    required
                    value={formData.price}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="Rating"
                    placeholder="Rating"
                    label="Rating"
                    variant="outlined"
                    name="rating"
                    id="rating"
                    onChange={handleChange}
                    fullWidth
                    value={formData.rating}
                  />
                </Grid>
                {/* <Grid xs={12} item>
                  <TextField
                    placeholder="Image URL"
                    label="Image URL"
                    variant="outlined"
                    name="url"
                    id="url"
                    onChange={handleChangeImgURL}
                    fullWidth
                    required
                    value={formData.images.url}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    placeholder="Image ID"
                    label="Image ID"
                    variant="outlined"
                    name="ID"
                    id="ID"
                    onChange={handleChangeImgID}
                    fullWidth
                    required
                    value={formData.images.public_id}
                  />
                </Grid> */}
                <Grid xs={12} item>
                  <TextField
                    placeholder="Number of Items in stock"
                    label="Number of Items in stock"
                    variant="outlined"
                    name="stock"
                    id="stock"
                    onChange={handleChange}
                    fullWidth
                    required
                    value={formData.stock}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="Category"
                    placeholder="Category"
                    label="Category"
                    variant="outlined"
                    name="category"
                    id="category"
                    onChange={handleChange}
                    fullWidth
                    required
                    value={formData.category}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
}

export default Admin;
