import React ,{Component} from 'react'
import {  TiHeartFullOutline} from 'react-icons/ti/index'
import Fade from 'react-reveal/Fade'


export default class Footer extends Component{
    render(){
        const foot={
            width: '100%',
            height: '65px',
            backgroundColor:'black',
            marginTop:'-180px'
        }
        const p={
            fontSize:'20px',
            textAlign:'center',
            marginTop:'30px'

        }
        const t={
            height:'30px',
            width:'30px'
        }
        const repo={
            textAlign:'center',
            color:'white',
            marginTop:'-1%',
        }
        return(
            <div className="footer" style={foot}>
               <Fade bottom>
                   <p style={p}>
                       Made With 
                       <TiHeartFullOutline color="#e0245e" style={t}/>
                        By Ali & Rameez
                    </p>
                </Fade>
                <Fade bottom>
                    <p style={repo}>
                        <a href="https://github.com/syedrameezahmed18/Meteorite">
                            Check Out Original Repository
                        </a>
                    </p>
                </Fade>
            </div>
        )
    }
}