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
      }, {
        duration: 100,
        backgroundPositionY: "0%"
      }, 0)
      .to('.scramble', {
        duration: 100,
        scrambleText: "xKCd2347"
      }, 0);


  }, { scope: sectionContainer });


  return (
    <div ref={sectionContainer} id={id}>
      <div className="animated-area w-full h-screen bg-background">
        <div className="animated-panel h-full flex flex-col items-center justify-center">
          <div className="animated-picture  w-[80%] h-[80%]">
            <div className={`animated-background shadow rounded-xl size-full
                            bg-[url(${image})] bg-cover
                            flex flex-col items-center justify-center
                            text-9xl`}>
              <b className="scramble display-font">{phrase}</b></div>
          </div>
        </div>
      </div>
    </div>
  )
}