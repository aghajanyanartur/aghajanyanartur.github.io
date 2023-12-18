
import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import '../styles/animations.css';
import anime from 'animejs';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import { useMediaQuery } from 'react-responsive';
import arturImage from '../images/artur.png'
import javaLogo from '../images/java_logo.png'

const About = () => {

  const logoRef = useRef(null);
  const textRef = useRef(null);
  const textOptions = ['Java Developer', 'Problem Solver', 'Devoted Coder'];
  const [currentText, setCurrentText] = useState(textOptions[0]);
  const [textIndex, setTextIndex] = useState(0);
  const isDesktop = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    anime.timeline()
      .add({
        targets: '.animate-brace',
        translateX: ['-31.25vw', 0],
        easing: 'spring(1, 80, 10, 0)',
        duration: 700,
      })
      .add({
        targets: '.animate-brace',
        translateY: [0, `${isDesktop ? "29.77vh" : "38vh"}`],
        easing: 'spring(1, 80, 10, 0)',
        duration: 700,
      }, "-=700")
      .add({
        targets: '.animate-text',
        opacity: [0, 1],
        duration: 3000,
      }, "-=1500");
  }
    , []);


  useEffect(() => {
    const timeline = anime.timeline({
      loop: true,
      loopComplete: () => {
        setTextIndex(prevIndex => (prevIndex + 1) % textOptions.length);
      }
    });

    timeline
      .add({
        targets: logoRef.current,
        translateX: '17.4vw',
        easing: 'easeInOutSine',
        duration: 2000
      })
      .add({
        targets: textRef.current,
        clipPath: [
          'polygon(0 0, 0% 0, 0% 100%, 0 100%)',
          'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        ],
        easing: 'easeInOutSine',
        duration: 2000,
        offset: 0
      }, 0)
      .add({
        targets: logoRef.current,
        rotate: 720,
        duration: 1000,
        easing: 'easeInOutSine'
      })
      .add({
        targets: textRef.current,
        clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)',
        easing: 'easeInOutSine',
        duration: 2000,
        delay: 1000,
      })
      .add({
        targets: logoRef.current,
        translateX: 0,
        easing: 'easeInOutSine',
        duration: 2000
      }, '-=2000');
  }, []);

  useEffect(() => {
    setCurrentText(textOptions[textIndex]);
  }, [textIndex, textOptions]);

  return (
    <div className='bg-white'>
      {isDesktop && <img src={arturImage} alt='Artur Aghajanyan'
        className='fixed w-[32vw] right-[2vw] bottom-0 animate-slide-in' />}

      <div className='flex h-screen justify-center text-blue-950 font-bold'>
        <div style={{ marginRight: `${isDesktop ? "20.8vw" : "0vw"}`}}>
          <h1 className={`${isDesktop ? 'text-[3.125vw]' : 'text-[6vw]'} font-extrabold ${isDesktop ? 'pt-[4vh]' : 'pt-[10vh]'} pb-[0.676vh]`}
            style={{ paddingLeft: '2vw' }}>
            Artur Aghajanyan
          </h1>

          <div className='flex items-center' style={{ paddingLeft: '2vw' }}>
            {isDesktop && <img ref={logoRef}
              src={javaLogo}
              alt=''
              className='w-[2vw] absolute'
            />}
            <div ref={textRef}>
              <h3 className={`${isDesktop ? 'text-[2.3vw]' : 'text-[4vw]'} font-bold`} style={{ color: '#FFA500' }}>{currentText}</h3>
            </div>
          </div>

          <div className={`mb-[1.35vh] ${isDesktop ? 'text-[1.3vw]' : 'text-[4vw]'}`}
            style={{ width: `${isDesktop ? "32.55vw" : "80vw"}`, lineHeight: '4.3vh', marginTop: `${isDesktop ? "8.66vh" : "3vh"}` }}>
            <p className={`${isDesktop ? 'text-[2.3vw]' : 'text-[4vw]'}`} style={{ paddingRight: '10.4vw', color: '#FFA500' }}>&#123;
              <p className={`${isDesktop ? 'text-[2.3vw]' : 'text-[4vw]'} animate-brace absolute`}
              style={{ color: '#FFA500', textAlign: 'right', marginLeft: `${isDesktop ? '32.3vw' : '75vw'}`, marginTop: '-4.5vh' }}>&#125;</p>
            </p>
            <p className='animate-text' style={{ paddingLeft: '2vw' }}>Hi, I'm Artur. I really like Java and I'm excited about coding.
            Technology is everywhere, and I want to understand how it all works.<br />
            I'm looking forward to working with professionals who love technology as much as I do. Let's see what we can create together!</p>

          </div>
          <div style={{ paddingLeft: '2vw', paddingTop: '7vh' }}>
            <p className={`${isDesktop ? 'text-[1.3vw]' : 'text-[4vw]'} flex items-center`}>Get my full CV here
              <PanToolAltIcon className='rotate-90' /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button variant='contained' className={`w-[5vw]`}
                sx={{
                  backgroundColor: 'white',
                  color: '#FFA500',
                  fontSize: `${isDesktop ? '2vw' : '5vw'}`,
                  fontWeight: 'bold',
                  aspectRatio: 1 / 1,
                  ":hover": {
                    backgroundColor: '#FFA500',
                    color: 'white'
                  },
                  borderRadius: '50%',
                  boxShadow: '10px 0px 5px 0px rgba(50, 50, 50, 0.5)',
                  border: '1px solid rgba(50, 50, 50, 0.2)'
                }}
                onClick={() => window.open('https://drive.google.com/file/d/1y1KVZThm9z05t42RfK9J59HP67gvLlYa/view?usp=drive_link', '_blank')}>
                CV
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
