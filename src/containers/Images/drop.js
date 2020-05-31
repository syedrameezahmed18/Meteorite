import React from 'react'
import { Select } from 'semantic-ui-react'


const sel={
    width:"70%",
    height: "40px",
    border: '2px solid grey',
    backgroundColor:'grey',
    marginLeft:'40px',
    borderRadius:'0px',
    marginTop:'-60px',
    boxShadow:'2px 2px 7px white',

    
}
function SelectDropDown(props){
    return(
  <Select style={sel} placeholder='Select Start Year' options={props.Options} />
    );

}
export default SelectDropDown
