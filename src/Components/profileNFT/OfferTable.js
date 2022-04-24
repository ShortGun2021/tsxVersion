import React from 'react'
import {BsArrowDownLeft} from 'react-icons/bs';

const OfferTable = (props) => {
  return (
    <>
    <table className="table table-hover">
  <thead>
  <tr>
      <th scope="col"><h5><BsArrowDownLeft/> <span style={{marginLeft:"15px"}}>{props.offer}</span></h5></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
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

export default OfferTable