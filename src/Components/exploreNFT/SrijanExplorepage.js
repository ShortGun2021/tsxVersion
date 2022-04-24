import React from "react";
import { AutoSizer } from "rsuite/esm/Picker/VirtualizedList";
import TabPanel from "./SrijanTabPanel";
import { NavLink } from "react-router-dom";
// import { CardBody,CardTitle,CardSubtitle,Button,Card,CardImg,CardText,CardGroup } from 'reactstrap'
import Cards from "./SrijanCards";
// import TabPanel from './TabPanel';
const SrijanExplorepage = () => {
  return (
    <>
      <div className="col-md-6 mb-md-0 mb-2 mx-auto mt-5" style={{paddingTop:"40px"}}>
        <div>
          <h1 style={{ textAlign: "center" }}>Explore Collections</h1>
          <p style={{ textAlign: "center" }}>
            loream ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <TabPanel />
        </div>
      </div>
      {/* <div> */}
      {/* <TabPanel /> */}
      <div
        className="col-12 mb-5 mt-5"
        style={{
          display: "flex",
          alignContent: "center",
          margin: AutoSizer,
          flexDirection: "row",
          flexWrap: "wrap",
         
        }}
      >
        {/* <div style={{marginLeft: '25px'}}> */}
        {/* <div> */}
        <NavLink activeClassName="is-active" to="/nftpage">
        <div className="col-xs-6">
          <Cards />
        </div>
        </NavLink>
        <NavLink activeClassName="is-active" to="/nftpage">
        <div className="col-xs-6">
          <Cards />
        </div>
        </NavLink>
        <NavLink activeClassName="is-active" to="/nftpage">
        <div className="col-xs-6">
          <Cards />
        </div>
        </NavLink>
        <NavLink activeClassName="is-active" to="/nftpage">
        <div className="col-xs-6">
          <Cards />
        </div>
        </NavLink>
        <NavLink activeClassName="is-active" to="/nftpage">
        <div className="col-xs-6">
          <Cards />
        </div>
        </NavLink>
        <NavLink activeClassName="is-active" to="/nftpage">
        <div className="col-xs-6">
          <Cards />
        </div>
        </NavLink>
        <NavLink activeClassName="is-active" to="/nftpage">
        <div className="col-xs-6">
          <Cards />
        </div>
        </NavLink>
        <NavLink activeClassName="is-active" to="/nftpage">
        <div className="col-xs-6">
          <Cards />
        </div>
        </NavLink>
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default SrijanExplorepage;
