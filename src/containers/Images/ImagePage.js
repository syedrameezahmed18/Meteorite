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
                <div className="coversearch">
                    <Headview/>
                    
                 <div class="input-group" style={wid}>
                        <input style={style} type="text" class="form-control" placeholder="Search Pictures" ref={element=>this.input=element} />
                            <div class="input-group-append">
                                <button style={btn} class="btn btn-secondary" type="button" onClick={e=>this.check(e)}>
                               <FaSearch size={25}/>                          
                                </button>
                            </div>
                    </div>
                    
                    
                </div>
              {
                this.state.data.items!==undefined && (
                <ImageDrawer data={this.state.data}/>
                )}
       
            </Fragment>
        )
    }
}