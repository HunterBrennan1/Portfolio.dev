import Star4 from "../assets/Star 4.svg";
import Star3 from "../assets/Star 3.svg";
import Star2 from "../assets/Star 2.svg";

export const Hero = () => {
  return (
    <section className="hero_container">
      <div>
        <div className="star_containing_block">
          <h1 className="banner_title_1">Hey, I'm <span className="banner_name_span">Hunter Brennan</span>.</h1>
          <h2 className="banner_title_2">I help you build outstanding <span className="banner_website_span">websites.</span></h2>
          <div className="star_container1">
            <img className="star_trans_1" src={Star4}></img>
            <img className="star_trans_2" src={Star3}></img>
            <img className="star_trans_3" src={Star2}></img>
          </div>
        </div>

      </div>

    </section>

  )
};

export default Hero;