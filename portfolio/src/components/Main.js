import profileimg from '../assets/profile1.png';

export const Main = () => {
  return (
    <section className="main_container">
      <div className="skills_card_container">
        <div className="profile_container">
          <div className="profile_img_container">
            <img className="profile_img" src={profileimg} />
          </div>
          <h3 className="skills_card_name">Hunter</h3>
          <h4 className="skills_card_developer">Full Stack developer</h4>
          <p className="availability_btn">• Available</p>
        </div>
        <div className="profile_desc_container">
          <p className="skills_desc">I am a dedicated developer <span className="skills_desc_span">specializing in Full Stack Developement,</span> commited to creating exceptional websites and web applications that drive the overall success of the product.</p>
          <div className="skills_btn_container">
            <button className="skills_btn">HTML</button>
            <button className="skills_btn">CSS</button>
            <button className="skills_btn">Javascript</button>
            <button className="skills_btn">React</button>
            <button className="skills_btn">Node</button>
          </div>
        </div>
      </div>
      <div className="about_card_container">
        <h2 className="about_title">Get to know me!</h2>
        <p className="about_text">I'm a Full Stack Developer specializing in building Websites and Web Applications that drive the success of the overall product. Take a look at some of my projects showcased below.</p>
        <p className="about_text">In addition to my development work, I enjoy sharing my knowledge and insights gained in Web Development on Linkedin. Connect with me to access valuable content on Web Development and Programming that can benefit the Dev Community.</p>
        <p className="about_text">I'm actively seeking job opportunities where I can contribute, learn, and grow. If you have a compelling opportunity that aligns with my skills and experience, please don't hesitate to reach out to me!</p>
        <div className="about_btn_container">
          <button className="connect_about_btn">Let's Connect!</button>
          <button class="view_work_btn">View my work</button>
        </div>
      </div>
    </section>
  )
};

export default Main;