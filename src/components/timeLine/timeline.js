import React from 'react';

export default function Timeline({ children }){

    const timeStyle = {
        textAlign:'justify',
        padding:50,
        lineHeight:1.6,
        width:'68%',
        height:'100%'
    }
    return(
        <div class='timeline' style={timeStyle}>
            {children}
        </div>
    );

}