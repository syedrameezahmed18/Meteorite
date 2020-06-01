import React,{Component} from 'react'
import Fade from 'react-reveal/Fade'
import SelectDropDown from './drop'
import ImCard from './ImCard'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'



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
            marginTop:'50px',
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
        let info=[]
        val.map(elem=>{
            obj[elem].data.map(ele=>{
                info.push(ele)
            })
        })
        console.log(val)

        let images=[]
        val.map(elem=>{
        obj[elem].links!==undefined && (
            obj[elem].links.map(ele=>{
                images.push(ele.href)
            })
        )
        })
        console.log(images)
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
                           <Modal style={inlineStyle} trigger={
                           <a><ImCard className="imagedis" key={ele} img={ele} /></a>
                            }>
                                <Header icon='rocket' content='Image Description' />
                                <Modal.Content style={{marginTop:'-100px'}}>
                                <img style={{
                                    height:'200px',
                                    width:'200px',
                                    float:'left',
                                    marginBottom:'20px'
                                }}
                                src={ele}/>
                                </Modal.Content>
                                
                            </Modal>

                        )
                    }

                </div>
                
            </div>
        )
    }
}
