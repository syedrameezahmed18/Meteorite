import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom'
import met from "../../images/meteor.png";
import Info from './info'
import {FaBars} from 'react-icons/fa'
import Fade from 'react-reveal/Fade'
class Headview extends Component {
    state={
        ren:false,
    }
    
    handleClick=()=>{
        this.setState({ren:true})
    }
    render(){
        let val=true;
        console.log(this.state.ren)
    return(
        <Fragment>
       <Fade top ><div className="forhead">
            <div className="left">
                <img src={met} alt="images" width="50px" height="50px"/>
                <p>Meteorite Tavern</p>
            </div>
            <div className="right">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/history">Asteroidal Data</Link></li>
                    <li><Link to="/imagelibrary">Image Library</Link></li>
                </ul>
                <button className="right-btn" onClick={this.handleClick}>
                     <FaBars size={22} color={"white"}/>
                </button>
        
                
            </div>
            
        </div></Fade>
        
        </Fragment>
    ); 
}
}
export default Headview;