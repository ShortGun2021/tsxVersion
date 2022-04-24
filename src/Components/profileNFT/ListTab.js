import React from 'react'
import {BsFillInfoCircleFill} from 'react-icons/bs';

const ListTab = (props) => {
  return (
    <>
    <table className="table table-hover">
  <thead>
  <tr>
      <th scope="col">
      <h5><button style={{backgroundColor:"white"}} href="#"><BsFillInfoCircleFill/></button> <span style={{marginLeft:"3px"}}>{props.list}</span></h5>
      </th>
      <th scope="col"><a href="#LearnMode"><h6>Learn More</h6></a></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"><h5 style={{float:"right"}}><a href="#cancel" style={{marginRight:"6px"}}>Cancel all listings and offers</a><button style={{backgroundColor:"white"}} href="#"><BsFillInfoCircleFill/></button></h5></th>
    </tr>
    <tr>
      <th scope="col">Item</th>
      <th scope="col">Unit Price</th>
      <th scope="col">USD Unit Price</th>
      <th scope="col">Floor Difference</th>
      <th scope="col">From</th>
      <th scope="col">Expiration</th>
      <th scope="col">Received</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>  
  </tbody>
</table>
    </>
  )
}

export default ListTab