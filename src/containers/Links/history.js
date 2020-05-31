import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { render } from 'react-dom';
import Uihandler from "./uihandler.js"
import HistoryUI from './historyui';
//wnesuSSTNIu3l3LzPm3JYsT2rPL0U31CULIRGkT3  //my recovering api key
class History extends Component {

    constructor()
    {
        super()
        this.state={
            haz:"",
            closedata:[],
            isLoading:true
            
        }
    }
        componentDidMount(){
        
            fetch(`https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=wnesuSSTNIu3l3LzPm3JYsT2rPL0U31CULIRGkT3`)
            .then( resp => resp.json())
             .then(data => {
                 console.log(data);
                let {links,estimated_diameter,is_potentially_hazardous_asteroid, close_approach_data}=data;
                close_approach_data.forEach((num,i)=>
                {
                    let {close_approach_date}=num;
                    console.log(close_approach_date);
                   // this.setState({closedata:this.state.closedata.push(close_approach_date),isLoading:false})
                    this.setState(prev => (prev.closedata.push(close_approach_date)))
                    this.setState({isLoading:false})
                }
                )
                console.log(is_potentially_hazardous_asteroid);
                
                this.setState({haz:is_potentially_hazardous_asteroid})
               }) 
                 //let closekeys= Object.keys(close_approach_data)
                
                 /*closekeys.forEach(key2 => 
                    {   console.log(close_approach_data[key2]);
                        console.log(close_approach_data[key2]["close_approach_date"])
                        this.setState({closedata:close_approach_data[key2]["close_approach_date"]})
                        
                    //console.log(key2,close_approach_data[key2])
                    
                })*/
                
            
        }
    


            /*let x="absolute_magnitude_h";
            console.log(data);
            let {links ,element_count, near_earth_objects}=data;
            const keys = Object.keys(links);
            keys.forEach((key,i) => console.log(key,links[key]))
            const key1 = Object.keys(near_earth_objects);
            key1.forEach((kay,i) =>
               {console.log(kay,near_earth_objects[kay])
                Object.keys(near_earth_objects[kay]).forEach((keyinner) => {
                
                console.log(keyinner,near_earth_objects[kay][keyinner])

                Object.keys(near_earth_objects[kay][keyinner]).forEach((innest)=> 
                console.log(innest,near_earth_objects[kay][keyinner][innest]))}
                )
            console.log(element_count)}
            )  */

    render() {
        
           let {closedata}= this.state
           console.log(closedata);
           /*let renderkey=Object.keys(closedata)
            console.log(closedata);
            if(this.state.isLoading)
            {   return(
                <div className="loadingtimes">
                <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
                </div>
                <p>LOADING....</p>
                </div>)
            }
            else*/
        return(
            <div></div>
            /*<div class="copies">
            <Uihandler />
            
            {renderkey.map(elem =>
            {       return(
                    <HistoryUI danger={this.state.haz} truedata={closedata} /> )
            })}
            </div>*/
        ) 
    }

}
export default History;