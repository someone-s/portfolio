import { AnimatedPanel } from "@/components/animated-panel";
import AnimatedLanding from "@/components/animated-landing";
import BaseLayout from "@/components/base-layout";



export default function Home() {
  return (
    <BaseLayout>
      <AnimatedLanding id="landing" image="/portfolio/images/loch.jpg" phrase="Home"></AnimatedLanding>
      <AnimatedPanel id="experience">
        <div className="bg-red-300 size-5"></div>
      </AnimatedPanel>
      <AnimatedPanel id="interests">
        <div className="bg-green-300 size-5"></div>
        </AnimatedPanel>
      <AnimatedPanel id="contacts">
        <div className="bg-blue-300 size-5"></div>
      </AnimatedPanel>
    </BaseLayout>
  );
}
