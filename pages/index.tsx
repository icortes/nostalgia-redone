import type { NextPage } from 'next';
import Head from 'next/head';
import SearchBar from '../components/SearchBar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nostalgia Generator</title>
        <meta name='description' content='Movie and TV Show Search' />
        <link rel='icon' href='/icon-pink.png' />
      </Head>
      
      <SearchBar />
    </>
  );
};

export default Home;
