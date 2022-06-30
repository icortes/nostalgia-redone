import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  MenuItem,
  TextField,
} from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ChangeEvent, FormEvent, useState } from 'react';
import ResponsiveAppBar from '../components/AppBar';
import MediaCard from '../components/MediaCard/index.';

const Home: NextPage = () => {
  const [search, setSearch] = useState<Number>(2022);
  const [media, setMedia] = useState<String>('All');

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
        <Box sx={{ mt: 0 }}>
          <Box
            component={'form'}
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}>
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
        </Box>
      </Container>

      <MediaCard
        posterUrl='9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg'
        title='Doctor Strange in the Multiverse of Madness'
        releaseDate='2022-05-04'
        overview='Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.'
      />
    </>
  );
};

export default Home;
