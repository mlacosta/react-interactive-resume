import React from 'react';

export default function Experience({ colors, fields}){

    return(
        <div className="experience">
            {fields.map((field)=>{

                const line = {
                    width: '100%',
                    borderWidth:'1px 0 0 0',
                    borderColor:'black',
                    borderStyle:'solid',
                    margin:0
                }
                return(
                    <>
                        <h3 className="field-name">{field.field}</h3>
                        <div className="line" style={line}></div>
                    </>
                )
                
            })}
        </div>
    );

}