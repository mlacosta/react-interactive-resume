import React from 'react';
import './App.css';

import Canvas from './components/canvas';

import Sidebar from './components/sideBar/SideBar';
import ProfilePic from './components/sideBar/profilePic';
import Title from './components/sideBar/title';
import Contact from './components/sideBar/contact';
import Skills from './components/sideBar/skills';

import Timeline from './components/timeLine/timeline';
import ShortBio from './components/timeLine/shortBio';
import Experience from './components/timeLine/experience';


const colors = {
  color01:'#3d5a80',
  color02:'#98c1d9',
  color03:'#e0fbfc',
  color04:'#ee6c4d',
  color05:'#293241',
}



function App() {
  return (
    <Canvas>
      <Title name='Mariano L. Acosta' title='Electronics Engineer & Programmer'
             colors={colors}/>
      <Sidebar>
            <ProfilePic/>
            <Contact/>
            <Skills/>
      </Sidebar>
      <Timeline>
        <ShortBio/>
        <Experience/>
      </Timeline>
    </Canvas>
  );
}

export default App;
