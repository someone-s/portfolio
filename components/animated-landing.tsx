"use client"

import gsap from "gsap";
import { ScrollTrigger, ScrambleTextPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Property } from "csstype";


export default function AnimatedLanding({
  id,
  children,
  image,
  textLight,
  textDark,
  phrase,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & { 
  image: string,
  textLight: Property.Color,
  textDark: Property.Color,
  phrase: string }) {

  const { resolvedTheme } = useTheme();


  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrambleTextPlugin);

  const sectionContainer = useRef<HTMLDivElement>(null);
  const animatedBackground = useRef<HTMLDivElement>(null);
  const animatedArea = useRef<HTMLDivElement>(null);
  const scrambleContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrambleContainer.current) return;

    switch (resolvedTheme) {
      case 'dark':
        scrambleContainer.current.style.color = textDark
        break;
      case 'light':
        scrambleContainer.current.style.color = textLight
        break;
    }
  });

  useGSAP(() => {


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animatedArea.current,
        start: "center center",
        end: "100% top",
        scrub: true,
        snap: [0, 1]
      },
    });
    tl
      .fromTo(animatedBackground.current, {
        backgroundPositionY: "50%",
        y: "0%",
        height: "100%",
      }, {
        duration: 100,
        backgroundPositionY: "0%",
        y: "100%",
        height: "50%",
      }, 0)
      .to(scrambleContainer.current, {
        duration: 100,
        scrambleText: "x4K32cd1a3df5".substring(0, scrambleContainer.current?.textContent.length),
      }, 0);


  }, { scope: sectionContainer });


  return (
    <div ref={sectionContainer} id={id}>
      <div ref={animatedArea} className="w-full h-screen">
        <div className="h-full flex flex-col items-center justify-center">
          <div className="w-[80%] h-[80%]">
            <div ref={animatedBackground} className="shadow rounded-xl size-full
                                                    bg-center bg-cover dark:bg-gray-400 bg-blend-multiply
                                                    flex flex-col items-center justify-center
                                                    text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl
                                                    text-center text-nowrap" style={{backgroundImage: `url(${image})` }}>
              <div ref={scrambleContainer} className="scramble font-mono-heavy" style={{color: "rgba(0,0,0,0)" }}>{phrase}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}