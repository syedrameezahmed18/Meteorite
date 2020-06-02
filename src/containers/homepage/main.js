import React, { Component,Fragment } from 'react';
import Headview from "./head.js";
import "../../overall.css"
import Cont from "./contains.js";
import MainAnimated from '../Nav'
import Material from './Material'
import Footer from './Footer'
import history from '../Links/history'
import MainPage from '../Images/ImagePage'
import Info from './info'
import {Route} from 'react-router-dom'
import Search from '../Images/Search'
import shower from '../../images/shower.png'
import car1 from '../../images/car1.jpg'

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
        return (  
            <div className="background">

                <Route path="/" exact render={()=>{
                return(
               <Fragment>
                    <div className="cover">
                        <Headview />
                        <Info/>
                    </div>
                    <Cont/>
                    <Material floatimg={'left'} floattext={'right'} img={shower}/>
                    <Material floatimg={'right'} floattext={'left'} img={car1}/>

                    <Footer/>

                </Fragment>)
                }}/>
                <Route path="/imagelibrary" exact render={()=>{
                   return(
                   <Fragment>
                        <MainPage/>
                    </Fragment>
                    )
                }}/>
            </div>
        );
    }
    
}
 
export default Main;