import React, { Component } from 'react';
import Headview from "./head.js";
import "../overall.css"
import Cont from "./contains.js";

class Main extends Component {
    constructor()
    {
        super()
        this.state = { 
            time:""
        }

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

            </div>
        );
    }
    
}
 
export default Main;