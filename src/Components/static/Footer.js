import React from 'react'
import '../../Assets/css/footer.css'
import {BsFacebook, BsLinkedin} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Shortgun.com <i>Shortcoin innovation strategy .</i> 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
           
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a aria-label='facebook' href="#/">NFT</a></li>
              <li><a aria-label='facebook' href="#/">UI Design</a></li>
              <li><a aria-label='facebook' href="#/">MongoDB</a></li>
              <li><a aria-label='facebook' href="#/">Blockchain</a></li>
              <li><a aria-label='facebook' href="#/">React JS</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a aria-label='facebook' href="#/">About Us</a></li>
              <li><a aria-label='facebook' href="#/">Contact Us</a></li>
              <li><a aria-label='facebook' href="#/">Contribute</a></li>
              <li><a aria-label='facebook' href="#/">Privacy Policy</a></li>
              <li><a aria-label='facebook' href="#/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
         <a aria-label='facebook' href="#a">Shortgun</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" aria-label='facebook' href="#a"><BsFacebook/></a></li>
              <li><a className="twitter" aria-label='twitter' href="#a"><AiFillTwitterCircle/></a></li>
              <li><a className="instagram" aria-label='instagram' href="#a"><AiFillInstagram/></a></li>
              <li><a className="linkedin" aria-label='linkedin' href="#a"><BsLinkedin/></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    </>
  )
}

export default Footer