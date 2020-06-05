import React, {Component,Fragment } from 'react'
import Search from './Search'
import ImageDrawer from './MainPage'
import Headview from '../homepage/head'
import {FaSearch} from 'react-icons/fa'
import Fade from 'react-reveal'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import History from "../Links/history"
import met from "../../images/meteor.png";
import Main from '../homepage/main'
export default class MainPage extends Component{
    state={
        search:'',
        data:{},
    }
    check(e){
        e.preventDefault()
        const le=this.input.value
        fetch(`https://images-api.nasa.gov/search?q=${le}`)
        .then(response=>response.json())
        .then(respon=>
            this.setState({
                data:{
                    ...respon.collection
                },
                search:le,
                
            })
        )
       
        
    }
    
    render(){
        const style={
            height:'60px',
            marginTop:'240px',
            borderBottom:'5px solid black',
            borderTop:'1px solid transparent',
            borderRight:'1px solid transparent',
            borderLeft:'1px solid transparent',
            fontSize:'25px',
            opacity:'0.7',
            backgroundColor:'transparent',
            color:'white'

        }
        const btn={
            height:'55px',
            width:'55px',
            marginTop:'245px',
            backgroundColor:'black',
            border:'0.1px solid black',
            opacity:'0.7'
           
        }
        const wid={
            width:'60%',
            marginLeft:'20%',
        }
        
        return(

            <Fragment>
                
                {console.log(this.state.data)}
                <Router>
                
                    <Route path="/imagelibrary" exact render={()=>{
                       return(
                        <div className="coversearch">
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
                        <div class="input-group" style={wid}>
                        <input style={style} type="text" class="form-control" placeholder="Search Pictures" ref={element=>this.input=element} />
                            <div class="input-group-append">
                                <button style={btn} class="btn btn-secondary" type="button" onClick={e=>this.check(e)}>
                               <FaSearch size={25}/>                          
                                </button>
                            </div>
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
                    <Route path="/history" exact render={()=> {
                       return(
                            <Fragment>
                                <History />
                            </Fragment>
                            )
                    }}/>
                </Router>
                
              {
                this.state.data.items!==undefined && (
                <ImageDrawer data={this.state.data}/>
                )}
       
            </Fragment>
        )
    }
}