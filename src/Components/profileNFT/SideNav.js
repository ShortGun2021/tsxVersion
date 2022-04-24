import React from "react";
import { Sidenav, Nav, Dropdown } from "rsuite";
import { AiOutlineSearch } from "react-icons/ai";
import { IoFilterSharp } from "react-icons/io5";
import { Checkbox } from 'rsuite';
import "rsuite/dist/rsuite.min.css";

const SideNav = () => {
  const headerStyles = {
    padding: 20,
    fontSize: 16,
    background: "#34c3ff",
    color: " #fff",
  };
  return (
    <>
      <div style={{ width: 240 }}>
        <Sidenav defaultOpenKeys={["3", "4"]}>
          <Sidenav.Header>
            <div style={headerStyles}>
              <h5>
                <IoFilterSharp />
                <span style={{ marginLeft: "15px" }}>Filter</span>
              </h5>
            </div>
          </Sidenav.Header>
          <Sidenav.Body>
            <Nav style={{ maxHeight: "800px", overflow: "scroll" }}>
              <Dropdown eventKey="1" title="Status">
                <div className="justify-content-center" style={{display:"flex", flexDirection:"row", flexWrap: "wrap"}}>
                <button className="m-2 btn btn-primary btn-sm">Buy Now</button>
                <button className="m-2 btn btn-primary btn-sm">On Auction</button>
                <button className="m-2 btn btn-primary btn-sm">New</button>
                <button className="m-2 btn btn-primary btn-sm">Has Offers</button>
                </div>
              </Dropdown>
              <Dropdown eventKey="2" title="Price">
                <div className="d-flex justify-content-center">
                  <select name="currency" id="currency">
                    <option value="none" selected disabled hidden>Select Exchange</option>
                    <option value="USD">US Dollars</option>
                    <option value="ETH">Ethereum </option>
                    <option value="SOL">Solana</option>
                  </select>
                </div>
                <div className="d-flex justify-content-center" style={{marginTop:"12px"}}>
                  <input type="text" placeholder="Min" size="4"/>
                  <br/>
                  <span style={{margin:"5px"}}>to</span>
                  <br/>
                  <input type="text" placeholder="Max" size="4"/>
                </div>
                <div className="d-flex justify-content-center mt-2">
                  <button type="button" className="btn btn-primary btn-sm">Apply</button>
                </div>
              </Dropdown>
              <Dropdown eventKey="3" title="Collections">
              <div className="d-flex justify-content-center">
                  <button href="#a">
                    <h6>
                      <AiOutlineSearch />
                    </h6>
                  </button>
                  <input type="text" placeholder="Filter" />
                </div>
              </Dropdown>
              <Dropdown eventKey="4" title="Chains">
                <Dropdown.Item eventKey="4-1"><img style={{height:"30px", width:"30px"}} src="https://opensea.io/static/images/logos/ethereum.png" alt="ether" /> Ethereum</Dropdown.Item>
                <Dropdown.Item eventKey="4-2"><img style={{height:"30px", width:"30px"}} src="https://opensea.io/static/images/logos/polygon.svg" alt="poly" /> Polygon</Dropdown.Item>
                <Dropdown.Item eventKey="4-3"><img style={{height:"30px", width:"30px"}} src="https://opensea.io/static/images/logos/klaytn.png" alt="kla" /> Klaytn</Dropdown.Item>
                <Dropdown.Item eventKey="4-4"><img style={{height:"30px", width:"30px"}} src="https://opensea.io/static/images/logos/solana.svg" alt="sol" /> Solana</Dropdown.Item>
              </Dropdown>
              <Dropdown eventKey="5" title="Categories">
                <Dropdown.Item eventKey="5-1"><img style={{height:"30px", width:"30px"}} src="https://opensea.io/static/images/icons/art-light.svg" alt="" /> Art</Dropdown.Item>
                <Dropdown.Item eventKey="5-2"><img style={{height:"30px", width:"30px"}} src="https://opensea.io/static/images/icons/collectibles-light.svg" alt="" /> Collectibles</Dropdown.Item>
                <Dropdown.Item eventKey="5-3"><img style={{height:"30px", width:"30px"}} src="https://opensea.io/static/images/icons/domain-names-light.svg" alt="" /> Domain Names</Dropdown.Item>
                <Dropdown.Item eventKey="5-4"><img style={{height:"30px", width:"30px"}} src="https://opensea.io/static/images/icons/music-light.svg" alt="" /> Music</Dropdown.Item>
                <Dropdown.Item eventKey="5-5"><img style={{height:"30px", width:"30px"}} src="https://opensea.io/static/images/icons/photography-category-light.svg" alt="" /> Photography</Dropdown.Item>
                <Dropdown.Item eventKey="5-6"><img style={{height:"30px", width:"30px"}} src="https://opensea.io/static/images/icons/sports-light.svg" alt="" /> Sports</Dropdown.Item>
                <Dropdown.Item eventKey="5-7"><img style={{height:"30px", width:"30px"}} src="https://opensea.io/static/images/icons/trading-cards-light.svg" alt="" /> Trading Cards</Dropdown.Item>
                <Dropdown.Item eventKey="5-8"><img style={{height:"30px", width:"30px"}} src="https://opensea.io/static/images/icons/utility-light.svg" alt="" /> Utility</Dropdown.Item>
                <Dropdown.Item eventKey="5-8"><img style={{height:"30px", width:"30px"}} src="https://opensea.io/static/images/icons/virtual-worlds-light.svg" alt="" /> Virtual Worlds</Dropdown.Item>
              </Dropdown>
              <Dropdown eventKey="6" title="On Sale In">
                <div className="d-flex justify-content-center">
                  <button href="#a">
                    <h6>
                      <AiOutlineSearch />
                    </h6>
                  </button>
                  <input type="text" placeholder="Filter" />
                </div>
                <Dropdown.Item eventKey="6-1">
                <Checkbox> Default 1</Checkbox>
                </Dropdown.Item>
                <Dropdown.Item eventKey="6-2">
                <Checkbox> Default 2</Checkbox>
                </Dropdown.Item>
                <Dropdown.Item eventKey="6-3">
                <Checkbox> Default 3</Checkbox>
                </Dropdown.Item>
                <Dropdown.Item eventKey="6-4">
                <Checkbox> Default 4</Checkbox>
                </Dropdown.Item>
              </Dropdown>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    </>
  );
};

export default SideNav;
