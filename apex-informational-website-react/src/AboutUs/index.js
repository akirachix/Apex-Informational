
import "./index.css";

export const About = () => {
  return (
    <div className="aboutUs">
      <h1>About Us</h1>

      <div className="overview">
        <h2>Company Overview</h2>

        <div>
          <p>
            Apex specializes in providing dedicated courses and resources for
            teachers working with visually impaired students. Apex aims to
            promote knowledge and understanding of how to support visual
            impaired students through its unique product range, which is
            designed for all educational practitioners in early years,
            mainstream, and special school settings.
          </p>
        </div>
      </div>

      <div className="mission-vision">
        <div className="mission">
          <div className="mission-vision-pictures">
            <img src="Images/goals.png" alt="mission" />
          </div>

          <h2 className="heading">Mission</h2>

          <div>
            <p>
              Apex's mission is to empower teachers of visually impaired
              students by providing cutting-edge training software that enhances
              their technical skills, enabling them to effectively support
              students with visual impairments in their educational journey. We
              aim to bridge the gap between technology and accessibility,
              ensuring that visually impaired students have equal opportunities
              to learn and thrive
            </p>
          </div>
        </div>

        <div className="vision">
          <div className="mission-vision-pictures">
            <img src="Images/vision.png" alt="vision" />
          </div>

          <h2 className="heading">Vision</h2>

          <div>
            <p>
              Apex's vision is to create a world where visually impaired
              students have seamless access to education and technology, and
              where teachers are equipped with the skills and confidence to
              provide tailored support.We envision a future where our software
              becomes an integral part of the educational landscape, fostering
              independence, self-advocacy, and academic success for students
              with visual impairments.
            </p>
          </div>
        </div>
      </div>

      <div className="core-values">
        <div className="value-picture">
          <img src="Images/values.png" alt="values" className="values-logo" />
          <h2 className="corevalues">Core Values</h2>
        </div>

        <div className="values-descrption">
          <div className="values">
            <h3>Accessibility and Inclusion</h3>

            <div>
              <p>
                We are to committed to ensuring that visually impaired students
                have equal access to education and that their teachers are
                equipped with the necessary skills to support them. The software
                is designed with accessibility in mind, making it easy for
                teachers to navigate and use
              </p>
            </div>
          </div>

          <div className="values">
            <h3>Collaboration and Teamwork</h3>
            
            <div>
              <p>
                We foster a culture of collaboration and teamwork, both
                internally and with its clients. We also encourages open
                communication and knowledge sharing among its employees and work
                closely with teachers and schools to understand their needs and
                provide tailored solutions.
              </p>
            </div>
          </div>

          <div className="values">
            <h3>Integrity and Professionalism</h3>

            <div>
              <p>
                We operate with integrity and professionalism, maintaining high
                standards of quality and customer service. we are also
                transparent in our dealings with clients and employees and
                strive to build long-term, mutually beneficial relationships.
              </p>
            </div>
          </div>

          <div className="values">
            <h3>Social Responsibility</h3>

            <div>
              <p>
                We recognize our responsibility to the community and work
                towards making a positive impact on the lives of visually
                impaired students and their teachers by engaging in initiatives
                that promote accessibility and inclusion in education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
