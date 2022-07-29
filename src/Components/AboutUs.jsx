import aboutusImg from "../Assets/aboutus-img.svg";

function AboutUs() {
  return (
    <section>
      <div className="container">
        <div className="aboutus__con">
          <div className="aboutus__img">
            <img src={aboutusImg} alt="" />
          </div>
          <div className="aboutus__text">
            <h2>Owlearn helps you Become Experienced</h2>
            <p>
              Owlearn provides e-learning solutions for companies, universities
              and individual professionals. It allows users to create courses,
              and provides an integrated learning management system. Its
              offerings include digital course tools, study materials, IT
              infrastructure and other operations.
            </p>
            <a className="btn btn-primary" href="/">
              Become a Member
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
