import './index.css'

const Footer = ()=>{
    return(
        <div id='footer'>
        <div id='footer-icon'>
            <div>
            <img src="./images/apex-logo.png" alt="" className="logo"></img>
            </div>
            <div id='icons'>
            <img src="./images/instagram.svg" alt="" className="instagram"></img>
            <img src="./images/linkedin.svg" alt="" className="linkedin"></img>
            <img src="./images/facebook.svg" alt="" className="facebook"></img>
            <img src="./images/twitter.png" alt="" className="twitter"></img>
            <img src="./images/whatsapp.svg" alt="" className="whatsapp"></img>
            </div> 
        </div>
        <hr></hr>
        <h2>Contact Us</h2>
        <div id='info'>
            <div className='location-mail'>
            <div id='locate'>
            <img src="./images/location.svg" alt="" className="location"></img> 
            <div className='location-info'>
            <p>Korongo Rd 616</p>
            </div>
            </div> 
            <div id='locate'>
            <img src="./images/mail.svg" alt="" className="location"></img> 
            <div className='location-info'>
            <p>apexsoftware@apex.com</p>
            </div>
            </div>
            </div>
            <div id='contacts'>
            <img src="./images/call.svg" alt="" className="call"></img>
            < br/> 
            <div className='location-info'>
            <p>+254721225435</p> 
            <p>+254700200000</p>
            <p>www.apexsoftware.co.org</p>
            </div>
            </div>
            <div id='contact-input'>
                <h3>Contact Us</h3>
                <input type='text' placeholder='Email address'></input>
                <div className='contact-us'>
                <p>Send</p>
                </div>
            </div>

        </div>
        <div className='bottom-text'>
            <p>2024 Apex Software- All rights reserved</p>

        </div>
        </div>
    )
}
export default Footer;