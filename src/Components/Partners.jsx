import google from "../Assets/google.svg";
import skillshare from "../Assets/skillshare.svg";
import udemy from "../Assets/udemy.svg";
import coursera from "../Assets/coursera.svg";
import foundation from "../Assets/foundation.svg";
function Partners() {
  return (
    <section className="partners__section">
      <div className="container">
        <div className="partners__con">
          <h2>We partner with more than 10+ companies</h2>
          <div className="partners__logos">
            <div className="partner__logo">
              <img src={skillshare} alt="" />
            </div>
            <div className="partner__logo">
              <img src={udemy} alt="" />
            </div>
            <div className="partner__logo">
              <img src={google} alt="" />
            </div>
            <div className="partner__logo">
              <img src={coursera} alt="" />
            </div>
            <div className="partner__logo">
              <img src={foundation} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Partners;
