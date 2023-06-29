import Project1 from "../assets/project1.PNG";
import Project2 from "../assets/project2.jpg";
import Project3 from "../assets/project3.jpg";


export const Projects = () => {
  return (
    <section>
      <div className="projects_container">
        <div className="project_1_wrapper">
          <h2 className="project_title_1">Primary Keys Rentals</h2>
          <img className="project_1_img" src={Project1}></img>

        </div>
        <div className="project_1_wrapper">
          <h2 className="project_title_1">Coming Soon</h2>
          <img className="project_1_img coming_soon" src={Project2}></img>
        </div>
        <div className="project_1_wrapper">
          <h2 className="project_title_1">Coming Soon</h2>
          <img className="project_1_img coming_soon" src={Project3}></img>
        </div>
      </div>
    </section>
  )
};

export default Projects;