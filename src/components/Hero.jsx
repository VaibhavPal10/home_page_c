import bg from "../assets/home-bg.png";
import scroll from "../assets/scroll-indicator.svg";

export default function Hero() {
  return (
    <section
      className="w-full h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* CONTENT CONTAINER */}
      <div className="max-w-[1512px] h-full mx-auto relative">

        {/* Main content block */}
        <div className="pt-[220px] flex flex-col items-center text-center">

          {/* Tag */}
          <div className="mb-8">
            <div className="px-[27px] py-[4px] rounded-[32px] border border-white/30 bg-white/10 text-white text-[16px] uppercase">
              Consectetur Adipiscing Elit
            </div>
          </div>

          {/* Heading */}
          <h1 className="w-[759px] text-[70px] leading-[85px] font-black text-white mb-12">
            Lorem Ipsum Dolor <br /> Sit Ame
          </h1>

          {/* CTA */}
          <button className="w-[177px] h-[56px] rounded-[54px] bg-white text-[#000111] text-[20px] mb-16">
            Explore More
          </button>

          {/* Scroll indicator — NATURAL FLOW */}
          <img src={scroll} alt="" />
        </div>

      </div>
    </section>
  );
}
