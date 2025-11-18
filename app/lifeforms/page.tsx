import Image from "next/image";

export default function Lifeforms() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      
      {/* Centered writing image */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-8">
        <div className="relative w-full max-w-4xl space-y-8">
        <Image
            src="/alien.png"
            alt="Brain illustration"
            width={1200}
            height={1600}
            className="mx-auto w-full h-auto object-contain"
            quality={95}
          />

          <span className="inline-block">
            <Image
              src="/lifeforms.png"
              alt="Handwritten text"
              width={1200}
              height={1600}
              className="mx-auto w-full h-auto object-contain"
              priority
              quality={95}
            />
          </span>

        </div>
      </div>
    </div>
  );
}
