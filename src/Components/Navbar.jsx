import logo from "../Assets/logo.svg";
function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="nav__con">
          <img src={logo} alt="" />
          <div className="nav__links">
            <a className="nav__link" href="/">
              Home
            </a>
            <a className="nav__link" href="/">
              Bootcamp
            </a>
            <a className="nav__link" href="/">
              Events
            </a>
            <a className="nav__link" href="/">
              Articles
            </a>
            <a className="nav__link" href="/">
              Contact Us
            </a>
            <a className="btn btn-ghost" href="/">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
