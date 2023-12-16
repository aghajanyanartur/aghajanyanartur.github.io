import { Divider, Grid } from '@mui/material';
import anime from 'animejs';
import React, { useEffect } from 'react';
import '../styles/animations.css';
import { useMediaQuery } from 'react-responsive';

const Projects = () => {

  const isDesktop = useMediaQuery({ minWidth: 1100 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

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
        targets: '.project-transition',
        opacity: [0, 1],
        translateX: [-1500, 0],
        easing: 'easeInOutSine',
        direction: 'reverse',
        duration: 1000,
        delay: anime.stagger(200)
      });
  }, []);

  return (
    <div className={`h-full w-full fixed flex ${isDesktop ? 'items-center' : ''} ${isMobile ? 'justify-center' : ''} overflow-y-auto`}>
      <div className='' style={{ padding: `${isMobile ? '6vw' : '2vw'}`, paddingLeft: `${isMobile ? '6vw' : '17vw'}`, paddingTop: `${isMobile ? '8vh' : ''}`}}>
        <Grid container spacing={0.5} rowGap={3} className='flex items-center'>

          <Grid item xs={`${isDesktop ? 6 : 12}`} className='flex project-item'>
            <div className='relative'>
              <img className={`cursor-pointer relative ${isDesktop ? 'project-transition' : ''} project w-full h-full fixed top-0 left-0`} alt=''
                onMouseEnter={handleOpenDescription}
                style={{ borderRadius: '0.5rem', boxShadow: '0 3px 20px rgb(0 0 0 / 1)', aspectRatio: '2/1' }}
                src='https://drive.google.com/uc?export=view&id=1cBgIWHWaZ9tamq_r0MmRoDqbBWmae5CQ' />
              <div className='absolute text-white items-center justify-around flex flex-col cursor-pointer description hidden top-0 left-0 w-full h-full'
                style={{ borderRadius: '0.5rem', backgroundColor: 'RGB(0,0,0,0.8)' }}
                onClick={() => window.open('https://github.com/aghajanyanartur/PriceTracker', '_blank')}>
                <h1 className={`${isDesktop ? 'text-[2vw]' : 'text-[4vw]'} font-bold`}>Price Tracker
                  <Divider className='w-1/1' style={{ backgroundColor: 'white', borderBottomWidth: '0.25vw' }} />
                </h1>
                <p className={`text-center ${isDesktop ? 'text-[1.3vw]' : 'text-[3.5vw]'} font-semibold`}>
                  A full-stack application to create a personalized list of shopping from online stores and track the prices.
                </p>
                <p className={`font-light ${isDesktop ? 'text-[1.3vw]' : 'text-[3.5vw]'}`}>Go to code</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={`${isDesktop ? 6 : 12}`} className='flex project-item'>
            <div className='relative'>
              <img className={`cursor-pointer relative ${isDesktop ? 'project-transition' : ''} project w-full h-full fixed top-0 left-0`} alt=''
                onMouseEnter={handleOpenDescription}
                style={{ borderRadius: '0.5rem', boxShadow: '0 3px 20px rgb(0 0 0 / 1)', aspectRatio: '2/1' }}
                src='https://drive.google.com/uc?export=view&id=1VXvbrgvr3SWueYuF2e4eykkN2aDqBS6Q' />
              <div className='absolute text-white items-center justify-around flex flex-col cursor-pointer description hidden top-0 left-0 w-full h-full'
                style={{ borderRadius: '0.5rem', backgroundColor: 'RGB(0,0,0,0.8)', }}
                onClick={() => window.open('https://github.com/aghajanyanartur/movie-rating', '_blank')}>
                <h1 className={`${isDesktop ? 'text-[2vw]' : 'text-[4vw]'} font-bold`}>Movie Rating
                  <Divider className='w-1/1' style={{ backgroundColor: 'white', borderBottomWidth: '0.25vw' }} />
                </h1>
                <p className={`text-center ${isDesktop ? 'text-[1.3vw]' : 'text-[3.5vw]'} font-semibold`}>
                  A basic CRUD application, utilizing REST technology, to save movies, search and rate them.
                </p>
                <p className={`font-light ${isDesktop ? 'text-[1.3vw]' : 'text-[3.5vw]'}`}>Go to code</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={`${isDesktop ? 4 : 12}`} className='flex project-item'>
            <div className='relative'>
              <img className={`cursor-pointer relative ${isDesktop ? 'project-transition' : ''} project w-full h-full fixed top-0 left-0`} alt=''
                onMouseEnter={handleOpenDescription}
                style={{ borderRadius: '0.5rem', boxShadow: '0 3px 20px rgb(0 0 0 / 1)', aspectRatio: '2/1' }}
                src='https://drive.google.com/uc?export=view&id=1nFq3MzCPOfP7Dd7p8YtzwqoW6s_snBFF' />
              <div className='absolute text-white items-center justify-around flex flex-col cursor-pointer description hidden top-0 left-0 w-full h-full'
                style={{ borderRadius: '0.5rem', backgroundColor: 'RGB(0,0,0,0.8)', }}
                onClick={() => window.open('https://github.com/aghajanyanartur/Changer', '_blank')}>
                <h1 className={`${isDesktop ? 'text-[2vw]' : 'text-[4vw]'} font-bold`}>Changer
                  <Divider className='w-1/1' style={{ backgroundColor: 'white', borderBottomWidth: '0.25vw' }} />
                </h1>
                <p className={`text-center ${isDesktop ? 'text-[1.3vw]' : 'text-[3.5vw]'} font-semibold`}>
                  A web application which retrieves the currency rates from a specialized website and calculates
                  the best offer for change in banks
                </p>
                <p className={`font-light ${isDesktop ? 'text-[1.3vw]' : 'text-[3.5vw]'}`}>Go to code</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={`${isDesktop ? 4 : 12}`} className='flex project-item'>
            <div className='relative'>
              <img className={`cursor-pointer relative ${isDesktop ? 'project-transition' : ''} project w-full h-full fixed top-0 left-0`} alt=''
                onMouseEnter={handleOpenDescription}
                style={{ borderRadius: '0.5rem', boxShadow: '0 3px 20px rgb(0 0 0 / 1)', aspectRatio: '2/1' }}
                src='https://drive.google.com/uc?export=view&id=1r98dSImLYlrtb97pWSDGRdlmVhxVoIZi' />
              <div className='absolute text-white items-center justify-around flex flex-col cursor-pointer description hidden top-0 left-0 w-full h-full'
                style={{ borderRadius: '0.5rem', backgroundColor: 'RGB(0,0,0,0.8)', }}
                onClick={() => window.open('https://github.com/aghajanyanartur/FastRename', '_blank')}>
                <h1 className={`${isDesktop ? 'text-[2vw]' : 'text-[4vw]'} font-bold`}>Fast Rename
                  <Divider className='w-1/1' style={{ backgroundColor: 'white', borderBottomWidth: '0.25vw' }} />
                </h1>
                <p className={`text-center ${isDesktop ? 'text-[1.3vw]' : 'text-[3.5vw]'} font-semibold`}>
                  A desktop application which allows to rename all the files in a given folder according to any custom pattern.
                </p>
                <p className={`font-light ${isDesktop ? 'text-[1.3vw]' : 'text-[3.5vw]'}`}>Go to code</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={`${isDesktop ? 4 : 12}`} className='flex project-item'>
            <div className='relative'>
              <img className={`cursor-pointer relative ${isDesktop ? 'project-transition' : ''} project w-full h-full fixed top-0 left-0`} alt=''
                onMouseEnter={handleOpenDescription}
                style={{ borderRadius: '0.5rem', boxShadow: '0 3px 20px rgb(0 0 0 / 1)', aspectRatio: '2/1' }}
                src='https://drive.google.com/uc?export=view&id=1T1RpqUMVU9LzVLejXsmmCaSe2lChx6hm' />
              <div className='absolute text-white items-center justify-around flex flex-col cursor-pointer description hidden top-0 left-0 w-full h-full'
                style={{ borderRadius: '0.5rem', backgroundColor: 'RGB(0,0,0,0.8)', }}
                onClick={() => window.open('https://github.com/aghajanyanartur/Notebook', '_blank')}>
                <h1 className={`${isDesktop ? 'text-[2vw]' : 'text-[4vw]'} font-bold`}>Notebook
                  <Divider className='w-1/1' style={{ backgroundColor: 'white', borderBottomWidth: '0.25vw' }} />
                </h1>
                <p className={`text-center ${isDesktop ? 'text-[1.3vw]' : 'text-[3.5vw]'} font-semibold`}>
                  A desktop notebook application with basic functionality like editing and saving text files, counting symbols, words and paragraphs.
                </p>
                <p className={`font-light ${isDesktop ? 'text-[1.3vw]' : 'text-[3.5vw]'}`}>Go to code</p>
              </div>
            </div>
          </Grid>

        </Grid>
      </div>
    </div>
  );
};

export default Projects;
