"use client"


import BaseLayout from "@/components/base-layout";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrambleTextPlugin, TextPlugin, ScrollToPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { AnimationCubeSVG, AnimationEmailSVG, AnimationGraphicSVG, AnimationGroundSVG, AnimationLinkedInSVG, AnimationMountainSVG, AnimationPersonSVG, getAnimationEmailLoopingTimeline, getAnimationLinkedInLoopingTimeline, getAnimationPersonLoopingTimeline } from "@/components/animated-svg";
import { getScrollPosition, waitScrollPositionReady } from "@/components/helpers/gsap-get-scroll-position";
import { useHash } from "@/components/helpers/next-use-hash";
import Link from "next/link";

function ExperiencePointList({
  title,
  location,
  children,
}: React.ComponentPropsWithoutRef<"div"> & {
  title: string
  location: string
}) {
  return (
    <div className="shrink-0 border p-5 bg-accent rounded-md max-w-full overflow-hidden">
      <div className="font-sans-heavy 
                      text-lg sm:text-xl md:text-2xl">{title}</div>
      <div className="mb-1">{location}</div>
      <ul className="list-outside list-disc pl-5 text-base">
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
  gsap.registerPlugin(ScrollToPlugin);

  const scope = useRef(null);
  const animationLinkedInRef = useRef<HTMLDivElement>(null);
  const animationEmailRef = useRef<HTMLDivElement>(null);
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);

  // All animation for this page
  useGSAP(() => {

    const flow = (
      expandPercent: number,
      duration: string,
      experienceDuration: number,
      interestsDuration: number
    ) => {
      const eP = expandPercent;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#view-area",
          start: "top top",
          end: `${duration} bottom`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      const scrollFixedAmount = (elementId: string) => {
        const expScrollEl = document.getElementById(elementId);
        const expScrollAmount = expScrollEl ? expScrollEl.scrollWidth - expScrollEl.clientWidth : 0;
        return expScrollAmount;
      };

      const experienceScroll = () => scrollFixedAmount('experience-scroll');


      const scrollReferenceAmount = (widthElementId: string, viewElementId: string) => {
        const widthEl = document.getElementById(widthElementId);
        const viewEl = document.getElementById(viewElementId);
        const expScrollAmount = widthEl && viewEl ? widthEl.scrollWidth - viewEl.clientWidth : 0;
        return expScrollAmount;
      };

      const interestsScroll = () => {
        const viewEl = document.getElementById('interests-scroll');
        const idealAmount = scrollReferenceAmount('sprite-ground', 'interests-scroll');
        const maxAmount = viewEl ? viewEl.clientWidth * 3 : 0;
        return Math.min(idealAmount, maxAmount);
      }


      tl
        .set('#title-text', { text: "Hello There." }, 0)
        .set('#experience-area', { y: "-6%" }, '<')
        .set('#interests-area', { y: "-104%" }, '<')
        .set('#contacts-area', { y: "-202%" }, '<')

        // Setup experience
        .set('#experience-content', { height: `${eP - 4}%` }, '<')

        // Setup interests
        .set('#interests-content', { height: `${eP - 4}%` }, '<')
        .set('#interests-ground', { x: 0, y: "-100%" }, '<')
        //
        .set('#interests-cube', { y: "-200%" }, '<')
        .set('#sprite-cube', { y: "-5px" }, '<')
        .set('#sprite-cube', { y: "+=300px" }, '<')
        //
        .set('#interests-graphic', { y: "-300%" }, '<')
        .set('#interests-graphic', { x: () => interestsScroll() * 0.5 }, '<')
        .set('#sprite-graphic', { y: "-20px" }, '<')
        .set('#sprite-graphic', { y: "+=300px" }, '<')
        //
        .set('#interests-mountain', { y: "-400%" }, '<')
        .set('#interests-mountain', { x: () => interestsScroll() }, '<')
        .set('#sprite-mountain', { y: "-5px" }, '<')
        .set('#sprite-mountain', { y: "+=300px" }, '<')
        //
        .set('#interests-cube-text', { y: "-500%" }, '<')
        .set('#interests-cube-text', { y: "-=230px" }, '<')
        //
        .set('#interests-graphic-text', { y: "-600%" }, '<')
        .set('#interests-graphic-text', { x: () => interestsScroll() * 0.5 }, '<')
        .set('#interests-graphic-text', { y: "-=230px" }, '<')
        //
        .set('#interests-mountain-text', { y: "-700%" }, '<')
        .set('#interests-mountain-text', { x: () => interestsScroll() }, '<')
        .set('#interests-mountain-text', { y: "-=230px" }, '<')
        //
        .set('#sprite-person', { y: "-5px" }, '<')

        // Setup contacts
        .set('#contacts-content', { height: `${eP - 4}%` }, '<')

        // Experience Area
        .add('experienceStartLabel', '>0.5')
        .to('#title-area', { height: `${100 - eP}%`, duration: 1 }, 'experienceStartLabel')
        .to('#title-background', { y: "-20%", duration: 1 }, 'experienceStartLabel')
        .to('#title-text', { scrambleText: "Experience", duration: 1 }, 'experienceStartLabel')
        .to('#experience-area', { y: `-=${eP - 6}%`, duration: 1 }, 'experienceStartLabel')
        .add('experienceExpandedLabel', 'experienceStartLabel+=1')
        //
        .to('#experience-scroll', { x: () => -experienceScroll(), duration: experienceDuration }, 'experienceExpandedLabel+=0.5')

        // Interests Area
        .add('interestsStartLabel', '>0.5')
        .to('#title-text', { scrambleText: "Interests", duration: 1 }, 'interestsStartLabel')
        .to('#title-background', { y: "-30%", duration: 1 }, 'interestsStartLabel')
        .to('#interests-area', { y: `-=${eP - 6}%`, duration: 1 }, 'interestsStartLabel')
        .add(getAnimationPersonLoopingTimeline().timeScale(4).tweenFromTo(0, interestsDuration * 4), 'interestsStartLabel')
        .add('interestsExpandedLabel', 'interestsStartLabel+=1')
        //
        .add('interestsScrollLabel', 'interestsStartLabel+=1.5')
        .to('#sprite-cube', { y: "-=300px", duration: 0.5 }, `interestsScrollLabel-=0.5`)
        .to('#sprite-graphic', { y: "-=300px", duration: 0.5 }, `interestsScrollLabel+=${(interestsDuration - 5) / 3 - 0.5}`)
        .to('#sprite-mountain', { y: "-=300px", duration: 0.5 }, `interestsScrollLabel+=${(interestsDuration - 5) / 3 * 2 - 0.5}`)
        //
        .to('#sprite-person', { x: () => interestsScroll(), duration: `${interestsDuration - 5}` }, 'interestsScrollLabel')
        .to('#interests-scroll', { x: () => -interestsScroll(), duration: `${interestsDuration - 5}` }, 'interestsScrollLabel')

        // Contacts Area
        .add('contactsStartLabel', '>0.5')
        .to('#title-text', { scrambleText: "Contacts", duration: 1 }, 'contactsStartLabel')
        .to('#title-background', { y: "-40%", duration: 1 }, 'contactsStartLabel')
        .to('#contacts-area', { y: `-=${eP - 6}%`, duration: 1 }, 'contactsStartLabel')
        .add('contactsExpandedLabel', 'contactsStartLabel+=1')
        ;

      setTimeline(tl);
    }

    const mm = gsap.matchMedia();

    //md
    mm.add("(min-width: 768px)", () => {
      flow(45, '+=1000%', 10, 16);
    });

    //sm
    mm.add("(min-width: 640px) and (max-width: 767px)", () => {
      flow(55, '+=500%', 5, 8);
    });


    mm.add("(min-width: 480px) and (max-width: 639px)", () => {
      flow(70, '+=500%', 5, 8);
    });

    mm.add("(max-width: 479px) and (min-height: 768px)", () => {
      flow(80, '+=500%', 5, 8);
    });
    mm.add("(max-width: 479px) and (max-height: 767px)", () => {
      flow(90, '+=500%', 5, 8);
    });

    getAnimationLinkedInLoopingTimeline(animationLinkedInRef.current).play();
    getAnimationEmailLoopingTimeline(animationEmailRef.current).play();

  }, { scope: scope });

  const hash = useHash();

  useGSAP(async () => {

    if (!timeline) return;
    await waitScrollPositionReady(timeline);

    const actualHash = window.location.hash;

    const getScrollPositionWithTimeline = (label: string) => getScrollPosition(timeline, timeline.labels[label] / timeline.totalDuration());

    switch (actualHash) {
      case "#experience":
        gsap.to(window, { scrollTo: getScrollPositionWithTimeline('experienceExpandedLabel'), duration: 0 });
        break;
      case "#interests":
        gsap.to(window, { scrollTo: getScrollPositionWithTimeline('interestsExpandedLabel'), duration: 0 });
        break;
      case "#contacts":
        gsap.to(window, { scrollTo: getScrollPositionWithTimeline('contactsExpandedLabel'), duration: 0 });
        break;
    }



  }, [timeline, hash])

  return (
    <BaseLayout>
      <div ref={scope}>
        <div id="view-area" className="w-full h-screen">
          <div className="h-full flex flex-col items-center justify-center">
            <div className="w-[80%] max-w-[1536px] h-[80%]">
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
                      <div id="title-text" className="scramble font-mono-heavy text-[#e9a6be] dark:text-[#d89bb0] text-shadow-lg"></div>
                    </div>
                  </div>
                </div>

                <div id="experience-area" className="size-full shrink-0 
                                                  rounded-lg border-t
                                                  bg-popover shadow-2xl">

                  <div id="experience-content" className="m-0.25 p-4.75 pt-9.75 overflow-hidden">

                    <div id="experience-scroll" className="w-full h-full flex flex-row gap-2">

                      <ExperiencePointList
                        title="Software Developer (XR/AR)"
                        location="ISS Innovation Hub">
                        <li>Worked at ISS Innovation Hub, part of Lancaster University</li>
                        <li>Develop various VR & AI experience from 0 to 1</li>
                        <li>Contribute and drive product roadmap within an Agile team</li>
                        <li>Upheld and maintain code quality</li>
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

                  <div id="interests-content" className="m-0.25 p-4.75 pt-9.75 overflow-hidden">

                    <div id="interests-scroll" className="min-w-full h-full">
                      <div className="h-full flex flex-col justify-end">
                        <AnimationPersonSVG></AnimationPersonSVG>
                      </div>

                      <div id="interests-ground" className="h-full">
                        <div className="h-full flex flex-col justify-end">
                          <AnimationGroundSVG></AnimationGroundSVG>
                        </div>
                      </div>

                      <div id="interests-cube" className="size-full">
                        <div className="size-full flex flex-col items-end justify-end">
                          <AnimationCubeSVG></AnimationCubeSVG>
                        </div>
                      </div>

                      <div id="interests-graphic" className="h-full">
                        <div className="h-full flex flex-col items-end  justify-end">
                          <AnimationGraphicSVG></AnimationGraphicSVG>
                        </div>
                      </div>

                      <div id="interests-mountain" className="h-full">
                        <div className="h-full flex flex-col items-end  justify-end">
                          <AnimationMountainSVG></AnimationMountainSVG>
                        </div>
                      </div>

                      <div id="interests-cube-text" className="size-full">
                        <div className="size-full flex items-end justify-end
                                        text-end text-3xl sm:text-5xl font-sans-heavy">
                          3D Modeling
                        </div>
                      </div>

                      <div id="interests-graphic-text" className="h-full">
                        <div className="size-full flex items-end  justify-end
                                        text-end text-3xl sm:text-5xl font-sans-heavy">
                          Graphic Design
                        </div>
                      </div>

                      <div id="interests-mountain-text" className="h-full">
                        <div className="size-full flex items-end  justify-end
                                        text-end text-3xl sm:text-5xl font-sans-heavy">
                          Hiking
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="contacts-area" className="size-full shrink-0 
                                                  rounded-lg border-t
                                                  bg-popover shadow-2xl">

                  <div id="contacts-content" className="m-0.25 p-4.75 pb-9.75 overflow-hidden">

                    <div id="contacts-scroll" className="w-full h-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-5">

                      <div className="p-5 size-full border  bg-accent rounded-md overflow-hidden ">
                        <div className="flex flex-col md:flex-row h-full">
                          <div>
                            <div className="font-sans-heavy 
                                          text-lg sm:text-xl md:text-2xl">LinkedIn</div>
                            <div className="mb-1">Main point of contact</div>
                          </div>
                          <div className="grow overflow-hidden flex items-end justify-end">
                            <Link href="https://www.linkedin.com/in/eden-wong-memorable-url/" className="h-full">
                              <AnimationLinkedInSVG ref={animationLinkedInRef} width={"100%"} height={"100%"}></AnimationLinkedInSVG>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 size-full border  bg-accent rounded-md overflow-hidden ">
                        <div className="flex flex-col md:flex-row h-full">
                          <div>
                            <div className="font-sans-heavy 
                                          text-lg sm:text-xl md:text-2xl">Email</div>
                            <div className="mb-1">Secondary contact</div>
                          </div>
                          <div className="grow overflow-hidden flex items-end justify-end">
                            <Link href="mailto:workemaileden@gmail.com" className="h-full">
                              <AnimationEmailSVG ref={animationEmailRef} width={"100%"} height={"100%"}></AnimationEmailSVG>
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>


                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
