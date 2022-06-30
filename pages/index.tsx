import { Box, Container, CssBaseline, Grid, TextField } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { FormEvent, useState } from 'react';
import ResponsiveAppBar from '../components/AppBar';

const Home: NextPage = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      search: data.get('search'),
      year: data.get('year'),
      media: data.get('media'),
    });
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
        <Box sx={{ mt: 1 }}>
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
            
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Home;
