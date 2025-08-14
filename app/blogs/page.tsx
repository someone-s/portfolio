import AnimatedLanding from "@/components/animated-landing";
import { AnimatedPanel } from "@/components/animated-panel";
import BaseLayout from "@/components/base-layout";


export default function Home() {
  return (
    <BaseLayout>
      <AnimatedLanding id="landing" image="/portfolio/images/loch.jpg" phrase="Blogs"></AnimatedLanding>
      <AnimatedPanel id="featured">
        <div className="bg-red-300 size-5"></div>
      </AnimatedPanel>
      <AnimatedPanel id="all">
        <div className="bg-green-300 size-5"></div>
      </AnimatedPanel>
      <AnimatedPanel id="medium">
        <div className="bg-blue-300 size-5"></div>
      </AnimatedPanel>
    </BaseLayout>
  );
}
