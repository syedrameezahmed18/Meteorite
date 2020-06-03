import React,{Component} from 'react'
import shower from "../../images/shower.png"
import Fade from 'react-reveal/Fade'
import "../../overall.css"
export default class Material extends Component{
    render(){
    const style={
        border: '0.1px solid black',
        height: '550px',
        width: '100%',
        marginTop:'-110px',
        backgroundColor:'black',
        color:'white'
    }
    const right={
        width: '50%',
        height: '550px',
        float : 'right'
    }
    const left={

        width: '50%',
        height: '550px',
        float : 'left',
    }
    const righth={
        textAlign:'center',
        fontSize:'60px',
        color:'white',
        marginTop:'10%',
        fontWeight:'700'
    }
    const tex={
        float:'left',
         fontSize:'30px',
         color:'white',
         marginTop:'3%'
        }
    const btnstyle={
        border: '1px solid orange',
        backgroundColor:'white',

        width: '30%',
        height: '60px',
        marginLeft:'35%',
        marginTop:'5%'
    }
    return(
        <div className="cont" style={style}>
            <div className="right-align" style={right}>
                <Fade top><h1 style={righth}><i>Images</i></h1></Fade>
                <Fade right><p style={tex}>
                   <i>Get The Most Beautiful Images Of Observable Universe From Nasa's Image Library.</i>
                </p></Fade>
              <Fade bottom><button className="btnst" style={btnstyle}>Go To Images</button></Fade>
            </div>
            
            <Fade top><img src={shower} style={left}/></Fade>
            
        </div>
    )
}
}