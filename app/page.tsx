"use client"

import { AnimatedPanel } from "@/components/animated-panel";
import AnimatedLanding from "@/components/animated-landing";
import BaseLayout from "@/components/base-layout";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";

function ExperiencePanel() {

  const panelRef = useRef<HTMLDivElement>(null);

  const squareRef = useRef<HTMLDivElement>(null);
  const [outerTl, setOuterTl] = useState<GSAPTimeline>();
  useGSAP(() => {
    if (!outerTl) return;

    // outerTl.fromTo(squareRef.current, {
    //   x: "0",
    // }, {
    //   x: () => `${panelRef.current?.getBoundingClientRect().width}`,
    //   duration: 100
    // }, 0);
  }, [outerTl]);

  const popup1Ref = useRef(null);
  const popup2Ref = useRef(null);
  const popup3Ref = useRef(null);
  const [innerTl, setInnerTl] = useState<GSAPTimeline>();
  useGSAP(() => {
    if (!innerTl) return;

    innerTl
      .set(popup1Ref.current, { x: 1000 }, 0)
      .set(popup2Ref.current, { x: 1000 }, 0)
      .set(popup3Ref.current, { x: 1000 }, 0)
      .fromTo(popup1Ref.current, {
        x: 1000,
      }, {
        duration: 25,
        x: 0
      }, 0)
      .fromTo(popup2Ref.current, {
        x: 1000,
      }, {
        duration: 25,
        x: 0
      }, 25)
      .fromTo(popup3Ref.current, {
        x: 1000,
      }, {
        duration: 25,
        x: 0
      }, 50);
  }, [innerTl]);

  return (
    <AnimatedPanel ref={panelRef} innerSegmentCount={4} setOuterTimeline={setOuterTl} setInnerTimeline={setInnerTl} id="experience">
      <div className="m-5">
        {/* <div ref={squareRef} className="bg-red-300 size-5"></div> */}
        <div className="text-7xl font-mono-heavy">Experience</div>

        <div ref={popup1Ref}>
          <div className="text-2xl font-mono-heavy">Software Developer (XR/AR)</div>
          <ul className="list-disc list-inside text-1xl font-sans">
            <li>Deliver various bespoke cross platform VR and AI experience from inception to release</li>
            <li>Contribute and drive product roadmap with an Agile team</li>
            <li>Utilize Unity XR SDK and URP to deliver specific product features on Meta, Vive and OpenXR</li>
            <li>Upheld and maintain code quality within team</li>
            <li>Coach and mentor junior developers</li>
          </ul>
        </div>

        <div ref={popup2Ref}>
          <div className="text-2xl font-mono-heavy">Associate Lecturer</div>
          <ul className="list-disc list-inside text-1xl font-sans">
            <li>Delivering in-person lab sessions with module lecturers</li>
            <li>Mentor and provide academic assistant to student</li>
          </ul>
        </div>

        <div ref={popup3Ref}>
          <div className="text-2xl font-mono-heavy">Freelance Game Modder</div>
          <ul className="list-disc list-inside text-1xl font-sans">
            <li>Tinker and program with Unity and C# DotNet</li>
            <li>Experiment with compute shader accelerated programs</li>
            <li>Create customized 3D assets for use in games</li>
          </ul>
        </div>
      </div>

    </AnimatedPanel>
  );
}

export default function Home() {



  const interestsPanel = useRef<HTMLDivElement>(null);
  const [interestsTl, setInterestsTl] = useState<GSAPTimeline>();


  const contactsPanel = useRef<HTMLDivElement>(null);
  const [contactsTl, setContactsTl] = useState<GSAPTimeline>();

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

      <AnimatedPanel ref={interestsPanel} innerSegmentCount={1} setOuterTimeline={setInterestsTl} id="interests">
      </AnimatedPanel>

      <AnimatedPanel ref={contactsPanel} innerSegmentCount={1} setOuterTimeline={setContactsTl} id="contacts">
      </AnimatedPanel>

    </BaseLayout>
  );
}
