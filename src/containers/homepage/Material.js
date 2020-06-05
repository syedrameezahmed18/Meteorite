import React,{Component, Fragment} from 'react'
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
    
    const right={
        width: '50%',
        height: '550px',
        paddingTop:'10%',

        float : 'right',
    }
    const right2={
        width: '50%',
        height: '100%',
        float : 'left',
    }
    if(this.state.toPage===true){
        return(
            <Redirect to="/imagelibrary"/>
        )
    }
    return(
        <div className="cont">
            <div className="right-align" style={this.props.floattext==='right' ? right : right2}>
                <Fade top><h1 className="right-align-h"><i>
                    {this.props.floatimg==='right' ?
                    'Images'
                    :
                    'Asteroids Attacks'
    }
                    </i></h1></Fade>
            {this.props.floatimg==='right' ?
            (<Fragment>
                <Fade left><p className="tex">
                   <i>Get The Most Beautiful Images Of Observable Universe From Nasa's Image Library.</i>
                </p></Fade>
                </Fragment>)
                :
                (
                    <Fragment>
                <Fade right><p className="tex">
                   <i>Get All The Asteroidal Attacks Data From Nasa's Asteroidal Data Library</i>
                </p></Fade>
                </Fragment>
                )
    }

              <Fade bottom><button className="btnst" onClick={handleclick}>
              
                  Explore

                  
                  </button></Fade>
            </div>
            {this.props.floatimg==='left' &&
            <Fade left><img src={this.props.img} className="left1"/></Fade>}
             {this.props.floatimg==='right' &&
            <Fade right><img src={this.props.img} className="left2"/></Fade>}
            
        </div>
    )
}
}