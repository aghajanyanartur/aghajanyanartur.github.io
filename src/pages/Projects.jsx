import { Divider, Grid } from '@mui/material';
import anime from 'animejs';
import React, { useEffect } from 'react';
import '../styles/animations.css';

const Projects = () => {

  const handleOpenDescription = () => {
    anime.timeline()
      .add({
        targets: '.description',
        hidden: false,
        clipPath: [
          'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
          'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)'
        ],
        easing: 'easeInOutSine',
        duration: 200,
        autoplay: false
      });
  }

  useEffect(() => {
    anime.timeline()
      .add({
        targets: '.project',
        opacity: [0, 1],
        translateX: [-1500, 0],
        easing: 'easeInOutSine',
        direction: 'reverse',
        duration: 1000,
        delay: anime.stagger(200)
      });
  }, []);

  return (
    <div className='h-full w-full fixed'>
      <div className='' style={{ padding: '4rem', paddingLeft: '18rem' }}>
        <Grid container spacing={4}>

          <Grid item xs={6} className='flex project-item'>
            <img className='cursor-pointer relative project' alt=''
              onMouseEnter={handleOpenDescription}
              style={{ borderRadius: '0.5rem', boxShadow: '0 3px 20px rgb(0 0 0 / 1)' }}
              src='https://drive.google.com/uc?export=view&id=1cBgIWHWaZ9tamq_r0MmRoDqbBWmae5CQ' />
            <div className='absolute text-white items-center justify-center flex flex-col hidden cursor-pointer description'
              style={{ height: '19.1rem', width: '36rem', borderRadius: '0.5rem', backgroundColor: 'RGB(0,0,0,0.8)', }}
              onClick={() => window.open('https://github.com/aghajanyanartur/PriceTracker', '_blank')}>
              <h1 className='text-3xl font-bold' style={{ paddingTop: '2rem' }}>Price Tracker</h1>
              <Divider className='mt-5 pt-0.5 w-1/2' style={{ backgroundColor: 'white' }} />
              <p className='text-center text-xl font-semibold' style={{ padding: '2rem' }}>A full-stack application to create a personalized list of shopping from online stores and track the prices.</p>
              <p className='font-light text-sm' style={{ marginTop: '3rem' }}>Go to code</p>
            </div>
          </Grid>

          <Grid item xs={6} className='flex project-item'>
            <img className='cursor-pointer relative project' alt=''
              onMouseEnter={handleOpenDescription}
              style={{ borderRadius: '0.5rem', boxShadow: '0 3px 20px rgb(0 0 0 / 1)' }}
              src='https://drive.google.com/uc?export=view&id=1VXvbrgvr3SWueYuF2e4eykkN2aDqBS6Q' />
            <div className='absolute text-white items-center justify-center flex flex-col hidden cursor-pointer description'
              style={{ height: '19.1rem', width: '36rem', borderRadius: '0.5rem', backgroundColor: 'RGB(0,0,0,0.8)', }}
              onClick={() => window.open('https://github.com/aghajanyanartur/movie-rating', '_blank')}>
              <h1 className='text-3xl font-bold' style={{ paddingTop: '2rem' }}>Movie Rating</h1>
              <Divider className='mt-5 pt-0.5 w-1/2' style={{ backgroundColor: 'white' }} />
              <p className='text-center text-xl font-semibold' style={{ padding: '2rem' }}>A basic CRUD application, utilizing REST technology, to save movies, search and rate them.</p>
              <p className='font-light text-sm' style={{ marginTop: '3rem' }}>Go to code</p>
            </div>
          </Grid>

          <Grid item xs={4} className='flex project-item'>
            <img className='cursor-pointer relative project' alt=''
              onMouseEnter={handleOpenDescription}
              style={{ borderRadius: '0.5rem', boxShadow: '0 3px 20px rgb(0 0 0 / 1)' }}
              src='https://drive.google.com/uc?export=view&id=1nFq3MzCPOfP7Dd7p8YtzwqoW6s_snBFF' />
            <div className='absolute text-white items-center justify-center flex flex-col hidden cursor-pointer description'
              style={{ height: '14.15rem', width: '23.3rem', borderRadius: '0.5rem', backgroundColor: 'RGB(0,0,0,0.8)', }}
              onClick={() => window.open('https://github.com/aghajanyanartur/Changer', '_blank')}>
              <h1 className='text-2xl font-bold' style={{ paddingTop: '1.5rem' }}>Changer</h1>
              <Divider className='mt-5 pt-0.5 w-1/2' style={{ backgroundColor: 'white' }} />
              <p className='text-center text-md font-semibold' style={{ padding: '1rem' }}>A web application which retrieves the currency rates from a specialized website and calculates
                the best offer for change in banks</p>
              <p className='font-light text-xs' style={{ marginTop: '1rem' }}>Go to code</p>
            </div>
          </Grid>

          <Grid item xs={4} className='flex project-item'>
            <img className='cursor-pointer relative project' alt=''
              onMouseEnter={handleOpenDescription}
              style={{ borderRadius: '0.5rem', boxShadow: '0 3px 20px rgb(0 0 0 / 1)' }}
              src='https://drive.google.com/uc?export=view&id=1TP46efTEe1kr1ejveNjP_eFxE0HC5nYr' />
            <div className='absolute text-white items-center justify-center flex flex-col hidden cursor-pointer description'
              style={{ height: '14.15rem', width: '23.3rem', borderRadius: '0.5rem', backgroundColor: 'RGB(0,0,0,0.8)', }}
              onClick={() => window.open('https://github.com/aghajanyanartur/FastRename', '_blank')}>
              <h1 className='text-2xl font-bold' style={{ paddingTop: '1.5rem' }}>Fast Rename</h1>
              <Divider className='mt-5 pt-0.5 w-1/2' style={{ backgroundColor: 'white' }} />
              <p className='text-center text-md font-semibold' style={{ padding: '1rem' }}>A desktop application which allows to rename all the files in a given folder according to any custom pattern.</p>
              <p className='font-light text-xs' style={{ marginTop: '1rem' }}>Go to code</p>
            </div>
          </Grid>

          <Grid item xs={4} className='flex project-item'>
            <img className='cursor-pointer relative project' alt=''
              onMouseEnter={handleOpenDescription}
              style={{ borderRadius: '0.5rem', boxShadow: '0 3px 20px rgb(0 0 0 / 1)' }}
              src='https://drive.google.com/uc?export=view&id=1T1RpqUMVU9LzVLejXsmmCaSe2lChx6hm' />
            <div className='absolute text-white items-center justify-center flex flex-col hidden cursor-pointer description'
              style={{ height: '14.15rem', width: '23.3rem', borderRadius: '0.5rem', backgroundColor: 'RGB(0,0,0,0.8)', }}
              onClick={() => window.open('https://github.com/aghajanyanartur/Notebook', '_blank')}>
              <h1 className='text-2xl font-bold' style={{ paddingTop: '1.5rem' }}>Notebook</h1>
              <Divider className='mt-5 pt-0.5 w-1/2' style={{ backgroundColor: 'white' }} />
              <p className='text-center text-md font-semibold' style={{ padding: '1rem' }}>A desktop notebook application with basic functionality like editing and saving text files, counting symbols, words and paragraphs.</p>
              <p className='font-light text-xs' style={{ marginTop: '1rem' }}>Go to code</p>
            </div>
          </Grid>

        </Grid>
      </div>
    </div>
  );
};

export default Projects;
