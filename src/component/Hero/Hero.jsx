import "../Hero/Hero.css";
import hand_icon from "../assets/hand_icon.png";
import hero_image from "../assets/hero_image.png";
import arrow_icon from "../assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero1">
      <div className="hero-left">
        <h2>NEW ARRIVAL ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections </p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow" />
        </div>
      </div>
      <div className="hero-right"></div>
      <img src={hero_image} alt="hero-image" />
    </div>
  );
};

export default Hero;
