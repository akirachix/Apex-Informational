import './index.css'
const Team = () => {
    return (

        <div>
            <h1>Our Team</h1> <br></br>
            
            <div className='main-team'>

                <div className='main'>
                    <div>
                        <img src="./Images/wainaina.jpg" alt="nancy" className='image' />
                        <div className='text'>
                            <h3>Nancy Wainaina</h3>
                            <i>Senior Software Developer</i>
                        </div>
                    </div>

                    <div>
                        <img src="./Images/shalom.jpg" alt="shalom" className='image' />
                        <div className='text'>
                            <h3>Shalom Keesi</h3>
                            <i>Senior Software Developer</i>
                        </div>
                    </div>

                    <div>
                        <img src="./Images/debz.jpg" alt="debz" className='image' />
                        <div className='text'>
                            <h3>Deborah Cherotich</h3>
                            <i>UI/UX Designer</i>
                        </div>
                    </div>

                </div> <br/> <br/>

                <div className='second-team'>
                    <div>
                        <img src="./Images/laura.jpg" alt="nancy" className='image' />
                        <div className='text'>
                            <h3>Laura Nyaaga</h3>
                            <i>UX Researcher</i>
                        </div>

                    </div>

                    <div>
                        <img src="./Images/jane.jpg" alt="shalom" className='image' />
                        <div className='text'>
                            <h3>Jane Kibaara</h3>
                            <i>Product Manager</i>
                        </div>

                    </div>

                </div>

            </div><br></br>

            <div>
                <h1>Testimonials</h1>
                <h2>What our clients say</h2>
            </div>

            <div className='testimonies'>
                <div>
                    <img src='./Images/suefavor.jpg' alt='favor' className='client-image' />
                    <div>
                        <h3 className='client-name'>Susan Favor Odongo</h3>
                        <p>
                            This platform have been on of the best platforms i have<br></br> 
                            ever used.the platforms provide me with articles to read<br></br>
                            and also after reading i do some questions to where<br></br>
                            i test my selfon the progress i have made.
                        </p>
                        <div className='stars'>
                        <div>
                        <img src='./Images/star.png' alt='star' className='star'/>
                        </div>
                        <div>
                        <img src='./Images/star.png' alt='star' className='star'/>
                        </div>
                        <div>
                        <img src='./Images/star.png' alt='star' className='star'/>
                        </div>
                        <div>
                        <img src='./Images/star.png' alt='star' className='star'/>
                        </div>
                        <div>
                        <img src='./Images/star.png' alt='star' className='star'/>
                        </div>
                        </div>
                    </div>

                </div>

                <div>
                    <img src='./Images/uwamahoro.jpg' alt='favor' className='client-image' />
                    <div>
                        <h3 className='client-name'>Shalom uwamahoro</h3>
                        <p>
                        I am grateful for using this platform.Ever since i started <br></br>
                        using it my teaching skills are now good and the students<br></br>
                       are understanding what i am teaching and i am looking<br></br>
                       forward to learning more on this platform.
                        </p>
                        <div className='stars'>
                        <div>
                        <img src='./Images/star.png' alt='star' className='star'/>
                        </div>
                        <div>
                        <img src='./Images/star.png' alt='star' className='star'/>
                        </div>
                        <div>
                        <img src='./Images/star.png' alt='star' className='star'/>
                        </div>
                        <div>
                        <img src='./Images/star.png' alt='star' className='star'/>
                        </div>
                        <div>
                        <img src='./Images/star.png' alt='star' className='star'/>
                        </div>
                        </div>
                    </div>

                </div>
            </div>

           


        </div>

    );
};

export default Team;
