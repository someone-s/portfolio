"use client"

import AnimatedLanding from "@/components/animated-landing";
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

    </BaseLayout>
  );
}
