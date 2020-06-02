import React,{Component} from 'react'
import shower from "../../images/shower.png"
import Fade from 'react-reveal/Fade'
import "../../overall.css"
import {Redirect} from 'react-router-dom'
export default class Material extends Component{
    state={
        toPage:false
    }
   
    render(){
       const handleclick=()=>{
            this.setState({toPage:true})
        }
    const style={
        border: '0.1px solid white',
        height: '550px',
        width: '100%',
        marginTop:'-110px',
        backgroundColor:'white',
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
        color:'black',
        marginTop:'10%',
        fontWeight:'700'
    }
    const tex={
        float:'left',
         fontSize:'30px',
         color:'black',
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
    if(this.state.toPage===true){
        return(
            <Redirect to="/imagelibrary"/>

        )
    }
    return(
        <div className="cont" style={style}>
            <div className="right-align" style={right}>
                <Fade top><h1 style={righth}><i>Images</i></h1></Fade>
                <Fade right><p style={tex}>
                   <i>Get The Most Beautiful Images Of Observable Universe From Nasa's Image Library.</i>
                </p></Fade>
              <Fade bottom><button className="btnst" style={btnstyle} onClick={handleclick}>Go To Images</button></Fade>
            </div>
            
            <Fade top><img src={shower} style={left}/></Fade>
            
        </div>
    )
}
}