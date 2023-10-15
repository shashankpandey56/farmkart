import React from 'react';
import { Container, Grid } from '@mui/material';
import BlogCard from '../Components/BlogCard';
import axios from 'axios';

function BlogPage() {
  const [blogList, setBlogList] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('http://localhost:4000/api/v1/products?category=Blogs')
      .then((res) => {
        // console.log(res.data);
        setBlogList(res.data.products);
      });
  }, []);

  return (
    <React.Fragment>
      <Container maxWidth="lg" sx={{ marginTop: '3rem' }}>
        <Grid container spacing={5}>
          {blogList.map((blog) => {
            return <BlogCard title={blog.name} info={blog.description} />;
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default BlogPage;
