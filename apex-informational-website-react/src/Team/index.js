import './index.css'
const Team = () => {
    return (

        <div className='container'>
            <h1 className='team'>Our Team</h1> <br></br>

            <div className='main-team'>

                <div className='main'>
                    <div>
                        <img src="./Images/wainaina.jpg" alt="nancy" className='image' />
                        <div className='text'>
                            <h3>Nancy Wainaina</h3>
                        </div>
                    </div>

                    <div>
                        <img src="./Images/shalom.jpg" alt="shalom" className='image' />
                        <div className='text'>
                            <h3>Shalom Keesi</h3>
                        </div>
                    </div>

                    <div>
                        <img src="./Images/debz.jpg" alt="debz" className='image' />
                        <div className='text'>
                            <h3>Deborah Cherotich</h3>
                        </div>
                    </div>

                </div> <br /> <br />

                <div className='second-team'>
                    <div>
                        <img src="./Images/laura.jpg" alt="nancy" className='image' />
                        <div className='text'>
                            <h3>Laura Nyaaga</h3>
                        </div>

                    </div>

                    <div>
                        <img src="./Images/jane.jpg" alt="shalom" className='image' />
                        <div className='text'>
                            <h3>Jane Kibaara</h3>
                        </div>

                    </div>

                </div>

            </div>

            <div className='testimonials'>
                <h1>Testimonials</h1>
                <h2>What our clients say</h2>
            </div>


            <div className='testimonies'>

                <div className='sue'>
                    
                    <div>
                    <img src='./Images/suefavor.jpg' alt='favor' className='client-image' />
                    </div>
                    <div>
                    <h3 className='client-name'>Susan Favor Odongo</h3>
                    </div>
                    <div>
                    <p>
                    I can confidently say that this platform is one of the 
                    best I have ever used. It provides me with insightful
                     articles to read, and after thorough reading, I engage
                      in answering questions to test my understanding and
                       track my progress.
                    </p>
                    </div>
                </div>

                <div className='shalom'>
                    <div>
                    <img src='./Images/uwamahoro.jpg' alt='favor' className='client-image' />
                    </div>
                    <div>
                    <h3 className='client-name'>Shalom uwamahoro</h3>
                    </div>
                    <div>
                    <p>
                    Using this platform has been a positive experience for me.
                     I've noticed a significant improvement in my teaching skills, 
                     and my students are responding well to my instruction. I am 
                     enthusiastic about further developing my skills and knowledge 
                     using this platform.
                    </p>
                    </div>
                </div>


            </div>




        </div>

    );
};

export default Team;
