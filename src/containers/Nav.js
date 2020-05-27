import React, { Component } from 'react';
import met from "../images/meteor.png";

class Nav extends Component{
    state={
        slide: false
    }
    handleScroll=(e)=>{
        if (window.scrollY>20 && this.state.slide===false) {
        this.setState({slide:true})
        } 
        else if (window.scrollY<10 && this.state.slide===true){
            this.setState({slide:false})


        }
    }
    render(){
        const {slide}=this.state
        window.addEventListener('scroll',this.handleScroll)

        return(
        <div className="container">
            <div className="forhead" style={{backgroundColor: slide===true ? "purple" : "transparent",
                                             animationName
        
        }}>
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
        </div>
        );
}
}
export default Nav;