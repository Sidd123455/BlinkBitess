import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>At BlinkBites, we're committed to delivering fresh, delicious food right to your doorstep — fast, safe, and hassle-free. Whether you're craving comfort meals or exploring new flavors, we've got you covered. Thank you for choosing us to serve your hunger, one bite at a time.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="https://x.com/SiddeshSapate?t=EZ4Ho7IHz_5kDVrsYYl2AA&s=09" />
                <img src={assets.linkedin_icon} alt="https://www.linkedin.com/in/siddesh-s12/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>BlinkBites</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 9975981902</li>
                <li>blinkbites@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © BlinkBites.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
