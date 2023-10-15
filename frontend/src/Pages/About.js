import { Typography, Container, Box } from '@mui/material';
import React from 'react';
import plant from '../assets/plant.png';

function About() {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.75rem',
        p: '2rem',
        textAlign: 'left',
      }}
    >
      <Box
        sx={{
          width: '75px',
          height: '75px',
        }}
      >
        <img width="100%" src={plant} alt="Plant" />
      </Box>
      <Typography variant="h6" component="h1" lineHeight={1.3}>
        HOW GREENKART HELP YOU TO GROW YOUR CROPS
      </Typography>
      <Typography variant="subtitle1" component="p">
        Welcome to GreenKart, the ultimate online platform for farmers who want
        to grow their crops and businesses with the best products and solutions
        available in the market. At GreenKart, we understand the challenges and
        opportunities that farmers face every day, and we are committed to
        providing them with the most reliable, affordable, and effective
        products and solutions for their farming needs. <br /> Whether you are
        looking for high-quality seeds that can withstand pests and diseases,
        fertilizers that can boost your soil health and crop yield, pesticides
        that can protect your crops from harmful insects and weeds, machinery
        that can automate and optimize your farming operations, tools that can
        help you monitor and manage your farm, or software that can analyze and
        improve your farm data, we have it all in one place. You can browse our
        catalog of products and solutions from leading brands and suppliers,
        compare prices and features, read reviews and ratings from other
        farmers, and order online with ease and convenience. <br /> But that's
        not all. At GreenKart, we also want to help you learn about the latest
        technologies and innovations that are transforming the agriculture
        sector around the world. You can access our blog, where we share news,
        insights, tips, and best practices on various topics related to
        agriculture. You can watch our videos, where we showcase how farmers are
        using drones, sensors, robotics, artificial intelligence, and other
        cutting-edge technologies to improve their farming efficiency,
        productivity, and profitability. You can also join our community of
        farmers, where you can interact with other farmers who share your
        interests and challenges, ask questions, get answers, exchange ideas,
        and collaborate on projects. <br /> GreenKart is more than just a
        website. It is a platform where you can find everything you need to grow
        your crops and businesses. It is a platform where you can learn from
        experts and peers who are passionate about agriculture. It is a platform
        where you can discover new possibilities and opportunities for your
        farming future. Join GreenKart today and become part of the agricultural
        revolution. <br />
        <br />
        <strong>
          Some of the benefits of joining GreenKart's community are:
        </strong>
        <ul>
          <li>
            You can connect with other farmers who share your interests and
            challenges, and learn from their experiences and expertise.
          </li>
          <li>
            You can ask questions and get answers from experts and peers who can
            help you solve your farming problems and improve your farming
            skills.
          </li>
          <li>
            You can exchange ideas and collaborate on projects with other
            farmers who have similar goals and aspirations, and create new
            opportunities and partnerships.
          </li>
          <li>
            You can access exclusive content, offers, and events that are
            tailored to your needs and preferences, and enhance your knowledge
            and awareness of the latest trends and developments in agriculture.
          </li>
        </ul>
      </Typography>
    </Container>
  );
}

export default About;
