import React from "react";

const TabPanel = () => {
  return (
    <>
      <div className="mt-5">
        <ul className="nav nav-tabs">
          <li className="nav-item" href="?tab=trending">
            <a className="nav-link active" aria-current="page" href="#">
              Trending
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="?tab=top">
              Top
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="?tab=art">
              Art
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="?tab=collectibles">
              Collectibles
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="?tab=domainName">
              Domain Name
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="?tab=music">
              Music
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="?tab=photography">
              Photography
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="?tab=sports">
              Sports
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="?tab=tradingCards">
              Trading Cards
            </a>
          </li>
          {/* <li className="nav-item">
    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li> */}
        </ul>
      </div>
    </>
  );
};
export default TabPanel;
