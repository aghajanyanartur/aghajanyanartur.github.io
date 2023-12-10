
import React from 'react';
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Contacts from '../pages/Contacts';
import MenuNavigation from '../components/MenuNavigation';

const AppRouter = () => {
  return (
    <div>
      <div>
        <MenuNavigation />
      </div>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </div>
  )
}

export default AppRouter;
