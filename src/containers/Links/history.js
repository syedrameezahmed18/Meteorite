import React, { Component,Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { render } from 'react-dom';
import Uihandler from "./uihandler.js"
import HistoryUI from './historyui';
import met from "../../images/meteor.png";
import {BrowserRouter as Router,Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Headview from '../homepage/head'
import Main from '../homepage/main'
import MainPage from '../Images/ImagePage'
import nasaapi from '../../Asteriodapi.txt'
//wnesuSSTNIu3l3LzPm3JYsT2rPL0U31CULIRGkT3  //my recovering api key
class History extends Component {

    constructor()
    {
        super()
        
            this.state={
                datum:[],
                dang:""
            }
        
    }
     
    componentDidMount()
    {
        let nasa=nasaapi
        fetch(nasa)
        .then(resp => resp.json())
            .then(piece => {
                console.log(piece.close_approach_data)
                this.setState({datum:piece.close_approach_data})
                this.setState({dang:piece.is_potentially_hazardous_asteroid})
            })
    }
   render()
   {
       
       return(
           
           <div className="background">
               
                   <Route path="/history" exact render={()=>{
                       return(
                           <div className="thepage">
                       <div className="coveralt">
                       <Fade top >
                        <div className="forhead">
                            <div className="left">
                                <img src={met} alt="images" width="50px" height="50px"/>
                                <p>Meteorite Tavern</p>
                            </div>
                            <div className="right">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/history">Asteroidal Data</Link></li>
                                    <li><Link to="/imagelibrary">Image Library</Link></li>
                                </ul>
                            </div>         
                        </div>
                        </Fade>
                        <Fragment>
                            <Fade top><p className="super" > Astronomical Data</p></Fade>
                            <Fade bottom><p className="mini">All the recent meteor showers of the past years and upcoming future</p></Fade>
                        </Fragment>
                       </div>
                       <div className="rerender">
                            {this.state.datum.map(data => 
                             (<HistoryUI 
                                 truedata={data.close_approach_date} 
                                 danger={this.state.dang} 
                                 des={Math.floor(data.relative_velocity.kilometers_per_second)} 
                                 miss={Math.floor(data.miss_distance.kilometers)}
                             />))} 
                       </div>
                       </div>
                        )
                   }}/>
                    
                    <Route path="/" exact render={()=> {
                       return(
                            <Fragment>
                                <Main />
                            </Fragment>
                            )
                    }}/>

                    <Route path="/imagelibrary" exact render={()=> {
                       return(
                            <Fragment>
                                <MainPage />
                            </Fragment>
                            )
                    }}/>
                
               
           </div>
       )
   }

}
export default History;