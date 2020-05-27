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
    }
    render() { 
        return (  
            <div className="background">
                <Headview />

                <!-- partial error portion -->
                 <div className="containercontrol">
                    <Cont onClick={this.timeshow} />
                </div>
            </div>
        );
    }
    
}
 
export default Main;