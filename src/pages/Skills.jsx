import React, { useEffect } from 'react';
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import anime from 'animejs';
import { useMediaQuery } from 'react-responsive';

const Skills = () => {

  const isDesktop = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    anime.timeline()
      .add({
        targets: '.icon-scale',
        scale: 3,
        duration: 500,
        easing: 'easeInOutExpo'
      })
      .add({
        targets: '.icon-scale',
        translateX: '-8.5vw',
        duration: 500,
        easing: 'spring(1, 80, 10, 0)'
      })
      .add({
        targets: '.git',
        easing: 'easeOutExpo',
        duration: 300,
        translateY: [-800, 0]
      }, '-=150')
      .add({
        targets: '.frontend',
        easing: 'easeOutExpo',
        duration: 300,
        translateY: [-700, 0]
      }, '-=150')
      .add({
        targets: '.data',
        easing: 'easeOutExpo',
        duration: 300,
        translateY: [-600, 0]
      }, '-=150')
      .add({
        targets: '.gradle',
        easing: 'easeOutExpo',
        duration: 300,
        translateY: [-500, 0]
      }, '-=150')
      .add({
        targets: '.spring',
        easing: 'easeOutExpo',
        duration: 300,
        translateY: [-400, 0]
      }, '-=150')
      .add({
        targets: '.java',
        easing: 'easeOutExpo',
        duration: 300,
        translateY: [-300, 0]
      }, '-=150')
      .add({
        targets: '.skill-item',
        backgroundColor: '#FFA500',
        clipPath: [
          'polygon(0% 0%, 15% 0%, 15% 100%, 0% 100%)', // Initial clipPath
          'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' // Final clipPath
        ],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: anime.stagger(200)
      }, '-=500')
    anime({
      targets: '.skill-image',
      rotate: 360,
      easing: 'linear',
      duration: 1500,
      loop: true
    });
  }, []);

  return (
    <div className={`w-full h-full fixed ${isMobile ? 'flex flex-col items-center justify-around p-[15vh]' : ''}`}>
      <TungstenOutlinedIcon className={`${isDesktop ? 'absolute icon-scale' : ''} `}
        sx={{ fontSize: `${isDesktop ? '10vw' : '10vh'} `, marginLeft: `${isDesktop ? '48vw' : ''}`, marginTop: `${isDesktop ? '40vh' : ''}`, color: '#FFA500', rotate: '180deg' }} />

      <div className={`flex flex-col justify-around h-full ${isDesktop ? 'pb-[5vh] pt-[5vh]' : 'pb-[10vh] pt-[7vh]'}`}
        style={{ marginLeft: `${isDesktop ? '20vw' : ''}` }}>
        <ul className='parent-item flex flex-col h-full justify-around'
        style={{ width: `${isDesktop ? '41.6vw' : '80vw'}` }}>

          <li className={`flex flex-row items-center skill-item ${isDesktop ? 'java' : ''}`} style={{ borderRadius: '3rem' }} >
            <img className='skill-image'
              style={{ width: `${isDesktop ? '5.2vw' : '6vh'}`, borderRadius: '50%', margin: '0.52vw', padding: '0.52vw', backgroundColor: 'white' }}
              src="https://drive.google.com/uc?export=view&id=1WAoZS5i1wtvV0aYmp0ORIFcrjI8u1pL2" alt=''/>
            <span className={`pl-[2vw] ${isDesktop ? 'text-[1.56vw]' : 'text-[1.7vh]'} text-white font-black`}>Java Core and OOP</span>
          </li>

          <li className={`flex flex-row items-center skill-item ${isDesktop ? 'spring' : ''}`} style={{ borderRadius: '3rem' }}>
            <img className='skill-image'
              style={{ width: `${isDesktop ? '5.2vw' : '6vh'}`, borderRadius: '50%', margin: '0.52vw', padding: '0.52vw', backgroundColor: 'white' }}
              src='https://drive.google.com/uc?export=view&id=11j99hSJA15Ma8iaCu0cl1n7Gl1A9ADbW' alt=''/>
            <span className={`pl-[2vw] ${isDesktop ? 'text-[1.56vw]' : 'text-[1.7vh]'} text-white font-black`}>Spring Boot and Spring Security</span>
          </li>

          <li className={`flex flex-row items-center skill-item ${isDesktop ? 'gradle' : ''}`} style={{ borderRadius: '3rem' }}>
            <img className='skill-image'
              style={{ width: `${isDesktop ? '5.2vw' : '6vh'}`, borderRadius: '50%', margin: '0.52vw', padding: '0.52vw', backgroundColor: 'white' }}
              src='https://drive.google.com/uc?export=view&id=1kL1fMHNCjztJJXcL98tD-zukKfbV-uKi' alt=''/>
            <span className={`pl-[2vw] ${isDesktop ? 'text-[1.56vw]' : 'text-[1.7vh]'} text-white font-black`}>Build tools - Gradle and Maven</span>
          </li>

          <li className={`flex flex-row items-center skill-item ${isDesktop ? 'data' : ''}`} style={{ borderRadius: '3rem' }}>
            <img className='skill-image'
              style={{ width: `${isDesktop ? '5.2vw' : '6vh'}`, borderRadius: '50%', margin: '0.52vw', padding: '0.52vw', backgroundColor: 'white' }}
              src='https://drive.google.com/uc?export=view&id=1_LcTwpDwfxp21YeWQliMcOp6xIAnXZXH' alt=''/>
            <span className={`pl-[2vw] ${isDesktop ? 'text-[1.56vw]' : 'text-[1.7vh]'} text-white font-black`}>SQL, Spring Data, JPA, Hibernate</span>
          </li>

          <li className={`flex flex-row items-center skill-item ${isDesktop ? 'frontend' : ''}`} style={{ borderRadius: '3rem' }}>
            <img className='skill-image'
              style={{ width: `${isDesktop ? '5.2vw' : '6vh'}`, borderRadius: '50%', margin: '0.52vw', padding: '0.52vw', backgroundColor: 'white' }}
              src='https://drive.google.com/uc?export=view&id=1ZISeE4z14ua-a3ci8g6M_XYfBBYhZc8a' alt=''/>
            <span className={`pl-[2vw] ${isDesktop ? 'text-[1.56vw]' : 'text-[1.7vh]'} text-white font-black`}>Familiarity with frontend technologies</span>
          </li>

          <li className={`flex flex-row items-center skill-item ${isDesktop ? 'git' : ''}`} style={{ borderRadius: '3rem' }}>
            <img className='skill-image'
              style={{ width: `${isDesktop ? '5.2vw' : '6vh'}`, borderRadius: '50%', margin: '0.52vw', padding: '0.52vw', backgroundColor: 'white' }}
              src='https://drive.google.com/uc?export=view&id=17rVfMr6voIoFjBxVQkC7RiGuUps5-L86' alt=''/>
            <span className={`pl-[2vw] ${isDesktop ? 'text-[1.56vw]' : 'text-[1.7vh]'} text-white font-black`}>Version control system - GIT</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
