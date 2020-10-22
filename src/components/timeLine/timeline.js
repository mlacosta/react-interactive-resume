import React from 'react';

export default function Timeline({ children }){

    const timeStyle = {
        textAlign:'justify',
        padding: '40px 50px 50px',
        lineHeight:1.4,
        width:'68%',
        height:'100%',
        fontSize:'.85rem'
    }
    return(
        <div class='timeline' style={timeStyle}>
            {children}
        </div>
    );

}