import React, { Component } from 'react';
import Headview from "./head.js";
import "../overall.css"
import Cont from "./contains.js";
import {GET_DATA} from '../Data_APi'
//import Nav from "./Nav.js";
class Main extends Component {
    constructor()
    {
        
        super()
        this.state = { 
            time:""
        }
        GET_DATA();
       


    }
    componentDidMount(){
            /*Fetching Data From Nasa Asteroids API's */
        let data=[];
        fetch('https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=DEMO_KEY')
        .then(response=>response.json())
        .then(response=>data.push(response))
        console.log(data)
        return data
}
    
    timeshow = () => {

        var x= new Date();
        this.setState(this.state.time=x.getTime());
        console.log(x.getTime());
        // missing kaam he abhi filhal ye feature use nhi horha timeshow

    }
    render() { 
        return (  
            <div className="background">
                <Headview />
                <div className="section">
                    <Cont />
                </div>
            </div>
        );
    }
    
}
 
export default Main;