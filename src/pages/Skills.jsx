import React, { useEffect } from 'react';
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import anime from 'animejs';

const Skills = () => {

  useEffect(() => {
    anime.timeline()
      .add({
        targets: '.icon-scale',
        scale: 3, // Start from normal size and scale up to 3 times
        duration: 500,
        easing: 'easeInOutExpo'
      })
      .add({
        targets: '.icon-scale',
        translateX: -150,
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
    <div className='w-full h-full fixed'>
      <TungstenOutlinedIcon className='fixed icon-scale'
        sx={{ fontSize: '10rem', right: '40rem', top: '17rem', color: '#FFA500', rotate: '180deg' }}
      />

      <div className='flex flex-col justify-around h-full pb-10 pt-10' style={{ marginLeft: '20rem', top: '10rem' }} >
        <ul className='parent-item flex flex-col h-full justify-around'
          style={{ width: '40rem' }}>

          <li className='flex flex-row items-center skill-item java' style={{ borderRadius: '3rem' }} >
            <img className='skill-image'
              style={{ width: '5rem', borderRadius: '50%', margin: '0.5rem', padding: '0.5rem', backgroundColor: 'white' }}
              src="https://drive.google.com/uc?export=view&id=1WAoZS5i1wtvV0aYmp0ORIFcrjI8u1pL2" />
              <span className='pl-10 text-2xl text-white font-black'>Java Core and OOP</span>
          </li>

          <li className='flex flex-row items-center skill-item spring' style={{ borderRadius: '3rem' }}>
            <img className='skill-image'
              style={{ width: '5rem', borderRadius: '50%', margin: '0.5rem', padding: '0.5rem', backgroundColor: 'white' }}
              src='https://drive.google.com/uc?export=view&id=11j99hSJA15Ma8iaCu0cl1n7Gl1A9ADbW' />
            <span className='pl-10 text-2xl text-white font-black'>Spring Boot and Spring Security</span>
          </li>

          <li className='flex flex-row items-center skill-item gradle' style={{ borderRadius: '3rem' }}>
            <img className='skill-image'
              style={{ width: '5rem', borderRadius: '50%', margin: '0.5rem', padding: '0.5rem', backgroundColor: 'white' }}
              src='https://drive.google.com/uc?export=view&id=1kL1fMHNCjztJJXcL98tD-zukKfbV-uKi' />
            <span className='pl-10 text-2xl text-white font-black'>Build tools - Gradle and Maven</span>
          </li>

          <li className='flex flex-row items-center skill-item data' style={{ borderRadius: '3rem' }}>
            <img className='skill-image'
              style={{ width: '5rem', borderRadius: '50%', margin: '0.5rem', padding: '0.5rem', backgroundColor: 'white' }}
              src='https://drive.google.com/uc?export=view&id=1_LcTwpDwfxp21YeWQliMcOp6xIAnXZXH' />
            <span className='pl-10 text-2xl text-white font-black'>SQL, Spring Data, JPA, Hibernate</span>
          </li>

          <li className='flex flex-row items-center skill-item frontend' style={{ borderRadius: '3rem' }}>
            <img className='skill-image'
              style={{ width: '5rem', borderRadius: '50%', margin: '0.5rem', padding: '0.5rem', backgroundColor: 'white' }}
              src='https://drive.google.com/uc?export=view&id=1ZISeE4z14ua-a3ci8g6M_XYfBBYhZc8a' />
            <span className='pl-10 text-2xl text-white font-black'>Familiarity with frontend technologies</span>
          </li>

          <li className='flex flex-row items-center skill-item git' style={{ borderRadius: '3rem' }}>
            <img className='skill-image'
              style={{ width: '5rem', borderRadius: '50%', margin: '0.5rem', padding: '0.5rem', backgroundColor: 'white' }}
              src='https://drive.google.com/uc?export=view&id=17rVfMr6voIoFjBxVQkC7RiGuUps5-L86' />
            <span className='pl-10 text-2xl text-white font-black'>Version control system - GIT</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
