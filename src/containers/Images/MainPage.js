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
            <div className="style-cover" style={style}>
              <div className="imagedraw">
                     <h1>{`Found ${val.length} Pictures`}</h1>
                    {
                        images.map(ele=>
                           <a href={ele} key={ele}><ImCard className="imagedis" key={ele} img={ele} /></a>
                           

                        )
                    }
                    <Footer/>
                </div>
                
            </div>
        )
    }
}
