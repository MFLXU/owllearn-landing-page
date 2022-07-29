import ctaimg from "../Assets/cta-img.png";
function CTA() {
  return (
    <section className="bg-[#DC4298] py-0">
      <div className="container">
        <div className="grid md:grid-cols-2">
          <div
            className="flex flex-col justify-between py-10
          "
          >
            <h2 className="text-white font-bold gap-4 text-4xl md:text-6xl">
              Still confused about your career choice? consult with our experts
            </h2>
            <button className="btn bg-white text-[#DC4298]">Contact Us</button>
          </div>
          <div>
            <img src={ctaimg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default CTA;
