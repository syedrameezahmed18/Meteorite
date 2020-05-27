import React, { Component } from 'react';
import met from "../images/meteor.png";

var Headview = () => {

    return(
        <div className="forhead">
            <div className="left">
                <img src={met} alt="images" width="50px" height="50px"/>
                <p>Meteorite Tavern</p>
            </div>
            <div className="right">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Links</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Headview;