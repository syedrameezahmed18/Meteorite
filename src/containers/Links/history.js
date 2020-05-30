import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { render } from 'react-dom';

class History extends Component {

    constructor()
    {
        super()
        this.state={
            start_date:"",
            end_date:""
        }
    }

apicall = () => {

    let st=document.querySelector(".one");
    let en=document.querySelector(".two");
    console.log(st.value);
    if(st.value === "" || en.value === "")
    {
        alert("empty info");
    }
    else
    {
        this.setState({start_date:st.value});   //ye cheez state ko update nhi karhi issue he
        this.setState({end_date:en.value});
    }
    console.log(this.state.start_date);
    let startstring=`start_date=${this.state.start_date}`;
    let stringend=`end_date=${this.state.end_date}`;
    console.log(startstring);
    fetch(`https://api.nasa.gov/neo/rest/v1/feed?${startstring}&${stringend}&api_key=DEMO_KEY`)
    .then( resp => resp.json())
        .then(data => {
            console.log(data);
            
        })
}


    render() {
        return(
             <div className="historic">
                 <Fade top><p>History</p></Fade>
                  <Fade right>
                    <div className="holds1">
                    <input type="text" className="form-control one" placeholder="Starting Date i.e YY-MM-DD"/>
                    <input type="text" className="form-control two" placeholder="Ending Date i.e YY-MM-DD"/>
                 </div>
                 <div className="bottomhold">
                     <button className="btn btn-warning" onClick={this.apicall}>Search</button>
                 </div>
              </Fade>
          </div>
          );
        }

}
export default History;