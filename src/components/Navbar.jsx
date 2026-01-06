import GradientButton from "./GradientButton";

export default function Navbar() {
  return (
    <nav className="absolute top-[6px] left-0 w-full z-20">
      <div className="max-w-[1512px] mx-auto px-[20px]">
        <div className="h-[96px] flex items-center justify-between rounded-[94px] px-[40px]">


          {/* Logo */}
          <div className="flex flex-col items-center w-[104px]">
            <span className="text-white text-[47.54px]" style={{ fontFamily: "Nico Moji" }}>
              CDS
            </span>
            <span className="text-white text-[5.94px] tracking-[0.16em]">
              CLIENT DRIVEN SOLUTIONS
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-[29px] text-white text-[20px]">
            <span>Services</span>
            <span>Industries</span>
            <span>Insights</span>
            <span>About Us</span>
            <span>Careers</span>
          </div>

          {/* CTA */}
          <GradientButton>Contact Us</GradientButton>

        </div>
      </div>
    </nav>
  );
}
    