import AnimatedFlyin from "@/components/animated-flyin";
import BaseLayout from "@/components/base-layout";


export default function Home() {
  return (
      <BaseLayout><div>
        <div id="landing" className="h-screen
                                      bg-[url(/portfolio/images/loch.jpg)] bg-cover bg-center">
        </div>
        <div id="experience" className="h-96 bg-amber-900">
        </div>
        <AnimatedFlyin></AnimatedFlyin>
        <div id="section2" className="h-screen bg-amber-300">

        </div>
      </div>
      </BaseLayout>
  );
}
