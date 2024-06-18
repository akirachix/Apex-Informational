import './index.css';

function OurProducts(){
return(
    <div className="Products">
        <div className="Intro">
            <p><h1>Our Products</h1></p>

        </div>
        <br></br>
        <br></br>
        <div className='Description'>
            <img className='product' src='Images/our-products.jpg'/>
            <p className='More'><b>Apex</b> is an innovative educational platform designed to equip teachers of visually impaired students with the technological skills necessary to effectively conduct their lessons. Our platform provides comprehensive training simulations that mimic assistive technologies, allowing teachers to develop hands-on proficiency and confidence in using these tools.
            <br></br>
            <br></br>
            <b>Key Features in Our App </b>
            <br></br>
            <br></br>
            <br></br>

            <b>Scenario-Based questions:</b> Our platform offers scenario-based questions that simulate real-life situations, enabling teachers to practice using assistive technologies in a realistic and engaging manner.
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <b>Assistive Technology Simulations:</b> We provide simulations of various assistive technologies, such as screen readers, braille displays, and text-to-speech software, allowing teachers to familiarize themselves with these tools and learn how to integrate them into their teaching practices.
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <b>Interactive Assessments:</b> After completing the each level, teachers can take interactive assessments to test their understanding and proficiency in using the assistive technologies. This ensures that they fully grasp the training provided and are equipped to effectively support their visually impaired students.

</p>


        </div>
        <div className='Courses'>
            <p className='screenReader'><h2>Screen Readers</h2>
            <img src='Images/screen-readers.png'/> 
            </p>
            <p className='brailleDisplay'><h2>Braille Translation</h2>
            <img className='braille'src='Images/braille-display.jpg'/>
            </p>
            <p className='text-to-speech'><h2>Text-to-speech</h2>
            <img className='textSpeech'src='Images/text-to-speech.jpg'/>
            </p>
        </div>



        <div className='BriefDescriptions'>
        <p className='briefing'>Learn how to access and <br></br> navigate websites, documents <br></br> and applications using screen <br></br>readers technology </p>

        <br></br>
        <br></br>
        <p className='briefing'>Learn how to convert digital <br></br>text into braille using braille <br></br>translation technology.</p>

        <br></br>
        <br></br>

        <p className='briefing'>Learn how to create a more inclusive <br></br>and engaging learning environment <br></br>using text-to-speech technology</p>

        </div>
        



    </div>
)


}
export default OurProducts;