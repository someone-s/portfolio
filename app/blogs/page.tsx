"use client"

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

    </BaseLayout>
  );
}
