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
import Footer from '../homepage/Footer'
import Lightspeed from 'react-reveal/LightSpeed'
import Specific from './specificui';
//wnesuSSTNIu3l3LzPm3JYsT2rPL0U31CULIRGkT3  //my recovering api key

let firstv=""
let endv=""
class History extends Component {

    constructor()
    {
        super()
        
            this.state={
                datum:[],
                dang:"",
                startdate:"",
                enddate:"",
                displaychoice:"all",
                haz:"",
                specdatum:[],
                elemcount:"",
                newspec:[]
            }
        
    }
    
    pure=()=>
    {
        let nasa=nasaapi
        fetch(nasa)
        .then(resp => resp.json())
            .then(piece => {
                console.log(piece.close_approach_data)
                this.setState({datum:piece.close_approach_data})
                this.setState({dang:piece.is_potentially_hazardous_asteroid})
                this.setState({displaychoice:"all"})
                
            })
        
            
    }
    customizer = (e) => {
        e.preventDefault();
        let val1=document.querySelector(".alpha");
        let val2=document.querySelector(".beta");
        if(val1.value === "" || val2.value==="")
          {
            alert("empty fields");
          }
        else{
         firstv=val1.value;
         endv=val2.value;
         this.setState({startdate:firstv})
         this.setState({enddate:endv})
    
        let controlledapi=`https://api.nasa.gov/neo/rest/v1/feed?start_date=${firstv}&end_date=${endv}&api_key=wnesuSSTNIu3l3LzPm3JYsT2rPL0U31CULIRGkT3`
        fetch(controlledapi)
            .then( resp => resp.json())
                .then(newdata => 
                    {
                        console.log(newdata);
                        console.log(firstv);
                        console.log(newdata.near_earth_objects[firstv])
                        this.setState({specdatum:newdata.near_earth_objects[firstv]})
                        this.setState({newspec:newdata.near_earth_objects[endv]})
                        this.setState({elemcount:newdata.element_count})
                       

                    })
        this.setState({displaychoice:"specific"})
        }
    }
   render()
   {
       
       return(
           
           <div className="background">
               
                   <Route path="/history" exact render={()=>{
                       return(
                           <div className="thepage">
                       <div className="coveralt">
                       <Headview/>
                        <Fragment>
                            <Fade top><p className="super">Astronomical Data</p></Fade>
                            <Fade bottom><p className="mini">All the recent meteor showers of the past years and upcoming future</p></Fade>
                            <div className="formed">
                            <input type="text" placeholder="start date: i.e 2000-01-01 (use exact format)" className="form-control alpha"/>
                            <input type="text" placeholder="end date: i.e 2000-01-02 (use exat format)" className="form-control beta"/>
                            </div>
                            <div className="buttony">
                            <button className="btn btn-success" onClick={e=>this.customizer(e)}>Search</button>
                            <button className="btn btn-primary" onClick={this.pure}>All Data</button>
                            </div>
                        </Fragment>
                       </div>
                       <div className="machined">
                           {
                               this.state.displaychoice === "all" ? 
                               ( 
                                <div className="rerender">
                                <Lightspeed><p class="tu">ALL DATA</p></Lightspeed>
                                 {this.state.datum.map(data => 
                                  (<HistoryUI 
                                      truedata={data.close_approach_date} 
                                      danger={this.state.dang} 
                                      des={Math.floor(data.relative_velocity.kilometers_per_second)} 
                                      miss={Math.floor(data.miss_distance.kilometers)}
                                  />))} 
                                  </div>
                               )
                               :(
                                <div className="rerender">
                                    <Lightspeed><p class="tu">SPECIFIC DATA</p></Lightspeed>
                                    <Lightspeed><p>{`Element Count : ${this.state.elemcount}`}</p></Lightspeed>
                                    {console.log(this.state.elemcount)}
                                    {this.state.specdatum.map((fresh,i) => 
                                        (
                                            <Specific 
                                            date={fresh.close_approach_data[0].close_approach_date}
                                            diameter={Math.floor(fresh.estimated_diameter.feet.estimated_diameter_max)}
                                            hazard={fresh.is_potentially_hazardous_asteroid}
                                            name={fresh.name}
                                            />
                                            //have work to do here //data iteration issues
                                        ))}
                                        {this.state.newspec.map((halt,i) =>
                                        (
                                            <Specific 
                                            date={halt.close_approach_data[0].close_approach_date}
                                            diameter={Math.floor(halt.estimated_diameter.feet.estimated_diameter_max)}
                                            hazard={halt.is_potentially_hazardous_asteroid}
                                            name={halt.name}
                                            />
                                        )) } 
                                </div>
                               )
                           }
                       
                       </div>
                            <Footer />
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