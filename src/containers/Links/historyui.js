import React, { Component } from 'react';
import LightSpeed from 'react-reveal/LightSpeed';

var HistoryUI =({danger,truedata,des,miss})=> {
    
    let text=`Hazardous :${danger}`;
    let appdate=`Close Approach Date : ${truedata}`;
    let vel=`Velocity : ${des}kps`
    let lastmiss=`Miss range : ${miss}km`;
        return ( 
            <div className="ui">
                <div className="mess">
                    <LightSpeed left><p>{text}</p></LightSpeed>
                    <LightSpeed left><p>{appdate}</p></LightSpeed>
                    <LightSpeed right><p>{vel}</p></LightSpeed>
                    <LightSpeed right><p>{lastmiss}</p></LightSpeed>
                </div>
            </div>
         );
    
}
export default HistoryUI;