import Image from "next/image";

export function PhoneMockup() {
  return (
    <div className="relative">
      <div className="phone-mockup w-80 mx-auto">
        <div className="phone-screen">
          <Image
            src="/phone.jpg"
            alt="Valstore App Screenshot"
            width={320}
            height={640}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 -z-10">
        <div className="phone-mockup w-80 mx-auto opacity-20 blur-xl bg-primary/30"></div>
      </div>
    </div>
  );
}
