import React from 'react';


export default function SideBar( { children , colors} ){
    const barStyle = {
        width:'32%',
        backgroundColor: colors.color06,
        height:'91.7%',

    };
    
    return(
        <div className='sideBar' style={barStyle}>
            {children}
        </div>
    )
}