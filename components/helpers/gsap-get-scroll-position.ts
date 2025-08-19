// https://gsap.com/docs/v3/HelperFunctions/helpers/getScrollPosition

import gsap from "gsap";

export async function waitScrollPositionReady(animation: gsap.core.Animation) {
  while (!animation.scrollTrigger || !animation.scrollTrigger.end) 
    await new Promise(resolve => setTimeout(resolve, 50));
}

export function getScrollPosition(animation: gsap.core.Animation, progress?: number): number {
  
  if (animation.scrollTrigger == null) return 0;
  let st = animation.scrollTrigger;
  
  let p = gsap.utils.clamp(0, 1, progress || 0);

  let containerAnimation = st.vars.containerAnimation;
  if (containerAnimation && containerAnimation.scrollTrigger) {
    let time = st.start + (st.end - st.start) * p;
    st = containerAnimation.scrollTrigger;
    return (
      st.start + (st.end - st.start) * (time / containerAnimation.duration())
    );
  }
  return st.start + (st.end - st.start) * p;
}