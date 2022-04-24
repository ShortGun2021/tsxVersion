import React from 'react'
import {Toggle} from 'rsuite';
import {BsFillGearFill} from 'react-icons/bs';
import OfferTable from './OfferTable';
const OffersTab = (props) => {
  return (
    <>
    <div  style={{display:"flex", flexDirection:"row", float:"right"}}>
      <h5 style={{paddingTop:"9px", marginRight:"15px"}}>
        <span style={{marginRight:"5px"}}>Show all Offers</span>
        <Toggle />
      </h5>
        <h3 style={{marginRight:"10px"}}><button style={{backgroundColor:"white"}} href="#"><BsFillGearFill/></button></h3>     
    </div>
    <div>
      <OfferTable offer={props.offerType}/>
    </div>
    </>
  )
}

export default OffersTab