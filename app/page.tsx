"use client"

import { AnimatedPanel, getSnapPercentage } from "@/components/animated-panel";
import AnimatedLanding from "@/components/animated-landing";
import BaseLayout from "@/components/base-layout";
import { RefObject, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";

function ExperiencePointList({
  ref,
  title,
  location,
  children,
}: React.ComponentPropsWithoutRef<"div"> & {
  ref: RefObject<HTMLDivElement | null>
  title: string
  location: string
}) {
  return (
    <div ref={ref} className="shrink-0 size-full border-[#313837] dark:border-[#1B1F1E] bg-[#4F5E51] dark:bg-[#242925] border rounded-lg">
      <div className="h-[5%]  p-3 pt-2 sm:pt-3">
        <div className="w-0 sm:w-auto
                        leading-3 sm:leading-normal 
                        text-xs md:text-lg lg:text-2xl xl:text-3xl 
                        font-mono-heavy"><span className="whitespace-nowrap">{title}</span> <span className="whitespace-nowrap">• {location}</span></div>
      </div>
      <ul className="list-disc list-outside 
                      text-xs md:text-lg lg:text-2xl font-sans
                      p-4 pl-11">
        {children}
      </ul>
    </div>
  );
}

function ExperiencePanel() {

  const snapInterval = 7;

  const panelRef = useRef<HTMLDivElement>(null);
  const squareRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [outerTl, setOuterTl] = useState<GSAPTimeline>();
  useGSAP(() => {
    if (!outerTl) return;

    const snapDuration = getSnapPercentage(snapInterval) * 100;

    outerTl
      .from(headerRef.current, { scrambleText: "x4K32cd1a3df5".substring(0, headerRef.current?.textContent.length), duration: snapDuration }, 0)
      .fromTo(squareRef.current, { backgroundPositionY: "100%", }, { backgroundPositionY: "60%", duration: snapDuration }, 0)
      .fromTo(squareRef.current, { backgroundPositionY: "70%", }, { backgroundPositionY: "0%", duration: snapDuration }, 100 - snapDuration)

      .set({}, {}, 100);
  }, [outerTl]);

  const textRef = useRef(null);
  const popup1Ref = useRef(null);
  const popup2Ref = useRef(null);
  const popup3Ref = useRef(null);
  const popup4Ref = useRef(null);
  const popup5Ref = useRef(null);
  const popup6Ref = useRef(null);
  const [innerTl, setInnerTl] = useState<GSAPTimeline>();
  useGSAP(() => {
    if (!innerTl) return;

    const snapStep = 1 / (snapInterval - 1) * 100;

    innerTl
      .fromTo(textRef.current, { y: "-10%" }, { y: "-30%", duration: snapStep }, 0)
      .fromTo(squareRef.current, { backgroundPositionY: "60%", }, { backgroundPositionY: "70%", duration: snapStep }, 0)
      .fromTo(popup1Ref.current, { y: `${58 - 100}%` }, { y: `${36 - 100}%`, duration: snapStep }, 0 * snapStep)
      .fromTo(popup2Ref.current, { y: `${65 - 200}%` }, { y: `${43 - 200}%`, duration: snapStep }, 1 * snapStep)
      .fromTo(popup3Ref.current, { y: `${72 - 300}%` }, { y: `${50 - 300}%`, duration: snapStep }, 2 * snapStep)
      .fromTo(popup4Ref.current, { y: `${79 - 400}%` }, { y: `${57 - 400}%`, duration: snapStep }, 3 * snapStep)
      .fromTo(popup5Ref.current, { y: `${86 - 500}%` }, { y: `${64 - 500}%`, duration: snapStep }, 4 * snapStep)
      .fromTo(popup6Ref.current, { y: `${93 - 600}%` }, { y: `${71 - 600}%`, duration: snapStep }, 5 * snapStep)


      .set({}, {}, 100);

  }, [innerTl]);

  return (
    <AnimatedPanel ref={panelRef} innerSegmentCount={snapInterval} setOuterTimeline={setOuterTl} setInnerTimeline={setInnerTl} id="experience">
      <div className="flex-none size-full flex items-center justify-center">
        <div className="unique-class size-[80%] flex flex-col rounded-2xl overflow-hidden   text-[#FAC5D6] dark:text-[#C3B4B9]">


          <div ref={squareRef} className="shrink-0 size-full bg-[url(/portfolio/images/frioul.jpg)] bg-cover bg-center dark:bg-gray-400 bg-blend-multiply">
            <div ref={textRef} className="h-[100%] text-center flex  items-center justify-center">
              <div ref={headerRef} className="p-5 text-4xl md:text-8xl font-mono-heavy text-[#FAC5D6] dark:text-[#C3B4B9]">Experience</div>
            </div>
          </div>

          <ExperiencePointList
            ref={popup1Ref}
            title="Software Developer (XR/AR)"
            location="ISS Innovation Hub">
            <li>Worked at ISS Innovation Hub, part of Lancaster University</li>
            <li>Develop various VR and AI experience from 0 to 1</li>
            <li>Contribute and drive product roadmap within an Agile team</li>
            <li>Upheld and maintain code quality within team</li>
            <li>Coach and mentor junior developers</li>
          </ExperiencePointList>


          <ExperiencePointList
            ref={popup2Ref}
            title="Associate Lecturer"
            location="Lancaster University">
            <li>Worked within the School of Comupting and Communication</li>
            <li>Delivering in-person lab sessions with module lecturers</li>
            <li>Mentor and provide academic assistant to student</li>
          </ExperiencePointList>

          <ExperiencePointList
            ref={popup3Ref}
            title="Game Programmer/Modder"
            location="Freelance Hire">
            <li>Take on commission work creating custom 3D models</li>
            <li>Tinker and program with Unity and C# DotNet</li>
            <li>Experiment with compute shader accelerated programs</li>
            <li>Create customized 3D assets for use in games</li>
          </ExperiencePointList>

          <ExperiencePointList
            ref={popup4Ref}
            title="Vice President"
            location="LU Hiking Club">
            <li>Worked within a team of 11, reporting to the President</li>
            <li>Coordinated transport and schedules, ensuring trips ran on time</li>
            <li>Adapted plans to changing conditions while meeting deadlines</li>
            <li>Ensured safety compliance, resolved member queries</li>
          </ExperiencePointList>

          <ExperiencePointList
            ref={popup5Ref}
            title="Communication Officer"
            location="Bowland College">
            <li>Deliver Lancaster University Bowland College events</li>
            <li>Maintained meeting records to support team organisation</li>
            <li>Managed ticket sales through internal systems with precision</li>
            <li>Communicated event information across multiple channels</li>
            <li>Create social media post and graphic design for posters</li>
          </ExperiencePointList>

          <ExperiencePointList
            ref={popup6Ref}
            title="Student Advisor"
            location="Wah Yan College Kowloon">
            <li>Part of the then newly created Stem Team</li>
            <li>Guided students on self-driven projects</li>
            <li>Provide constructive feedback and encouragement</li>
            <li>Operate and maintain 3D printers for rapid prototyping</li>
          </ExperiencePointList>

        </div>
      </div>

    </AnimatedPanel >
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

        <div className="flex-none size-[80%] flex flex-col items-center justify-center bg-red-400">
        </div>
      </AnimatedPanel>

      <AnimatedPanel ref={contactsPanel} innerSegmentCount={1} setOuterTimeline={setContactsTl} id="contacts">
        <div className="flex-none size-[80%] flex flex-col items-center justify-center bg-red-400">
        </div>
      </AnimatedPanel>

    </BaseLayout>
  );
}
