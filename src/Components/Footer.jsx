import socials from "../Assets/socials.png";
function Footer() {
  return (
    <footer className="pt-20 pb-10 md:px-0 px-4">
      <div className="container">
        <div className="div">
          <div className="flex md:flex-row flex-col gap-8">
            <div>
              <p className="font-bold text-2xl mb-4">Event & Bootcamp</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xl mb-2 font-medium text-gray-400">
                    Web Development
                  </p>
                  <p className="text-xl mb-2 font-medium text-gray-400">
                    Mobile Development
                  </p>
                  <p className="text-xl mb-2 font-medium text-gray-400">
                    UI Design
                  </p>
                  <p className="text-xl mb-2 font-medium text-gray-400">
                    UI Research
                  </p>
                  <p className="text-xl mb-2 font-medium text-gray-400">
                    Presentation
                  </p>
                </div>
                <div>
                  <p className="text-xl mb-2 font-medium text-gray-400">
                    Comunication
                  </p>
                  <p className="text-xl mb-2 font-medium text-gray-400">
                    Video Production
                  </p>
                  <p className="text-xl mb-2 font-medium text-gray-400">
                    Digital Marketing
                  </p>
                  <p className="text-xl mb-2 font-medium text-gray-400">
                    Branding
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold text-2xl mb-4">About Owlearn</p>
              <div>
                <p className="text-xl mb-2 font-medium text-gray-400">
                  Adminission Info
                </p>
                <p className="text-xl mb-2 font-medium text-gray-400">
                  Article
                </p>
                <p className="text-xl mb-2 font-medium text-gray-400">
                  Group & Referral Program
                </p>
                <p className="text-xl mb-2 font-medium text-gray-400">
                  Careers
                </p>
              </div>
            </div>
            <div className="md:ml-auto">
              <p className="font-bold text-2xl mb-4">Contact</p>
              <p className="text-xl mb-2 font-medium text-blue-500">
                support@edtech.com
              </p>
              <p className="text-xl mb-4 font-medium text-blue-500">
                (+62) 85923935983
              </p>
              <img src={socials} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
