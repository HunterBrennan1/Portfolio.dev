import Email from "../assets/mail-01.svg";
import Linkedin from "../assets/linkedin-01.svg";
import Github from "../assets/github.svg";
import Resume from "../assets/Rectangle 8.png";



export const Contact = () => {
  return (
    <section>
      <div className="contact_section_container">
        <div className="resume_wrapper">
          <h2 className="contact_bubble_title_resume">Resume</h2>
          <div className="resume_btn_container">
            <a className="view_btn">View here</a>
            <a className="download_btn">Download</a>
          </div>
        </div>
        <div className="contact_wrapper">
          <h2 className="contact_bubble_title_contact">Get In Touch!</h2>
          <a href="mailto:hunterbrennandev@gmail.com" target="_blank" className="contact_email">Hunterbrennandev@gmail.com</a>
          <div className="contact_icon_container">
            <div>
              <a href="mailto:hunterbrennandev@gmail.com" target="_blank"><img className="contact_icon" src={Email}></img></a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/hunter-brennan-dev/" target="_blank"><img className="contact_icon" src={Linkedin}></img></a>
            </div>
            <div>
              <a href="https://github.com/HunterBrennan1" target="_blank"><img className="contact_icon" src={Github}></img></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact;