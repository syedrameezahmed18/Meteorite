import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import met from "../../images/meteor.png";
import Info from './info'
import Fade from 'react-reveal/Fade'
class Headview extends Component {
    render(){
    return(
       <Fade top ><div className="forhead">
            <div className="left">
                <img src={met} alt="images" width="50px" height="50px"/>
                <p>Meteorite Tavern</p>
            </div>
            <div className="right">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Asteroidaldata">Asteroidal Data</Link></li>
                    <li><Link to="/imagelibrary">Image Library</Link></li>
                </ul>
            </div>
        </div></Fade>
        
    );
}
}
export default Headview;