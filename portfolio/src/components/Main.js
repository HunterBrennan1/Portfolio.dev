import profileimg from '../assets/profile1.png';

export const Main = () => {
  return (
    <section className="main_container">
      <div className="skills_card_container">
        <div className="profile_container">
          <img className="profile_img" src={profileimg} />
          <h3 className="skills_card_name">Hunter</h3>
          <h4 className="skills_card_developer">Full Stack developer</h4>
          <p className="availability_btn">• Available</p>
        </div>
        <div className="profile_desc_container">
          <p className="skills_desc">I am a dedicated developer <span className="skills_desc_span">specializing in Full Stack Developement,</span> commited to creating exceptional websites and web applications that drive the overall success of the product.</p>
          <button className="skills_btn">HTML</button>
          <button className="skills_btn">CSS</button>
          <button className="skills_btn">Javascript</button>
          <button className="skills_btn">React</button>
          <button className="skills_btn">Node</button>
        </div>
      </div>
      <div className="about_card_container">
        <h2>Get to know me!</h2>
        <p>i'm a Full Stack Developer specializing in building Websites and Web Applications that drive the success of the overall product. Take a look at some of my projects showcased below.</p>
        <p>In addition to my development work, I enjoy sharing my knowledge and insights gained in Web Development on Linkedin. Connect with me to access valuable content on Web Development and Programming that can benefit the Dev Community.</p>
        <p>I'm actively seeking job opportunities where I can contribute, learn, and grow. If you have a compelling opportunity that aligns with my skills and experience, please don't hesitate to reach out to me!</p>
        <div>
          <button>Let's Connect!</button>
          <button>View my work</button>
        </div>
      </div>
    </section>
  )
};

export default Main;