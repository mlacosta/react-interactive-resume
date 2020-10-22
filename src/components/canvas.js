import React from 'react';

let W=2480
let H=3508

const canvaStyle = {
    width: W,
    height: H,
    margin:'0 auto',
    zoom: 1
}


export default function Canvas({children}){

    return(
        <div className="Canvas" style={canvaStyle} >
            {children}
        </div>

    );

}