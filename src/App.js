import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './App.css';

import Canvas from './components/canvas';
import Sidebar from './components/sideBar/SideBar';
import ProfilePic from './components/sideBar/profilePic';
import Title from './components/sideBar/title';
import Timeline from './components/timeLine/timeline';
import ShortBio from './components/timeLine/shortBio';
import Experience from './components/timeLine/experience';

import work from './components/cv-info/work';
import {education,papers} from './components/cv-info/education';
import {info,skills,awards,courses} from './components/cv-info/info';

let fields = [{field:'Education',content:education},{field:'Experience',content:work},
              {field:'Published Papers',content:papers}];
let sideInfo = [{field:'Personal Info',content:info},
                {field:'Skills',content:skills},
                {field:'Honors & Awards',content:awards},
                {field:'Online Courses',content:courses}];

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

class Resume extends React.Component{
  render(){
    return(
      <>
        <Canvas>
          <Title name='Mariano L. Acosta' title='Electronics Engineer & Programmer'colors={colors}/>
          <Content>
            <Timeline>
              <ShortBio colors={colors}/>
              <Experience colors={colors} fields={fields}/>
            </Timeline>
            <Sidebar colors={colors} sideInfo={sideInfo}>
              <ProfilePic />
            </Sidebar>
          </Content>
        </Canvas>
      </>
    )
  }

}

function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle:'CV_Mariano_L_Acosta'
  });
 

  return (
          <div>
            <Resume ref={componentRef} />
            <button onClick={handlePrint}>Print this out!</button>
          </div>

          )
}

export default App;
