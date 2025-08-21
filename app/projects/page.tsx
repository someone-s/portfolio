"use client"


import BaseLayout from "@/components/base-layout";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrambleTextPlugin, TextPlugin, ScrollToPlugin, Draggable, InertiaPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { getScrollPosition, waitScrollPositionReady } from "@/components/helpers/gsap-get-scroll-position";
import { useHash } from "@/components/helpers/next-use-hash";
import Link from "next/link";

function SoftwarePointList({
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


function FullImageItem({
  image,
  href
}: {
  image: string,
  href: string
}) {
  return (
    <Link href={href} className="shrink-0 min-w-full md:min-w-[70%] lg:min-w-[45%] xl:min-w-[30%] max-w-full 
                                border rounded-md  p-5 overflow-hidden"
      style={{ background: image, backgroundPosition: 'center', backgroundSize: 'cover' }}></Link>

  );
}

export default function Home() {


  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrambleTextPlugin);
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(Draggable);
  gsap.registerPlugin(InertiaPlugin);

  const scope = useRef(null);
  const animationLinkedInRef = useRef<HTMLDivElement>(null);
  const animationEmailRef = useRef<HTMLDivElement>(null);
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);

  // All animation for this page
  useGSAP(() => {

    const flow = (
      expandPercent: number,
      duration: string,
      softwareDuration: number,
      artsDuration: number,
      miscDuration: number
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

      const softwareScroll = () => scrollFixedAmount('software-scroll');
      const artsScroll = () => scrollFixedAmount('arts-scroll');
      const miscScroll = () => scrollFixedAmount('misc-scroll');

      tl
        .set('#title-text', { text: "Tinkering." }, 0)
        .set('#software-area', { y: "-6%" }, '<')
        .set('#arts-area', { y: "-104%" }, '<')
        .set('#misc-area', { y: "-202%" }, '<')

        // Setup software
        .set('#software-content', { height: `${eP - 4}%` }, '<')

        // Setup arts
        .set('#arts-content', { height: `${eP - 4}%` }, '<')

        // Setup misc
        .set('#misc-content', { height: `${eP - 4}%` }, '<')

        // Software Area
        .add('softwareStartLabel', '>0.5')
        .to('#title-area', { height: `${100 - eP}%`, duration: 1 }, 'softwareStartLabel')
        //
        .to('#title-background', { y: "-20%", duration: 1 }, 'softwareStartLabel')
        .to('#title-text', { scrambleText: "Software", duration: 1 }, 'softwareStartLabel')
        .to('#software-area', { y: `-=${eP - 6}%`, duration: 1 }, 'softwareStartLabel')
        .add('softwareExpandedLabel', 'softwareStartLabel+=1')

        // Arts Area
        .add('artsStartLabel', '>0.5')
        //
        .to('#title-background', { y: "-30%", duration: 1 }, 'artsStartLabel')
        .to('#title-text', { scrambleText: "Creations", duration: 1 }, 'artsStartLabel')
        .to('#arts-area', { y: `-=${eP - 6}%`, duration: 1 }, 'artsStartLabel')
        .add('artsExpandedLabel', 'artsStartLabel+=1')

        // Misc Area
        .add('miscStartLabel', '>0.5')
        //
        .to('#title-background', { y: "-40%", duration: 1 }, 'miscStartLabel')
        .to('#title-text', { scrambleText: "Misc", duration: 1 }, 'miscStartLabel')
        .to('#misc-area', { y: `-=${eP - 6}%`, duration: 1 }, 'miscStartLabel')
        .add('miscExpandedLabel', 'miscStartLabel+=1')
        ;

      setTimeline(tl);

      Draggable.create('#software-scroll', { type: 'x', bounds: {minX: 0, maxX: -softwareScroll()}, inertia: true });
      Draggable.create('#arts-scroll', { type: 'x', bounds: {minX: 0, maxX: -artsScroll()}, inertia: true });
      Draggable.create('#misc-scroll', { type: 'x', bounds: {minX: 0, maxX: -miscScroll()}, inertia: true });
    }

    const mm = gsap.matchMedia();

    //md
    mm.add("(min-width: 768px)", () => {
      flow(45, '+=300%', 10, 10, 10);
    });

    //sm
    mm.add("(min-width: 640px) and (max-width: 767px)", () => {
      flow(55, '+=300%', 5, 5, 5);
    });


    mm.add("(min-width: 480px) and (max-width: 639px)", () => {
      flow(55, '+=300%', 5, 5, 5);
    });

    mm.add("(max-width: 479px) and (min-height: 768px)", () => {
      flow(55, '+=300%', 5, 5, 5);
    });
    mm.add("(max-width: 479px) and (max-height: 767px)", () => {
      flow(55, '+=300%', 5, 5, 5);
    });

  }, { scope: scope });




  const hash = useHash();

  useGSAP(async () => {

    if (!timeline) return;
    await waitScrollPositionReady(timeline);

    const actualHash = window.location.hash;

    const getScrollPositionWithTimeline = (label: string) => getScrollPosition(timeline, timeline.labels[label] / timeline.totalDuration());

    switch (actualHash) {
      case "#software":
        gsap.to(window, { scrollTo: getScrollPositionWithTimeline('softwareExpandedLabel'), duration: 0 });
        break;
      case "#arts":
        gsap.to(window, { scrollTo: getScrollPositionWithTimeline('artsExpandedLabel'), duration: 0 });
        break;
      case "#misc":
        gsap.to(window, { scrollTo: getScrollPositionWithTimeline('miscExpandedLabel'), duration: 0 });
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
                  <div id="title-background" className="size-full shrink-0 bg-[url(/portfolio/images/cotedazor.jpg)] bg-center bg-cover bg-gray-100 dark:bg-gray-300 bg-blend-multiply"></div>
                  <div className="size-full shrink-0 -translate-y-full">
                    <div id="title-area" className="size-full
                                                  text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl
                                                  text-center text-nowrap
                                                  flex items-center justify-center">
                      <div id="title-text" className="scramble font-mono-heavy text-[#aafda2] dark:text-[#9bd89b] text-shadow-lg"></div>
                    </div>
                  </div>
                </div>

                <div id="software-area" className="size-full shrink-0 
                                                  rounded-lg border-t
                                                  bg-popover shadow-2xl">

                  <div id="software-content" className="m-0.25 p-4.75 pt-9.75 overflow-hidden">

                    <div id="software-scroll" className="w-full h-full flex flex-row gap-2">

                      <FullImageItem image="url(/portfolio/images/northernisles.png)" href="https://someone-s.itch.io/northern-isles"></FullImageItem>

                      <FullImageItem image="url(/portfolio/images/localconverter.png)" href="https://someone-s.github.io/local-converter/"></FullImageItem>

                      <FullImageItem image="url(/portfolio/images/venicevr.png)" href="https://www.lancaster.ac.uk/iss/itpi/our-projects/the-ruskin-project/"></FullImageItem>

                      <FullImageItem image="url(/portfolio/images/imaginationcave.png)" href="https://www.lancaster.ac.uk/iss/itpi/our-projects/lancaster-music-festival/"></FullImageItem>

                      <FullImageItem image="url(/portfolio/images/cochlear.png)" href="https://www.lancaster.ac.uk/iss/itpi/our-projects/lancaster-music-festival/"></FullImageItem>

                      <FullImageItem image="url(/portfolio/images/bookofruskin.png)" href="https://www.lancaster.ac.uk/iss/itpi/our-projects/the-ruskin-project/"></FullImageItem>

                      <FullImageItem image="url(/portfolio/images/lifeinthewomb.png)" href="https://www.lancaster.ac.uk/iss/itpi/our-projects/lancaster-music-festival/"></FullImageItem>

                    </div>
                  </div>
                </div>

                <div id="arts-area" className="size-full shrink-0 
                                                  rounded-lg border-t
                                                  bg-popover shadow-2xl">

                  <div id="arts-content" className="m-0.25 p-4.75 pt-7.25 overflow-hidden">

                    <div id="arts-scroll" className="w-full h-full flex flex-row gap-2">


                      <FullImageItem image="url(/portfolio/images/gg1.png)" href="https://steamcommunity.com/sharedfiles/filedetails/?id=3374184849"></FullImageItem>

                      <FullImageItem image="url(/portfolio/images/p5a.png)" href="https://steamcommunity.com/sharedfiles/filedetails/?id=3383830139"></FullImageItem>

                      <FullImageItem image="url(/portfolio/images/bowland.png)" href="https://www.instagram.com/bowlandcollege"></FullImageItem>

                      <FullImageItem image="url(/portfolio/images/gebboat.png)" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2592165648"></FullImageItem>

                      <FullImageItem image="url(/portfolio/images/sw1500.png)" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2671617901"></FullImageItem>

                      <FullImageItem image="url(/portfolio/images/funit.png)" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2797444407"></FullImageItem>

                      <FullImageItem image="url(/portfolio/images/bp20.png)" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2831427466"></FullImageItem>

                      <FullImageItem image="url(/portfolio/images/sd35.png)" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2838693251"></FullImageItem>

                    </div>
                  </div>
                </div>

                <div id="misc-area" className="size-full shrink-0 
                                                  rounded-lg border-t
                                                  bg-popover shadow-2xl">

                  <div id="misc-content" className="m-0.25 p-4.75 pb-9.75 overflow-hidden">

                    <div id="misc-scroll" className="w-full h-full flex flex-row gap-2">

                      <FullImageItem image="url(/portfolio/images/webxrxrit.png)" href="https://github.com/someone-s/webxr-xri-toolkit-bridge"></FullImageItem>

                      <FullImageItem image="url(/portfolio/images/vivado.png)" href="https://medium.com/@workemaileden/vivado-adventure-part-1-installation-on-virtual-machine-2cb69edc4437"></FullImageItem>

                      <FullImageItem image="url(/portfolio/images/terrain.png)" href="https://github.com/someone-s/runtime-compute-terrain/"></FullImageItem>

                      <FullImageItem image="url(/portfolio/images/fat32.png)" href="https://github.com/someone-s/FATReader-Mirror"></FullImageItem>
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
