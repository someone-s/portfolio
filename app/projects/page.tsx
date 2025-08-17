"use client"

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


    </BaseLayout>
  );
}
