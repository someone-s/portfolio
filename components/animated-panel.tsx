"use client"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { Dispatch, RefObject, SetStateAction, useRef } from "react";

export function AnimatedPanel({
  ref,
  innerSegmentCount,
  setOuterTimeline,
  setInnerTimeline,
  id,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  ref: RefObject<HTMLDivElement | null>
  innerSegmentCount: number
  setOuterTimeline?: Dispatch<SetStateAction<GSAPTimeline | undefined>>
  setInnerTimeline?: Dispatch<SetStateAction<GSAPTimeline | undefined>>
}) {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const sectionArea = useRef<HTMLDivElement>(null);
  const sectionPanels = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    const count = innerSegmentCount;
    const outerLowerSnap = 1 / (1.5 + (0.5 * count));
    const outerUpperSnap = 1 - outerLowerSnap;
  
    const outerTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionArea.current,
        start: "0% bottom",
        end: `${50 + 50 * count}% top`,
        scrub: true,
        snap: (progress, self) => {
          if (progress < outerLowerSnap)
            return self?.direction == 1 ? outerLowerSnap : 0;
          else if (progress > outerUpperSnap)
            return self?.direction == 1 ? 1 : outerUpperSnap;
          else
            return progress;
        }
      }
    });
    if (setOuterTimeline)
      setOuterTimeline(outerTl);

    const innerTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionArea.current,
        start: "50% center",
        end: `${50 * count}% center`,
        scrub: true,
        pin: true,
        markers: true,
        snap: 1/Math.max(count - 1, 1)
      }
    });
    if (setInnerTimeline)
      setInnerTimeline(innerTl);

  }, { scope: ref });


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