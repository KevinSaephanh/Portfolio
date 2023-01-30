import React from 'react';
import type { NextPage } from 'next';
import { ProgressBar } from '../components/common/ProgressBar/ProgressBar';

// TODO: Add party models
const Home: NextPage = () => {
  const [isLoading, setLoading] = React.useState(true);

  const toggleLoading = () => {
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className='container flex flex-col items-center justify-between mx-auto'>
      {isLoading ? (
        <>
          <ProgressBar maxPercent={100} color={'#0dba86'} toggleLoading={toggleLoading} />
          <span>LOADING....</span>
        </>
      ) : (
        <>
          <h1 className='game-font text-2xl font-bold tracking-wide pb-4'>Kevin Saephanh</h1>
          <span className='game-font text-md md:text-lg font-bold tracking-wide'>
            Full Stack Developer
          </span>
        </>
      )}
    </div>
  );
};

export default Home;
