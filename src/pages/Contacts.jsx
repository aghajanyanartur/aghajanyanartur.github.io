import React, { useEffect } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import anime from 'animejs';

const Contacts = () => {

  useEffect(() => {
    anime.timeline()
      .add({
        targets: '.curve',
        clipPath: [
          'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
          'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)'
        ],
        duration: 2000,
        easing: 'easeInOutSine',
      })
      .add({
        targets: '.contact-item',
        opacity: [0, 1],
        translateX: [-1000, 0],
        easing: 'easeInOutSine',
        direction: 'reverse',
        duration: 500,
        delay: anime.stagger(200)
      }, '-=2000')
      .add({
        targets: '.thank-you-text',
        opacity: [0, 1],
        duration: 2000,
        easing: 'easeInOutSine',
      });
  }, []);

  return (
    <div className='w-full h-full fixed'>
      <div className='absolute text-3xl text-blue-950 font-extrabold thank-you-text'
        style={{ bottom: '7rem', right: '8rem' }}>
        <span>Thank you for<br />visiting my website</span>
      </div>

      <div className='h-full items-center flex justify-center'
        style={{ marginLeft: '15rem', marginRight: '10rem' }}>

        <div className='absolute flex flex-col justify-around z-10'
          style={{ height: '80%', width: '60%' }}>

          <div className='pb-10'>
            <p className='text-5xl text-blue-950 font-extrabold'>Feel free to reach me out</p>
          </div>

          <div className='flex items-center contact-item'>
            <LocationOnIcon className='' style={{ fontSize: '4rem', color: '#FFA500' }} />
            <span className='pl-5 text-blue-950 text-3xl font-extrabold'>Philadelphia, PA, USA</span>
          </div>

          <div className='flex items-center contact-item'>
            <PhoneIcon className='' style={{ fontSize: '4rem', color: '#FFA500' }} />
            <span className='pl-5 text-blue-950 text-3xl font-extrabold'>+1 (267) 304-9445</span>
          </div>

          <div className='flex items-center contact-item'>
            <AlternateEmailIcon className='' style={{ fontSize: '4rem', color: '#FFA500' }} />
            <span className='pl-5 text-blue-950 text-3xl font-extrabold'>aghajanyan.aa1@gmail.com</span>
          </div>

          <div className='flex items-center contact-item'>
            <LinkedInIcon className='' style={{ fontSize: '4rem', color: '#FFA500' }} />
            <a className='pl-5 text-blue-950 text-3xl font-extrabold' href='https://www.linkedin.com/in/aghajanyanartur'
              target='_blank' rel='noopener noreferrer'>
              LinkedIn
            </a>
          </div>

          <div className='flex items-center contact-item'>
            <GitHubIcon className='' style={{ fontSize: '4rem', color: '#FFA500' }} />
            <a className='pl-5 text-blue-950 text-3xl font-extrabold' href='https://github.com/aghajanyanartur'
              target='_blank' rel='noopener noreferrer'>
              GitHub
            </a>
          </div>
        </div>

        <svg className='curve' margin="2rem" width="95%" height="120%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M100,0 C98,40 90,80 0,100" stroke="#FFA500" fill="transparent" />
        </svg>
      </div>

    </div>
  );
};

export default Contacts;
