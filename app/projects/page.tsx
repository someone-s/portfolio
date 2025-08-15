import AnimatedLanding from "@/components/animated-landing";
import { AnimatedPanel } from "@/components/animated-panel";
import BaseLayout from "@/components/base-layout";


export default function Home() {
  return (
    <BaseLayout>

      <AnimatedLanding
        id="landing"
        image="/portfolio/images/alps.jpg"
        phrase="Tinkering Forever."
        textLight="rgba(179, 255, 223, 1)"
        textDark="rgba(151, 185, 173, 1)">
      </AnimatedLanding>

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
