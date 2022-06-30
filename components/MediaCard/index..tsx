import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import moment from 'moment';

export default function MediaCard({
  overview,
  posterUrl,
  title,
  releaseDate,
}: any) {
  return (
    <Card sx={{ maxWidth: 225 }}>
      <CardActionArea>
        <CardMedia
          component={'img'}
          image={`https://image.tmdb.org/t/p/w300/${posterUrl}`}
          alt={`Poster Image for ${title}`}
        />
        <CardContent>
          <Typography variant='h5' component='div'>
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            {moment(releaseDate).format('MMMM DD, YYYY')}
          </Typography>
          <Typography variant='body2' color={'text.primary'}>
            {overview}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' variant='contained'>Save</Button>
        <Button size='small' variant='outlined'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
