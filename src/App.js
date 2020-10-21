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


import work from './components/cv-info/work';
import education from './components/cv-info/education';

let fields = [{field:'Experience',content:work},{field:'Education',content:education}];
let sideInfo = [];

const colors = {
  color01:'#3d5a80',
  color02:'#98c1d9',
  color03:'#e0fbfc',
  color04:'#ee6c4d',
  color05:'#293241',
  color06:'#e5e5e5'
}


function Content({ children }){

  const style = {
    display:'flex',
    height:'100%'
  }

  return(
    <div className="content" style={style}>
      {children}
    </div>
  )

}


function App() {
  return (
    <>
    {/*First Page*/}
      <Canvas colors={colors}>
        <Title name='Mariano L. Acosta' title='Electronics Engineer & Programmer'colors={colors}/>
        <Content>
          <Timeline>
            <ShortBio colors={colors}/>
            <Experience colors={colors} fields={fields}/>
          </Timeline>
          <Sidebar colors={colors}>
            <ProfilePic />
            <Contact colors={colors}/>
            <Skills colors={colors}/>
          </Sidebar>
        </Content>
      </Canvas>

    {/*Second Page*/}
    {/*
      <Canvas colors={colors}>
        <Content>
          <Timeline>
            <ShortBio colors={colors}/>
            <Experience colors={colors} fields={fields}/>
          </Timeline>
          <Sidebar colors={colors}>
            <ProfilePic />
            <Contact colors={colors}/>
            <Skills colors={colors}/>
          </Sidebar>
        </Content>
      </Canvas>
     */}
    </>
  );
}

export default App;
