import React, { Component } from 'react';
import LightSpeed from 'react-reveal/LightSpeed';

var HistoryUI =({danger,truedata})=> {
    
    let text=`Hazardous :${danger}`;
    let appdate=`Close Approach Date : ${truedata}`;
        return ( 
            <div className="ui">
                 
                
                <div className="mess">
                    <LightSpeed left><p>{text}</p></LightSpeed>
                    <LightSpeed left><p>{appdate}</p></LightSpeed>
                    <LightSpeed right><p>Relative Velocity :</p></LightSpeed>
                    <LightSpeed right><p>Miss Distance(kilometers) :</p></LightSpeed>
                </div>
            </div>
         );
    
}
export default HistoryUI;