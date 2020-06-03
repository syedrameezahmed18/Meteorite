import React,{Component} from 'react'



export default class Search extends Component{
    render(){
        const style={
            backgroundColor:'black',

        }
        const head={
            color:'white'
        }
        return(
            <div style={style}>
            <h1 style={head}>Search</h1>
            </div>
        )
    }
}