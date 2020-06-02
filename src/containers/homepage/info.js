import React,{Fragment} from 'react'
import Fade from 'react-reveal/Fade'


export default function Info(){
    const style={
        border:'3px solid orange',
        width: '10%',
        height: '50px',
        backgroundColor:'orange',
        fontSize:'25px',
        fontWeight:'400',
        opacity:'0.8',
        marginTop:'2%',
        

    }
    return(
        <Fragment>
        <Fade top><p className="super">Explore what lies beyond your reach!</p></Fade>
        <Fade bottom><p className="mini">Explore NASA's Asteroid & Image Library</p></Fade>
        <div className="hh">
       {/* <button className="check-btn" style={style}>Check</button>*/}
        </div>
        </Fragment>
    )
}