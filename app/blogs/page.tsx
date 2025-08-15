"use client"

import AnimatedLanding from "@/components/animated-landing";
import { AnimatedPanel } from "@/components/animated-panel";
import BaseLayout from "@/components/base-layout";
import { useRef, useState } from "react";


export default function Blogs() {

  const featuredPanel = useRef<HTMLDivElement>(null);
  const [ featuredTl, setFeaturedTl ] = useState<GSAPTimeline>();


  const allPanel = useRef<HTMLDivElement>(null);
  const [ allTl, setAllTl ] = useState<GSAPTimeline>();

  const mediumPanel = useRef<HTMLDivElement>(null);
  const [ mediumTl, setMediumTl ] = useState<GSAPTimeline>();

  return (
    <BaseLayout>

      <AnimatedLanding
        id="landing"
        image="/portfolio/images/cotedazor.jpg"
        phrase="Random Ramblings."
        textLight="rgba(227, 249, 255, 1)"
        textDark="rgba(157, 183, 201, 1)">
      </AnimatedLanding>

      <AnimatedPanel ref={featuredPanel} innerSegmentCount={1} setOuterTimeline={setFeaturedTl} id="featured">
        <div className="bg-red-300 size-5"></div>
      </AnimatedPanel>

      <AnimatedPanel ref={allPanel} innerSegmentCount={1} setOuterTimeline={setAllTl} id="all">
        <div className="bg-green-300 size-5"></div>
      </AnimatedPanel>

      <AnimatedPanel ref={mediumPanel} innerSegmentCount={1} setOuterTimeline={setMediumTl} id="medium">
        <div className="bg-blue-300 size-5"></div>
      </AnimatedPanel>
    </BaseLayout>
  );
}
