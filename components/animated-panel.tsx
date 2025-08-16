"use client"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { Dispatch, RefObject, SetStateAction, useRef } from "react";

export function getSnapPercentage(innerSegmentCount: number): number { return 1 / (1.5 + (0.5 * innerSegmentCount)); }

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

    const outerTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionArea.current,
        start: "0% bottom",
        end: `${50 + 50 * count}% top`,
        scrub: true,
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
            <div className="size-full flex flex-col items-center justify-center">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}