import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      
      {/* Centered writing image */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-8">
        <div className="relative w-full max-w-4xl space-y-8">
        <Image
            src="/brain.png"
            alt="Brain illustration"
            width={1200}
            height={1600}
            className="mx-auto w-full h-auto object-contain"
            quality={95}
          />

          <span className="inline-block">
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
          </span>

        <div className="flex justify-center pt-4">
          <a href="/experiments">
            &rarr; Experiments
          </a>
          <a href="/lifeforms">
            &rarr; Lifeforms
          </a>

        </div>

        </div>
      </div>
    </div>
  );
}
