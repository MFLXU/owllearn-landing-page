import heroImg from "../Assets/hero-img.svg";
import heroLine from "../Assets/hero-line.svg";
import heroRating from "../Assets/hero-rating.svg";
function Hero() {
  return (
    <section>
      <div className="container">
        <div className="hero__con">
          <div className="hero__text">
            <h1>Learn Any Skills to advance your career path</h1>
            <img src={heroLine} alt="" />
            <p>
              Want to improve your work skills? You need to study harder with
              the help of a great mentor to improve your performance at work
            </p>
            <div className="hero__text-cta">
              <a className="btn btn-primary" href="/">
                Explore Path
              </a>
              <div>
                <img src={heroRating} alt="" />
              </div>
            </div>
          </div>
          <div className="hero__img">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
