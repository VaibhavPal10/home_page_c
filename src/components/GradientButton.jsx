export default function GradientButton({ children }) {
  return (
    <div className="
      p-[1px]
      rounded-[54px]
      bg-[linear-gradient(135deg,#FF6A3D,#6A5CFF)]
      shadow-[0_0_24px_rgba(106,92,255,0.35)]
    ">
      <button className="
        w-[177px] h-[56px]
        rounded-[54px]
        bg-[#0B0B12]/70
        text-white text-[20px]
        backdrop-blur-sm
      ">
        {children}
      </button>
    </div>
  );
}
