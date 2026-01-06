import bg from "../assets/home-bg.png";
import scroll from "../assets/scroll-indicator.svg";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-black"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* CONTENT CONTAINER */}
      <div className="relative z-10 max-w-[1512px] mx-auto flex flex-col items-center">

        {/* Spacer from top (navbar space + visual rhythm) */}
        <div className="h-[300px]" />

        {/* Tag */}
        <div className="mb-[40px]">
          <div className="px-[27px] py-[4px] rounded-[32px] border border-white/30 bg-white/3 text-white text-[16px] uppercase text-center">
            Consectetur Adipiscing Elit
          </div>
        </div>

        {/* Heading */}
        <h1 className="mb-[56px] w-[759px] text-[70px] leading-[85px] font-black text-white text-center">
          Lorem Ipsum Dolor <br /> Sit Ame
        </h1>

        {/* CTA */}
        <button className="mb-[140px] w-[177px] h-[56px] rounded-[54px] bg-white text-[#000111] text-[20px]">
          Explore More
        </button>

        {/* Scroll indicator */}
        <img
          src={scroll}
          alt=""
          className="mb-[40px]"
        />

      </div>
    </section>
  );
}
