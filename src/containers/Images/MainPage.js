import React,{Component} from 'react'
import Fade from 'react-reveal/Fade'
import SelectDropDown from './drop'
import ImCard from './ImCard'
export default class Image extends Component{
    state={
        data:{},
        date:{}
    }
   
    componentDidMount(){
        fetch('https://images-api.nasa.gov/search?q=nebula')
        .then(response=>response.json())
        .then(respon=>
            this.setState({
                data:{
                    ...respon.collection
                }
            })
        )
    }
    render(){
        const style={
            width:'100%',
            height:'750px',
            
            
        }
        const sidebar={
            width:'30%',
            height:'40%',
            float:'left',
            boxShadow:'1px 1px 10px grey',
            marginTop:'50px',
            marginLeft:'5%'
            
        }
        const imagedraw={
            border:'1px solid white',
            width:'60%',
            height:'80%',
            float:'right',
            marginTop:'50px',
            marginRight:'5%',
            backgroundColor:'black',
            paddingLeft:'20px'

        }
        const head={
            color:'white',
            fontSize:'25px',
            marginTop:'30px',
            marginLeft:'40px',
            fontWeight:'600'
        }
        const head1={
            color:'white',
            fontSize:'25px',
            marginTop:'40px',
            marginLeft:'40px',
            fontWeight:'600',
        }
        const Options1 = [
            { key: '1', value: 'af', text: '2016' },
            { key: '2', value: 'ax', text: '2017' },
            { key: '3', value: 'al', text: '2018' },
            { key: '4', value: 'dz', text: '2019' },
            { key: '5', value: 'dz', text: '2020' },
            { key: '6', value: 'dz', text: '2021' },
            { key: '7', value: 'dz', text: '2022' },
            { key: '8', value: 'dz', text: '2023' },
            { key: '9', value: 'dz', text: '2024' },
            { key: '10', value: 'dz', text: '2025' },
        ]
       console.log(this.state.data)
       const {items}=this.state.data
       console.log(items)
        return(
            <div style={style}>
            <Fade left><div style={sidebar}>
               <p style={head}>Select By Year:</p>
                <SelectDropDown Options={Options1}/>
                <p style={head1}>Filter</p>
                <SelectDropDown Options={Options1}/>
            </div></Fade>
                <div style={imagedraw}>
                    <ImCard/>
                    <ImCard/>
                    <ImCard/>
                    <ImCard/>
                    <ImCard/>
                    <ImCard/>
                    <ImCard/>
                    <ImCard/>
                    

                </div>
                
            </div>
        )
    }
}