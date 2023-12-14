import React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import anime from 'animejs';
import { useMediaQuery } from 'react-responsive';

function MenuNavigation() {
    const navigate = useNavigate();
    const location = useLocation();
    const isDesktop = useMediaQuery({ minWidth: 768 });
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const navigateTo = (path) => {
        return () => {
            navigate(path);
        };
    };

    const handleProfileIconRotate = () => {
        anime.timeline()
            .add({
                targets: '.profile-icon',
                rotate: [0, 45, -45, 45, -45, 0],
                duration: 1000,
                easing: 'easeInOutSine',
                loop: true,
                autoplay: false
            });
    }
    const handleSkillsIconRotate = () => {
        anime.timeline()
            .add({
                targets: '.skills-icon',
                rotate: [0, 45, -45, 45, -45, 0],
                duration: 1000,
                easing: 'easeInOutSine',
                loop: true,
                autoplay: false
            });
    }
    const handleProjectsIconRotate = () => {
        anime.timeline()
            .add({
                targets: '.projects-icon',
                rotate: [0, 45, -45, 45, -45, 0],
                duration: 1000,
                easing: 'easeInOutSine',
                loop: true,
                autoplay: false
            });
    }
    const handleContactsIconRotate = () => {
        anime.timeline()
            .add({
                targets: '.contacts-icon',
                rotate: [0, 45, -45, 45, -45, 0],
                duration: 1000,
                easing: 'easeInOutSine',
                loop: true,
                autoplay: false
            });
    }

    return (
        <div>
            {isDesktop && <nav className="fixed top-0 left-0 h-full w-[15vw] z-10">
                <div className={`flex flex-col md:flex justify-around h-full bg-white text-blue-950 text-[1.9vw] cursor-pointer`}>

                    <div className={`flex flex-col items-center justify-center
                h-full hover:text-[2.3vw] font-bold transition duration-500
                ${location.pathname === '/' ? 'text-[2.3vw]' : 'text-[1.9vw]'}`}
                        style={{
                            borderBottom: location.pathname === '/' ? '0.2vw solid #172554' : 'none',
                            borderRight: location.pathname === '/skills' || location.pathname === '/projects' || location.pathname === '/contacts' ? '0.2vw solid #172554' : 'none',
                        }}
                        onClick={navigateTo('/')}
                        onMouseEnter={handleProfileIconRotate}>
                        <PersonOutlineIcon className='profile-icon' sx={{ fontSize: '4rem' }} />
                        About
                    </div>

                    <div className={`flex flex-col items-center justify-center
                h-full hover:text-[2.3vw] font-bold transition duration-500
                ${location.pathname === '/skills' ? 'text-[2.3vw]' : 'text-[1.9vw]'}`}
                        style={{
                            borderBottom: location.pathname === '/skills' ? '0.2vw solid #172554' : 'none',
                            borderTop: location.pathname === '/skills' ? '0.2vw solid #172554' : 'none',
                            borderRight: location.pathname === '/' || location.pathname === '/projects' || location.pathname === '/contacts' ? '0.2vw solid #172554' : 'none',
                        }}
                        onClick={navigateTo('/skills')}
                        onMouseEnter={handleSkillsIconRotate}>
                        <HandymanOutlinedIcon className='skills-icon' sx={{ fontSize: '4rem' }} />
                        Skills
                    </div>

                    <div className={`flex flex-col items-center justify-center
                h-full hover:text-[2.3vw] font-bold transition duration-500
                ${location.pathname === '/projects' ? 'text-[2.3vw]' : 'text-[1.9vw]'}`}
                        style={{
                            borderBottom: location.pathname === '/projects' ? '0.2vw solid #172554' : 'none',
                            borderTop: location.pathname === '/projects' ? '0.2vw solid #172554' : 'none',
                            borderRight: location.pathname === '/' || location.pathname === '/skills' || location.pathname === '/contacts' ? '0.2vw solid #172554' : 'none',
                        }}
                        onClick={navigateTo('/projects')}
                        onMouseEnter={handleProjectsIconRotate}>
                        <DataObjectOutlinedIcon className='projects-icon' sx={{ fontSize: '4rem' }} />
                        Projects
                    </div>

                    <div className={`flex flex-col items-center justify-center
                h-full hover:text-[2.3vw] font-bold transition duration-500
                ${location.pathname === '/contacts' ? 'text-[2.3vw]' : 'text-[1.9vw]'}`}
                        style={{
                            borderTop: location.pathname === '/contacts' ? '0.2vw solid #172554' : 'none',
                            borderRight: location.pathname === '/' || location.pathname === '/projects' || location.pathname === '/skills' ? '0.2vw solid #172554' : 'none',
                        }}
                        onClick={navigateTo('/contacts')}
                        onMouseEnter={handleContactsIconRotate}>
                        <EmailOutlinedIcon className='contacts-icon' sx={{ fontSize: '4rem' }} />
                        Contacts
                    </div>
                </div>
            </nav>}

            {isMobile && <nav className="fixed top-0 left-0 w-full h-[5vh] z-10">
                <div className='h-full w-full flex flex-row bg-white text-blue-950 '>

                    <div className={'flex flex-col items-center justify-center h-full w-full'}
                        style={{
                            borderRight: location.pathname === '/' ? '0.2vw solid #172554' : 'none',
                            borderBottom: location.pathname !== '/' ? '0.2vw solid #172554' : 'none',
                        }}
                        onClick={navigateTo('/')} onMouseEnter={handleProfileIconRotate}>
                        <PersonOutlineIcon className='profile-icon' sx={{ fontSize: location.pathname === '/' ? '7vw' : '5vw' }} />
                    </div>

                    <div className={'flex flex-col items-center justify-center h-full w-full'}
                        style={{
                            borderRight: location.pathname === '/skills' ? '0.2vw solid #172554' : 'none',
                            borderLeft: location.pathname === '/skills' ? '0.2vw solid #172554' : 'none',
                            borderBottom: location.pathname !== '/skills' ? '0.2vw solid #172554' : 'none',
                        }}
                        onClick={navigateTo('/skills')} onMouseEnter={handleSkillsIconRotate}>
                        <HandymanOutlinedIcon className='skills-icon' sx={{ fontSize: location.pathname === '/skills' ? '7vw' : '5vw' }} />
                    </div>

                    <div className={'flex flex-col items-center justify-center h-full w-full'}
                        style={{
                            borderRight: location.pathname === '/projects' ? '0.2vw solid #172554' : 'none',
                            borderLeft: location.pathname === '/projects' ? '0.2vw solid #172554' : 'none',
                            borderBottom: location.pathname !== '/projects' ? '0.2vw solid #172554' : 'none',
                        }}
                        onClick={navigateTo('/projects')} onMouseEnter={handleProjectsIconRotate}>
                        <DataObjectOutlinedIcon className='projects-icon' sx={{ fontSize: location.pathname === '/projects' ? '7vw' : '5vw' }} />
                    </div>

                    <div className={'flex flex-col items-center justify-center h-full w-full'}
                        style={{
                            borderLeft: location.pathname === '/contacts' ? '0.2vw solid #172554' : 'none',
                            borderBottom: location.pathname !== '/contacts' ? '0.2vw solid #172554' : 'none',
                        }}
                        onClick={navigateTo('/contacts')} onMouseEnter={handleContactsIconRotate}>
                        <EmailOutlinedIcon className='contacts-icon' sx={{ fontSize: location.pathname === '/contacts' ? '7vw' : '5vw' }} />
                    </div>
                </div>

                
            </nav>}
        </div>
    );
}

export default MenuNavigation;