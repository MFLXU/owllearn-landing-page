import logo1 from "../Assets/logo-1.png";
import logo2 from "../Assets/logo-2.png";
import logo3 from "../Assets/logo-3.png";
import logo4 from "../Assets/logo-4.png";
import logo5 from "../Assets/logo-5.png";
import logo7 from "../Assets/logo-7.png";
import logo8 from "../Assets/logo-8.png";
import logo9 from "../Assets/logo-9.png";
import logo10 from "../Assets/logo-10.png";
import logo11 from "../Assets/logo-11.png";
import logo12 from "../Assets/logo-12.png";
import logo13 from "../Assets/logo-13.png";
import logo14 from "../Assets/logo-14.png";
import logo15 from "../Assets/logo-15.png";
import logo6 from "../Assets/logo-6.png";

function Graduated() {
  return (
    <section>
      <div className="container">
        <div>
          <h2 className="text-center mx-auto text-3xl font-bold">
            Our graduates have worked in
          </h2>
          <div className="grid grid-cols-2 mt-8 md:grid-cols-5 gap-8 items-center justify-center">
            <div className="flex items-center justify-center hover:scale-110 duration-300">
              <img src={logo1} alt="" />
            </div>
            <div className="flex items-center justify-center hover:scale-110 duration-300">
              <img src={logo2} alt="" />
            </div>
            <div className="flex items-center justify-center hover:scale-110 duration-300">
              <img src={logo3} alt="" />
            </div>
            <div className="flex items-center justify-center hover:scale-110 duration-300">
              <img src={logo4} alt="" />
            </div>
            <div className="flex items-center justify-center hover:scale-110 duration-300">
              <img src={logo5} alt="" />
            </div>
            <div className="flex items-center justify-center hover:scale-110 duration-300">
              <img src={logo6} alt="" />
            </div>
            <div className="flex items-center justify-center hover:scale-110 duration-300">
              <img src={logo7} alt="" />
            </div>
            <div className="flex items-center justify-center hover:scale-110 duration-300">
              <img src={logo8} alt="" />
            </div>
            <div className="flex items-center justify-center hover:scale-110 duration-300">
              <img src={logo9} alt="" />
            </div>
            <div className="flex items-center justify-center hover:scale-110 duration-300">
              <img src={logo10} alt="" />
            </div>
            <div className="flex items-center justify-center hover:scale-110 duration-300">
              <img src={logo11} alt="" />
            </div>
            <div className="flex items-center justify-center hover:scale-110 duration-300">
              <img src={logo12} alt="" />
            </div>
            <div className="flex items-center justify-center hover:scale-110 duration-300">
              <img src={logo13} alt="" />
            </div>
            <div className="flex items-center justify-center hover:scale-110 duration-300">
              <img src={logo14} alt="" />
            </div>
            <div className="flex items-center justify-center hover:scale-110 duration-300 col-span-2 md:col-span-1">
              <img src={logo15} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Graduated;
