import './index.css';

function OurProducts(){
return(
    <div className="products">
            <h1>Our Products</h1>
        <div className='description'>
            <div className='product-image'>
                <img src='Images/our-products.jpg'/>
            </div>

            <div className='product-description'>

                 <p><b>Apex</b> is an innovative educational platform designed to equip teachers of visually impaired students with the technological skills necessary to effectively conduct their lessons. Our platform provides comprehensive training simulations that mimic assistive technologies, allowing teachers to develop hands-on proficiency and confidence in using these tools.</p>
        
            <h3>Key Features in Our App </h3>
            <div className="our-courses">
                 <p><b>Scenario-Based questions:</b> Our platform offers scenario-based questions that simulate real-life situations, enabling teachers to practice using assistive technologies in a realistic and engaging manner.</p>
                <div className="simulations">
                 <p> <b>Assistive Technology Simulations:</b> We provide simulations of various assistive technologies, such as screen readers, braille displays, and text-to-speech software, allowing teachers to familiarize themselves with these tools and learn how to integrate them into their teaching practices.</p>
                 </div>

                 <div className="assessments">
                 <p> <b>Interactive Assessments:</b> After completing the each level, teachers can take interactive assessments to test their understanding and proficiency in using the assistive technologies.This ensures that they fully grasp the training provided and are equipped to effectively support their visually impaired students.</p>
                 </div>
                 
                 </div>
            </div>
        </div>


        
        <div className='courses'>

           <div className='courses-description'>
             <h2 className='screen-reader'>Screen Readers</h2>
             <img  src='Images/screen-readers.png'/>
             <div className="screen"><p className='description-text'>Learn how to access and navigate websites documents and applications using screen readers technology </p></div>
            </div>
            
            <div className='courses-description'>
               <h2 className='braille-translation'>Braille Translation</h2>
               <div className="braille"><img  className='pictures' src='Images/braille-display.jpg'/></div>
               <div className="braille-text"><p className='description-text'>Learn how to convert digital text into braille using braille translation technology.</p></div>
            </div>
            
            <div className='courses-description'>
               <div className="speech-heading"><h2>Text-to-speech</h2></div>
               <div className="image-text-to-speech"><img className='pictures' src='Images/text-to-speech.jpg'/></div>
               <div className="speech"><p className='description-text'>Learn how to create a more inclusive and engaging learning environment using text-to-speech technology</p></div>
            </div>
        </div>


    
    </div>
)


}
export default OurProducts;