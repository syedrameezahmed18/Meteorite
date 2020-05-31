import React, { Component } from 'react';
import Headview from "./head.js";
import "../../overall.css"
import Cont from "./contains.js";
import MainAnimated from '../Nav'
import Material from './Material'
import Footer from './Footer'
import history from '../Links/history'
import Image from '../Images/MainPage'

class Main extends Component {
    constructor()
    {
        super()
        this.state = { 
            selected:"",
        }
    }
   /* componentDidMount(){
        fetch('https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=DEMO_KEY')
        .then(response=>response.json())
        .then(response=>this.setState(prev=>{
            prev.data.push(response)
        }
        ))
        console.log(this.state.data)
}*/
    
    
    render() { 
        /*const {data}=this.state */      
        return (  
            <div className="background">
                <Headview />
               {/* <Cont />
                <Material/>*/}
                <Image/>
                <Footer/>
            </div>
        );
    }
    
}
 
export default Main;