import { courses } from "./info";

export const education = [
    
    {name: 'University of Mar del Plata (UNMDP)',
    title: 'Degree in Electronics Engineering',
    description:'2012 - 2018',
    content: ['Coursework: Control Systems, Electronics Instrumentation, Signal Processing, Circuit Design, Communications & Data Networks',
            'Additional courses: Computational Intelligence, Applied Robotics, Operations Research, FPGA Design, Microcontrollers.'],
    showTitle:true
    },
    {name: 'Virginia Tech - United States',
    title: 'Fulbright Scholarship - Exchange Student',
    description:'2017 - 2017',
    content: ['Intensive, 200hs English course at VTLCI ','Attended to university courses in Electrical and Computer Engineering'],
    showTitle:true
    }
]

export const papers = [
    {name: 'University of Mar del Plata (UNMDP)',
    title: 'MSc + BS, Electronics Engineering',
    description:'2016 - 2019',
    content: ['Hybrid sorting algorithm implemented with HLS (ISSN: 1548-0992)',
    'Compressed Sensing System for 16x sub-Nyquist DSP (ISBN: 978-1-7281-1404-0)',
    'Signal Processing System with Xampling (ISBN: 978-1-5090-6286-7)',
    'Neural Network for Robotic Arm Control in Fixed Point (ISBN: 978-987-45523-8-9)',
    'FM Audio Synthetizer with Genetic Algorithms (ISSN: 1850-2776)'],
    showTitle:false
    } 
]

export default {education,papers};