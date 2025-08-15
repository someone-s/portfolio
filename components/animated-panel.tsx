"use client"

import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { Dispatch, RefObject, SetStateAction, useRef } from "react";

export function AnimatedPanel({
  ref,
  setTimeline,
  id, 
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  ref: RefObject<HTMLDivElement | null>
  setTimeline: Dispatch<SetStateAction<GSAPTimeline | undefined>>
}) {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const sectionArea = useRef<HTMLDivElement>(null);
  const sectionPanels = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    setTimeline(gsap.timeline({
      scrollTrigger: {
        trigger: sectionArea.current,
        start: "0% center",
        end: "100% center",
        scrub: true,
        snap: [-0.5, 0.5, 1.5],
      }
    }));
  }, {scope: ref});


  return (
    <div ref={ref} id={id}>
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