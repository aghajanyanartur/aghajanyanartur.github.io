
import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import '../styles/animations.css';
import anime, { timeline } from 'animejs';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';

const About = () => {

  const logoRef = useRef(null);
  const textRef = useRef(null);
  const textOptions = ['Java Developer', 'Problem Solver', 'Devoted Coder'];
  const [currentText, setCurrentText] = useState(textOptions[0]);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    anime.timeline()
      .add({
        targets: '.animate-brace',
        translateX: [-480, 0],
        easing: 'spring(1, 80, 10, 0)',
        duration: 700,
      })
      .add({
        targets: '.animate-brace',
        translateY: [0, 220],
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
        translateX: 270,
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
      <img src='https://drive.google.com/uc?export=view&id=14mG5tGb3XNQ2fM-Rom0gm3kxL8D9vZLG' alt='my photo'
        className='fixed h-full right-10 animate-slide-in' />

      <div className='flex h-screen justify-center text-blue-950 font-bold'>
        <div style={{ marginLeft: '-20rem' }}>
          <h1 className='text-5xl font-extrabold pt-10 pb-5' style={{ paddingLeft:'2rem'}}>Artur Aghajanyan</h1>

          <div className='flex items-center' style={{ paddingLeft:'2rem'}}>
            <img ref={logoRef}
              src='https://drive.google.com/uc?export=view&id=1MiX2EGSGqtO96QiCeHzj8ovP79-ftJta'
              alt=''
              className='w-10 h-12 absolute'
            />
            <div ref={textRef}>
              <h3 className='text-4xl font-bold' style={{color:'#FFA500'}}>{currentText}</h3>
            </div>
          </div>

          <div className='mb-10 text-xl'
            style={{ width: '500px', lineHeight: '2rem', marginTop:'4rem'}}>
            <p className='text-4xl' style={{ paddingRight:'10rem', color:'#FFA500'}}>&#123;
            <p className='text-4xl animate-brace absolute' style={{ color:'#FFA500', textAlign:'right', marginLeft: '31rem', marginTop:'-2.5rem' }}>&#125;</p></p>
            <p className='animate-text' style={{ paddingLeft:'2rem'}}>Hi, I'm Artur. I really like Java and I'm excited about coding. Technology is everywhere, and I want to understand how it all works.<br />I'm looking forward to working with professionals who love technology as much as I do. Let's see what we can create together!</p>
            
          </div>
          <div  style={{ paddingLeft:'2rem', paddingTop:'2rem'}}>
            <p className='text-xl flex items-center'>Get my full CV here
              <PanToolAltIcon className='rotate-90' style={{ fontSize: '2.5rem' }} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button variant='contained' className='h-20 w-20 text-2xl'
                sx={{
                  backgroundColor: 'white',
                  color: '#FFA500',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  ":hover": {
                    backgroundColor: '#FFA500',
                    color: 'white'
                  },
                  borderRadius: '50%',
                  boxShadow: '10px 0px 5px 0px rgba(50, 50, 50, 0.5)',
                  border: '1px solid rgba(50, 50, 50, 0.2)'
                }}
                onClick={() => window.open('https://drive.google.com/file/d/17gXiN7qNFGIIi7zJtl6nmYDL3ZlIjS_z/view?usp=drive_link', '_blank')}>
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
