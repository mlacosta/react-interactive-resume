import React from 'react';

const canvaStyle = {
    width: 2480,
    height: 3508,
    border: '1px solid black',
    margin:'100px auto'
}


export default function Canvas({children}){

    return(
        <div className="Canvas" style={canvaStyle}>
            {children}
        </div>

    );

}