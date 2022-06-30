import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import ResponsiveAppBar from '../components/AppBar';
import MediaCard from '../components/MediaCard';

const initialSearch = 2022;
const initialMedia = 'All';

function Home(props: any) {
  const [search, setSearch] = useState<Number>(initialSearch);
  const [media, setMedia] = useState<String>(initialMedia);

  const options = [
    { mediaType: 'All' },
    { mediaType: 'Movies' },
    { mediaType: 'TV' },
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      search,
      media,
    });
  };

  const handleMediaChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMedia(event.target.value);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    let year: number = Number(event.target.value);
    if (year.toString().length <= 4) {
      setSearch(year);
    }
  };

  useEffect(() => {
    
  })

  return (
    <>
      <Head>
        <title>Nostalgia Generator</title>
        <meta name='description' content='Movie and TV Show Search' />
        <link rel='icon' href='/icon-pink.png' />
      </Head>

      <ResponsiveAppBar />

      <Container component={'main'} maxWidth='md'>
        <CssBaseline />

        <Box
          bgcolor={'white'}
          component={'form'}
          onSubmit={handleSubmit}
          noValidate
          sx={{ my: 4, px: 3 }}>
          <Grid container spacing={2} justifyContent={'center'}>
            <Grid item xs={12} sm={6}>
              <TextField
                type={'number'}
                margin='normal'
                required
                fullWidth
                id='search'
                name='search'
                label='Search Year (YYYY)'
                value={search}
                autoFocus
                onChange={handleSearchChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                margin='normal'
                id='select-media'
                select
                fullWidth
                required
                label={'Select Media Type'}
                value={media}
                onChange={handleMediaChange}>
                {options.map((option) => (
                  <MenuItem key={option.mediaType} value={option.mediaType}>
                    {option.mediaType}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item sx={{ mb: 1 }}>
              <Button type='submit' variant='contained' color='secondary'>
                Search
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box bgcolor={'white'} component={'div'} sx={{ py: 4, px: 3 }}>
          <Typography variant='h4' component={'h1'} sx={{ pb: 1 }}>
            Movies
          </Typography>
          <Carousel>
            {props.movieData.map((movie: any) => {
              <MediaCard
                key={movie.id}
                posterUrl={movie.poster_path}
                title={movie.title}
                releaseDate={movie.release_date}
                overview={movie.overview}
              />;
              {
                console.log(movie);
              }
            })}
          </Carousel>
        </Box>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let movieData: any;
  try {
    const movieResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/popular`,
      {
        params: {
          api_key: process.env.TMDBkey,
          language: 'en-US',
          page: '1',
        },
      }
    );
    movieData = movieResponse.data.results;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      movieData,
    },
  };
};

export default Home;
