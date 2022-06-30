import {
  Box,
  Container,
  CssBaseline,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ChangeEvent, FormEvent, useState } from 'react';
import ResponsiveAppBar from '../components/AppBar';

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
    const data = new FormData(event.currentTarget);
    console.log({
      search: data.get('search'),
      media: data.get('media'),
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMedia(event.target.value);
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
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  type={'number'}
                  margin='normal'
                  required
                  fullWidth
                  id='search'
                  name='search'
                  label='Search Year'
                  autoFocus
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
                  onChange={handleChange}>
                  {options.map((option) => (
                    <MenuItem key={option.mediaType} value={option.mediaType}>
                      {option.mediaType}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Home;
