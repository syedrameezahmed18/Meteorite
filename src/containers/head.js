import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import met from "../images/meteor.png";

class Headview extends Component {
    render(){
    return(
        <div className="cover">
        <div className="forhead"  >
            <div className="left">
                <img src={met} alt="images" width="50px" height="50px"/>
                <p>Meteorite Tavern</p>
            </div>
            <div className="right">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/link">Link</Link></li>
                </ul>
            </div>
        </div>
        <p className="super">Explore what lies beyond your reach!</p>
        <p className="mini">Latest Meteor tracker!</p>
        <div className="hh">
        <button className="btn btn-warning">Check</button>
        </div>
        </div>
    );
}
}
export default Headview;