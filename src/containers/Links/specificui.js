import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

let Specific = ({date,diameter,hazard,name}) => {
    let dtxt=`Date : ${date}`;
    let ditxt=`Diameter : ${diameter}ft`
    let htxt=`Hazard : ${hazard}`
    let ntxt=`Name : ${name}`
    return(
        <div className="anothermess">
           
            <Fade left><p className="shifted">{dtxt}</p></Fade>
            <Fade left><p>{ditxt}</p></Fade>
            <Fade left><p>{htxt}</p></Fade>
            <Fade left><p className="revshifted">{ntxt}</p></Fade>

        </div>   
    )
}

export default Specific;