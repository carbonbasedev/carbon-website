import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      
      {/* Centered writing image */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-8">
        <div className="relative w-full max-w-4xl space-y-0">
        <Image
            src="/brain.png"
            alt="Brain illustration"
            width={1200}
            height={1600}
            className="mx-auto w-full h-auto object-contain"
            quality={95}
          />

          <Image
            src="/writing.png"
            alt="Handwritten text"
            width={1200}
            height={1600}
            className="mx-auto w-full h-auto object-contain"
            priority
            quality={95}
          />
          <Image
            src="/writing2.png"
            alt="Handwritten text"
            width={1200}
            height={1600}
            className="mx-auto w-full h-auto object-contain"
            priority
            quality={95}
          />

        <div className="flex flex-row items-center justify-center gap-20 pt-2">
          <a href="/lifeforms">
            <Image
              src="/life_link.png"
              alt="Lifeforms Link"
              width={160}
              height={160}
              className="object-contain"
            />
          </a>
          <a href="/experiments">
            <Image
              src="/exp_link.png"
              alt="Experiments Link"
              width={220}
              height={200}
              className="object-contain"
            />
          </a>

        </div>
        

        </div>
      </div>
    </div>
  );
}
