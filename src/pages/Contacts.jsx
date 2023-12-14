import React, { useEffect } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import anime from 'animejs';
import { useMediaQuery } from 'react-responsive';

const Contacts = () => {

  const isDesktop = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

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
      <div className={`absolute ${isDesktop ? 'text-[2vw]' : 'text-[4vw]'} text-blue-950 font-extrabold z-10 thank-you-text ${isMobile ? 'text-right' : ''}`}
        style={{ bottom: `${isDesktop ? '11vh' : '20vh'}`, right: `${isDesktop ? '10vw' : ''}`, left: `${isMobile ? '30vw' : ''}` }}>
        <span>Thank you for<br />visiting my website</span>
      </div>

      <div className={`h-full flex ${isDesktop ? 'items-center' : ''} justify-center`}
        style={{ marginLeft: `${isDesktop ? '15vw' : ''}`, marginRight: `${isDesktop ? '10.5vw' : ''}` }}>

        <div className={`absolute flex flex-col justify-around z-10 ${isMobile ? 'pt-[10vh]' : ''}`}
          style={{ height: `${isDesktop ? '80vh' : '60vh'}`, width: `${isDesktop ? '60vw' : '80vw'}` }}>

          <div className='pb-[1.35vh]'>
            <p className={`${isDesktop ? 'text-[3.1vw]' : 'text-[6vw]'} text-blue-950 font-extrabold`}>Feel free to reach me out</p>
          </div>

          <div className='flex items-center contact-item'>
            <LocationOnIcon className='' style={{ fontSize: `${isDesktop ? '4.2vw' : '9vw'}`, color: '#FFA500' }} />
            <span className={`pl-[1vw] text-blue-950 ${isDesktop ? 'text-[1.96vw]' : 'text-[4vw]'} font-extrabold`}>Philadelphia, PA, USA</span>
          </div>

          <div className='flex items-center contact-item'>
            <PhoneIcon className='' style={{ fontSize: `${isDesktop ? '4.2vw' : '9vw'}`, color: '#FFA500' }} />
            <span className={`pl-[1vw] text-blue-950 ${isDesktop ? 'text-[1.96vw]' : 'text-[4vw]'} font-extrabold`}>+1 (267) 304-9445</span>
          </div>

          <div className='flex items-center contact-item'>
            <AlternateEmailIcon className='' style={{ fontSize: `${isDesktop ? '4.2vw' : '9vw'}`, color: '#FFA500' }} />
            <span className={`pl-[1vw] text-blue-950 ${isDesktop ? 'text-[1.96vw]' : 'text-[4vw]'} font-extrabold`}>aghajanyan.aa1@gmail.com</span>
          </div>

          <div className='flex items-center contact-item'>
            <LinkedInIcon className='' style={{ fontSize: `${isDesktop ? '4.2vw' : '9vw'}`, color: '#FFA500' }} />
            <a className={`pl-[1vw] text-blue-950 ${isDesktop ? 'text-[1.96vw]' : 'text-[4vw]'} font-extrabold`} href='https://www.linkedin.com/in/aghajanyanartur'
              target='_blank' rel='noopener noreferrer'>
              LinkedIn
            </a>
          </div>

          <div className='flex items-center contact-item'>
            <GitHubIcon className='' style={{ fontSize: `${isDesktop ? '4.2vw' : '9vw'}`, color: '#FFA500' }} />
            <a className={`pl-[1vw] text-blue-950 ${isDesktop ? 'text-[1.96vw]' : 'text-[4vw]'} font-extrabold`} href='https://github.com/aghajanyanartur'
              target='_blank' rel='noopener noreferrer'>
              GitHub
            </a>
          </div>
        </div>

        <svg className='curve' style={{rotate: '3deg'}} width="95vw" height="120vh" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M100,0 C98,40 90,80 0,100" stroke="#FFA500" fill="transparent" />
        </svg>
      </div>

    </div>
  );
};

export default Contacts;
