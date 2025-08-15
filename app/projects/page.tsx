"use client"

import AnimatedLanding from "@/components/animated-landing";
import { AnimatedPanel } from "@/components/animated-panel";
import BaseLayout from "@/components/base-layout";
import { useRef, useState } from "react";


export default function Projects() {
  
  const frontendPanel = useRef<HTMLDivElement>(null);
  const [ frontendTl, setFrontendTl ] = useState<GSAPTimeline>();


  const artsPanel = useRef<HTMLDivElement>(null);
  const [ artsTl, setArtsTl ] = useState<GSAPTimeline>();

  const embeddedPanel = useRef<HTMLDivElement>(null);
  const [ embeddedTl, setEmbeddedTl ] = useState<GSAPTimeline>();
  return (
    <BaseLayout>

      <AnimatedLanding
        id="landing"
        image="/portfolio/images/alps.jpg"
        phrase="Tinkering Forever."
        textLight="rgba(179, 255, 223, 1)"
        textDark="rgba(151, 185, 173, 1)">
      </AnimatedLanding>

      <AnimatedPanel ref={frontendPanel} innerSegmentCount={1} setOuterTimeline={setFrontendTl} id="frontend">
        <div className="bg-red-300 size-5"></div>
      </AnimatedPanel>

      <AnimatedPanel ref={artsPanel} innerSegmentCount={1} setOuterTimeline={setArtsTl} id="arts">
        <div className="bg-green-300 size-5"></div>
      </AnimatedPanel>

      <AnimatedPanel ref={embeddedPanel} innerSegmentCount={1} setOuterTimeline={setEmbeddedTl} id="embedded">
        <div className="bg-blue-300 size-5"></div>
      </AnimatedPanel>

    </BaseLayout>
  );
}
