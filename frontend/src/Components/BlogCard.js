import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';
import plant from '../assets/plant.png';

// RT
import { useDispatch } from 'react-redux';
import { addItem } from '../shared/cartSlice';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function BlogCard({ title, info }) {
  const [isActive, setIsActive] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function toggleLike() {
    setIsActive(!isActive);

    if (isActive) {
      dispatch(addItem(info));
    }
  }

  // RT
  const dispatch = useDispatch();

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card
        sx={{
          maxWidth: '450px',
        }}
      >
        <CardHeader title={title} />
        <Box>
          <img width="125px" src={plant} alt="Plant" />
        </Box>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {info.slice(0, 90)}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => toggleLike(info)}
          >
            {isActive ? (
              <FavoriteOutlinedIcon sx={{ color: 'red' }} />
            ) : (
              <FavoriteIcon />
            )}
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{info}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}

export default BlogCard;
