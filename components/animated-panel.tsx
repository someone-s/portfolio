"use client"

import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
export function AnimatedPanel({
  id,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  const sectionContainer = useRef<HTMLDivElement>(null);
  const sectionArea = useRef<HTMLDivElement>(null);
  const sectionPanels = useRef<HTMLDivElement>(null);

  useGSAP(() => {


    gsap.fromTo(sectionPanels.current, {
      y: 0
    }, {
      scrollTrigger: {
        trigger: sectionArea.current,
        start: "0% center",
        end: "150% center",
        scrub: true,
        snap: [1/3, 1],
      },
      y: (sectionPanels.current ? (sectionPanels.current.childElementCount - 1) : 0) * 100 + 'vh',
      ease: "none"
    });

  }, { scope: sectionContainer });


  return (
    <div ref={sectionContainer} id={id}>
      <div ref={sectionArea} className="w-full h-screen">
        <div ref={sectionPanels} className={`h-full flex flex-col`}>
          <div className="w-screen h-full flex-none">
            <div className="animated-picture size-full flex flex-col items-center justify-center">
              <div className="flex-none w-[80%] h-[80%]
                              bg-popover shadow
                              rounded-xl border">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}