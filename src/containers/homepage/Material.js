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
    const style={
        border: '0.1px solid white',
        height: '550px',
        width: '100%',
        marginTop:'-200px',
        backgroundColor:'white',
        marginBottom:'200px',
    }
    const right={
        width: '50%',
        height: '550px',
        float : this.props.floattext,
    }
    const left={

        width: '50%',
        height: '500px',
        float : this.props.floatimg,
    }
    const left2={

        width: '40%',
        marginRight:'5%',
        height: '500px',
        borderRadius:'400px',
        float : this.props.floatimg,
    }
    const righth={
        textAlign:'center',
        fontSize:'60px',
        color:'black',
        marginTop:'10%',
        fontWeight:'700'
    }
    const tex={
        float:'right',
         fontSize:'30px',
         color:'black',
         marginTop:'3%',
         textAlign:'center'
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
                <Fade top><h1 style={righth}><i>
                    {this.props.floatimg==='right' ?
                    'Images'
                    :
                    'Asteroids Attacks'
    }
                    </i></h1></Fade>
            {this.props.floatimg==='right' ?
            (<Fragment>
                <Fade left><p style={tex}>
                   <i>Get The Most Beautiful Images Of Observable Universe From Nasa's Image Library.</i>
                </p></Fade>
                </Fragment>)
                :
                (
                    <Fragment>
                <Fade right><p style={tex}>
                   <i>Get All The Asteroidal Attacks Data From Nasa's Asteroidal Data Library</i>
                </p></Fade>
                </Fragment>
                )
    }

              <Fade bottom><button className="btnst" style={btnstyle} onClick={handleclick}>
              {this.props.floatimg==='right' ?

                  "Go To Images"
                  :
                  "Explore"
}
                  
                  </button></Fade>
            </div>
            {this.props.floatimg==='left' &&
            <Fade left><img src={this.props.img} style={left}/></Fade>}
             {this.props.floatimg==='right' &&
            <Fade right><img src={this.props.img} style={left2}/></Fade>}
            
        </div>
    )
}
}