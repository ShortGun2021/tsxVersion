import React from "react";
// import "../../Assets/css/style.css"
import { NavLink } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <div
        className="row align-items-center"
        style={{
          paddingLeft: "10px",
          paddingTop: "150px",
          paddingBottom: "150px",
          backgroundColor: "black",
        }}
      >
        <div className="col-6 col-md-6">
          <div className="">
            <img
              style={{ borderRadius: "20px" }}
              src="https://www.reviewsxp.com/blog/wp-content/uploads/2022/01/Best-NFT-Marketplace-850x491.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-6 col-md-6">
          <div style={{ color: "white" }}>
            <h1>Discover, collect, and sell extraordinary NFTs</h1>
            <h3>Shortgun is the world's first and largest NFT marketplace</h3>
          </div>
          <div style={{ marginTop: "30px" }} className="text-center">
            <NavLink activeClassName="is-active" to="/explore">
              <button
                style={{ margin: "10px", padding: "10px" }}
                type="button"
                className="btn btn-outline-primary btn-lg"
              >
                Explore
              </button>
            </NavLink>

            <NavLink activeClassName="is-active" to="/create">
              <button
                style={{ margin: "10px", padding: "10px" }}
                type="button"
                className="btn btn-outline-primary btn-lg"
              >
                Create
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
