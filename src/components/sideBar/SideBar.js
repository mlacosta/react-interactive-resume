import React from 'react';
import './SideBar.css'

export default function SideBar( { children , colors, sideInfo} ){
    const barStyle = {
        width:'28%',
        backgroundColor: colors.color06,
        height:'92.5%',
        padding: '0px 40px',
        fontSize:'.9rem'

    };
    
    return(
        <div className='sideBar' style={barStyle}>
            {children}
            {sideInfo.map((value)=>{
                const lineStyle = {
                    height:1,
                    width:'100%',
                    borderStyle:'solid',
                    borderWidth:'1px 0 0 0',
                    color:'gray',
                    marginBottom:40
                }
                return(
                    <div className="info-container">
                        <h3 style={{margin:'40px 0 0 0'}}>{value.field}</h3>
                        <div className="bar-line" style={lineStyle}></div>
                        <div className="items">
                            {value.content.map((item)=>{
                                const itemStyle = {
                                    marginBottom:30
                                }
                                const fieldStyle = {
                                    color: colors.color05
                                }

                                let items = item.hideItems ? <></> : <><br/><span>{item.content}</span></>

                                return(
                                    <div class='item' style={itemStyle}>
                                        <strong style={fieldStyle}>{item.field}</strong>
                                        {items}
                                        <br/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                );
            })
            }
        </div>
    )
}