import React, { useState } from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import anime from 'animejs';

function MenuNavigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navigateTo = (path) => {
        return () => {
            setIsMobileMenuOpen(false);
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
        <nav className="fixed top-0 left-0 h-full w-60 z-10">
            <button
                onClick={toggleMobileMenu}
                className="text-3xl m-2 md:hidden">
                ☰
            </button>

            <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} flex-col md:flex justify-around h-full bg-white text-blue-950 text-3xl cursor-pointer`}>

                <div className={`flex flex-col items-center justify-center
                h-full hover:text-4xl font-bold transition duration-500
                ${location.pathname === '/' ? 'text-4xl' : 'text-3xl'}`}
                    style={{
                        borderBottom: location.pathname === '/' ? '3px solid #172554' : 'none',
                        borderRight: location.pathname === '/skills' || location.pathname === '/projects' || location.pathname === '/contacts' ? '3px solid #172554' : 'none',
                    }}
                    onClick={navigateTo('/')}
                    onMouseEnter={handleProfileIconRotate}>
                    <PersonOutlineIcon className='profile-icon' sx={{ fontSize: '4rem' }} />
                    About
                </div>

                <div className={`flex flex-col items-center justify-center
                h-full hover:text-4xl font-bold transition duration-500
                ${location.pathname === '/skills' ? 'text-4xl' : 'text-3xl'}`}
                    style={{
                        borderBottom: location.pathname === '/skills' ? '3px solid #172554' : 'none',
                        borderTop: location.pathname === '/skills' ? '3px solid #172554' : 'none',
                        borderRight: location.pathname === '/' || location.pathname === '/projects' || location.pathname === '/contacts' ? '3px solid #172554' : 'none',
                    }}
                    onClick={navigateTo('/skills')}
                    onMouseEnter={handleSkillsIconRotate}>
                    <HandymanOutlinedIcon className='skills-icon' sx={{ fontSize: '4rem' }} />
                    Skills
                </div>

                <div className={`flex flex-col items-center justify-center
                h-full hover:text-4xl font-bold transition duration-500
                ${location.pathname === '/projects' ? 'text-4xl' : 'text-3xl'}`}
                    style={{
                        borderBottom: location.pathname === '/projects' ? '3px solid #172554' : 'none',
                        borderTop: location.pathname === '/projects' ? '3px solid #172554' : 'none',
                        borderRight: location.pathname === '/' || location.pathname === '/skills' || location.pathname === '/contacts' ? '3px solid #172554' : 'none',
                    }}
                    onClick={navigateTo('/projects')}
                    onMouseEnter={handleProjectsIconRotate}>
                    <DataObjectOutlinedIcon className='projects-icon' sx={{ fontSize: '4rem' }} />
                    Projects
                </div>

                <div className={`flex flex-col items-center justify-center
                h-full hover:text-4xl font-bold transition duration-500
                ${location.pathname === '/contacts' ? 'text-4xl' : 'text-3xl'}`}
                    style={{
                        borderTop: location.pathname === '/contacts' ? '3px solid #172554' : 'none',
                        borderRight: location.pathname === '/' || location.pathname === '/projects' || location.pathname === '/skills' ? '3px solid #172554' : 'none',
                    }}
                    onClick={navigateTo('/contacts')}
                    onMouseEnter={handleContactsIconRotate}>
                    <EmailOutlinedIcon className='contacts-icon' sx={{ fontSize: '4rem' }} />
                    Contacts
                </div>
            </div>
        </nav>
    );
}

export default MenuNavigation;