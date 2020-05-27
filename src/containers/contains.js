import React, { Component } from 'react';


var Cont = ({Click}) => {

        return (
            <div className="containered">
                <p>News</p>
                <p>{Click}</p>
            </div>
          );
    
}
 
export default Cont;