import React from 'react'
import {FaBabyCarriage} from 'react-icons/fa';

const ActivitiesTable = () => {
  return (
    <>
    <table className="table">
  <thead style={{fontSize:"large"}}>
    <tr>
      <th scope="col-1"></th>
      <th scope="col-4">Item</th>
      <th scope="col-1">Price</th>
      <th scope="col-1">Quantity</th>
      <th scope="col-2">From</th>
      <th scope="col-1">To</th>
      <th scope="col-2">Time</th>
    </tr>
  </thead>
  <tbody style={{fontSize:"large"}}>
    <tr>
      <th scope="row"><h6><FaBabyCarriage/><span style={{marginLeft:"5px"}}>Minted</span></h6></th>
      <td><img src="https://strugend.com/assets/images/logo/selogo4.png" style={{height:"40px", width:"80px", marginRight:"10px"}} className="rounded float-left" alt="logo"/>Untitled Collection #123456 <br/> <h6>Strugend Backside</h6> </td>
      <td>---</td>
      <td>1</td>
      <td><a href="/">NullAddress</a></td>
      <td><a href="/">You</a></td>
      <td>4 days ago</td>
    </tr>
    <tr>
      <th scope="row"><h6><FaBabyCarriage/><span style={{marginLeft:"5px"}}>Minted</span></h6></th>
      <td><img src="https://strugend.com/assets/images/logo/selogo4.png" style={{height:"40px", width:"80px", marginRight:"10px"}} className="rounded float-left" alt="logo"/>Untitled Collection #123456 <br/> <h6>Strugend Backside</h6> </td>
      <td>---</td>
      <td>1</td>
      <td><a href="/">NullAddress</a></td>
      <td><a href="/">You</a></td>
      <td>4 days ago</td>
    </tr>
    <tr>
      <th scope="row"><h6><FaBabyCarriage/><span style={{marginLeft:"5px"}}>Minted</span></h6></th>
      <td><img src="https://strugend.com/assets/images/logo/selogo4.png" style={{height:"40px", width:"80px", marginRight:"10px"}} className="rounded float-left" alt="logo"/>Untitled Collection #123456 <br/> <h6>Strugend Backside</h6> </td>
      <td>---</td>
      <td>1</td>
      <td><a href="/">NullAddress</a></td>
      <td><a href="/">You</a></td>
      <td>4 days ago</td>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default ActivitiesTable