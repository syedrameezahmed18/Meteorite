import React, { Component,Fragment } from 'react';
import Headview from "./head.js";
import "../../overall.css"
import Cont from "./contains.js";
import MainAnimated from '../Nav'
import Material from './Material'
import Footer from './Footer'
import History from '../Links/history'
import MainPage from '../Images/ImagePage'
import Info from './info'
import {Route} from 'react-router-dom'
import Search from '../Images/Search'
import shower from '../../images/shower.png'
import car1 from '../../images/car1.jpg'
import met from "../../images/meteor.png";
import Fade from 'react-reveal/Fade'
import {Link} from 'react-router-dom'
import {Link as Scli} from 'react-scroll'
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
               <div className="packet">
                    <div className="cover">
                        {/*<Headview />*/}
                        <Fade top >
                            <div className="forhead">
                                <div className="left">
                                    <img src={met} alt="images" width="50px" height="50px"/>
                                    <p>Meteorite Tavern</p>
                                </div>
                                <div className="right">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Scli activeClass="active" className="asteroidal" to="ast" spy={true} smooth={true} duration={500} >Asteroidal Data</Scli></li>
                                        <li><Scli activeClass="active" className="image" to="img" spy={true} smooth={true} duration={500} >Image Library</Scli></li>

                                    </ul>
                                </div>
                                
                             </div>
                        </Fade>
                        <Info/>
                    </div>
                    <div className="caro">
                    <Cont/>
                    </div>
                    <div className='ast'>
                        <Material floatimg={'left'} floattext={'right'} img={shower} path={"/history"}/>
                    </div>
                    <div className='img'>
                    <Material floatimg={'right'} floattext={'left'} img={car1} path={"/imagelibrary"}/>
                    </div>
                    <Footer/>

                </div>)
                }}/>
                <Route path="/imagelibrary" exact render={()=>{
                   return(
                   <Fragment>
                        <MainPage/>
                    </Fragment>
                    )
                }}/>
                <Route path="/history" exact render={() => {
                    return(
                        <Fragment>
                            <History />
                        </Fragment>
                    )
                }}/>
            </div>
        );
    }
    
}
 
export default Main;