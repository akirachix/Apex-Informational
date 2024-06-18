import './index.css';



function LandingPage (){
    return(
        <div className='landingPage'>
            <div className='background-image'></div>
            <div className='navigation'>

                <img src ="./Images/logo.png" alt ="" className="logo"></img>


            <nav>
                <ul>
                <li>Home</li>
                <li>Our Products</li>
                <li>About Us</li>
                <li>Our Team</li>
                <li>Contacts</li>
                </ul>
            </nav>

            </div>

            <div className='landing-page-texts'>
                <p>ELEVATE YOUR TEACHING, <br/> ELEVATE THEIR POTENTIAL</p>

            </div>

            <div className='explore-button'>
                <button>Explore</button>

            </div>


        </div>
    )
}

export default LandingPage;