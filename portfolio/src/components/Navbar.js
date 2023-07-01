import UpArrow from "../assets/up-arrow-4.png";

export const Navbar = () => {
  return (
    <section>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About me</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#" className="contact_nav_btn">Let's Connect!</a></li>
          </ul>
        </nav>
      </header>
      <a className="back_to_top_btn" href="#"><img className="gotopbtn" src={UpArrow}></img></a>
    </section>
  )
};

export default Navbar;

