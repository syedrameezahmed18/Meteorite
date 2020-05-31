import React from 'react'
import Fade from 'react-reveal/Fade'


export default function ImCard(){
    const style={
        border:'1px solid white',
        width:'30%',
        height:'200px',
        backgroundColor:'black',
        display:'inline-block'
    }
    return(
    
           <Fade bottom><img style={style}/></Fade>
    
    )
}