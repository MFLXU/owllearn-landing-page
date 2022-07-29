import course1 from "../Assets/course-img-1.png";
import course2 from "../Assets/course-img-2.png";
import course3 from "../Assets/course-img-3.png";
import course4 from "../Assets/course-img-4.png";
import course5 from "../Assets/course-img-5.png";
import course6 from "../Assets/course-img-6.png";
import user from "../Assets/user.svg";
function Courses() {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h1 className="text-4xl font-bold">Discover Course & Bootcamp</h1>
            <button className="btn btn-ghost">Show All</button>
          </div>
          <div className="flex overflow-x-scroll md:overflow-hidden py-4 gap-2">
            <p className="text-white bg-[#DC4298] py-2 px-4 rounded-full border cursor-pointer duration-300 hover:border-[#DC4298]">
              All Program
            </p>
            <p className="py-2 px-4 rounded-full border cursor-pointer duration-300 hover:border-[#DC4298]">
              UI/UX Design
            </p>
            <p className="py-2 px-4 rounded-full border cursor-pointer duration-300 hover:border-[#DC4298]">
              Product Managment
            </p>
            <p className="py-2 px-4 rounded-full border cursor-pointer duration-300 hover:border-[#DC4298]">
              Branding Design
            </p>
            <p className="py-2 px-4 rounded-full border cursor-pointer duration-300 hover:border-[#DC4298]">
              Mobile Development
            </p>
            <p className="py-2 px-4 rounded-full border cursor-pointer duration-300 hover:border-[#DC4298]">
              Web Development
            </p>
            <p className="py-2 px-4 rounded-full border cursor-pointer duration-300 hover:border-[#DC4298]">
              BlockChain Development
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Course */}
            <div className="border rounded-md overflow-hidden duration-300 hover:border-[#DC4298] hover:scale-105 ">
              <div className="relative ">
                <img className="w-full" src={course1} alt="" />
                <div className="px-3 py-1 rounded-full flex items-center gap-2 w-fit absolute bg-white bottom-[5%] left-[5%]">
                  <img src={user} alt="" />
                  <p>120</p>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <p className="text-gray-400">1 - 28 July 2022</p>
                <p className="text-2xl font-bold">
                  Product Management Basic - Course
                </p>
                <p>
                  Product Management Masterclass, you will learn with Sarah
                  Johnson - Head of Product Customer Platform Gojek Indonesia.
                </p>
                <div className="flex items-center mt-4">
                  <p className="font-bold text-xl text-[#DC4298] mr-2">$ 380</p>
                  <p className="text-gray-400 line-through">$ 500</p>
                  <button className="py-2 px-8 rounded-md text-xl ml-auto btn-ghost">
                    Buy
                  </button>
                </div>
              </div>
            </div>
            {/* Course */}
            <div className="border rounded-md overflow-hidden duration-300 hover:border-[#DC4298] hover:scale-105 ">
              <div className="relative ">
                <img className="w-full" src={course2} alt="" />
                <div className="px-3 py-1 rounded-full flex items-center gap-2 w-fit absolute bg-white bottom-[5%] left-[5%]">
                  <img src={user} alt="" />
                  <p>120</p>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <p className="text-gray-400">1 - 28 July 2022</p>
                <p className="text-2xl font-bold">
                  Front End Developer - Basic
                </p>
                <p>
                  Product Management Masterclass, you will learn with Sarah
                  Johnson - Head of Product Customer Platform Gojek Indonesia.
                </p>
                <div className="flex items-center mt-4">
                  <p className="font-bold text-xl text-[#DC4298] mr-2">$ 380</p>
                  <p className="text-gray-400 line-through">$ 500</p>
                  <button className="py-2 px-8 rounded-md text-xl ml-auto btn-ghost">
                    Buy
                  </button>
                </div>
              </div>
            </div>
            {/* Course */}
            <div className="border rounded-md overflow-hidden duration-300 hover:border-[#DC4298] hover:scale-105 ">
              <div className="relative ">
                <img className="w-full" src={course3} alt="" />
                <div className="px-3 py-1 rounded-full flex items-center gap-2 w-fit absolute bg-white bottom-[5%] left-[5%]">
                  <img src={user} alt="" />
                  <p>120</p>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <p className="text-gray-400">1 - 28 July 2022</p>
                <p className="text-2xl font-bold">Back End Developerr -Basic</p>
                <p>
                  Product Management Masterclass, you will learn with Sarah
                  Johnson - Head of Product Customer Platform Gojek Indonesia.
                </p>
                <div className="flex items-center mt-4">
                  <p className="font-bold text-xl text-[#DC4298] mr-2">$ 380</p>
                  <p className="text-gray-400 line-through">$ 500</p>
                  <button className="py-2 px-8 rounded-md text-xl ml-auto btn-ghost">
                    Buy
                  </button>
                </div>
              </div>
            </div>
            {/* Course */}
            <div className="border rounded-md overflow-hidden duration-300 hover:border-[#DC4298] hover:scale-105 ">
              <div className="relative ">
                <img className="w-full" src={course4} alt="" />
                <div className="px-3 py-1 rounded-full flex items-center gap-2 w-fit absolute bg-white bottom-[5%] left-[5%]">
                  <img src={user} alt="" />
                  <p>120</p>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <p className="text-gray-400">1 - 28 July 2022</p>
                <p className="text-2xl font-bold">UX Design - Branstroming</p>
                <p>
                  Product Management Masterclass, you will learn with Sarah
                  Johnson - Head of Product Customer Platform Gojek Indonesia.
                </p>
                <div className="flex items-center mt-4">
                  <p className="font-bold text-xl text-[#DC4298] mr-2">$ 380</p>
                  <p className="text-gray-400 line-through">$ 500</p>
                  <button className="py-2 px-8 rounded-md text-xl ml-auto btn-ghost">
                    Buy
                  </button>
                </div>
              </div>
            </div>
            {/* Course */}
            <div className="border rounded-md overflow-hidden duration-300 hover:border-[#DC4298] hover:scale-105 ">
              <div className="relative ">
                <img className="w-full" src={course5} alt="" />
                <div className="px-3 py-1 rounded-full flex items-center gap-2 w-fit absolute bg-white bottom-[5%] left-[5%]">
                  <img src={user} alt="" />
                  <p>120</p>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <p className="text-gray-400">1 - 28 July 2022</p>
                <p className="text-2xl font-bold">UI Design - Sketch</p>
                <p>
                  Product Management Masterclass, you will learn with Sarah
                  Johnson - Head of Product Customer Platform Gojek Indonesia.
                </p>
                <div className="flex items-center mt-4">
                  <p className="font-bold text-xl text-[#DC4298] mr-2">$ 380</p>
                  <p className="text-gray-400 line-through">$ 500</p>
                  <button className="py-2 px-8 rounded-md text-xl ml-auto btn-ghost">
                    Buy
                  </button>
                </div>
              </div>
            </div>
            {/* Course */}
            <div className="border rounded-md overflow-hidden duration-300 hover:border-[#DC4298] hover:scale-105 ">
              <div className="relative ">
                <img className="w-full" src={course6} alt="" />
                <div className="px-3 py-1 rounded-full flex items-center gap-2 w-fit absolute bg-white bottom-[5%] left-[5%]">
                  <img src={user} alt="" />
                  <p>120</p>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <p className="text-gray-400">1 - 28 July 2022</p>
                <p className="text-2xl font-bold">
                  Graphic Design - Fundamental Design
                </p>
                <p>
                  Product Management Masterclass, you will learn with Sarah
                  Johnson - Head of Product Customer Platform Gojek Indonesia.
                </p>
                <div className="flex items-center mt-4">
                  <p className="font-bold text-xl text-[#DC4298] mr-2">$ 380</p>
                  <p className="text-gray-400 line-through">$ 500</p>
                  <button className="py-2 px-8 rounded-md text-xl ml-auto btn-ghost">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Courses;
