import AnimatedLanding from "@/components/animated-landing";
import { AnimatedPanel } from "@/components/animated-panel";
import BaseLayout from "@/components/base-layout";


export default function Home() {
  return (
    <BaseLayout>
      <AnimatedLanding id="landing" image="/portfolio/images/loch.jpg" phrase="Tinkering Forever."></AnimatedLanding>
      <AnimatedPanel id="frontend">
        <div className="bg-red-300 size-5"></div>
      </AnimatedPanel>
      <AnimatedPanel id="arts">
        <div className="bg-green-300 size-5"></div>
        </AnimatedPanel>
      <AnimatedPanel id="embedded">
        <div className="bg-blue-300 size-5"></div>
      </AnimatedPanel>
    </BaseLayout>
  );
}
