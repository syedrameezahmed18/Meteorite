import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'


export default class ImCard extends Component{
    
    render(){
        
    const style={
        width:'25%',
        height:'200px',
        backgroundColor:'black',
        display:'inline-block'
    }
    return(
    
           <Fade bottom><img src={this.props.img} style={style}/></Fade>
    
    )
}
}