"use client"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";


export default function AnimatedFlyin()
{
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    const container = useRef(null);

    useGSAP(() => {
        
        gsap.to(".hero", {
            scrollTrigger: {
                trigger: ".hero",
                start: "50% center",
                end: "200% center",
                scrub: true,
                //markers: true,
                pin: true,
            }
        });

        gsap.to(".inner-test", {
            scrollTrigger: {
                trigger: ".hero",
                start: "25% center",
                end: "49% center",
                scrub: true,
                //markers: true,
            },
            xPercent: 40
        });

        gsap.to(".inner-test", {
            scrollTrigger: {
                trigger: ".hero",
                start: "51% center",
                end: "100% center",
                scrub: true,
                //markers: true,
            },
            xPercent: 0
        });
    },{scope:container});

    return (
        <div ref={container} className="bg-blue-400">
            <div className="hero w-full h-screen bg-green-200">
                <div className="inner-test w-full h-screen bg-red-200"></div>
            </div>
        </div>
    )
}