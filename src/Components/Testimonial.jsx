import testimonialimg from "../Assets/testimonial-img.png";
import arc from "../Assets/arrow-right-circle.png";
function Testimonial() {
  return (
    <section>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 ">
          <div className="w-full">
            <img src={testimonialimg} alt="" />
          </div>
          <div className="h-full flex flex-col gap-4 p-4">
            <h2 className="text-4xl font-bold">What did they say</h2>
            <p className="text-xl">
              Higher education in the era of the industrial revolution 4.0
              requires breakthrough learning using digital platforms that answer
              the challenges of millennial students to study anywhere, anytime
              and with leading-edge ICT technology. From student recruitment to
              teaching and learning administration processes,
            </p>
            <div className="flex justify-between items-center border-t py-2 mt-auto">
              <div className="flex flex-col gap-1">
                <p className="text-3xl font-bold">Briana Patton</p>
                <p className="font-medium text-xl">Designer at Salesforce</p>
              </div>
              <img src={arc} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonial;
