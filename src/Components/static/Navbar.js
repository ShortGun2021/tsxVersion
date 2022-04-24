import React from "react";
// import {MdOutlineAccountBalanceWallet} from 'react-icons/md';
import { AiOutlineSearch } from "react-icons/ai";
import WalletModal from "./WalletModal";
import {MdAccountBox, MdFavoriteBorder} from 'react-icons/md';
import {BsEyeFill, BsGrid3X3} from 'react-icons/bs';
import {RiSettings3Fill} from 'react-icons/ri';
import {FiLogOut, FiActivity, FiLogIn} from 'react-icons/fi';
import {GiRank3} from 'react-icons/gi';
// import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          style={{ position: "fixed", top: "0", width: "100%", zIndex: "1079", justifyContent:"center"}}
        >
          <div className="row">
            <div className="col-3">
          <a className="navbar-brand" href="#/" style={{fontSize:"x-large", fontWeight:"bolder", marginTop:"10px"}}>
            <img
              src="https://static.wixstatic.com/media/ccc269_fef35fd3445e47099ff2ba432afd2ead~mv2.png/v1/fill/w_60,h_50,al_c,usm_0.66_1.00_0.01,enc_auto/Original_edited_edited_edited.png"
              width="50"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
              style={{marginTop:"3px", marginRight:"10px"}}
            />
            SHORTGUN
          </a>

            </div>
            <div className="col-5">
            <form className="form-inline my-2 my-lg-0">
              <input
                style={{marginTop:"10px", marginLeft:"180px"}}
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search items, collections, and accounts"
                aria-label="Search"
                size="50"
              />
              <button style={{backgroundColor:"#333", color:"white", border:"1px solid white", borderRadius:"10px", paddingBottom:"5px", marginTop:"6px"}} href="#"><h3><AiOutlineSearch /></h3></button>
            </form>

            </div>
            <div className="col-4">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginRight:"450px", marginLeft:"40px"}}>
            <ul className="navbar-nav mr-auto" style={{fontSize:"large", fontWeight:"bolder", marginTop:"10px"}}>
            <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#a"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Explore
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#a">
                    <img style={{height:"30px", width:"30px"}} src="https://opensea.io/static/images/icons/allnfts-light.svg" alt="" /> All NFTs
                  </a>
                  <a className="dropdown-item" href="#a">
                  <img style={{height:"30px", width:"30px"}} src="https://opensea.io/static/images/icons/art-light.svg" alt="" /> Art
                  </a>
                  <a className="dropdown-item" href="#a">
                  <img style={{height:"30px", width:"30px"}} src="https://opensea.io/static/images/icons/collectibles-light.svg" alt="" /> Collectibles
                  </a>
                  <a className="dropdown-item" href="#a">
                  <img style={{height:"30px", width:"30px"}} src="https://opensea.io/static/images/icons/domain-names-light.svg" alt="" />  Domian Names
                  </a>
                  <a className="dropdown-item" href="#a">
                  <img style={{height:"30px", width:"30px"}} src="https://opensea.io/static/images/icons/music-light.svg" alt="" /> Music
                  </a>
                  <a className="dropdown-item" href="#a">
                  <img style={{height:"30px", width:"30px"}} src="https://opensea.io/static/images/icons/photography-category-light.svg" alt="" /> Photography
                  </a>
                  <a className="dropdown-item" href="#a">
                  <img style={{height:"30px", width:"30px"}} src="https://opensea.io/static/images/icons/sports-light.svg" alt="" /> Sports
                  </a>
                  <a className="dropdown-item" href="#a">
                  <img style={{height:"30px", width:"30px"}} src="https://opensea.io/static/images/icons/trading-cards-light.svg" alt="" /> Trading Cards
                  </a>
                  <a className="dropdown-item" href="#a">
                  <img style={{height:"30px", width:"30px"}} src="https://opensea.io/static/images/icons/utility-light.svg" alt="" />  Utility
                  </a>
                  <a className="dropdown-item" href="#a">
                  <img style={{height:"30px", width:"30px"}} src="https://opensea.io/static/images/icons/virtual-worlds-light.svg" alt="" /> Virtual Worlds
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#a"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Stats
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#a">
                   <GiRank3/> Rankings
                  </a>
                  <a className="dropdown-item" href="#a">
                   <FiActivity/> Activity
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#a"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#a">
                    Help Center
                  </a>
                  <a className="dropdown-item" href="#a">
                    Platform Status
                  </a>
                  <a className="dropdown-item" href="#a">
                    Partners
                  </a>
                  <a className="dropdown-item" href="#a">
                    Gas-Free Marketplace
                  </a>
                  <a className="dropdown-item" href="#a">
                    Taxes
                  </a>
                  <a className="dropdown-item" href="#a">
                    Blog
                  </a>
                  <a className="dropdown-item" href="#a">
                    Docs
                  </a>
                  <a className="dropdown-item" href="#a">
                    Newsletter
                  </a>
                </div>
              </li>
             
              <li className="nav-item">
       
                <a className="nav-link active" href="/create">
                 Create
                </a>
          
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#a"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src="https://avatars.githubusercontent.com/u/55938092?v=4" alt="prof" style={{height:"30px", width:"30px", borderRadius:"10px"}}/>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/profile">
                    <MdAccountBox/> Profile
                  </a>
                  <a className="dropdown-item" href="#a">
                    <MdFavoriteBorder/> Favorites
                  </a>
                  <a className="dropdown-item" href="#a">
                    <BsEyeFill/> Watchlist
                  </a>
                  <a className="dropdown-item" href="#a">
                    <BsGrid3X3/> My Collections
                  </a>
                  <a className="dropdown-item" href="#a">
                    <RiSettings3Fill/> Settings
                  </a>                  
                  <a className="dropdown-item" href="#a">
                    <FiLogOut/> Log Out
                  </a>
                </div>
              </li>
              <li className="nav-item">
                {/* <Link to="/login">
                  <a className="nav-link active" href="#">Login</a>
                  Login
                </Link> */}
              </li>
            </ul>
            <WalletModal/>
            {/* <h2><button style={{backgroundColor:"#333", color:"white"}}><MdOutlineAccountBalanceWallet/></button></h2> */}
            </div>
          </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
