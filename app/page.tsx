"use client"

import { AnimatedPanel } from "@/components/animated-panel";
import AnimatedLanding from "@/components/animated-landing";
import BaseLayout from "@/components/base-layout";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function ExperiencePanel() {
  const experiencePanel = useRef<HTMLDivElement>(null);
  const experienceBlock = useRef<HTMLDivElement>(null);
  const [ experienceTl, setExperienceTl ] = useState<GSAPTimeline>();
  useGSAP(() => {
    if (!experienceTl) return;

    experienceTl.fromTo(experienceBlock.current, {
      x: "0",
    }, {
      x: experiencePanel.current?.getBoundingClientRect().width,
      duration: 100
    }, 0);

  }, [experienceTl]);

  return (
    <AnimatedPanel ref={experiencePanel} setTimeline={setExperienceTl} id="experience">
      <div ref={experienceBlock} className="bg-red-300 size-5"></div>
    </AnimatedPanel>
  );
}

export default function Home() {



  const interestsPanel = useRef<HTMLDivElement>(null);
  const [ interestsTl, setInterestsTl ] = useState<GSAPTimeline>();


  const contactsPanel = useRef<HTMLDivElement>(null);
  const [ contactsTl, setContactsTl ] = useState<GSAPTimeline>();

  return (
    <BaseLayout>

      <AnimatedLanding
        id="landing"
        image="/portfolio/images/loch.jpg"
        phrase="Hello There."
        textLight="rgba(247, 197, 215, 1)"
        textDark="rgba(194, 180, 185, 1)">
      </AnimatedLanding>

      <ExperiencePanel></ExperiencePanel>

      <AnimatedPanel ref={interestsPanel} setTimeline={setInterestsTl} id="interests">
      </AnimatedPanel>

      <AnimatedPanel ref={contactsPanel} setTimeline={setContactsTl} id="contacts">
      </AnimatedPanel>

    </BaseLayout>
  );
}
