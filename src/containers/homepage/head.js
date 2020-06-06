import React, { Component, Fragment } from 'react';
import {withRouter,Link} from 'react-router-dom'
import met from "../../images/meteor.png";
import Info from './info'
import Fade from 'react-reveal/Fade'

class Headview extends Component {
    
    render(){
    return(
        <Fragment>
       <Fade top ><div className="forhead">
            <div className="left">
                <img src={met} alt="images" width="50px" height="50px"/>
                <p>Meteorite Tavern</p>
            </div>
            <div className="right">
                {this.props.history.location.pathname==='/history' && (
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/imagelibrary">Image Library</Link></li>
                </ul>

                   )}
             {this.props.history.location.pathname==='/imagelibrary' && (
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/history">Asteroidal Data</Link></li>
                </ul>

                   )}
                    
        
                
            </div>
            
        </div></Fade>
        
        </Fragment>
    ); 
}
}
export default withRouter(Headview);