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
                    margin:0,
                    marginBottom:20
                }

                let content = field.content;

                const container = {
                    display:'grid',
                    gridTemplateColumns: '1fr 5fr',
                    columnGap:'60px'
                }

                const nameStyle ={
                    marginBottom:10
                }

                return(
                    <>
                        <h3 className="field-name" style={nameStyle}>{field.field}</h3>
                        <div className="line" style={line}></div>
                        {content.map((exp)=>{

                            let items = exp.content;
                            let dateStyle  = {};
                            let inx = 0

                            const ulStyle = {
                                marginTop:10
                            }

                            return(
                                <div className="exp-container" style={container}>
                                    <div className="date" style={dateStyle}>{exp.description}</div>
                                    <div className="desc-container">
                                        <h3 style={{margin:'0px 0px 10px'}}>{exp.title}</h3>
                                        <i>{exp.name}</i>
                                        <ul style={ulStyle}>
                                            {items.map((item)=>{
                                                return <li key={inx++}>{item}</li>
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )
                
            })}
        </div>
    );

}