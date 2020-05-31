import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';

var Uihandler = () =>{
    return(
<div className="historic">
                 
                 <Fade top><p>History</p></Fade>
                  <Fade right>
                    <div className="holds1">
                    <input type="text" className="form-control one" placeholder="Starting Date i.e YY-MM-DD"/>
                 </div>
                 <div className="bottomhold">
                     <button className="btn btn-danger">Search</button>
                 </div>

              </Fade>
              <div className="titled1">
                <Fade up><p>Close Approach Data</p></Fade>
                </div>

              </div>)
              }
export default Uihandler;              