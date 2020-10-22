import React from 'react';

export const info = [
    {field: 'Phone',
     content:'+(xx) x-xxx-xxxxxxx' //'+(54) 9-223-5238782'
    },
    {field: 'E-mail',
     content:  <a href='mailto:marianoacosta.003@gmail.com' target='_blank' style={{textDecoration:'none'}}>marianoacosta.003@gmail.com</a>
    },
    {field: 'Personal Website',
     content: <a href='https://mlacosta.github.io/' target='_blank' style={{textDecoration:'none'}}>mlacosta.github.io</a>
    },
    {field: 'Github',
     content:<a href='http://github.com/mlacosta' target='_blank' style={{textDecoration:'none'}}>github.com/mlacosta</a>
    },
    {field: 'Linkedin',
     content:<a href='http://linkedin.com/in/mlacosta' target='_blank' style={{textDecoration:'none'}}>linkedin.com/in/mlacosta</a>
    },  
    {field: 'Languages',
    content: 'Spanish (Native) | English (Proficient)'
    }, 
    {field: 'Birthdate',
    content: '13 August 1993 (27 years old)'
    }
];

export const skills  = [
    {field: 'Programming',
    content: 'C/C++, C#, Java, Javascript, GIT Version Control, Python, Matlab, Bash Shell'
   },
    {field: 'Fullstack Web Development',
     content:'APIs, HTML, CSS, Express.js, Git, Javascript, MongoDB, Mocha & Chai, Netlify, Node JS, npm, OAuth, React.js, SQL, Test-Driven Development.'
    },
    {field: 'Machine Learning',
     content:  'Deep Learning models, Genetics Algorithms, Fuzzy Logic, Convolutional Networks, LSTM Networks, Keras, Tensorflow, Pandas, Numpy, Scikit-Learn'
    },
    {field: 'Embedded Systems',
     content:'SoC, FPGA, Microprocessors, VHDL, Xilinx Vivado, STM32, '
    },
    {field: 'Audio & Signal Processing',
     content:'Ableton Live, Algorithmic Composition, Control Systems, DSP, JUCE, Music Production, VST development '
    }
];


export const awards  = [
    {field: <a href='https://ar.usembassy.gov/education-culture/programs/friends-of-fulbright/' target='_blank' style={{textDecoration:'none'}}>Friends of Fulbright Scholarship</a>, //
     content:'+(54) 9-223-5238782',
     hideItems:true
    },
    {field: <a href='http://45jaiio.sadio.org.ar/node/55' target='_blank' style={{textDecoration:'none'}}>Second place at JAIIO 45 | National contest in Computer Science</a>, 
     content:  <a href='mailto:marianoacosta.003@gmail.com' target='_blank' style={{textDecoration:'none'}}>marianoacosta.003@gmail.com</a>,
     hideItems:true
    },
    {field: <a href='http://www.sase.com.ar/2019/' target='_blank' style={{textDecoration:'none'}}>Oustanding work at CASE 2019 | Embedded Systems Conference</a>,
     content: <a href='https://mlacosta.github.io/' target='_blank' style={{textDecoration:'none'}}>mlacosta.github.io</a>, //http://www.sase.com.ar/case/
     hideItems:true
    }
];

export const courses  = [
    {field: <a href='https://www.codecademy.com/profiles/mlacosta003' target='_blank' style={{textDecoration:'none'}}>Full-Stack Engineer | Career Path</a>, 
    content:'Codecademy'
    },
    {field: <a href='https://www.coursera.org/account/accomplishments/verify/ZZLTY2PHGZLL' target='_blank' style={{textDecoration:'none'}}>Algorithms Specialization</a>,
     content:'Stanford Online'
    },
    {field: <a href='https://www.coursera.org/account/accomplishments/specialization/MLP6JXVZRJZ8' target='_blank' style={{textDecoration:'none'}}>Deep Learning Specialization</a>, //
     content:  'Coursera'
    },
    {field: <a href='https://courses.edx.org/certificates/bc41b88c4d184e5b933624ce95ace752' target='_blank' style={{textDecoration:'none'}}>Software Construcction in Java</a>, 
     content: 'MITx'
    }

];

export default {info,skills, awards,courses};