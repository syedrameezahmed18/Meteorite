import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'


export default class ImCard extends Component{
    
    render(){
        
    
    return(
    
           <Fade bottom><img alt='Image Not Found In Nasa Library' src={this.props.img} className="card-img"/></Fade>
    
    )
}
}