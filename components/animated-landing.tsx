"use client"

import gsap from "gsap";
import { ScrollTrigger, ScrambleTextPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";


export default function AnimatedLanding({
  id,
  children,
  image,
  phrase,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & { image: string, phrase: string }) {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrambleTextPlugin);

  const sectionContainer = useRef<HTMLDivElement>(null);
  const scrambleContainer = useRef<HTMLDivElement>(null);

  useGSAP(() => {


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.animated-area',
        start: "50% center",
        end: "150% center",
        scrub: true,
        snap: [0, 1]
      },
    });
    tl
      .fromTo('.animated-background', {
        backgroundPositionY: "50%",
        y: "0%",
        height: "100%",
      }, {
        duration: 100,
        backgroundPositionY: "0%",
        y: "100%",
        height: "50%",
      }, 0)
      .to(scrambleContainer.current, {
        duration: 100,
        scrambleText: "x4K32cd1a3df5".substring(0, scrambleContainer.current?.textContent.length),
      }, 0);


  }, { scope: sectionContainer });


  return (
    <div ref={sectionContainer} id={id}>
      <div className="animated-area w-full h-screen bg-background">
        <div className="animated-panel h-full flex flex-col items-center justify-center">
          <div className="animated-picture  w-[80%] h-[80%]">
            <div className="animated-background shadow rounded-xl size-full
                            bg-cover dark:bg-gray-400 bg-blend-multiply
                            flex flex-col items-center justify-center
                            text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl
                            text-center text-nowrap
                            text-rose-100 dark:text-[#cab5c3]" style={{backgroundImage: `url(${image})`}}>
              <div ref={scrambleContainer} className="scramble display-font">{phrase}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}