"use client"


import BaseLayout from "@/components/base-layout";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrambleTextPlugin, TextPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useMeasure } from "@uidotdev/usehooks";


function ExperiencePointList({
  title,
  location,
  children,
}: React.ComponentPropsWithoutRef<"div"> & {
  title: string
  location: string
}) {
  return (
    <div className="shrink-0 border p-5 bg-accent rounded-md max-w-full">
      <div className="font-sans-heavy 
                      text-lg sm:text-xl md:text-2xl">{title}</div>
      <div className="mb-1">{location}</div>
      <ul className="list-outside list-disc pl-5">
        {children}
      </ul>
    </div>
  );
}


export default function Home() {


  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrambleTextPlugin);

  const scope = useRef(null);

  const [expScrollElRef, size] = useMeasure();


  useGSAP(() => {

    const flow = (
      expandPercent: number
    ) => {
      const eP = expandPercent;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#view-area",
          start: "top top",
          end: "+=300% bottom",
          onUpdate: ({ progress }) => console.log(progress),
          pin: true,
          invalidateOnRefresh: true,
          markers: true,
          scrub: true,
        },
      });



      const scrollAmount = (elementId:string) => {
        const expScrollEl = document.getElementById(elementId);
        const expScrollAmount = expScrollEl ? expScrollEl.scrollWidth - expScrollEl.clientWidth : 0;
        return -expScrollAmount;
      }

      tl
        .set('#title-text', { text: "Hello There." }, 0)
        .set('#experience-area', { y: "-6%" }, '<')
        .set('#interests-area', { y: "-104%" }, '<')
        .set('#contacts-area', { y: "-202%" }, '<')
        .set('#experience-content', {height: `${eP-4}%` }, '<')

        .to('#title-area', { height: `${100-eP}%`, duration: 1 }, 1)
        .to('#title-background', { y: "-20%", duration: 1 }, '<')
        .to('#title-text', { scrambleText: "Experience", duration: 1 }, '<')
        .to('#experience-area', { y: `-=${eP-6}%`, duration: 1 }, '<')

        .to('#experience-scroll', { x: () => scrollAmount('experience-scroll'), duration: 5 }, '>')

        .to('#title-text', { scrambleText: "Interests", duration: 1 }, '>')
        .to('#interests-area', { y: `-=${eP-6}%`, duration: 1 }, '<')

        .to('#title-text', { scrambleText: "Contacts", duration: 1 }, '>')
        .to('#contacts-area', { y: `-=${eP-6}%`, duration: 1 }, '<')
        ;
    }

    const mm = gsap.matchMedia();

    //md
    mm.add("(min-width: 768px)", () => {
      flow(40);
    });

    //sm
    mm.add("(min-width: 640px) and (max-width: 767px)", () => {
      flow(55);
    });

    
    mm.add("(max-width: 639px)", () => {
      flow(70);
    });




  }, { scope: scope });

  return (
    <BaseLayout>
      <div ref={scope}>
        <div id="view-area" className="w-full h-screen">
          <div className="h-full flex flex-col items-center justify-center">
            <div className="w-[80%] h-[80%]">
              <div className="shadow rounded-xl size-full
                              flex flex-col
                              overflow-hidden">

                <div className="size-full shrink-0 flex flex-col overflow-hidden">
                  <div id="title-background" className="size-full shrink-0 bg-[url(/portfolio/images/loch.jpg)] bg-center bg-cover"></div>
                  <div className="size-full shrink-0 -translate-y-full">
                    <div id="title-area" className="size-full
                                                  text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl
                                                  text-center text-nowrap
                                                  flex items-center justify-center">
                      <div id="title-text" className="scramble font-mono-heavy text-[#f7c5d7] dark:text-[#c2b4b9]"></div>
                    </div>
                  </div>
                </div>

                <div id="experience-area" className="size-full shrink-0 
                                                  rounded-lg border-t
                                                  bg-popover shadow-2xl">


                  <div id="experience-content" className="p-5 pt-10">

                    <div id="experience-scroll" ref={expScrollElRef} className="w-full h-full flex flex-row gap-2">

                      <ExperiencePointList
                        title="Software Developer (XR/AR)"
                        location="ISS Innovation Hub">
                        <li>Worked at ISS Innovation Hub, part of Lancaster University</li>
                        <li>Develop various VR and AI experience from 0 to 1</li>
                        <li>Contribute and drive product roadmap within an Agile team</li>
                        <li>Upheld and maintain code quality within team</li>
                        <li>Coach and mentor junior developers</li>
                      </ExperiencePointList>


                      <ExperiencePointList
                        title="Associate Lecturer"
                        location="Lancaster University">
                        <li>Worked within the School of Comupting and Communication</li>
                        <li>Delivering in-person lab sessions with module lecturers</li>
                        <li>Mentor and provide academic assistant to student</li>
                      </ExperiencePointList>

                      <ExperiencePointList
                        title="Game Programmer/Modder"
                        location="Freelance Hire">
                        <li>Take on commission work creating custom 3D models</li>
                        <li>Tinker and program with Unity and C# DotNet</li>
                        <li>Experiment with compute shader accelerated programs</li>
                        <li>Create customized 3D assets for use in games</li>
                      </ExperiencePointList>

                      <ExperiencePointList
                        title="Vice President"
                        location="LU Hiking Club">
                        <li>Worked within a team of 11, reporting to the President</li>
                        <li>Coordinated transport and schedules, ensuring trips ran on time</li>
                        <li>Adapted plans to changing conditions while meeting deadlines</li>
                        <li>Ensured safety compliance, resolved member queries</li>
                      </ExperiencePointList>

                      <ExperiencePointList
                        title="Communication Officer"
                        location="Bowland College">
                        <li>Deliver Lancaster University Bowland College events</li>
                        <li>Maintained meeting records to support team organisation</li>
                        <li>Managed ticket sales through internal systems with precision</li>
                        <li>Communicated event information across multiple channels</li>
                        <li>Create social media post and graphic design for posters</li>
                      </ExperiencePointList>

                      <ExperiencePointList
                        title="Student Advisor"
                        location="Wah Yan College Kowloon">
                        <li>Part of the then newly created Stem Team</li>
                        <li>Guided students on self-driven projects</li>
                        <li>Provide constructive feedback and encouragement</li>
                        <li>Operate and maintain 3D printers for rapid prototyping</li>
                      </ExperiencePointList>
                    </div>
                  </div>
                </div>

                <div id="interests-area" className="size-full shrink-0 
                                                  rounded-lg border-t
                                                  bg-popover shadow-2xl">

                </div>

                <div id="contacts-area" className="size-full shrink-0 
                                                  rounded-lg border-t
                                                  bg-popover shadow-2xl">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
