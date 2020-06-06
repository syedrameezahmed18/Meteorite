import React, {Component,Fragment } from 'react'
import Search from './Search'
import ImageDrawer from './MainPage'
import Headview from '../homepage/head'
import {FaSearch} from 'react-icons/fa'
import Fade from 'react-reveal'
export default class MainPage extends Component{
    state={
        search:'',
        data:{},
        load:false
    
    }
    check(e){
        e.preventDefault()
        this.setState({load:true})
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
        this.setState({load:false})

        
    }
    
    render(){
        console.log(this.state.load)
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
            height:'60px',
            width:'55px',
            marginTop:'240px',
            backgroundColor:'black',
            border:'0.1px solid black',
            opacity:'0.7'
           
        }
        const wid={
            width:'80%',
            marginLeft:'10%',
        }
        
        return(
            <Fragment>
                <div className="coversearch">
                    <Headview/>
                    
                 <div className="input-group" style={wid}>
                        <input style={style} type="text" className="form-control" placeholder="Search Pictures" ref={element=>this.input=element} />
                            <div className="input-group-append">
                                <button style={btn} className="btn btn-secondary" type="button" onClick={e=>this.check(e)}>
                               <FaSearch size={25}/>                          
                                </button>
                            </div>
                    </div>
                    
                {this.state.load===true && (
                    <h1>Loading...</h1>
                )} 
                </div>
              {
                this.state.data.items!==undefined && (
                <ImageDrawer data={this.state.data}/>
                )}
       
            </Fragment>
        )
    }
}