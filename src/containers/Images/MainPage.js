import React,{Component} from 'react'
import Fade from 'react-reveal/Fade'
import ImCard from './ImCard'
import Footer from '../homepage/Footer'


export default class ImageDrawer extends Component{
    
    render(){
        const style={
            border:'3px solid black',
            width:'100%',
            height:'100%',
            backgroundColor:'black',
                        
        }
        const imagedraw={
            width:'100%',
            height:'100%',
            marginTop:'0px',
            backgroundColor:'black',

        }
        const inlineStyle = {
            height: 'auto',
            top: 'auto',
            left: 'auto',
            bottom: 'auto',
            right: 'auto',
            
          }
          
        
        let obj={
            ...this.props.data.items
        }
        let val=Object.keys(obj)
        /*let info=[]
        val.map(elem=>{
            obj[elem].data.map(ele=>{
                info.push(ele)
            })
        })
        console.log(info)*/

        let images=[]
        val.map(elem=>{
        obj[elem].links!==undefined && (
            obj[elem].links.map(ele=>{
                images.push(ele.href)
            })
        )
        })
        /*console.log(images)*/
       /* let inf=[]
        val.map(elee=>{
          inf.push(info[elee].date_created.slice(0,4))


            
        })
        console.log(inf)
        let infi=[]
        
                info.map(ele=>{
                    infi.push({
                         ...ele,
                        [ele.date_created.slice(0,4)]:ele})
                })
    
        
        console.log(infi)
        inf.sort(function(a,b){return parseInt(String(inf[a]))-parseInt(String(inf[b]))})
        console.log(inf)*/
        return(
            <div style={style}>
              <div style={imagedraw}>
                     <h1 
                     style={{
                         color:'white',
                         fontSize:'40px',
                         opacity:'0.7',
                         textAlign:'center'
                    
                    }}>{`Found ${val.length} Pictures`}</h1>
                    {
                        images.map(ele=>
                           <a href={ele}><ImCard className="imagedis" key={ele} img={ele} /></a>
                           

                        )
                    }
                    <Footer/>
                </div>
                
            </div>
        )
    }
}
