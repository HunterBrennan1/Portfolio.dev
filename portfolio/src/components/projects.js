import Project1 from "../assets/project1.PNG";
import Project2 from "../assets/project2.jpg";
import Project3 from "../assets/project3.jpg";
import Codenexus from "../assets/codenexus.PNG";


export const Projects = () => {
  return (
    <section className="my-100px" id="projects">
      <div className="projects_container flex flex-col justify-center gap-10 py-10 lg:flex-row lg:flex-wrap ">
        <div className="project_1_wrapper">
          <div className=" basis-1/3 flex-1 max-w-lg">
            <img className="project_1_img rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" href="https://primary-keys-rentals.netlify.app/" target="_blank" src={Project1}></img>
          </div>
        </div>
        <div className="project_1_wrapper">
          <div className=" basis-1/3 flex-1 max-w-lg">
            <img className="project_1_img rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" href="https://primary-keys-rentals.netlify.app/" target="_blank" src={Codenexus}></img>
          </div>
        </div>
        <div className="project_1_wrapper">
          <div className=" basis-1/3 flex-1 max-w-lg">
            <img className="project_1_img rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" href="https://primary-keys-rentals.netlify.app/" target="_blank" src={Project1}></img>
          </div>
        </div>
      </div>
      <div className="projects_container flex flex-col justify-center gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="project_1_wrapper">
          <div className=" basis-1/3 flex-1 max-w-lg">
            <img className="project_1_img rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" href="https://primary-keys-rentals.netlify.app/" target="_blank" src={Project1}></img>
          </div>
        </div>
        <div className="project_1_wrapper">
          <div className=" basis-1/3 flex-1 max-w-lg">
            <img className="project_1_img rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" href="https://primary-keys-rentals.netlify.app/" target="_blank" src={Project1}></img>
          </div>
        </div>
        <div className="project_1_wrapper">
          <div className=" basis-1/3 flex-1 max-w-lg">
            <img className="project_1_img rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" href="https://primary-keys-rentals.netlify.app/" target="_blank" src={Project1}></img>
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