import React from 'react';



export default function Title( { name , title, colors } ){

    const titleStyle = {
        height:'7%',
        backgroundColor: colors.color01,
        padding:'20px 0 0 100px',
        color:'white'
    }
    
    const nameStyle = {
        margin:0,
        padding: '10 0',
        fontSize:'2.5rem',
        fontWeight: 500
    }

    const profStyle = {
        fontWeight:300,
        marginTop: 10
    }

    
    return(
        <div className='title' style={titleStyle}>
            <h1 style={nameStyle}>{name}</h1>
            <h2 style={profStyle}>{title}</h2>
        </div>
    )
}