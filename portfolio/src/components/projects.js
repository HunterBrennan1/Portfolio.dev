import Project1 from "../assets/project1.PNG";
import Project2 from "../assets/project2.jpg";
import Project3 from "../assets/project3.jpg";


export const Projects = () => {
  return (
    <section>
      <div className="projects_container">
        <div className="project_1_wrapper">
          <h2 className="project_title_1">Primary Keys Rentals</h2>
          <img className="project_1_img" href="https://primary-keys-rentals.netlify.app/" target="_blank" src={Project1}></img>
          <p className="project_desc">Primary Keys Rentals is a car rental application that allows users to book cars from select vehicle types based on location and time.</p>
          <div className="skills_btn_container project_skills">
            <button className="skills_btn project_skills_btn">HTML</button>
            <button className="skills_btn project_skills_btn">CSS</button>
            <button className="skills_btn project_skills_btn">Javascript</button>
            <button className="skills_btn project_skills_btn">React</button>
            <button className="skills_btn project_skills_btn">Node</button>
            <a href="https://primary-keys-rentals.netlify.app/" target="_blank" className="skills_btn demo_btn">Live Demo</a>
            <a href="https://github.com/HunterBrennan1/Car-Rental" target="_blank" className="skills_btn repo_code_btn">Repo Code</a>
          </div>
        </div>
        <div className="project_1_wrapper">
          <h2 className="project_title_1">Coming Soon</h2>
          <img className="project_1_img coming_soon" src={Project2}></img>
          <p className="project_desc">Primary Keys Rentals is a car rental application that allows users to book cars from select vehicle types based on location and time.</p>
          <div className="skills_btn_container project_skills">
            <button className="skills_btn project_skills_btn">HTML</button>
            <button className="skills_btn project_skills_btn">CSS</button>
            <button className="skills_btn project_skills_btn">Javascript</button>
            <button className="skills_btn project_skills_btn">React</button>
            <button className="skills_btn project_skills_btn">Node</button>
            <a href="https://primary-keys-rentals.netlify.app/" target="_blank" className="skills_btn  demo_btn">Live Demo</a>
            <a href="https://github.com/HunterBrennan1/Car-Rental" target="_blank" className="skills_btn  repo_code_btn">Repo Code</a>
          </div>
        </div>
        <div className="project_1_wrapper">
          <h2 className="project_title_1">Coming Soon</h2>
          <img className="project_1_img coming_soon" src={Project3}></img>
          <p className="project_desc">Primary Keys Rentals is a car rental application that allows users to book cars from select vehicle types based on location and time.</p>
          <div className="skills_btn_container project_skills">
            <button className="skills_btn project_skills_btn">HTML</button>
            <button className="skills_btn project_skills_btn">CSS</button>
            <button className="skills_btn project_skills_btn">Javascript</button>
            <button className="skills_btn project_skills_btn">React</button>
            <button className="skills_btn project_skills_btn">Node</button>
            <a href="https://primary-keys-rentals.netlify.app/" target="_blank" className="skills_btn demo_btn">Live Demo</a>
            <a href="https://github.com/HunterBrennan1/Car-Rental" target="_blank" className="skills_btn repo_code_btn">Repo Code</a>
          </div>
        </div>

      </div>
      <div className="projects_view_btn_container">
        <button class="view_work_btn">View my work</button>
      </div>
    </section>
  )
};

export default Projects;