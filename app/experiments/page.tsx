import Image from "next/image";

export default function Experiments() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      
      {/* Centered writing image */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-8">
        <div className="relative w-full max-w-4xl">
          <Image
            src="/experiments1.png"
            alt="Brain illustration"
            width={1200}
            height={1100}
            className="mx-auto w-full h-auto object-contain block"
            quality={95}
          />

          <Image
            src="/particle.png"
            alt="Brain illustration"
            width={1200}
            height={1600}
            className="mx-auto w-[70%] h-auto object-contain block pb-10"
            quality={95}
          />

          <Image
            src="/experiments2.png"
            alt="Brain illustration"
            width={1200}
            height={1600}
            className="mx-auto w-full h-auto object-contain block"
            quality={95}
          />

          <Image
            src="/bow.png"
            alt="Brain illustration"
            width={1200}
            height={1600}
            className="mx-auto w-[70%] h-auto object-contain block pb-10"
            quality={95}
          />
          <Image
            src="/experiments3.png"
            alt="Brain illustration"
            width={1200}
            height={1600}
            className="mx-auto w-full h-auto object-contain block"
            quality={95}
          />

          <Image
            src="/radio.png"
            alt="Brain illustration"
            width={1200}
            height={1600}
            className="mx-auto w-[70%] h-auto object-contain block pb-10"
            quality={95}
          />

        </div>
      </div>
    </div>
  );
}
