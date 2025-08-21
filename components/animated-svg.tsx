import gsap from "gsap";
import { RefObject, useRef } from "react";

// callin useGSAP scope
export function getAnimationPersonLoopingTimeline() {
  const tl = gsap.timeline({ repeat: -1 });

  tl
    // first frame
    .to('#sprite-person-frame-3', { opacity: 0, duration: 0, ease: 'none' }, 0)
    .to('#sprite-person-frame-0', { opacity: 1, duration: 0, ease: 'none' }, '<')
    // second frame
    .to('#sprite-person-frame-0', { opacity: 0, duration: 0, ease: 'none' }, 1)
    .to('#sprite-person-frame-1', { opacity: 1, duration: 0, ease: 'none' }, '<')
    // third frame
    .to('#sprite-person-frame-1', { opacity: 0, duration: 0, ease: 'none' }, 2)
    .to('#sprite-person-frame-2', { opacity: 1, duration: 0, ease: 'none' }, '<')
    // forth frame
    .to('#sprite-person-frame-2', { opacity: 0, duration: 0, ease: 'none' }, 3)
    .to('#sprite-person-frame-3', { opacity: 1, duration: 0, ease: 'none' }, '<')
    // loop frame
    .to('#sprite-person-frame-3', { opacity: 0, duration: 0, ease: 'none' }, 4)
    .to('#sprite-person-frame-0', { opacity: 1, duration: 0, ease: 'none' }, '<')
    ;

  return tl;
}

export function AnimationPersonSVG({ ref }: { ref?: RefObject<HTMLDivElement> }) {

  return (
    <div ref={ref}>
      <div id="sprite-person">
        <svg className="fill-foreground" xmlns="http://www.w3.org/2000/svg" width="100" height="110" viewBox="0 0 13.229 29.104">
          <g paintOrder="markers stroke fill">
            <g id="sprite-person-frame-0" transform="translate(-5.292 1.323)" opacity={0}>
              <circle cx="7.276" cy="27.12" r=".661" />
              <circle cx="5.953" cy="25.797" r=".661" />
              <circle cx="7.276" cy="24.474" r=".661" />
              <circle cx="7.276" cy="23.151" r=".661" />
              <circle cx="8.599" cy="21.828" r=".661" />
              <circle cx="9.922" cy="20.505" r=".661" />
              <circle cx="9.922" cy="19.182" r=".661" />
              <circle cx="9.922" cy="17.859" r=".661" />
              <circle cx="11.245" cy="17.859" r=".661" />
              <circle cx="11.245" cy="19.182" r=".661" />
              <circle cx="12.568" cy="20.505" r=".661" />
              <circle cx="13.891" cy="21.828" r=".661" />
              <circle cx="13.891" cy="23.151" r=".661" />
              <circle cx="15.214" cy="24.474" r=".661" />
              <circle cx="15.214" cy="25.797" r=".661" />
              <circle cx="16.536" cy="27.12" r=".661" />
              <circle cx="17.859" cy="25.797" r=".661" />
              <circle cx="11.245" cy="15.214" r=".661" />
              <circle cx="11.245" cy="16.536" r=".661" />
              <circle cx="11.245" cy="13.891" r=".661" />
              <circle cx="11.245" cy="12.568" r=".661" />
              <circle cx="12.568" cy="11.245" r=".661" />
              <circle cx="11.245" cy="11.245" r=".661" />
              <circle cx="11.245" cy="9.922" r=".661" />
              <circle cx="12.568" cy="9.922" r=".661" />
              <circle cx="13.891" cy="12.568" r=".661" />
              <circle cx="13.891" cy="13.891" r=".661" />
              <circle cx="15.214" cy="15.214" r=".661" />
              <circle cx="15.214" cy="16.536" r=".661" />
              <circle cx="9.922" cy="9.922" r=".661" />
              <circle cx="9.922" cy="11.245" r=".661" />
              <circle cx="8.599" cy="-11.245" r=".661" transform="scale(1 -1)" />
              <circle cx="8.599" cy="12.568" r=".661" />
              <circle cx="7.276" cy="13.891" r=".661" />
              <circle cx="8.599" cy="15.214" r=".661" />
              <circle cx="9.922" cy="13.891" r=".661" />
              <circle cx="5.953" cy="15.214" r=".661" />
              <circle cx="11.245" cy="8.599" r=".661" />
              <circle cx="5.953" cy="12.568" r=".661" />
              <circle cx="5.953" cy="11.245" r=".661" />
              <circle cx="5.953" cy="9.922" r=".661" />
              <circle cx="5.953" cy="8.599" r=".661" />
              <circle cx="11.245" cy="7.276" r=".661" />
              <circle cx="12.568" cy="7.276" r=".661" />
              <circle cx="13.891" cy="5.953" r=".661" />
              <circle cx="13.891" cy="4.63" r=".661" />
              <circle cx="13.891" cy="3.307" r=".661" />
              <circle cx="15.214" cy="3.307" r=".661" />
              <circle cx="13.891" cy="1.984" r=".661" />
              <circle cx="13.891" cy=".661" r=".661" />
              <circle cx="12.568" cy="1.984" r=".661" />
              <circle cx="12.568" cy=".661" r=".661" />
              <circle cx="11.245" cy="1.984" r=".661" />
              <circle cx="11.245" cy=".661" r=".661" />
              <circle cx="9.922" cy="1.984" r=".661" />
              <circle cx="9.922" cy=".661" r=".661" />
              <circle cx="11.245" cy="4.63" r=".661" />
              <circle cx="11.245" cy="3.307" r=".661" />
              <circle cx="9.922" cy="4.63" r=".661" />
              <circle cx="9.922" cy="3.307" r=".661" />
              <circle cx="9.922" cy="7.276" r=".661" />
              <circle cx="8.599" cy="7.276" r=".661" />
              <circle cx="7.276" cy="7.276" r=".661" />
              <circle cx="9.922" cy="5.953" r=".661" />
            </g>
            <g id="sprite-person-frame-1" transform="translate(-5.292 1.323)" opacity={0}>
              <circle cx="5.953" cy="27.12" r=".661" />
              <circle cx="5.953" cy="25.797" r=".661" />
              <circle cx="7.276" cy="25.797" r=".661" />
              <circle cx="8.599" cy="24.474" r=".661" />
              <circle cx="9.922" cy="23.151" r=".661" />
              <circle cx="9.922" cy="21.828" r=".661" />
              <circle cx="9.922" cy="20.505" r=".661" />
              <circle cx="9.922" cy="19.182" r=".661" />
              <circle cx="11.245" cy="17.859" r=".661" />
              <circle cx="11.245" cy="19.182" r=".661" />
              <circle cx="12.568" cy="19.182" r=".661" />
              <circle cx="13.891" cy="20.505" r=".661" />
              <circle cx="15.214" cy="21.828" r=".661" />
              <circle cx="15.214" cy="23.151" r=".661" />
              <circle cx="13.891" cy="24.474" r=".661" />
              <circle cx="13.891" cy="25.797" r=".661" />
              <circle cx="13.891" cy="27.12" r=".661" />
              <circle cx="15.214" cy="27.12" r=".661" />
              <circle cx="11.245" cy="16.536" r=".661" />
              <circle cx="11.245" cy="15.214" r=".661" />
              <circle cx="11.245" cy="13.891" r=".661" />
              <circle cx="12.568" cy="12.568" r=".661" />
              <circle cx="11.245" cy="12.568" r=".661" />
              <circle cx="11.245" cy="11.245" r=".661" />
              <circle cx="12.568" cy="11.245" r=".661" />
              <circle cx="13.891" cy="13.891" r=".661" />
              <circle cx="15.214" cy="15.214" r=".661" />
              <circle cx="16.536" cy="16.536" r=".661" />
              <circle cx="9.922" cy="11.245" r=".661" />
              <circle cx="8.599" cy="-12.568" r=".661" transform="scale(1 -1)" />
              <circle cx="7.276" cy="13.891" r=".661" />
              <circle cx="7.276" cy="15.214" r=".661" />
              <circle cx="8.599" cy="16.536" r=".661" />
              <circle cx="9.922" cy="15.214" r=".661" />
              <circle cx="7.276" cy="16.536" r=".661" />
              <circle cx="11.245" cy="9.922" r=".661" />
              <circle cx="5.953" cy="13.891" r=".661" />
              <circle cx="5.953" cy="12.568" r=".661" />
              <circle cx="5.953" cy="11.245" r=".661" />
              <circle cx="5.953" cy="9.922" r=".661" />
              <circle cx="11.245" cy="8.599" r=".661" />
              <circle cx="12.568" cy="8.599" r=".661" />
              <circle cx="13.891" cy="7.276" r=".661" />
              <circle cx="13.891" cy="5.953" r=".661" />
              <circle cx="13.891" cy="4.63" r=".661" />
              <circle cx="15.214" cy="4.63" r=".661" />
              <circle cx="13.891" cy="3.307" r=".661" />
              <circle cx="13.891" cy="1.984" r=".661" />
              <circle cx="12.568" cy="3.307" r=".661" />
              <circle cx="12.568" cy="1.984" r=".661" />
              <circle cx="11.245" cy="3.307" r=".661" />
              <circle cx="11.245" cy="1.984" r=".661" />
              <circle cx="9.922" cy="3.307" r=".661" />
              <circle cx="9.922" cy="1.984" r=".661" />
              <circle cx="11.245" cy="5.953" r=".661" />
              <circle cx="11.245" cy="4.63" r=".661" />
              <circle cx="9.922" cy="5.953" r=".661" />
              <circle cx="9.922" cy="4.63" r=".661" />
              <circle cx="9.922" cy="8.599" r=".661" />
              <circle cx="8.599" cy="8.599" r=".661" />
              <circle cx="7.276" cy="8.599" r=".661" />
              <circle cx="9.922" cy="7.276" r=".661" />
            </g>
            <g id="sprite-person-frame-2" transform="translate(-5.292 1.323)" opacity={0}>
              <circle cx="11.245" cy="27.12" r=".661" />
              <circle cx="9.922" cy="27.12" r=".661" />
              <circle cx="9.922" cy="25.797" r=".661" />
              <circle cx="9.922" cy="24.474" r=".661" />
              <circle cx="9.922" cy="23.151" r=".661" />
              <circle cx="9.922" cy="21.828" r=".661" />
              <circle cx="9.922" cy="20.505" r=".661" />
              <circle cx="11.245" cy="17.859" r=".661" />
              <circle cx="11.245" cy="19.182" r=".661" />
              <circle cx="12.568" cy="17.859" r=".661" />
              <circle cx="12.568" cy="19.182" r=".661" />
              <circle cx="12.568" cy="20.505" r=".661" />
              <circle cx="12.568" cy="21.828" r=".661" />
              <circle cx="11.245" cy="23.151" r=".661" />
              <circle cx="8.599" cy="23.151" r=".661" />
              <circle cx="7.276" cy="23.151" r=".661" />
              <circle cx="5.953" cy="24.474" r=".661" />
              <circle cx="5.953" cy="23.151" r=".661" />
              <circle cx="11.245" cy="16.536" r=".661" />
              <circle cx="11.245" cy="15.214" r=".661" />
              <circle cx="11.245" cy="13.891" r=".661" />
              <circle cx="11.245" cy="12.568" r=".661" />
              <circle cx="11.245" cy="11.245" r=".661" />
              <circle cx="12.568" cy="11.245" r=".661" />
              <circle cx="9.922" cy="11.245" r=".661" />
              <circle cx="11.245" cy="9.922" r=".661" />
              <circle cx="12.568" cy="9.922" r=".661" />
              <circle cx="9.922" cy="9.922" r=".661" />
              <circle cx="9.922" cy="-15.214" r=".661" transform="scale(1 -1)" />
              <circle cx="7.276" cy="13.891" r=".661" />
              <circle cx="8.599" cy="15.214" r=".661" />
              <circle cx="9.922" cy="13.891" r=".661" />
              <circle cx="9.922" cy="12.568" r=".661" />
              <circle cx="11.245" cy="8.599" r=".661" />
              <circle cx="5.953" cy="12.568" r=".661" />
              <circle cx="5.953" cy="11.245" r=".661" />
              <circle cx="5.953" cy="9.922" r=".661" />
              <circle cx="5.953" cy="8.599" r=".661" />
              <circle cx="11.245" cy="7.276" r=".661" />
              <circle cx="12.568" cy="7.276" r=".661" />
              <circle cx="13.891" cy="5.953" r=".661" />
              <circle cx="13.891" cy="4.63" r=".661" />
              <circle cx="13.891" cy="3.307" r=".661" />
              <circle cx="15.214" cy="3.307" r=".661" />
              <circle cx="13.891" cy="1.984" r=".661" />
              <circle cx="13.891" cy=".661" r=".661" />
              <circle cx="12.568" cy="1.984" r=".661" />
              <circle cx="12.568" cy=".661" r=".661" />
              <circle cx="11.245" cy="1.984" r=".661" />
              <circle cx="11.245" cy=".661" r=".661" />
              <circle cx="9.922" cy="1.984" r=".661" />
              <circle cx="9.922" cy=".661" r=".661" />
              <circle cx="11.245" cy="4.63" r=".661" />
              <circle cx="11.245" cy="3.307" r=".661" />
              <circle cx="9.922" cy="4.63" r=".661" />
              <circle cx="9.922" cy="3.307" r=".661" />
              <circle cx="9.922" cy="7.276" r=".661" />
              <circle cx="8.599" cy="7.276" r=".661" />
              <circle cx="7.276" cy="7.276" r=".661" />
              <circle cx="9.922" cy="5.953" r=".661" />
            </g>
            <g id="sprite-person-frame-3" transform="translate(-5.292 1.323)" opacity={0}>
              <circle cx="13.891" cy="25.797" r=".661" />
              <circle cx="12.568" cy="24.474" r=".661" />
              <circle cx="9.922" cy="19.182" r=".661" />
              <circle cx="7.276" cy="24.474" r=".661" />
              <circle cx="8.599" cy="21.828" r=".661" />
              <circle cx="9.922" cy="20.505" r=".661" />
              <circle cx="9.922" cy="17.859" r=".661" />
              <circle cx="15.214" cy="20.505" r=".661" />
              <circle cx="12.568" cy="17.859" r=".661" />
              <circle cx="13.891" cy="19.182" r=".661" />
              <circle cx="15.214" cy="21.828" r=".661" />
              <circle cx="16.536" cy="21.828" r=".661" />
              <circle cx="13.891" cy="23.151" r=".661" />
              <circle cx="8.599" cy="23.151" r=".661" />
              <circle cx="7.276" cy="25.797" r=".661" />
              <circle cx="8.599" cy="27.12" r=".661" />
              <circle cx="11.245" cy="16.536" r=".661" />
              <circle cx="11.245" cy="15.214" r=".661" />
              <circle cx="11.245" cy="13.891" r=".661" />
              <circle cx="11.245" cy="12.568" r=".661" />
              <circle cx="11.245" cy="11.245" r=".661" />
              <circle cx="11.245" cy="9.922" r=".661" />
              <circle cx="12.568" cy="11.245" r=".661" />
              <circle cx="12.568" cy="9.922" r=".661" />
              <circle cx="12.568" cy="12.568" r=".661" />
              <circle cx="13.891" cy="13.891" r=".661" />
              <circle cx="13.891" cy="15.214" r=".661" />
              <circle cx="8.599" cy="9.922" r=".661" />
              <circle cx="11.245" cy="8.599" r=".661" />
              <circle cx="12.568" cy="8.599" r=".661" />
              <circle cx="9.922" cy="8.599" r=".661" />
              <circle cx="8.599" cy="-11.245" r=".661" transform="scale(1 -1)" />
              <circle cx="7.276" cy="12.568" r=".661" />
              <circle cx="8.599" cy="13.891" r=".661" />
              <circle cx="9.922" cy="13.891" r=".661" />
              <circle cx="9.922" cy="12.568" r=".661" />
              <circle cx="11.245" cy="7.276" r=".661" />
              <circle cx="5.953" cy="11.245" r=".661" />
              <circle cx="5.953" cy="9.922" r=".661" />
              <circle cx="5.953" cy="8.599" r=".661" />
              <circle cx="5.953" cy="7.276" r=".661" />
              <circle cx="11.245" cy="5.953" r=".661" />
              <circle cx="12.568" cy="5.953" r=".661" />
              <circle cx="13.891" cy="4.63" r=".661" />
              <circle cx="13.891" cy="3.307" r=".661" />
              <circle cx="13.891" cy="1.984" r=".661" />
              <circle cx="15.214" cy="1.984" r=".661" />
              <circle cx="13.891" cy=".661" r=".661" />
              <circle cx="13.891" cy="-.661" r=".661" />
              <circle cx="12.568" cy=".661" r=".661" />
              <circle cx="12.568" cy="-.661" r=".661" />
              <circle cx="11.245" cy=".661" r=".661" />
              <circle cx="11.245" cy="-.661" r=".661" />
              <circle cx="9.922" cy=".661" r=".661" />
              <circle cx="9.922" cy="-.661" r=".661" />
              <circle cx="11.245" cy="3.307" r=".661" />
              <circle cx="11.245" cy="1.984" r=".661" />
              <circle cx="9.922" cy="3.307" r=".661" />
              <circle cx="9.922" cy="1.984" r=".661" />
              <circle cx="9.922" cy="5.953" r=".661" />
              <circle cx="8.599" cy="5.953" r=".661" />
              <circle cx="7.276" cy="5.953" r=".661" />
              <circle cx="9.922" cy="4.63" r=".661" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function AnimationGroundSVG({ ref }: { ref?: RefObject<HTMLDivElement> }) {
  return (

    <div ref={ref}>
      <svg id="sprite-ground" className="fill-foreground" xmlns="http://www.w3.org/2000/svg" width="3194.999" height="5" viewBox="0 0 845.344 1.323">
        <g paintOrder="markers stroke fill" transform="translate(314.854 -21.167)">
          <circle cx="420.026" cy="20.505" r=".661" />
          <circle cx="420.026" cy="19.21" r=".661" />
          <circle cx="421.349" cy="19.179" r=".661" />
          <circle cx="421.349" cy="17.878" r=".661" />
          <circle cx="422.672" cy="16.536" r=".661" />
          <circle cx="422.672" cy="15.214" r=".661" />
          <circle cx="423.995" cy="15.214" r=".661" />
          <circle cx="423.995" cy="13.891" r=".661" />
          <circle cx="425.318" cy="12.568" r=".661" />
          <circle cx="425.318" cy="11.245" r=".661" />
          <circle cx="426.641" cy="11.245" r=".661" />
          <circle cx="426.641" cy="9.922" r=".661" />
          <circle cx="427.964" cy="8.599" r=".661" />
          <circle cx="427.964" cy="7.304" r=".661" />
          <circle cx="429.287" cy="7.273" r=".661" />
          <circle cx="429.287" cy="5.972" r=".661" />
          <circle cx="430.609" cy="4.63" r=".661" />
          <circle cx="430.609" cy="3.307" r=".661" />
          <circle cx="431.932" cy="3.307" r=".661" />
          <circle cx="431.932" cy="1.984" r=".661" />
          <circle cx="433.255" cy=".661" r=".661" />
          <circle cx="433.255" cy="-.634" r=".661" />
          <circle cx="434.579" cy="-.664" r=".661" />
          <circle cx="434.579" cy="-1.966" r=".661" />
          <circle cx="435.901" cy="-3.307" r=".661" />
          <circle cx="435.901" cy="-4.63" r=".661" />
          <circle cx="437.224" cy="-4.63" r=".661" />
          <circle cx="437.224" cy="-5.953" r=".661" />
          <circle cx="438.547" cy="-7.276" r=".661" />
          <circle cx="438.547" cy="-8.599" r=".661" />
          <circle cx="439.87" cy="-8.599" r=".661" />
          <circle cx="439.87" cy="-9.922" r=".661" />
          <circle cx="441.193" cy="-11.245" r=".661" />
          <circle cx="441.193" cy="-12.54" r=".661" />
          <circle cx="442.516" cy="-12.571" r=".661" />
          <circle cx="442.516" cy="-13.872" r=".661" />
          <circle cx="443.839" cy="-15.214" r=".661" />
          <circle cx="443.839" cy="-16.536" r=".661" />
          <circle cx="445.161" cy="-16.536" r=".661" />
          <circle cx="445.161" cy="-17.859" r=".661" />
          <circle cx="446.484" cy="-19.182" r=".661" />
          <circle cx="446.484" cy="-20.477" r=".661" />
          <circle cx="447.808" cy="-20.508" r=".661" />
          <circle cx="447.808" cy="-21.809" r=".661" />
          <circle cx="449.13" cy="-23.151" r=".661" />
          <circle cx="449.13" cy="-24.474" r=".661" />
          <circle cx="450.453" cy="-24.474" r=".661" />
          <circle cx="450.453" cy="-25.797" r=".661" />
          <circle cx="451.776" cy="-27.12" r=".661" />
          <circle cx="451.776" cy="-28.443" r=".661" />
          <circle cx="453.099" cy="-28.443" r=".661" />
          <circle cx="453.099" cy="-29.766" r=".661" />
          <circle cx="454.422" cy="-31.089" r=".661" />
          <circle cx="454.422" cy="-32.384" r=".661" />
          <circle cx="455.745" cy="-32.414" r=".661" />
          <circle cx="455.745" cy="-33.716" r=".661" />
          <circle cx="457.068" cy="-35.057" r=".661" />
          <circle cx="457.068" cy="-36.38" r=".661" />
          <circle cx="458.391" cy="-36.38" r=".661" />
          <circle cx="458.391" cy="-37.703" r=".661" />
          <circle cx="461.036" cy="-35.057" r=".661" />
          <circle cx="461.036" cy="-36.38" r=".661" />
          <circle cx="459.714" cy="-36.38" r=".661" />
          <circle cx="459.714" cy="-37.703" r=".661" />
          <circle cx="463.682" cy="-31.089" r=".661" />
          <circle cx="463.682" cy="-32.411" r=".661" />
          <circle cx="462.359" cy="-32.411" r=".661" />
          <circle cx="462.359" cy="-33.734" r=".661" />
          <circle cx="466.328" cy="-27.12" r=".661" />
          <circle cx="466.328" cy="-28.443" r=".661" />
          <circle cx="465.005" cy="-28.443" r=".661" />
          <circle cx="465.005" cy="-29.766" r=".661" />
          <circle cx="468.974" cy="-23.151" r=".661" />
          <circle cx="468.974" cy="-24.474" r=".661" />
          <circle cx="467.651" cy="-24.474" r=".661" />
          <circle cx="467.651" cy="-25.797" r=".661" />
          <circle cx="471.62" cy="-19.182" r=".661" />
          <circle cx="471.62" cy="-20.505" r=".661" />
          <circle cx="470.297" cy="-20.505" r=".661" />
          <circle cx="470.297" cy="-21.828" r=".661" />
          <circle cx="474.266" cy="-15.214" r=".661" />
          <circle cx="474.266" cy="-16.536" r=".661" />
          <circle cx="472.943" cy="-16.536" r=".661" />
          <circle cx="472.943" cy="-17.859" r=".661" />
          <circle cx="476.911" cy="-11.245" r=".661" />
          <circle cx="476.911" cy="-12.568" r=".661" />
          <circle cx="475.589" cy="-12.568" r=".661" />
          <circle cx="475.589" cy="-13.891" r=".661" />
          <circle cx="479.557" cy="-7.276" r=".661" />
          <circle cx="479.557" cy="-8.599" r=".661" />
          <circle cx="478.234" cy="-8.599" r=".661" />
          <circle cx="478.234" cy="-9.922" r=".661" />
          <circle cx="482.203" cy="-3.307" r=".661" />
          <circle cx="482.203" cy="-4.63" r=".661" />
          <circle cx="480.88" cy="-4.63" r=".661" />
          <circle cx="480.88" cy="-5.953" r=".661" />
          <circle cx="484.849" cy=".661" r=".661" />
          <circle cx="484.849" cy="-.661" r=".661" />
          <circle cx="483.526" cy="-.661" r=".661" />
          <circle cx="483.526" cy="-1.984" r=".661" />
          <circle cx="461.036" cy="-32.411" r=".661" />
          <circle cx="461.036" cy="-33.734" r=".661" />
          <circle cx="459.714" cy="-33.734" r=".661" />
          <circle cx="459.714" cy="-35.057" r=".661" />
          <circle cx="458.391" cy="-33.734" r=".661" />
          <circle cx="458.391" cy="-35.057" r=".661" />
          <circle cx="494.109" cy="-9.922" r=".661" />
          <circle cx="494.109" cy="-11.245" r=".661" />
          <circle cx="471.62" cy="20.505" r=".661" />
          <circle cx="471.62" cy="19.182" r=".661" />
          <circle cx="472.943" cy="19.182" r=".661" />
          <circle cx="472.943" cy="17.859" r=".661" />
          <circle cx="474.266" cy="16.536" r=".661" />
          <circle cx="474.266" cy="15.214" r=".661" />
          <circle cx="475.589" cy="15.214" r=".661" />
          <circle cx="475.589" cy="13.891" r=".661" />
          <circle cx="476.911" cy="12.568" r=".661" />
          <circle cx="476.911" cy="11.273" r=".661" />
          <circle cx="478.235" cy="11.242" r=".661" />
          <circle cx="478.235" cy="9.941" r=".661" />
          <circle cx="479.557" cy="8.599" r=".661" />
          <circle cx="479.557" cy="7.276" r=".661" />
          <circle cx="480.88" cy="7.276" r=".661" />
          <circle cx="480.88" cy="5.953" r=".661" />
          <circle cx="482.203" cy="4.63" r=".661" />
          <circle cx="482.203" cy="3.335" r=".661" />
          <circle cx="483.527" cy="3.304" r=".661" />
          <circle cx="483.527" cy="2.003" r=".661" />
          <circle cx="486.172" cy="-.661" r=".661" />
          <circle cx="486.172" cy="-1.984" r=".661" />
          <circle cx="487.495" cy="-3.307" r=".661" />
          <circle cx="487.495" cy="-4.63" r=".661" />
          <circle cx="488.818" cy="-4.63" r=".661" />
          <circle cx="488.818" cy="-5.953" r=".661" />
          <circle cx="490.141" cy="-7.276" r=".661" />
          <circle cx="490.141" cy="-8.571" r=".661" />
          <circle cx="491.464" cy="-8.602" r=".661" />
          <circle cx="491.464" cy="-9.903" r=".661" />
          <circle cx="492.786" cy="-11.245" r=".661" />
          <circle cx="492.786" cy="-12.568" r=".661" />
          <circle cx="494.109" cy="-12.568" r=".661" />
          <circle cx="494.109" cy="-13.891" r=".661" />
          <circle cx="496.755" cy="-11.245" r=".661" />
          <circle cx="496.755" cy="-12.568" r=".661" />
          <circle cx="495.432" cy="-12.568" r=".661" />
          <circle cx="495.432" cy="-13.891" r=".661" />
          <circle cx="499.401" cy="-7.276" r=".661" />
          <circle cx="499.401" cy="-8.599" r=".661" />
          <circle cx="498.078" cy="-8.599" r=".661" />
          <circle cx="498.078" cy="-9.922" r=".661" />
          <circle cx="502.047" cy="-3.307" r=".661" />
          <circle cx="502.047" cy="-4.63" r=".661" />
          <circle cx="500.724" cy="-4.63" r=".661" />
          <circle cx="500.724" cy="-5.953" r=".661" />
          <circle cx="504.693" cy=".661" r=".661" />
          <circle cx="504.693" cy="-.661" r=".661" />
          <circle cx="503.37" cy="-.661" r=".661" />
          <circle cx="503.37" cy="-1.984" r=".661" />
          <circle cx="507.339" cy="4.63" r=".661" />
          <circle cx="507.339" cy="3.307" r=".661" />
          <circle cx="506.016" cy="3.307" r=".661" />
          <circle cx="506.016" cy="1.984" r=".661" />
          <circle cx="509.984" cy="8.599" r=".661" />
          <circle cx="509.984" cy="7.276" r=".661" />
          <circle cx="508.661" cy="7.276" r=".661" />
          <circle cx="508.661" cy="5.953" r=".661" />
          <circle cx="512.63" cy="12.568" r=".661" />
          <circle cx="512.63" cy="11.245" r=".661" />
          <circle cx="511.307" cy="11.245" r=".661" />
          <circle cx="511.307" cy="9.922" r=".661" />
          <circle cx="515.276" cy="16.536" r=".661" />
          <circle cx="515.276" cy="15.214" r=".661" />
          <circle cx="513.953" cy="15.214" r=".661" />
          <circle cx="513.953" cy="13.891" r=".661" />
          <circle cx="517.922" cy="20.505" r=".661" />
          <circle cx="517.922" cy="19.182" r=".661" />
          <circle cx="516.599" cy="19.182" r=".661" />
          <circle cx="516.599" cy="17.859" r=".661" />
          <circle cx="463.682" cy="-28.443" r=".661" />
          <circle cx="463.682" cy="-29.766" r=".661" />
          <circle cx="462.359" cy="-29.766" r=".661" />
          <circle cx="462.359" cy="-31.089" r=".661" />
          <circle cx="466.328" cy="-24.474" r=".661" />
          <circle cx="466.328" cy="-25.797" r=".661" />
          <circle cx="465.005" cy="-25.797" r=".661" />
          <circle cx="465.005" cy="-27.12" r=".661" />
          <circle cx="468.974" cy="-20.505" r=".661" />
          <circle cx="468.974" cy="-21.828" r=".661" />
          <circle cx="467.651" cy="-21.828" r=".661" />
          <circle cx="467.651" cy="-23.151" r=".661" />
          <circle cx="471.62" cy="-16.536" r=".661" />
          <circle cx="471.62" cy="-17.859" r=".661" />
          <circle cx="470.297" cy="-17.859" r=".661" />
          <circle cx="470.297" cy="-19.182" r=".661" />
          <circle cx="474.266" cy="-12.568" r=".661" />
          <circle cx="474.266" cy="-13.891" r=".661" />
          <circle cx="472.943" cy="-13.891" r=".661" />
          <circle cx="472.943" cy="-15.214" r=".661" />
          <circle cx="476.911" cy="-8.599" r=".661" />
          <circle cx="476.911" cy="-9.922" r=".661" />
          <circle cx="475.589" cy="-9.922" r=".661" />
          <circle cx="475.589" cy="-11.245" r=".661" />
          <circle cx="461.036" cy="-29.769" r=".661" />
          <circle cx="461.036" cy="-31.092" r=".661" />
          <circle cx="459.714" cy="-31.092" r=".661" />
          <circle cx="459.714" cy="-32.414" r=".661" />
          <circle cx="463.682" cy="-25.8" r=".661" />
          <circle cx="463.682" cy="-27.123" r=".661" />
          <circle cx="462.359" cy="-27.123" r=".661" />
          <circle cx="462.359" cy="-28.446" r=".661" />
          <circle cx="466.328" cy="-21.831" r=".661" />
          <circle cx="466.328" cy="-23.154" r=".661" />
          <circle cx="465.005" cy="-23.154" r=".661" />
          <circle cx="465.005" cy="-24.477" r=".661" />
          <circle cx="468.974" cy="-17.862" r=".661" />
          <circle cx="468.974" cy="-19.185" r=".661" />
          <circle cx="467.651" cy="-19.185" r=".661" />
          <circle cx="467.651" cy="-20.508" r=".661" />
          <circle cx="471.62" cy="-13.894" r=".661" />
          <circle cx="471.62" cy="-15.217" r=".661" />
          <circle cx="470.297" cy="-15.217" r=".661" />
          <circle cx="470.297" cy="-16.539" r=".661" />
          <circle cx="474.266" cy="-9.925" r=".661" />
          <circle cx="474.266" cy="-11.248" r=".661" />
          <circle cx="472.943" cy="-11.248" r=".661" />
          <circle cx="472.943" cy="-12.571" r=".661" />
          <circle cx="476.911" cy="-5.956" r=".661" />
          <circle cx="476.911" cy="-7.279" r=".661" />
          <circle cx="475.589" cy="-7.279" r=".661" />
          <circle cx="475.589" cy="-8.602" r=".661" />
          <circle cx="496.755" cy="-8.599" r=".661" />
          <circle cx="496.755" cy="-9.922" r=".661" />
          <circle cx="495.432" cy="-9.922" r=".661" />
          <circle cx="495.432" cy="-11.245" r=".661" />
          <circle cx="499.401" cy="-4.63" r=".661" />
          <circle cx="499.401" cy="-5.953" r=".661" />
          <circle cx="498.078" cy="-5.953" r=".661" />
          <circle cx="498.078" cy="-7.276" r=".661" />
          <circle cx="502.047" cy="-.661" r=".661" />
          <circle cx="502.047" cy="-1.984" r=".661" />
          <circle cx="500.724" cy="-1.984" r=".661" />
          <circle cx="500.724" cy="-3.307" r=".661" />
          <circle cx="504.693" cy="3.307" r=".661" />
          <circle cx="504.693" cy="1.984" r=".661" />
          <circle cx="503.37" cy="1.984" r=".661" />
          <circle cx="503.37" cy=".661" r=".661" />
          <circle cx="507.339" cy="7.276" r=".661" />
          <circle cx="507.339" cy="5.953" r=".661" />
          <circle cx="506.016" cy="5.953" r=".661" />
          <circle cx="506.016" cy="4.63" r=".661" />
          <circle cx="509.984" cy="11.245" r=".661" />
          <circle cx="509.984" cy="9.922" r=".661" />
          <circle cx="508.661" cy="9.922" r=".661" />
          <circle cx="508.661" cy="8.599" r=".661" />
          <circle cx="512.63" cy="15.214" r=".661" />
          <circle cx="512.63" cy="13.891" r=".661" />
          <circle cx="511.307" cy="13.891" r=".661" />
          <circle cx="511.307" cy="12.568" r=".661" />
          <circle cx="496.755" cy="-5.953" r=".661" />
          <circle cx="496.755" cy="-7.276" r=".661" />
          <circle cx="495.432" cy="-7.276" r=".661" />
          <circle cx="495.432" cy="-8.599" r=".661" />
          <circle cx="499.401" cy="-1.984" r=".661" />
          <circle cx="499.401" cy="-3.307" r=".661" />
          <circle cx="498.078" cy="-3.307" r=".661" />
          <circle cx="498.078" cy="-4.63" r=".661" />
          <circle cx="502.047" cy="1.984" r=".661" />
          <circle cx="502.047" cy=".661" r=".661" />
          <circle cx="500.724" cy=".661" r=".661" />
          <circle cx="500.724" cy="-.661" r=".661" />
          <circle cx="504.693" cy="5.953" r=".661" />
          <circle cx="504.693" cy="4.63" r=".661" />
          <circle cx="503.37" cy="4.63" r=".661" />
          <circle cx="503.37" cy="3.307" r=".661" />
          <circle cx="507.339" cy="9.922" r=".661" />
          <circle cx="507.339" cy="8.599" r=".661" />
          <circle cx="506.016" cy="8.599" r=".661" />
          <circle cx="506.016" cy="7.276" r=".661" />
          <circle cx="509.984" cy="13.891" r=".661" />
          <circle cx="509.984" cy="12.568" r=".661" />
          <circle cx="508.661" cy="12.568" r=".661" />
          <circle cx="508.661" cy="11.245" r=".661" />
          <circle cx="512.63" cy="17.859" r=".661" />
          <circle cx="512.63" cy="16.536" r=".661" />
          <circle cx="511.307" cy="16.536" r=".661" />
          <circle cx="511.307" cy="15.214" r=".661" />
          <circle cx="479.557" cy="-4.63" r=".661" />
          <circle cx="479.557" cy="-5.953" r=".661" />
          <circle cx="478.234" cy="-5.953" r=".661" />
          <circle cx="478.234" cy="-7.276" r=".661" />
          <circle cx="482.203" cy="-.661" r=".661" />
          <circle cx="482.203" cy="-1.984" r=".661" />
          <circle cx="480.88" cy="-1.984" r=".661" />
          <circle cx="480.88" cy="-3.307" r=".661" />
          <circle cx="483.526" cy=".661" r=".661" />
          <circle cx="515.276" cy="19.182" r=".661" />
          <circle cx="515.276" cy="17.859" r=".661" />
          <circle cx="513.953" cy="17.859" r=".661" />
          <circle cx="513.953" cy="16.536" r=".661" />
          <circle cx="516.599" cy="20.505" r=".661" />
          <circle cx="479.557" cy="-1.984" r=".661" />
          <circle cx="479.557" cy="-3.307" r=".661" />
          <circle cx="478.234" cy="-3.307" r=".661" />
          <circle cx="478.234" cy="-4.63" r=".661" />
          <circle cx="482.203" cy="1.984" r=".661" />
          <circle cx="482.203" cy=".661" r=".661" />
          <circle cx="480.88" cy=".661" r=".661" />
          <circle cx="480.88" cy="-.661" r=".661" />
          <circle cx="515.276" cy="20.505" r=".661" />
          <circle cx="513.953" cy="20.505" r=".661" />
          <circle cx="513.953" cy="19.182" r=".661" />
        </g>
        <g paintOrder="markers stroke fill" transform="translate(316.177 -29.104)">
          <circle cx="-50.932" cy="29.766" r=".661" />
          <circle cx="-49.609" cy="29.766" r=".661" />
          <circle cx="-48.286" cy="29.766" r=".661" />
          <circle cx="-46.964" cy="29.766" r=".661" />
          <circle cx="-45.641" cy="29.766" r=".661" />
          <circle cx="-44.318" cy="29.766" r=".661" />
          <circle cx="-42.995" cy="29.766" r=".661" />
          <circle cx="-41.672" cy="29.766" r=".661" />
          <circle cx="-40.349" cy="29.766" r=".661" />
          <circle cx="-39.026" cy="29.766" r=".661" />
          <circle cx="-37.703" cy="29.766" r=".661" />
          <circle cx="-36.38" cy="29.766" r=".661" />
          <circle cx="-35.057" cy="29.766" r=".661" />
          <circle cx="-68.13" cy="29.766" r=".661" />
          <circle cx="-66.807" cy="29.766" r=".661" />
          <circle cx="-65.484" cy="29.766" r=".661" />
          <circle cx="-64.161" cy="29.766" r=".661" />
          <circle cx="-62.839" cy="29.766" r=".661" />
          <circle cx="-61.516" cy="29.766" r=".661" />
          <circle cx="-60.193" cy="29.766" r=".661" />
          <circle cx="-58.87" cy="29.766" r=".661" />
          <circle cx="-57.547" cy="29.766" r=".661" />
          <circle cx="-56.224" cy="29.766" r=".661" />
          <circle cx="-54.901" cy="29.766" r=".661" />
          <circle cx="-53.578" cy="29.766" r=".661" />
          <circle cx="-52.255" cy="29.766" r=".661" />
          <circle cx="-85.328" cy="29.766" r=".661" />
          <circle cx="-84.005" cy="29.766" r=".661" />
          <circle cx="-82.682" cy="29.766" r=".661" />
          <circle cx="-81.359" cy="29.766" r=".661" />
          <circle cx="-80.036" cy="29.766" r=".661" />
          <circle cx="-78.714" cy="29.766" r=".661" />
          <circle cx="-77.391" cy="29.766" r=".661" />
          <circle cx="-76.068" cy="29.766" r=".661" />
          <circle cx="-74.745" cy="29.766" r=".661" />
          <circle cx="-73.422" cy="29.766" r=".661" />
          <circle cx="-72.099" cy="29.766" r=".661" />
          <circle cx="-70.776" cy="29.766" r=".661" />
          <circle cx="-69.453" cy="29.766" r=".661" />
          <circle cx="-102.526" cy="29.766" r=".661" />
          <circle cx="-101.203" cy="29.766" r=".661" />
          <circle cx="-99.88" cy="29.766" r=".661" />
          <circle cx="-98.557" cy="29.766" r=".661" />
          <circle cx="-97.234" cy="29.766" r=".661" />
          <circle cx="-95.911" cy="29.766" r=".661" />
          <circle cx="-94.589" cy="29.766" r=".661" />
          <circle cx="-93.266" cy="29.766" r=".661" />
          <circle cx="-91.943" cy="29.766" r=".661" />
          <circle cx="-90.62" cy="29.766" r=".661" />
          <circle cx="-89.297" cy="29.766" r=".661" />
          <circle cx="-87.974" cy="29.766" r=".661" />
          <circle cx="-86.651" cy="29.766" r=".661" />
          <circle cx="-119.724" cy="29.766" r=".661" />
          <circle cx="-118.401" cy="29.766" r=".661" />
          <circle cx="-117.078" cy="29.766" r=".661" />
          <circle cx="-115.755" cy="29.766" r=".661" />
          <circle cx="-114.432" cy="29.766" r=".661" />
          <circle cx="-113.109" cy="29.766" r=".661" />
          <circle cx="-111.786" cy="29.766" r=".661" />
          <circle cx="-110.464" cy="29.766" r=".661" />
          <circle cx="-109.141" cy="29.766" r=".661" />
          <circle cx="-107.818" cy="29.766" r=".661" />
          <circle cx="-106.495" cy="29.766" r=".661" />
          <circle cx="-105.172" cy="29.766" r=".661" />
          <circle cx="-103.849" cy="29.766" r=".661" />
          <circle cx="-136.922" cy="29.766" r=".661" />
          <circle cx="-135.599" cy="29.766" r=".661" />
          <circle cx="-134.276" cy="29.766" r=".661" />
          <circle cx="-132.953" cy="29.766" r=".661" />
          <circle cx="-131.63" cy="29.766" r=".661" />
          <circle cx="-130.307" cy="29.766" r=".661" />
          <circle cx="-128.984" cy="29.766" r=".661" />
          <circle cx="-127.661" cy="29.766" r=".661" />
          <circle cx="-126.339" cy="29.766" r=".661" />
          <circle cx="-125.016" cy="29.766" r=".661" />
          <circle cx="-123.693" cy="29.766" r=".661" />
          <circle cx="-122.37" cy="29.766" r=".661" />
          <circle cx="-121.047" cy="29.766" r=".661" />
          <circle cx="-154.12" cy="29.766" r=".661" />
          <circle cx="-152.797" cy="29.766" r=".661" />
          <circle cx="-151.474" cy="29.766" r=".661" />
          <circle cx="-150.151" cy="29.766" r=".661" />
          <circle cx="-148.828" cy="29.766" r=".661" />
          <circle cx="-147.505" cy="29.766" r=".661" />
          <circle cx="-146.182" cy="29.766" r=".661" />
          <circle cx="-144.859" cy="29.766" r=".661" />
          <circle cx="-143.536" cy="29.766" r=".661" />
          <circle cx="-142.214" cy="29.766" r=".661" />
          <circle cx="-140.891" cy="29.766" r=".661" />
          <circle cx="-139.568" cy="29.766" r=".661" />
          <circle cx="-138.245" cy="29.766" r=".661" />
          <circle cx="-171.318" cy="29.766" r=".661" />
          <circle cx="-169.995" cy="29.766" r=".661" />
          <circle cx="-168.672" cy="29.766" r=".661" />
          <circle cx="-167.349" cy="29.766" r=".661" />
          <circle cx="-166.026" cy="29.766" r=".661" />
          <circle cx="-164.703" cy="29.766" r=".661" />
          <circle cx="-163.38" cy="29.766" r=".661" />
          <circle cx="-162.057" cy="29.766" r=".661" />
          <circle cx="-160.734" cy="29.766" r=".661" />
          <circle cx="-159.411" cy="29.766" r=".661" />
          <circle cx="-158.089" cy="29.766" r=".661" />
          <circle cx="-156.766" cy="29.766" r=".661" />
          <circle cx="-155.443" cy="29.766" r=".661" />
          <circle cx="-188.516" cy="29.766" r=".661" />
          <circle cx="-187.193" cy="29.766" r=".661" />
          <circle cx="-185.87" cy="29.766" r=".661" />
          <circle cx="-184.547" cy="29.766" r=".661" />
          <circle cx="-183.224" cy="29.766" r=".661" />
          <circle cx="-181.901" cy="29.766" r=".661" />
          <circle cx="-180.578" cy="29.766" r=".661" />
          <circle cx="-179.255" cy="29.766" r=".661" />
          <circle cx="-177.932" cy="29.766" r=".661" />
          <circle cx="-176.609" cy="29.766" r=".661" />
          <circle cx="-175.286" cy="29.766" r=".661" />
          <circle cx="-173.964" cy="29.766" r=".661" />
          <circle cx="-172.641" cy="29.766" r=".661" />
          <circle cx="-205.714" cy="29.766" r=".661" />
          <circle cx="-204.391" cy="29.766" r=".661" />
          <circle cx="-203.068" cy="29.766" r=".661" />
          <circle cx="-201.745" cy="29.766" r=".661" />
          <circle cx="-200.422" cy="29.766" r=".661" />
          <circle cx="-199.099" cy="29.766" r=".661" />
          <circle cx="-197.776" cy="29.766" r=".661" />
          <circle cx="-196.453" cy="29.766" r=".661" />
          <circle cx="-195.13" cy="29.766" r=".661" />
          <circle cx="-193.807" cy="29.766" r=".661" />
          <circle cx="-192.484" cy="29.766" r=".661" />
          <circle cx="-191.161" cy="29.766" r=".661" />
          <circle cx="-189.839" cy="29.766" r=".661" />
          <circle cx="-222.911" cy="29.766" r=".661" />
          <circle cx="-221.589" cy="29.766" r=".661" />
          <circle cx="-220.266" cy="29.766" r=".661" />
          <circle cx="-218.943" cy="29.766" r=".661" />
          <circle cx="-217.62" cy="29.766" r=".661" />
          <circle cx="-216.297" cy="29.766" r=".661" />
          <circle cx="-214.974" cy="29.766" r=".661" />
          <circle cx="-213.651" cy="29.766" r=".661" />
          <circle cx="-212.328" cy="29.766" r=".661" />
          <circle cx="-211.005" cy="29.766" r=".661" />
          <circle cx="-209.682" cy="29.766" r=".661" />
          <circle cx="-208.359" cy="29.766" r=".661" />
          <circle cx="-207.036" cy="29.766" r=".661" />
          <circle cx="-240.109" cy="29.766" r=".661" />
          <circle cx="-238.786" cy="29.766" r=".661" />
          <circle cx="-237.464" cy="29.766" r=".661" />
          <circle cx="-236.141" cy="29.766" r=".661" />
          <circle cx="-234.818" cy="29.766" r=".661" />
          <circle cx="-233.495" cy="29.766" r=".661" />
          <circle cx="-232.172" cy="29.766" r=".661" />
          <circle cx="-230.849" cy="29.766" r=".661" />
          <circle cx="-229.526" cy="29.766" r=".661" />
          <circle cx="-228.203" cy="29.766" r=".661" />
          <circle cx="-226.88" cy="29.766" r=".661" />
          <circle cx="-225.557" cy="29.766" r=".661" />
          <circle cx="-224.234" cy="29.766" r=".661" />
          <circle cx="-246.724" cy="29.766" r=".661" />
          <circle cx="-245.401" cy="29.766" r=".661" />
          <circle cx="-244.078" cy="29.766" r=".661" />
          <circle cx="-242.755" cy="29.766" r=".661" />
          <circle cx="-241.432" cy="29.766" r=".661" />
          <circle cx="-263.922" cy="29.766" r=".661" />
          <circle cx="-262.599" cy="29.766" r=".661" />
          <circle cx="-261.276" cy="29.766" r=".661" />
          <circle cx="-259.953" cy="29.766" r=".661" />
          <circle cx="-258.63" cy="29.766" r=".661" />
          <circle cx="-257.307" cy="29.766" r=".661" />
          <circle cx="-255.984" cy="29.766" r=".661" />
          <circle cx="-254.661" cy="29.766" r=".661" />
          <circle cx="-253.339" cy="29.766" r=".661" />
          <circle cx="-252.016" cy="29.766" r=".661" />
          <circle cx="-250.693" cy="29.766" r=".661" />
          <circle cx="-249.37" cy="29.766" r=".661" />
          <circle cx="-248.047" cy="29.766" r=".661" />
          <circle cx="-281.12" cy="29.766" r=".661" />
          <circle cx="-279.797" cy="29.766" r=".661" />
          <circle cx="-278.474" cy="29.766" r=".661" />
          <circle cx="-277.151" cy="29.766" r=".661" />
          <circle cx="-275.828" cy="29.766" r=".661" />
          <circle cx="-274.505" cy="29.766" r=".661" />
          <circle cx="-273.182" cy="29.766" r=".661" />
          <circle cx="-271.859" cy="29.766" r=".661" />
          <circle cx="-270.536" cy="29.766" r=".661" />
          <circle cx="-269.214" cy="29.766" r=".661" />
          <circle cx="-267.891" cy="29.766" r=".661" />
          <circle cx="-266.568" cy="29.766" r=".661" />
          <circle cx="-265.245" cy="29.766" r=".661" />
          <circle cx="-298.318" cy="29.766" r=".661" />
          <circle cx="-296.995" cy="29.766" r=".661" />
          <circle cx="-295.672" cy="29.766" r=".661" />
          <circle cx="-294.349" cy="29.766" r=".661" />
          <circle cx="-293.026" cy="29.766" r=".661" />
          <circle cx="-291.703" cy="29.766" r=".661" />
          <circle cx="-290.38" cy="29.766" r=".661" />
          <circle cx="-289.057" cy="29.766" r=".661" />
          <circle cx="-287.734" cy="29.766" r=".661" />
          <circle cx="-286.411" cy="29.766" r=".661" />
          <circle cx="-285.089" cy="29.766" r=".661" />
          <circle cx="-283.766" cy="29.766" r=".661" />
          <circle cx="-282.443" cy="29.766" r=".661" />
          <circle cx="-315.516" cy="29.766" r=".661" />
          <circle cx="-314.193" cy="29.766" r=".661" />
          <circle cx="-312.87" cy="29.766" r=".661" />
          <circle cx="-311.547" cy="29.766" r=".661" />
          <circle cx="-310.224" cy="29.766" r=".661" />
          <circle cx="-308.901" cy="29.766" r=".661" />
          <circle cx="-307.578" cy="29.766" r=".661" />
          <circle cx="-306.255" cy="29.766" r=".661" />
          <circle cx="-304.932" cy="29.766" r=".661" />
          <circle cx="-303.609" cy="29.766" r=".661" />
          <circle cx="-302.286" cy="29.766" r=".661" />
          <circle cx="-300.964" cy="29.766" r=".661" />
          <circle cx="-299.641" cy="29.766" r=".661" />
          <circle cx="230.849" cy="29.766" r=".661" />
          <circle cx="232.172" cy="29.766" r=".661" />
          <circle cx="233.495" cy="29.766" r=".661" />
          <circle cx="234.818" cy="29.766" r=".661" />
          <circle cx="236.141" cy="29.766" r=".661" />
          <circle cx="237.463" cy="29.766" r=".661" />
          <circle cx="238.786" cy="29.766" r=".661" />
          <circle cx="240.109" cy="29.766" r=".661" />
          <circle cx="241.432" cy="29.766" r=".661" />
          <circle cx="242.755" cy="29.766" r=".661" />
          <circle cx="244.078" cy="29.766" r=".661" />
          <circle cx="245.401" cy="29.766" r=".661" />
          <circle cx="246.724" cy="29.766" r=".661" />
          <circle cx="213.651" cy="29.766" r=".661" />
          <circle cx="214.974" cy="29.766" r=".661" />
          <circle cx="216.297" cy="29.766" r=".661" />
          <circle cx="217.62" cy="29.766" r=".661" />
          <circle cx="218.943" cy="29.766" r=".661" />
          <circle cx="220.266" cy="29.766" r=".661" />
          <circle cx="221.588" cy="29.766" r=".661" />
          <circle cx="222.911" cy="29.766" r=".661" />
          <circle cx="224.234" cy="29.766" r=".661" />
          <circle cx="225.557" cy="29.766" r=".661" />
          <circle cx="226.88" cy="29.766" r=".661" />
          <circle cx="228.203" cy="29.766" r=".661" />
          <circle cx="229.526" cy="29.766" r=".661" />
          <circle cx="196.453" cy="29.766" r=".661" />
          <circle cx="197.776" cy="29.766" r=".661" />
          <circle cx="199.099" cy="29.766" r=".661" />
          <circle cx="200.422" cy="29.766" r=".661" />
          <circle cx="201.745" cy="29.766" r=".661" />
          <circle cx="203.068" cy="29.766" r=".661" />
          <circle cx="204.391" cy="29.766" r=".661" />
          <circle cx="205.713" cy="29.766" r=".661" />
          <circle cx="207.036" cy="29.766" r=".661" />
          <circle cx="208.359" cy="29.766" r=".661" />
          <circle cx="209.682" cy="29.766" r=".661" />
          <circle cx="211.005" cy="29.766" r=".661" />
          <circle cx="212.328" cy="29.766" r=".661" />
          <circle cx="179.255" cy="29.766" r=".661" />
          <circle cx="180.578" cy="29.766" r=".661" />
          <circle cx="181.901" cy="29.766" r=".661" />
          <circle cx="183.224" cy="29.766" r=".661" />
          <circle cx="184.547" cy="29.766" r=".661" />
          <circle cx="185.87" cy="29.766" r=".661" />
          <circle cx="187.193" cy="29.766" r=".661" />
          <circle cx="188.516" cy="29.766" r=".661" />
          <circle cx="189.838" cy="29.766" r=".661" />
          <circle cx="191.161" cy="29.766" r=".661" />
          <circle cx="192.484" cy="29.766" r=".661" />
          <circle cx="193.807" cy="29.766" r=".661" />
          <circle cx="195.13" cy="29.766" r=".661" />
          <circle cx="162.057" cy="29.766" r=".661" />
          <circle cx="163.38" cy="29.766" r=".661" />
          <circle cx="164.703" cy="29.766" r=".661" />
          <circle cx="166.026" cy="29.766" r=".661" />
          <circle cx="167.349" cy="29.766" r=".661" />
          <circle cx="168.672" cy="29.766" r=".661" />
          <circle cx="169.995" cy="29.766" r=".661" />
          <circle cx="171.318" cy="29.766" r=".661" />
          <circle cx="172.641" cy="29.766" r=".661" />
          <circle cx="173.963" cy="29.766" r=".661" />
          <circle cx="175.286" cy="29.766" r=".661" />
          <circle cx="176.609" cy="29.766" r=".661" />
          <circle cx="177.932" cy="29.766" r=".661" />
          <circle cx="144.859" cy="29.766" r=".661" />
          <circle cx="146.182" cy="29.766" r=".661" />
          <circle cx="147.505" cy="29.766" r=".661" />
          <circle cx="148.828" cy="29.766" r=".661" />
          <circle cx="150.151" cy="29.766" r=".661" />
          <circle cx="151.474" cy="29.766" r=".661" />
          <circle cx="152.797" cy="29.766" r=".661" />
          <circle cx="154.12" cy="29.766" r=".661" />
          <circle cx="155.443" cy="29.766" r=".661" />
          <circle cx="156.766" cy="29.766" r=".661" />
          <circle cx="158.088" cy="29.766" r=".661" />
          <circle cx="159.411" cy="29.766" r=".661" />
          <circle cx="160.734" cy="29.766" r=".661" />
          <circle cx="127.661" cy="29.766" r=".661" />
          <circle cx="128.984" cy="29.766" r=".661" />
          <circle cx="130.307" cy="29.766" r=".661" />
          <circle cx="131.63" cy="29.766" r=".661" />
          <circle cx="132.953" cy="29.766" r=".661" />
          <circle cx="134.276" cy="29.766" r=".661" />
          <circle cx="135.599" cy="29.766" r=".661" />
          <circle cx="136.922" cy="29.766" r=".661" />
          <circle cx="138.245" cy="29.766" r=".661" />
          <circle cx="139.568" cy="29.766" r=".661" />
          <circle cx="140.891" cy="29.766" r=".661" />
          <circle cx="142.213" cy="29.766" r=".661" />
          <circle cx="143.536" cy="29.766" r=".661" />
          <circle cx="110.463" cy="29.766" r=".661" />
          <circle cx="111.786" cy="29.766" r=".661" />
          <circle cx="113.109" cy="29.766" r=".661" />
          <circle cx="114.432" cy="29.766" r=".661" />
          <circle cx="115.755" cy="29.766" r=".661" />
          <circle cx="117.078" cy="29.766" r=".661" />
          <circle cx="118.401" cy="29.766" r=".661" />
          <circle cx="119.724" cy="29.766" r=".661" />
          <circle cx="121.047" cy="29.766" r=".661" />
          <circle cx="122.37" cy="29.766" r=".661" />
          <circle cx="123.693" cy="29.766" r=".661" />
          <circle cx="125.016" cy="29.766" r=".661" />
          <circle cx="126.338" cy="29.766" r=".661" />
          <circle cx="93.266" cy="29.766" r=".661" />
          <circle cx="94.588" cy="29.766" r=".661" />
          <circle cx="95.911" cy="29.766" r=".661" />
          <circle cx="97.234" cy="29.766" r=".661" />
          <circle cx="98.557" cy="29.766" r=".661" />
          <circle cx="99.88" cy="29.766" r=".661" />
          <circle cx="101.203" cy="29.766" r=".661" />
          <circle cx="102.526" cy="29.766" r=".661" />
          <circle cx="103.849" cy="29.766" r=".661" />
          <circle cx="105.172" cy="29.766" r=".661" />
          <circle cx="106.495" cy="29.766" r=".661" />
          <circle cx="107.818" cy="29.766" r=".661" />
          <circle cx="109.141" cy="29.766" r=".661" />
          <circle cx="76.068" cy="29.766" r=".661" />
          <circle cx="77.391" cy="29.766" r=".661" />
          <circle cx="78.713" cy="29.766" r=".661" />
          <circle cx="80.036" cy="29.766" r=".661" />
          <circle cx="81.359" cy="29.766" r=".661" />
          <circle cx="82.682" cy="29.766" r=".661" />
          <circle cx="84.005" cy="29.766" r=".661" />
          <circle cx="85.328" cy="29.766" r=".661" />
          <circle cx="86.651" cy="29.766" r=".661" />
          <circle cx="87.974" cy="29.766" r=".661" />
          <circle cx="89.297" cy="29.766" r=".661" />
          <circle cx="90.62" cy="29.766" r=".661" />
          <circle cx="91.943" cy="29.766" r=".661" />
          <circle cx="58.87" cy="29.766" r=".661" />
          <circle cx="60.193" cy="29.766" r=".661" />
          <circle cx="61.516" cy="29.766" r=".661" />
          <circle cx="62.838" cy="29.766" r=".661" />
          <circle cx="64.161" cy="29.766" r=".661" />
          <circle cx="65.484" cy="29.766" r=".661" />
          <circle cx="66.807" cy="29.766" r=".661" />
          <circle cx="68.13" cy="29.766" r=".661" />
          <circle cx="69.453" cy="29.766" r=".661" />
          <circle cx="70.776" cy="29.766" r=".661" />
          <circle cx="72.099" cy="29.766" r=".661" />
          <circle cx="73.422" cy="29.766" r=".661" />
          <circle cx="74.745" cy="29.766" r=".661" />
          <circle cx="41.672" cy="29.766" r=".661" />
          <circle cx="42.995" cy="29.766" r=".661" />
          <circle cx="44.318" cy="29.766" r=".661" />
          <circle cx="45.641" cy="29.766" r=".661" />
          <circle cx="46.963" cy="29.766" r=".661" />
          <circle cx="48.286" cy="29.766" r=".661" />
          <circle cx="49.609" cy="29.766" r=".661" />
          <circle cx="50.932" cy="29.766" r=".661" />
          <circle cx="52.255" cy="29.766" r=".661" />
          <circle cx="53.578" cy="29.766" r=".661" />
          <circle cx="54.901" cy="29.766" r=".661" />
          <circle cx="56.224" cy="29.766" r=".661" />
          <circle cx="57.547" cy="29.766" r=".661" />
          <circle cx="35.057" cy="29.766" r=".661" />
          <circle cx="36.38" cy="29.766" r=".661" />
          <circle cx="37.703" cy="29.766" r=".661" />
          <circle cx="39.026" cy="29.766" r=".661" />
          <circle cx="40.349" cy="29.766" r=".661" />
          <circle cx="17.859" cy="29.766" r=".661" />
          <circle cx="19.182" cy="29.766" r=".661" />
          <circle cx="20.505" cy="29.766" r=".661" />
          <circle cx="21.828" cy="29.766" r=".661" />
          <circle cx="23.151" cy="29.766" r=".661" />
          <circle cx="24.474" cy="29.766" r=".661" />
          <circle cx="25.797" cy="29.766" r=".661" />
          <circle cx="27.12" cy="29.766" r=".661" />
          <circle cx="28.443" cy="29.766" r=".661" />
          <circle cx="29.766" cy="29.766" r=".661" />
          <circle cx="31.089" cy="29.766" r=".661" />
          <circle cx="32.411" cy="29.766" r=".661" />
          <circle cx="33.734" cy="29.766" r=".661" />
          <circle cx=".661" cy="29.766" r=".661" />
          <circle cx="1.984" cy="29.766" r=".661" />
          <circle cx="3.307" cy="29.766" r=".661" />
          <circle cx="4.63" cy="29.766" r=".661" />
          <circle cx="5.953" cy="29.766" r=".661" />
          <circle cx="7.276" cy="29.766" r=".661" />
          <circle cx="8.599" cy="29.766" r=".661" />
          <circle cx="9.922" cy="29.766" r=".661" />
          <circle cx="11.245" cy="29.766" r=".661" />
          <circle cx="12.568" cy="29.766" r=".661" />
          <circle cx="13.891" cy="29.766" r=".661" />
          <circle cx="15.214" cy="29.766" r=".661" />
          <circle cx="16.536" cy="29.766" r=".661" />
          <circle cx="-16.536" cy="29.766" r=".661" />
          <circle cx="-15.214" cy="29.766" r=".661" />
          <circle cx="-13.891" cy="29.766" r=".661" />
          <circle cx="-12.568" cy="29.766" r=".661" />
          <circle cx="-11.245" cy="29.766" r=".661" />
          <circle cx="-9.922" cy="29.766" r=".661" />
          <circle cx="-8.599" cy="29.766" r=".661" />
          <circle cx="-7.276" cy="29.766" r=".661" />
          <circle cx="-5.953" cy="29.766" r=".661" />
          <circle cx="-4.63" cy="29.766" r=".661" />
          <circle cx="-3.307" cy="29.766" r=".661" />
          <circle cx="-1.984" cy="29.766" r=".661" />
          <circle cx="-.661" cy="29.766" r=".661" />
          <circle cx="-33.734" cy="29.766" r=".661" />
          <circle cx="-32.411" cy="29.766" r=".661" />
          <circle cx="-31.089" cy="29.766" r=".661" />
          <circle cx="-29.766" cy="29.766" r=".661" />
          <circle cx="-28.443" cy="29.766" r=".661" />
          <circle cx="-27.12" cy="29.766" r=".661" />
          <circle cx="-25.797" cy="29.766" r=".661" />
          <circle cx="-24.474" cy="29.766" r=".661" />
          <circle cx="-23.151" cy="29.766" r=".661" />
          <circle cx="-21.828" cy="29.766" r=".661" />
          <circle cx="-20.505" cy="29.766" r=".661" />
          <circle cx="-19.182" cy="29.766" r=".661" />
          <circle cx="-17.859" cy="29.766" r=".661" />
          <circle cx="512.63" cy="29.766" r=".661" />
          <circle cx="513.953" cy="29.766" r=".661" />
          <circle cx="515.276" cy="29.766" r=".661" />
          <circle cx="516.599" cy="29.766" r=".661" />
          <circle cx="517.922" cy="29.766" r=".661" />
          <circle cx="519.245" cy="29.766" r=".661" />
          <circle cx="520.568" cy="29.766" r=".661" />
          <circle cx="521.891" cy="29.766" r=".661" />
          <circle cx="523.213" cy="29.766" r=".661" />
          <circle cx="524.536" cy="29.766" r=".661" />
          <circle cx="525.859" cy="29.766" r=".661" />
          <circle cx="527.182" cy="29.766" r=".661" />
          <circle cx="528.505" cy="29.766" r=".661" />
          <circle cx="495.432" cy="29.766" r=".661" />
          <circle cx="496.755" cy="29.766" r=".661" />
          <circle cx="498.078" cy="29.766" r=".661" />
          <circle cx="499.401" cy="29.766" r=".661" />
          <circle cx="500.724" cy="29.766" r=".661" />
          <circle cx="502.047" cy="29.766" r=".661" />
          <circle cx="503.37" cy="29.766" r=".661" />
          <circle cx="504.693" cy="29.766" r=".661" />
          <circle cx="506.016" cy="29.766" r=".661" />
          <circle cx="507.338" cy="29.766" r=".661" />
          <circle cx="508.661" cy="29.766" r=".661" />
          <circle cx="509.984" cy="29.766" r=".661" />
          <circle cx="511.307" cy="29.766" r=".661" />
          <circle cx="478.234" cy="29.766" r=".661" />
          <circle cx="479.557" cy="29.766" r=".661" />
          <circle cx="480.88" cy="29.766" r=".661" />
          <circle cx="482.203" cy="29.766" r=".661" />
          <circle cx="483.526" cy="29.766" r=".661" />
          <circle cx="484.849" cy="29.766" r=".661" />
          <circle cx="486.172" cy="29.766" r=".661" />
          <circle cx="487.495" cy="29.766" r=".661" />
          <circle cx="488.818" cy="29.766" r=".661" />
          <circle cx="490.141" cy="29.766" r=".661" />
          <circle cx="491.463" cy="29.766" r=".661" />
          <circle cx="492.786" cy="29.766" r=".661" />
          <circle cx="494.109" cy="29.766" r=".661" />
          <circle cx="461.036" cy="29.766" r=".661" />
          <circle cx="462.359" cy="29.766" r=".661" />
          <circle cx="463.682" cy="29.766" r=".661" />
          <circle cx="465.005" cy="29.766" r=".661" />
          <circle cx="466.328" cy="29.766" r=".661" />
          <circle cx="467.651" cy="29.766" r=".661" />
          <circle cx="468.974" cy="29.766" r=".661" />
          <circle cx="470.297" cy="29.766" r=".661" />
          <circle cx="471.62" cy="29.766" r=".661" />
          <circle cx="472.943" cy="29.766" r=".661" />
          <circle cx="474.266" cy="29.766" r=".661" />
          <circle cx="475.588" cy="29.766" r=".661" />
          <circle cx="476.911" cy="29.766" r=".661" />
          <circle cx="443.838" cy="29.766" r=".661" />
          <circle cx="445.161" cy="29.766" r=".661" />
          <circle cx="446.484" cy="29.766" r=".661" />
          <circle cx="447.807" cy="29.766" r=".661" />
          <circle cx="449.13" cy="29.766" r=".661" />
          <circle cx="450.453" cy="29.766" r=".661" />
          <circle cx="451.776" cy="29.766" r=".661" />
          <circle cx="453.099" cy="29.766" r=".661" />
          <circle cx="454.422" cy="29.766" r=".661" />
          <circle cx="455.745" cy="29.766" r=".661" />
          <circle cx="457.068" cy="29.766" r=".661" />
          <circle cx="458.391" cy="29.766" r=".661" />
          <circle cx="459.713" cy="29.766" r=".661" />
          <circle cx="426.641" cy="29.766" r=".661" />
          <circle cx="427.963" cy="29.766" r=".661" />
          <circle cx="429.286" cy="29.766" r=".661" />
          <circle cx="430.609" cy="29.766" r=".661" />
          <circle cx="431.932" cy="29.766" r=".661" />
          <circle cx="433.255" cy="29.766" r=".661" />
          <circle cx="434.578" cy="29.766" r=".661" />
          <circle cx="435.901" cy="29.766" r=".661" />
          <circle cx="437.224" cy="29.766" r=".661" />
          <circle cx="438.547" cy="29.766" r=".661" />
          <circle cx="439.87" cy="29.766" r=".661" />
          <circle cx="441.193" cy="29.766" r=".661" />
          <circle cx="442.516" cy="29.766" r=".661" />
          <circle cx="409.443" cy="29.766" r=".661" />
          <circle cx="410.766" cy="29.766" r=".661" />
          <circle cx="412.088" cy="29.766" r=".661" />
          <circle cx="413.411" cy="29.766" r=".661" />
          <circle cx="414.734" cy="29.766" r=".661" />
          <circle cx="416.057" cy="29.766" r=".661" />
          <circle cx="417.38" cy="29.766" r=".661" />
          <circle cx="418.703" cy="29.766" r=".661" />
          <circle cx="420.026" cy="29.766" r=".661" />
          <circle cx="421.349" cy="29.766" r=".661" />
          <circle cx="422.672" cy="29.766" r=".661" />
          <circle cx="423.995" cy="29.766" r=".661" />
          <circle cx="425.318" cy="29.766" r=".661" />
          <circle cx="392.245" cy="29.766" r=".661" />
          <circle cx="393.568" cy="29.766" r=".661" />
          <circle cx="394.891" cy="29.766" r=".661" />
          <circle cx="396.213" cy="29.766" r=".661" />
          <circle cx="397.536" cy="29.766" r=".661" />
          <circle cx="398.859" cy="29.766" r=".661" />
          <circle cx="400.182" cy="29.766" r=".661" />
          <circle cx="401.505" cy="29.766" r=".661" />
          <circle cx="402.828" cy="29.766" r=".661" />
          <circle cx="404.151" cy="29.766" r=".661" />
          <circle cx="405.474" cy="29.766" r=".661" />
          <circle cx="406.797" cy="29.766" r=".661" />
          <circle cx="408.12" cy="29.766" r=".661" />
          <circle cx="375.047" cy="29.766" r=".661" />
          <circle cx="376.37" cy="29.766" r=".661" />
          <circle cx="377.693" cy="29.766" r=".661" />
          <circle cx="379.016" cy="29.766" r=".661" />
          <circle cx="380.338" cy="29.766" r=".661" />
          <circle cx="381.661" cy="29.766" r=".661" />
          <circle cx="382.984" cy="29.766" r=".661" />
          <circle cx="384.307" cy="29.766" r=".661" />
          <circle cx="385.63" cy="29.766" r=".661" />
          <circle cx="386.953" cy="29.766" r=".661" />
          <circle cx="388.276" cy="29.766" r=".661" />
          <circle cx="389.599" cy="29.766" r=".661" />
          <circle cx="390.922" cy="29.766" r=".661" />
          <circle cx="357.849" cy="29.766" r=".661" />
          <circle cx="359.172" cy="29.766" r=".661" />
          <circle cx="360.495" cy="29.766" r=".661" />
          <circle cx="361.818" cy="29.766" r=".661" />
          <circle cx="363.141" cy="29.766" r=".661" />
          <circle cx="364.463" cy="29.766" r=".661" />
          <circle cx="365.786" cy="29.766" r=".661" />
          <circle cx="367.109" cy="29.766" r=".661" />
          <circle cx="368.432" cy="29.766" r=".661" />
          <circle cx="369.755" cy="29.766" r=".661" />
          <circle cx="371.078" cy="29.766" r=".661" />
          <circle cx="372.401" cy="29.766" r=".661" />
          <circle cx="373.724" cy="29.766" r=".661" />
          <circle cx="340.651" cy="29.766" r=".661" />
          <circle cx="341.974" cy="29.766" r=".661" />
          <circle cx="343.297" cy="29.766" r=".661" />
          <circle cx="344.62" cy="29.766" r=".661" />
          <circle cx="345.943" cy="29.766" r=".661" />
          <circle cx="347.266" cy="29.766" r=".661" />
          <circle cx="348.588" cy="29.766" r=".661" />
          <circle cx="349.911" cy="29.766" r=".661" />
          <circle cx="351.234" cy="29.766" r=".661" />
          <circle cx="352.557" cy="29.766" r=".661" />
          <circle cx="353.88" cy="29.766" r=".661" />
          <circle cx="355.203" cy="29.766" r=".661" />
          <circle cx="356.526" cy="29.766" r=".661" />
          <circle cx="323.453" cy="29.766" r=".661" />
          <circle cx="324.776" cy="29.766" r=".661" />
          <circle cx="326.099" cy="29.766" r=".661" />
          <circle cx="327.422" cy="29.766" r=".661" />
          <circle cx="328.745" cy="29.766" r=".661" />
          <circle cx="330.068" cy="29.766" r=".661" />
          <circle cx="331.391" cy="29.766" r=".661" />
          <circle cx="332.713" cy="29.766" r=".661" />
          <circle cx="334.036" cy="29.766" r=".661" />
          <circle cx="335.359" cy="29.766" r=".661" />
          <circle cx="336.682" cy="29.766" r=".661" />
          <circle cx="338.005" cy="29.766" r=".661" />
          <circle cx="339.328" cy="29.766" r=".661" />
          <circle cx="316.839" cy="29.766" r=".661" />
          <circle cx="318.161" cy="29.766" r=".661" />
          <circle cx="319.484" cy="29.766" r=".661" />
          <circle cx="320.807" cy="29.766" r=".661" />
          <circle cx="322.13" cy="29.766" r=".661" />
          <circle cx="299.641" cy="29.766" r=".661" />
          <circle cx="300.964" cy="29.766" r=".661" />
          <circle cx="302.286" cy="29.766" r=".661" />
          <circle cx="303.609" cy="29.766" r=".661" />
          <circle cx="304.932" cy="29.766" r=".661" />
          <circle cx="306.255" cy="29.766" r=".661" />
          <circle cx="307.578" cy="29.766" r=".661" />
          <circle cx="308.901" cy="29.766" r=".661" />
          <circle cx="310.224" cy="29.766" r=".661" />
          <circle cx="311.547" cy="29.766" r=".661" />
          <circle cx="312.87" cy="29.766" r=".661" />
          <circle cx="314.193" cy="29.766" r=".661" />
          <circle cx="315.516" cy="29.766" r=".661" />
          <circle cx="282.443" cy="29.766" r=".661" />
          <circle cx="283.766" cy="29.766" r=".661" />
          <circle cx="285.089" cy="29.766" r=".661" />
          <circle cx="286.411" cy="29.766" r=".661" />
          <circle cx="287.734" cy="29.766" r=".661" />
          <circle cx="289.057" cy="29.766" r=".661" />
          <circle cx="290.38" cy="29.766" r=".661" />
          <circle cx="291.703" cy="29.766" r=".661" />
          <circle cx="293.026" cy="29.766" r=".661" />
          <circle cx="294.349" cy="29.766" r=".661" />
          <circle cx="295.672" cy="29.766" r=".661" />
          <circle cx="296.995" cy="29.766" r=".661" />
          <circle cx="298.318" cy="29.766" r=".661" />
          <circle cx="265.245" cy="29.766" r=".661" />
          <circle cx="266.568" cy="29.766" r=".661" />
          <circle cx="267.891" cy="29.766" r=".661" />
          <circle cx="269.214" cy="29.766" r=".661" />
          <circle cx="270.536" cy="29.766" r=".661" />
          <circle cx="271.859" cy="29.766" r=".661" />
          <circle cx="273.182" cy="29.766" r=".661" />
          <circle cx="274.505" cy="29.766" r=".661" />
          <circle cx="275.828" cy="29.766" r=".661" />
          <circle cx="277.151" cy="29.766" r=".661" />
          <circle cx="278.474" cy="29.766" r=".661" />
          <circle cx="279.797" cy="29.766" r=".661" />
          <circle cx="281.12" cy="29.766" r=".661" />
          <circle cx="248.047" cy="29.766" r=".661" />
          <circle cx="249.37" cy="29.766" r=".661" />
          <circle cx="250.693" cy="29.766" r=".661" />
          <circle cx="252.016" cy="29.766" r=".661" />
          <circle cx="253.339" cy="29.766" r=".661" />
          <circle cx="254.661" cy="29.766" r=".661" />
          <circle cx="255.984" cy="29.766" r=".661" />
          <circle cx="257.307" cy="29.766" r=".661" />
          <circle cx="258.63" cy="29.766" r=".661" />
          <circle cx="259.953" cy="29.766" r=".661" />
          <circle cx="261.276" cy="29.766" r=".661" />
          <circle cx="262.599" cy="29.766" r=".661" />
          <circle cx="263.922" cy="29.766" r=".661" />
        </g>
      </svg>
    </div>
  )
}

export function AnimationCubeSVG({ ref }: { ref?: RefObject<HTMLDivElement> }) {
  return (

    <div ref={ref}>
      <svg id="sprite-cube" className="fill-foreground" xmlns="http://www.w3.org/2000/svg" width="200" height="215.016" viewBox="0 0 52.917 56.89">
        <g paintOrder="markers stroke fill" transform="translate(130.969 31.754)">
          <circle cx="-105.172" cy="23.151" r=".661" />
          <circle cx="-105.172" cy="24.474" r=".661" />
          <circle cx="-103.849" cy="24.474" r=".661" />
          <circle cx="-102.526" cy="-23.151" r=".661" transform="scale(1 -1)" />
          <circle cx="-101.203" cy="21.828" r=".661" />
          <circle cx="-99.88" cy="20.505" r=".661" />
          <circle cx="-98.557" cy="-19.182" r=".661" transform="scale(1 -1)" />
          <circle cx="-97.234" cy="19.182" r=".661" />
          <circle cx="-95.911" cy="17.865" r=".661" />
          <circle cx="-94.589" cy="16.536" r=".661" />
          <circle cx="-93.266" cy="15.219" r=".661" />
          <circle cx="-91.943" cy="13.891" r=".661" />
          <circle cx="-86.651" cy="9.922" r=".661" />
          <circle cx="-85.328" cy="8.593" r=".661" />
          <circle cx="-84.005" cy="7.276" r=".661" />
          <circle cx="-82.682" cy="5.948" r=".661" />
          <circle cx="-90.62" cy="12.573" r=".661" />
          <circle cx="-89.297" cy="12.573" r=".661" />
          <circle cx="-87.974" cy="11.256" r=".661" />
          <circle cx="-126.339" cy="25.793" r=".661" transform="scale(1 -1)" />
          <circle cx="-125.016" cy="-25.793" r=".661" />
          <circle cx="-123.693" cy="-25.797" r=".661" />
          <circle cx="-122.37" cy="27.116" r=".661" transform="scale(1 -1)" />
          <circle cx="-121.047" cy="-27.116" r=".661" />
          <circle cx="-119.724" cy="-27.12" r=".661" />
          <circle cx="-118.401" cy="28.443" r=".661" transform="scale(1 -1)" />
          <circle cx="-117.078" cy="-28.443" r=".661" />
          <circle cx="-115.755" cy="-28.447" r=".661" />
          <circle cx="-114.432" cy="29.766" r=".661" transform="scale(1 -1)" />
          <circle cx="-113.109" cy="-29.766" r=".661" />
          <circle cx="-111.786" cy="-29.77" r=".661" />
          <circle cx="-110.464" cy="31.089" r=".661" transform="scale(1 -1)" />
          <circle cx="-109.141" cy="-31.089" r=".661" />
          <circle cx="-107.818" cy="-31.093" r=".661" />
          <circle cx="-114.432" cy="3.313" r=".661" transform="scale(1 -1)" />
          <circle cx="-113.109" cy="-4.631" r=".661" />
          <circle cx="-111.786" cy="-4.631" r=".661" />
          <circle cx="-110.464" cy="-5.959" r=".661" />
          <circle cx="-109.141" cy="-7.277" r=".661" />
          <circle cx="-107.818" cy="-7.277" r=".661" />
          <circle cx="-102.526" cy="-11.251" r=".661" />
          <circle cx="-106.495" cy="-8.599" r=".661" />
          <circle cx="-105.172" cy="-8.599" r=".661" />
          <circle cx="-103.849" cy="-9.922" r=".661" />
          <circle cx="-101.203" cy="-12.568" r=".661" />
          <circle cx="-99.88" cy="-12.568" r=".661" />
          <circle cx="-94.589" cy="-16.542" r=".661" />
          <circle cx="-98.557" cy="-13.89" r=".661" />
          <circle cx="-97.234" cy="-13.89" r=".661" />
          <circle cx="-95.911" cy="-15.213" r=".661" />
          <circle cx="-93.266" cy="-17.865" r=".661" />
          <circle cx="-91.943" cy="-17.865" r=".661" />
          <circle cx="-86.651" cy="-21.828" r=".661" />
          <circle cx="-90.62" cy="-19.187" r=".661" />
          <circle cx="-89.297" cy="-20.505" r=".661" />
          <circle cx="-87.974" cy="-20.505" r=".661" />
          <circle cx="-84.005" cy="-23.154" r=".661" />
          <circle cx="-82.682" cy="-23.154" r=".661" />
          <circle cx="-85.328" cy="-21.828" r=".661" />
          <circle cx="-81.359" cy="5.953" r=".661" />
          <circle cx="-80.036" cy="4.63" r=".661" />
          <circle cx="-78.714" cy="3.302" r=".661" />
          <circle cx="-130.307" cy="-17.859" r=".661" />
          <circle cx="-128.984" cy="-19.177" r=".661" />
          <circle cx="-127.661" cy="-19.182" r=".661" />
          <circle cx="-126.339" cy="-20.505" r=".661" />
          <circle cx="-125.016" cy="-20.505" r=".661" />
          <circle cx="-123.693" cy="-21.828" r=".661" />
          <circle cx="-106.495" cy="20.505" r=".661" />
          <circle cx="-105.172" cy="21.828" r=".661" />
          <circle cx="-107.818" cy="17.859" r=".661" />
          <circle cx="-106.495" cy="19.182" r=".661" />
          <circle cx="-107.818" cy="16.536" r=".661" />
          <circle cx="-107.818" cy="15.214" r=".661" />
          <circle cx="-110.464" cy="9.928" r=".661" />
          <circle cx="-110.464" cy="8.605" r=".661" />
          <circle cx="-113.109" cy="3.307" r=".661" />
          <circle cx="-113.109" cy="1.984" r=".661" />
          <circle cx="-111.786" cy="5.953" r=".661" />
          <circle cx="-113.108" cy="4.624" r=".661" />
          <circle cx="-114.432" cy="-.661" r=".661" />
          <circle cx="-115.755" cy="-1.984" r=".661" />
          <circle cx="-114.431" cy=".655" r=".661" />
          <circle cx="-111.786" cy="7.276" r=".661" />
          <circle cx="-109.141" cy="12.568" r=".661" />
          <circle cx="-109.141" cy="13.891" r=".661" />
          <circle cx="-110.464" cy="11.245" r=".661" />
          <circle cx="-118.401" cy="8.599" r=".661" />
          <circle cx="-117.078" cy="9.922" r=".661" />
          <circle cx="-115.755" cy="11.245" r=".661" />
          <circle cx="-114.432" cy="12.568" r=".661" />
          <circle cx="-113.109" cy="13.891" r=".661" />
          <circle cx="-121.047" cy="-7.276" r=".661" />
          <circle cx="-119.724" cy="-5.953" r=".661" />
          <circle cx="-118.401" cy="-4.63" r=".661" />
          <circle cx="-117.078" cy="-3.307" r=".661" />
          <circle cx="-126.339" cy="-12.568" r=".661" />
          <circle cx="-125.016" cy="-11.245" r=".661" />
          <circle cx="-128.983" cy="-15.214" r=".661" />
          <circle cx="-127.66" cy="-13.891" r=".661" />
          <circle cx="-123.693" cy="-9.922" r=".661" />
          <circle cx="-122.37" cy="-8.599" r=".661" />
          <circle cx="-111.786" cy="15.214" r=".661" />
          <circle cx="-110.464" cy="17.859" r=".661" />
          <circle cx="-111.786" cy="16.536" r=".661" />
          <circle cx="-107.818" cy="20.505" r=".661" />
          <circle cx="-106.495" cy="21.828" r=".661" />
          <circle cx="-106.495" cy="23.151" r=".661" />
          <circle cx="-109.141" cy="19.182" r=".661" />
          <circle cx="-78.714" cy="-.661" r=".661" />
          <circle cx="-80.036" cy="-3.307" r=".661" />
          <circle cx="-80.036" cy="-1.984" r=".661" />
          <circle cx="-80.036" cy="-4.63" r=".661" />
          <circle cx="-80.036" cy="-5.953" r=".661" />
          <circle cx="-81.359" cy="-11.239" r=".661" />
          <circle cx="-81.359" cy="-12.562" r=".661" />
          <circle cx="-81.359" cy="-15.205" r=".661" />
          <circle cx="-81.359" cy="-13.882" r=".661" />
          <circle cx="-82.682" cy="-16.536" r=".661" />
          <circle cx="-82.682" cy="-17.859" r=".661" />
          <circle cx="-82.682" cy="-20.503" r=".661" />
          <circle cx="-82.682" cy="-21.828" r=".661" />
          <circle cx="-82.682" cy="-19.18" r=".661" />
          <circle cx="-80.036" cy="-8.599" r=".661" />
          <circle cx="-80.036" cy="-7.276" r=".661" />
          <circle cx="-81.359" cy="-9.922" r=".661" />
          <circle cx="-109.141" cy="-11.245" r=".661" />
          <circle cx="-103.849" cy="-13.891" r=".661" />
          <circle cx="-107.818" cy="-11.245" r=".661" />
          <circle cx="-106.495" cy="-12.567" r=".661" />
          <circle cx="-105.172" cy="-12.568" r=".661" />
          <circle cx="-102.526" cy="-13.891" r=".661" />
          <circle cx="-101.203" cy="-15.214" r=".661" />
          <circle cx="-95.911" cy="-17.859" r=".661" />
          <circle cx="-99.88" cy="-15.214" r=".661" />
          <circle cx="-98.557" cy="-16.536" r=".661" />
          <circle cx="-97.234" cy="-16.536" r=".661" />
          <circle cx="-94.589" cy="-17.859" r=".661" />
          <circle cx="-91.943" cy="-19.182" r=".661" />
          <circle cx="-93.266" cy="-19.182" r=".661" />
          <circle cx="-90.62" cy="-20.505" r=".661" />
          <circle cx="-87.974" cy="-21.828" r=".661" />
          <circle cx="-85.328" cy="-23.151" r=".661" />
          <circle cx="-78.714" cy=".661" r=".661" />
          <circle cx="-78.714" cy="1.984" r=".661" />
          <circle cx="-80.036" cy="3.302" r=".661" />
          <circle cx="-80.036" cy="-.661" r=".661" />
          <circle cx="-81.359" cy="-3.307" r=".661" />
          <circle cx="-81.359" cy="-1.984" r=".661" />
          <circle cx="-81.359" cy="-4.63" r=".661" />
          <circle cx="-81.359" cy="-5.953" r=".661" />
          <circle cx="-82.682" cy="-11.239" r=".661" />
          <circle cx="-82.682" cy="-12.562" r=".661" />
          <circle cx="-82.682" cy="-15.205" r=".661" />
          <circle cx="-82.682" cy="-13.882" r=".661" />
          <circle cx="-84.005" cy="-16.536" r=".661" />
          <circle cx="-84.005" cy="-17.859" r=".661" />
          <circle cx="-84.005" cy="-20.503" r=".661" />
          <circle cx="-84.005" cy="-21.828" r=".661" />
          <circle cx="-84.005" cy="-19.18" r=".661" />
          <circle cx="-81.359" cy="-8.599" r=".661" />
          <circle cx="-81.359" cy="-7.276" r=".661" />
          <circle cx="-82.682" cy="-9.922" r=".661" />
          <circle cx="-80.036" cy=".661" r=".661" />
          <circle cx="-80.036" cy="1.984" r=".661" />
          <circle cx="-119.724" cy="5.953" r=".661" />
          <circle cx="-118.401" cy="7.276" r=".661" />
          <circle cx="-85.328" cy="-24.474" r=".661" />
          <circle cx="-84.005" cy="-24.477" r=".661" />
          <circle cx="-86.651" cy="-24.474" r=".661" />
          <circle cx="-89.297" cy="-25.794" r=".661" />
          <circle cx="-87.974" cy="-25.797" r=".661" />
          <circle cx="-90.62" cy="-25.794" r=".661" />
          <circle cx="-93.266" cy="-27.117" r=".661" />
          <circle cx="-91.943" cy="-27.12" r=".661" />
          <circle cx="-94.589" cy="-27.117" r=".661" />
          <circle cx="-97.234" cy="-28.438" r=".661" />
          <circle cx="-95.911" cy="-28.44" r=".661" />
          <circle cx="-98.557" cy="-28.438" r=".661" />
          <circle cx="-101.203" cy="-29.758" r=".661" />
          <circle cx="-99.88" cy="-29.761" r=".661" />
          <circle cx="-102.526" cy="-29.758" r=".661" />
          <circle cx="-105.172" cy="-31.078" r=".661" />
          <circle cx="-103.849" cy="-31.081" r=".661" />
          <circle cx="-106.495" cy="-31.078" r=".661" />
          <circle cx="-121.047" cy="3.307" r=".661" />
          <circle cx="-119.724" cy="4.63" r=".661" />
          <circle cx="-121.047" cy="1.984" r=".661" />
          <circle cx="-122.37" cy=".661" r=".661" />
          <circle cx="-125.016" cy="-4.624" r=".661" />
          <circle cx="-125.016" cy="-5.947" r=".661" />
          <circle cx="-127.661" cy="-11.245" r=".661" />
          <circle cx="-128.984" cy="-12.568" r=".661" />
          <circle cx="-126.339" cy="-8.599" r=".661" />
          <circle cx="-127.66" cy="-9.928" r=".661" />
          <circle cx="-130.307" cy="-15.214" r=".661" />
          <circle cx="-130.307" cy="-16.536" r=".661" />
          <circle cx="-128.983" cy="-13.897" r=".661" />
          <circle cx="-126.339" cy="-7.276" r=".661" />
          <circle cx="-123.693" cy="-1.984" r=".661" />
          <circle cx="-122.37" cy="-.661" r=".661" />
          <circle cx="-123.693" cy="-3.307" r=".661" />
          <circle cx="-113.109" cy="-13.891" r=".661" />
          <circle cx="-111.786" cy="-12.568" r=".661" />
          <circle cx="-110.464" cy="-11.245" r=".661" />
          <circle cx="-118.401" cy="-17.859" r=".661" />
          <circle cx="-117.078" cy="-16.536" r=".661" />
          <circle cx="-122.37" cy="-20.505" r=".661" />
          <circle cx="-119.723" cy="-19.182" r=".661" />
          <circle cx="-115.755" cy="-15.214" r=".661" />
          <circle cx="-114.432" cy="-15.214" r=".661" />
          <circle cx="-125.016" cy="-21.828" r=".661" />
          <circle cx="-126.339" cy="-23.151" r=".661" />
          <circle cx="-127.661" cy="-24.474" r=".661" />
          <circle cx="-121.047" cy="-19.182" r=".661" />
          <circle cx="-81.359" cy="3.302" r=".661" />
          <circle cx="-81.359" cy="-.661" r=".661" />
          <circle cx="-82.682" cy="-3.307" r=".661" />
          <circle cx="-82.682" cy="-1.984" r=".661" />
          <circle cx="-82.682" cy="-4.63" r=".661" />
          <circle cx="-82.682" cy="-5.953" r=".661" />
          <circle cx="-84.005" cy="-11.239" r=".661" />
          <circle cx="-84.005" cy="-12.562" r=".661" />
          <circle cx="-84.005" cy="-15.205" r=".661" />
          <circle cx="-84.005" cy="-13.882" r=".661" />
          <circle cx="-85.328" cy="-16.536" r=".661" />
          <circle cx="-85.328" cy="-17.859" r=".661" />
          <circle cx="-85.328" cy="-20.503" r=".661" />
          <circle cx="-81.359" cy="4.63" r=".661" />
          <circle cx="-85.328" cy="-19.18" r=".661" />
          <circle cx="-82.682" cy="-8.599" r=".661" />
          <circle cx="-82.682" cy="-7.276" r=".661" />
          <circle cx="-84.005" cy="-9.922" r=".661" />
          <circle cx="-81.359" cy=".661" r=".661" />
          <circle cx="-81.359" cy="1.984" r=".661" />
        </g>
      </svg>
    </div>
  )
}

export function AnimationGraphicSVG({ ref }: { ref?: RefObject<HTMLDivElement> }) {
  return (

    <div ref={ref}>
      <svg id="sprite-graphic" className="fill-foreground" xmlns="http://www.w3.org/2000/svg" width="150" height="195" viewBox="0 0 39.687 51.594">
        <g paintOrder="markers stroke fill" transform="translate(-191.823 29.104)">
          <circle cx="226.88" cy="-28.443" r=".661" />
          <circle cx="228.203" cy="-28.443" r=".661" />
          <circle cx="229.526" cy="-28.443" r=".661" />
          <circle cx="226.88" cy="21.828" r=".661" />
          <circle cx="228.203" cy="21.828" r=".661" />
          <circle cx="229.526" cy="21.828" r=".661" />
          <circle cx="230.849" cy="21.828" r=".661" />
          <circle cx="230.849" cy="20.505" r=".661" />
          <circle cx="230.849" cy="19.182" r=".661" />
          <circle cx="230.849" cy="17.859" r=".661" />
          <circle cx="230.849" cy="16.536" r=".661" />
          <circle cx="230.849" cy="15.214" r=".661" />
          <circle cx="230.849" cy="13.891" r=".661" />
          <circle cx="230.849" cy="12.568" r=".661" />
          <circle cx="230.849" cy="11.245" r=".661" />
          <circle cx="230.849" cy="9.922" r=".661" />
          <circle cx="230.849" cy="8.599" r=".661" />
          <circle cx="230.849" cy="7.276" r=".661" />
          <circle cx="230.849" cy="5.953" r=".661" />
          <circle cx="230.849" cy="4.63" r=".661" />
          <circle cx="230.849" cy="3.307" r=".661" />
          <circle cx="230.849" cy="1.984" r=".661" />
          <circle cx="230.849" cy=".661" r=".661" />
          <circle cx="230.849" cy="-.661" r=".661" />
          <circle cx="230.849" cy="-1.984" r=".661" />
          <circle cx="230.849" cy="-3.307" r=".661" />
          <circle cx="230.849" cy="-4.63" r=".661" />
          <circle cx="230.849" cy="-12.568" r=".661" />
          <circle cx="230.849" cy="-13.891" r=".661" />
          <circle cx="230.849" cy="-15.214" r=".661" />
          <circle cx="230.849" cy="-16.536" r=".661" />
          <circle cx="230.849" cy="-17.859" r=".661" />
          <circle cx="230.849" cy="-5.953" r=".661" />
          <circle cx="230.849" cy="-7.276" r=".661" />
          <circle cx="230.849" cy="-8.599" r=".661" />
          <circle cx="230.849" cy="-9.922" r=".661" />
          <circle cx="230.849" cy="-11.245" r=".661" />
          <circle cx="230.849" cy="-19.182" r=".661" />
          <circle cx="230.849" cy="-20.505" r=".661" />
          <circle cx="230.849" cy="-21.828" r=".661" />
          <circle cx="230.849" cy="-25.797" r=".661" />
          <circle cx="230.849" cy="-27.12" r=".661" />
          <circle cx="230.849" cy="-28.443" r=".661" />
          <circle cx="229.526" cy="13.891" r=".661" />
          <circle cx="229.526" cy="12.568" r=".661" />
          <circle cx="229.526" cy="11.245" r=".661" />
          <circle cx="229.526" cy="9.922" r=".661" />
          <circle cx="229.526" cy="8.599" r=".661" />
          <circle cx="229.526" cy="7.276" r=".661" />
          <circle cx="229.526" cy="5.953" r=".661" />
          <circle cx="229.526" cy="4.63" r=".661" />
          <circle cx="229.526" cy="3.307" r=".661" />
          <circle cx="229.526" cy="1.984" r=".661" />
          <circle cx="229.526" cy=".661" r=".661" />
          <circle cx="229.526" cy="-.661" r=".661" />
          <circle cx="229.526" cy="-1.984" r=".661" />
          <circle cx="229.526" cy="-3.307" r=".661" />
          <circle cx="228.203" cy="15.214" r=".661" />
          <circle cx="228.203" cy="13.891" r=".661" />
          <circle cx="228.203" cy="12.568" r=".661" />
          <circle cx="228.203" cy="11.245" r=".661" />
          <circle cx="228.203" cy="9.922" r=".661" />
          <circle cx="228.203" cy="8.599" r=".661" />
          <circle cx="228.203" cy="7.276" r=".661" />
          <circle cx="228.203" cy="5.953" r=".661" />
          <circle cx="228.203" cy="4.63" r=".661" />
          <circle cx="228.203" cy="3.307" r=".661" />
          <circle cx="228.203" cy="1.984" r=".661" />
          <circle cx="228.203" cy=".661" r=".661" />
          <circle cx="228.203" cy="-.661" r=".661" />
          <circle cx="228.203" cy="-1.984" r=".661" />
          <circle cx="228.203" cy="-3.307" r=".661" />
          <circle cx="228.203" cy="-4.63" r=".661" />
          <circle cx="228.203" cy="-5.953" r=".661" />
          <circle cx="228.203" cy="-13.891" r=".661" />
          <circle cx="228.203" cy="-15.214" r=".661" />
          <circle cx="228.203" cy="-16.536" r=".661" />
          <circle cx="228.203" cy="-17.859" r=".661" />
          <circle cx="228.203" cy="-19.182" r=".661" />
          <circle cx="228.203" cy="-7.276" r=".661" />
          <circle cx="228.203" cy="-8.599" r=".661" />
          <circle cx="228.203" cy="-9.922" r=".661" />
          <circle cx="228.203" cy="-11.245" r=".661" />
          <circle cx="228.203" cy="-12.568" r=".661" />
          <circle cx="228.203" cy="-20.505" r=".661" />
          <circle cx="228.203" cy="-21.828" r=".661" />
          <circle cx="228.203" cy="-25.797" r=".661" />
          <circle cx="228.203" cy="-27.12" r=".661" />
          <circle cx="229.526" cy="-11.245" r=".661" />
          <circle cx="229.526" cy="-12.568" r=".661" />
          <circle cx="229.526" cy="-13.891" r=".661" />
          <circle cx="229.526" cy="-15.214" r=".661" />
          <circle cx="229.526" cy="-16.536" r=".661" />
          <circle cx="229.526" cy="-4.63" r=".661" />
          <circle cx="229.526" cy="-5.953" r=".661" />
          <circle cx="229.526" cy="-7.276" r=".661" />
          <circle cx="229.526" cy="-8.599" r=".661" />
          <circle cx="229.526" cy="-9.922" r=".661" />
          <circle cx="229.526" cy="-17.859" r=".661" />
          <circle cx="229.526" cy="-19.182" r=".661" />
          <circle cx="229.526" cy="-20.505" r=".661" />
          <circle cx="229.526" cy="-21.828" r=".661" />
          <circle cx="229.526" cy="-25.797" r=".661" />
          <circle cx="229.526" cy="-27.12" r=".661" />
          <circle cx="192.484" cy="21.828" r=".661" />
          <circle cx="192.484" cy="20.505" r=".661" />
          <circle cx="192.484" cy="19.182" r=".661" />
          <circle cx="192.484" cy="17.859" r=".661" />
          <circle cx="192.484" cy="16.536" r=".661" />
          <circle cx="192.484" cy="15.214" r=".661" />
          <circle cx="192.484" cy="13.891" r=".661" />
          <circle cx="192.484" cy="12.568" r=".661" />
          <circle cx="192.484" cy="11.245" r=".661" />
          <circle cx="192.484" cy="9.922" r=".661" />
          <circle cx="192.484" cy="8.599" r=".661" />
          <circle cx="192.484" cy="7.276" r=".661" />
          <circle cx="192.484" cy="5.953" r=".661" />
          <circle cx="192.484" cy="4.63" r=".661" />
          <circle cx="192.484" cy="3.307" r=".661" />
          <circle cx="192.484" cy="1.984" r=".661" />
          <circle cx="192.484" cy=".661" r=".661" />
          <circle cx="192.484" cy="-.661" r=".661" />
          <circle cx="192.484" cy="-1.984" r=".661" />
          <circle cx="192.484" cy="-3.307" r=".661" />
          <circle cx="192.484" cy="-4.63" r=".661" />
          <circle cx="192.484" cy="-12.568" r=".661" />
          <circle cx="192.484" cy="-13.891" r=".661" />
          <circle cx="192.484" cy="-15.214" r=".661" />
          <circle cx="192.484" cy="-16.536" r=".661" />
          <circle cx="192.484" cy="-17.859" r=".661" />
          <circle cx="192.484" cy="-5.953" r=".661" />
          <circle cx="192.484" cy="-7.276" r=".661" />
          <circle cx="192.484" cy="-8.599" r=".661" />
          <circle cx="192.484" cy="-9.922" r=".661" />
          <circle cx="192.484" cy="-11.245" r=".661" />
          <circle cx="192.484" cy="-19.182" r=".661" />
          <circle cx="192.484" cy="-20.505" r=".661" />
          <circle cx="192.484" cy="-21.828" r=".661" />
          <circle cx="192.484" cy="-25.797" r=".661" />
          <circle cx="192.484" cy="-27.12" r=".661" />
          <circle cx="192.484" cy="-28.443" r=".661" />
          <circle cx="213.651" cy="21.828" r=".661" />
          <circle cx="214.974" cy="21.828" r=".661" />
          <circle cx="216.297" cy="21.828" r=".661" />
          <circle cx="217.62" cy="21.828" r=".661" />
          <circle cx="218.943" cy="21.828" r=".661" />
          <circle cx="220.266" cy="21.828" r=".661" />
          <circle cx="221.589" cy="21.828" r=".661" />
          <circle cx="222.911" cy="21.828" r=".661" />
          <circle cx="224.234" cy="21.828" r=".661" />
          <circle cx="225.557" cy="21.828" r=".661" />
          <circle cx="228.203" cy="20.505" r=".661" />
          <circle cx="229.526" cy="20.505" r=".661" />
          <circle cx="229.526" cy="19.182" r=".661" />
          <circle cx="228.203" cy="19.182" r=".661" />
          <circle cx="229.526" cy="17.859" r=".661" />
          <circle cx="228.203" cy="17.859" r=".661" />
          <circle cx="229.526" cy="16.536" r=".661" />
          <circle cx="228.203" cy="16.536" r=".661" />
          <circle cx="229.526" cy="15.214" r=".661" />
          <circle cx="196.453" cy="21.828" r=".661" />
          <circle cx="197.776" cy="21.828" r=".661" />
          <circle cx="199.099" cy="21.828" r=".661" />
          <circle cx="200.422" cy="21.828" r=".661" />
          <circle cx="201.745" cy="21.828" r=".661" />
          <circle cx="203.068" cy="21.828" r=".661" />
          <circle cx="204.391" cy="21.828" r=".661" />
          <circle cx="205.714" cy="21.828" r=".661" />
          <circle cx="207.036" cy="21.828" r=".661" />
          <circle cx="208.359" cy="21.828" r=".661" />
          <circle cx="209.682" cy="21.828" r=".661" />
          <circle cx="211.005" cy="21.828" r=".661" />
          <circle cx="212.328" cy="21.828" r=".661" />
          <circle cx="193.807" cy="21.828" r=".661" />
          <circle cx="195.13" cy="21.828" r=".661" />
          <circle cx="213.651" cy="-28.443" r=".661" />
          <circle cx="214.974" cy="-28.443" r=".661" />
          <circle cx="216.297" cy="-28.443" r=".661" />
          <circle cx="217.62" cy="-28.443" r=".661" />
          <circle cx="218.943" cy="-28.443" r=".661" />
          <circle cx="220.266" cy="-28.443" r=".661" />
          <circle cx="221.589" cy="-28.443" r=".661" />
          <circle cx="222.911" cy="-28.443" r=".661" />
          <circle cx="224.234" cy="-28.443" r=".661" />
          <circle cx="225.557" cy="-28.443" r=".661" />
          <circle cx="213.651" cy="-20.505" r=".661" />
          <circle cx="214.974" cy="-20.505" r=".661" />
          <circle cx="216.297" cy="-20.505" r=".661" />
          <circle cx="217.62" cy="-20.505" r=".661" />
          <circle cx="218.943" cy="-20.505" r=".661" />
          <circle cx="220.266" cy="-20.505" r=".661" />
          <circle cx="221.589" cy="-20.505" r=".661" />
          <circle cx="222.911" cy="-20.505" r=".661" />
          <circle cx="224.234" cy="-20.505" r=".661" />
          <circle cx="225.557" cy="-20.505" r=".661" />
          <circle cx="213.651" cy="-16.536" r=".661" />
          <circle cx="214.974" cy="-16.536" r=".661" />
          <circle cx="216.297" cy="-16.536" r=".661" />
          <circle cx="217.62" cy="-16.536" r=".661" />
          <circle cx="218.943" cy="-16.536" r=".661" />
          <circle cx="220.266" cy="-16.536" r=".661" />
          <circle cx="221.589" cy="-16.536" r=".661" />
          <circle cx="222.911" cy="-16.536" r=".661" />
          <circle cx="224.234" cy="-16.536" r=".661" />
          <circle cx="225.557" cy="-16.536" r=".661" />
          <circle cx="213.651" cy="-12.568" r=".661" />
          <circle cx="214.974" cy="-12.568" r=".661" />
          <circle cx="216.297" cy="-12.568" r=".661" />
          <circle cx="217.62" cy="-12.568" r=".661" />
          <circle cx="218.943" cy="-12.568" r=".661" />
          <circle cx="220.266" cy="-12.568" r=".661" />
          <circle cx="221.589" cy="-12.568" r=".661" />
          <circle cx="222.911" cy="-12.568" r=".661" />
          <circle cx="224.234" cy="-12.568" r=".661" />
          <circle cx="225.557" cy="-12.568" r=".661" />
          <circle cx="196.453" cy="-28.443" r=".661" />
          <circle cx="197.776" cy="-28.443" r=".661" />
          <circle cx="199.099" cy="-28.443" r=".661" />
          <circle cx="200.422" cy="-28.443" r=".661" />
          <circle cx="201.745" cy="-28.443" r=".661" />
          <circle cx="203.068" cy="-28.443" r=".661" />
          <circle cx="204.391" cy="-28.443" r=".661" />
          <circle cx="205.714" cy="-28.443" r=".661" />
          <circle cx="207.036" cy="-28.443" r=".661" />
          <circle cx="208.359" cy="-28.443" r=".661" />
          <circle cx="209.682" cy="-28.443" r=".661" />
          <circle cx="211.005" cy="-28.443" r=".661" />
          <circle cx="212.328" cy="-28.443" r=".661" />
          <circle cx="193.807" cy="-28.443" r=".661" />
          <circle cx="195.13" cy="-28.443" r=".661" />
          <circle cx="195.13" cy="-9.922" r=".661" />
          <circle cx="195.13" cy="-11.245" r=".661" />
          <circle cx="195.13" cy="-12.568" r=".661" />
          <circle cx="195.13" cy="-13.891" r=".661" />
          <circle cx="195.13" cy="-15.214" r=".661" />
          <circle cx="195.13" cy="-.661" r=".661" />
          <circle cx="195.13" cy="3.307" r=".661" />
          <circle cx="195.13" cy="-5.953" r=".661" />
          <circle cx="195.13" cy="-7.276" r=".661" />
          <circle cx="195.13" cy="-8.599" r=".661" />
          <circle cx="195.13" cy="-16.536" r=".661" />
          <circle cx="195.13" cy="-17.859" r=".661" />
          <circle cx="195.13" cy="-19.182" r=".661" />
          <circle cx="195.13" cy="-20.505" r=".661" />
          <circle cx="195.13" cy="-21.828" r=".661" />
          <circle cx="211.005" cy="-19.182" r=".661" />
          <circle cx="211.005" cy="-20.505" r=".661" />
          <circle cx="211.005" cy="-21.828" r=".661" />
          <circle cx="195.13" cy="-25.797" r=".661" />
          <circle cx="199.099" cy="-25.797" r=".661" />
          <circle cx="200.422" cy="-25.797" r=".661" />
          <circle cx="201.745" cy="-25.797" r=".661" />
          <circle cx="203.068" cy="-25.797" r=".661" />
          <circle cx="204.391" cy="-25.797" r=".661" />
          <circle cx="205.714" cy="-25.797" r=".661" />
          <circle cx="207.036" cy="-25.797" r=".661" />
          <circle cx="208.359" cy="-25.797" r=".661" />
          <circle cx="211.005" cy="-25.797" r=".661" />
          <circle cx="196.453" cy="-25.797" r=".661" />
          <circle cx="197.776" cy="-25.797" r=".661" />
          <circle cx="205.714" cy="4.63" r=".661" />
          <circle cx="207.036" cy="4.63" r=".661" />
          <circle cx="208.359" cy="4.63" r=".661" />
          <circle cx="209.682" cy="-25.797" r=".661" />
          <circle cx="209.682" cy="4.63" r=".661" />
          <circle cx="211.005" cy="4.63" r=".661" />
          <circle cx="211.005" cy="3.307" r=".661" />
          <circle cx="211.005" cy="-.661" r=".661" />
          <circle cx="211.005" cy="-5.953" r=".661" />
          <circle cx="195.13" cy="1.984" r=".661" />
          <circle cx="195.13" cy=".661" r=".661" />
          <circle cx="211.005" cy="1.984" r=".661" />
          <circle cx="211.005" cy=".661" r=".661" />
          <circle cx="220.266" cy="16.536" r=".661" />
          <circle cx="221.589" cy="16.536" r=".661" />
          <circle cx="222.911" cy="16.536" r=".661" />
          <circle cx="224.234" cy="16.536" r=".661" />
          <circle cx="225.557" cy="16.536" r=".661" />
          <circle cx="225.557" cy="15.214" r=".661" />
          <circle cx="225.557" cy="11.245" r=".661" />
          <circle cx="225.557" cy="13.891" r=".661" />
          <circle cx="225.557" cy="12.568" r=".661" />
          <circle cx="211.005" cy="-7.276" r=".661" />
          <circle cx="211.005" cy="-8.599" r=".661" />
          <circle cx="195.13" cy="-1.984" r=".661" />
          <circle cx="195.13" cy="-3.307" r=".661" />
          <circle cx="195.13" cy="-4.63" r=".661" />
          <circle cx="211.005" cy="-1.984" r=".661" />
          <circle cx="211.005" cy="-3.307" r=".661" />
          <circle cx="211.005" cy="-4.63" r=".661" />
          <circle cx="211.005" cy="-9.922" r=".661" />
          <circle cx="211.005" cy="-11.245" r=".661" />
          <circle cx="211.005" cy="-12.568" r=".661" />
          <circle cx="211.005" cy="-13.891" r=".661" />
          <circle cx="213.651" cy="-8.599" r=".661" />
          <circle cx="214.974" cy="-8.599" r=".661" />
          <circle cx="216.297" cy="-8.599" r=".661" />
          <circle cx="217.62" cy="-8.599" r=".661" />
          <circle cx="218.943" cy="-8.599" r=".661" />
          <circle cx="220.266" cy="-8.599" r=".661" />
          <circle cx="221.589" cy="-8.599" r=".661" />
          <circle cx="222.911" cy="-8.599" r=".661" />
          <circle cx="224.234" cy="-8.599" r=".661" />
          <circle cx="225.557" cy="-8.599" r=".661" />
          <circle cx="213.651" cy="-4.63" r=".661" />
          <circle cx="214.974" cy="-4.63" r=".661" />
          <circle cx="216.297" cy="-4.63" r=".661" />
          <circle cx="217.62" cy="-4.63" r=".661" />
          <circle cx="218.943" cy="-4.63" r=".661" />
          <circle cx="220.266" cy="-4.63" r=".661" />
          <circle cx="221.589" cy="-4.63" r=".661" />
          <circle cx="222.911" cy="-4.63" r=".661" />
          <circle cx="224.234" cy="-4.63" r=".661" />
          <circle cx="225.557" cy="-4.63" r=".661" />
          <circle cx="213.651" cy="-.661" r=".661" />
          <circle cx="214.974" cy="-.661" r=".661" />
          <circle cx="216.297" cy="-.661" r=".661" />
          <circle cx="217.62" cy="-.661" r=".661" />
          <circle cx="218.943" cy="-.661" r=".661" />
          <circle cx="220.266" cy="-.661" r=".661" />
          <circle cx="221.589" cy="-.661" r=".661" />
          <circle cx="222.911" cy="-.661" r=".661" />
          <circle cx="224.234" cy="-.661" r=".661" />
          <circle cx="225.557" cy="-.661" r=".661" />
          <circle cx="225.557" cy="9.922" r=".661" />
          <circle cx="212.328" cy="9.922" r=".661" />
          <circle cx="213.651" cy="9.922" r=".661" />
          <circle cx="214.974" cy="9.922" r=".661" />
          <circle cx="216.297" cy="9.922" r=".661" />
          <circle cx="217.62" cy="9.922" r=".661" />
          <circle cx="218.943" cy="9.922" r=".661" />
          <circle cx="220.266" cy="9.922" r=".661" />
          <circle cx="210.997" cy="16.536" r=".661" />
          <circle cx="212.319" cy="16.536" r=".661" />
          <circle cx="213.642" cy="16.536" r=".661" />
          <circle cx="214.965" cy="16.536" r=".661" />
          <circle cx="216.288" cy="16.536" r=".661" />
          <circle cx="217.611" cy="16.536" r=".661" />
          <circle cx="218.934" cy="16.536" r=".661" />
          <circle cx="221.589" cy="9.922" r=".661" />
          <circle cx="222.911" cy="9.922" r=".661" />
          <circle cx="224.234" cy="9.922" r=".661" />
          <circle cx="211.005" cy="15.214" r=".661" />
          <circle cx="211.005" cy="11.245" r=".661" />
          <circle cx="211.005" cy="13.891" r=".661" />
          <circle cx="211.005" cy="12.568" r=".661" />
          <circle cx="211.005" cy="9.922" r=".661" />
          <circle cx="211.005" cy="-15.214" r=".661" />
          <circle cx="211.005" cy="-16.536" r=".661" />
          <circle cx="211.005" cy="-17.859" r=".661" />
          <circle cx="230.849" cy="-23.151" r=".661" />
          <circle cx="230.849" cy="-24.474" r=".661" />
          <circle cx="228.203" cy="-23.151" r=".661" />
          <circle cx="228.203" cy="-24.474" r=".661" />
          <circle cx="229.526" cy="-23.151" r=".661" />
          <circle cx="229.526" cy="-24.474" r=".661" />
          <circle cx="192.484" cy="-23.151" r=".661" />
          <circle cx="192.484" cy="-24.474" r=".661" />
          <circle cx="195.13" cy="-23.151" r=".661" />
          <circle cx="195.13" cy="-24.474" r=".661" />
          <circle cx="211.005" cy="-24.474" r=".661" />
          <circle cx="211.005" cy="-23.151" r=".661" />
          <circle cx="195.13" cy="4.63" r=".661" />
          <circle cx="196.453" cy="4.63" r=".661" />
          <circle cx="197.776" cy="4.63" r=".661" />
          <circle cx="199.099" cy="4.63" r=".661" />
          <circle cx="200.422" cy="4.63" r=".661" />
          <circle cx="201.745" cy="4.63" r=".661" />
          <circle cx="203.068" cy=".661" r=".661" />
          <circle cx="201.745" cy=".661" r=".661" />
          <circle cx="203.068" cy="-.661" r=".661" />
          <circle cx="204.391" cy=".661" r=".661" />
          <circle cx="203.068" cy="9.922" r=".661" />
          <circle cx="201.745" cy="8.599" r=".661" />
          <circle cx="203.068" cy="8.599" r=".661" />
          <circle cx="204.391" cy="8.599" r=".661" />
          <circle cx="203.068" cy="3.307" r=".661" />
          <circle cx="203.068" cy="1.984" r=".661" />
          <circle cx="203.068" cy="7.276" r=".661" />
          <circle cx="203.068" cy="5.953" r=".661" />
          <circle cx="203.068" cy="4.63" r=".661" />
          <circle cx="204.391" cy="4.63" r=".661" />
        </g>
      </svg>
    </div>
  )
}

export function AnimationMountainSVG({ ref }: { ref?: RefObject<HTMLDivElement> }) {
  return (

    <div ref={ref}>
      <svg id="sprite-mountain" className="fill-foreground" xmlns="http://www.w3.org/2000/svg" width="375" height="225" viewBox="0 0 99.219 59.531">
        <g paintOrder="markers stroke fill" transform="translate(-419.365 38.365)">
          <circle cx="420.026" cy="20.505" r=".661" />
          <circle cx="420.026" cy="19.21" r=".661" />
          <circle cx="421.349" cy="19.179" r=".661" />
          <circle cx="421.349" cy="17.878" r=".661" />
          <circle cx="422.672" cy="16.536" r=".661" />
          <circle cx="422.672" cy="15.214" r=".661" />
          <circle cx="423.995" cy="15.214" r=".661" />
          <circle cx="423.995" cy="13.891" r=".661" />
          <circle cx="425.318" cy="12.568" r=".661" />
          <circle cx="425.318" cy="11.245" r=".661" />
          <circle cx="426.641" cy="11.245" r=".661" />
          <circle cx="426.641" cy="9.922" r=".661" />
          <circle cx="427.964" cy="8.599" r=".661" />
          <circle cx="427.964" cy="7.304" r=".661" />
          <circle cx="429.287" cy="7.273" r=".661" />
          <circle cx="429.287" cy="5.972" r=".661" />
          <circle cx="430.609" cy="4.63" r=".661" />
          <circle cx="430.609" cy="3.307" r=".661" />
          <circle cx="431.932" cy="3.307" r=".661" />
          <circle cx="431.932" cy="1.984" r=".661" />
          <circle cx="433.255" cy=".661" r=".661" />
          <circle cx="433.255" cy="-.634" r=".661" />
          <circle cx="434.579" cy="-.664" r=".661" />
          <circle cx="434.579" cy="-1.966" r=".661" />
          <circle cx="435.901" cy="-3.307" r=".661" />
          <circle cx="435.901" cy="-4.63" r=".661" />
          <circle cx="437.224" cy="-4.63" r=".661" />
          <circle cx="437.224" cy="-5.953" r=".661" />
          <circle cx="438.547" cy="-7.276" r=".661" />
          <circle cx="438.547" cy="-8.599" r=".661" />
          <circle cx="439.87" cy="-8.599" r=".661" />
          <circle cx="439.87" cy="-9.922" r=".661" />
          <circle cx="441.193" cy="-11.245" r=".661" />
          <circle cx="441.193" cy="-12.54" r=".661" />
          <circle cx="442.516" cy="-12.571" r=".661" />
          <circle cx="442.516" cy="-13.872" r=".661" />
          <circle cx="443.839" cy="-15.214" r=".661" />
          <circle cx="443.839" cy="-16.536" r=".661" />
          <circle cx="445.161" cy="-16.536" r=".661" />
          <circle cx="445.161" cy="-17.859" r=".661" />
          <circle cx="446.484" cy="-19.182" r=".661" />
          <circle cx="446.484" cy="-20.477" r=".661" />
          <circle cx="447.808" cy="-20.508" r=".661" />
          <circle cx="447.808" cy="-21.809" r=".661" />
          <circle cx="449.13" cy="-23.151" r=".661" />
          <circle cx="449.13" cy="-24.474" r=".661" />
          <circle cx="450.453" cy="-24.474" r=".661" />
          <circle cx="450.453" cy="-25.797" r=".661" />
          <circle cx="451.776" cy="-27.12" r=".661" />
          <circle cx="451.776" cy="-28.443" r=".661" />
          <circle cx="453.099" cy="-28.443" r=".661" />
          <circle cx="453.099" cy="-29.766" r=".661" />
          <circle cx="454.422" cy="-31.089" r=".661" />
          <circle cx="454.422" cy="-32.384" r=".661" />
          <circle cx="455.745" cy="-32.414" r=".661" />
          <circle cx="455.745" cy="-33.716" r=".661" />
          <circle cx="457.068" cy="-35.057" r=".661" />
          <circle cx="457.068" cy="-36.38" r=".661" />
          <circle cx="458.391" cy="-36.38" r=".661" />
          <circle cx="458.391" cy="-37.703" r=".661" />
          <circle cx="461.036" cy="-35.057" r=".661" />
          <circle cx="461.036" cy="-36.38" r=".661" />
          <circle cx="459.714" cy="-36.38" r=".661" />
          <circle cx="459.714" cy="-37.703" r=".661" />
          <circle cx="463.682" cy="-31.089" r=".661" />
          <circle cx="463.682" cy="-32.411" r=".661" />
          <circle cx="462.359" cy="-32.411" r=".661" />
          <circle cx="462.359" cy="-33.734" r=".661" />
          <circle cx="466.328" cy="-27.12" r=".661" />
          <circle cx="466.328" cy="-28.443" r=".661" />
          <circle cx="465.005" cy="-28.443" r=".661" />
          <circle cx="465.005" cy="-29.766" r=".661" />
          <circle cx="468.974" cy="-23.151" r=".661" />
          <circle cx="468.974" cy="-24.474" r=".661" />
          <circle cx="467.651" cy="-24.474" r=".661" />
          <circle cx="467.651" cy="-25.797" r=".661" />
          <circle cx="471.62" cy="-19.182" r=".661" />
          <circle cx="471.62" cy="-20.505" r=".661" />
          <circle cx="470.297" cy="-20.505" r=".661" />
          <circle cx="470.297" cy="-21.828" r=".661" />
          <circle cx="474.266" cy="-15.214" r=".661" />
          <circle cx="474.266" cy="-16.536" r=".661" />
          <circle cx="472.943" cy="-16.536" r=".661" />
          <circle cx="472.943" cy="-17.859" r=".661" />
          <circle cx="476.911" cy="-11.245" r=".661" />
          <circle cx="476.911" cy="-12.568" r=".661" />
          <circle cx="475.589" cy="-12.568" r=".661" />
          <circle cx="475.589" cy="-13.891" r=".661" />
          <circle cx="479.557" cy="-7.276" r=".661" />
          <circle cx="479.557" cy="-8.599" r=".661" />
          <circle cx="478.234" cy="-8.599" r=".661" />
          <circle cx="478.234" cy="-9.922" r=".661" />
          <circle cx="482.203" cy="-3.307" r=".661" />
          <circle cx="482.203" cy="-4.63" r=".661" />
          <circle cx="480.88" cy="-4.63" r=".661" />
          <circle cx="480.88" cy="-5.953" r=".661" />
          <circle cx="484.849" cy=".661" r=".661" />
          <circle cx="484.849" cy="-.661" r=".661" />
          <circle cx="483.526" cy="-.661" r=".661" />
          <circle cx="483.526" cy="-1.984" r=".661" />
          <circle cx="461.036" cy="-32.411" r=".661" />
          <circle cx="461.036" cy="-33.734" r=".661" />
          <circle cx="459.714" cy="-33.734" r=".661" />
          <circle cx="459.714" cy="-35.057" r=".661" />
          <circle cx="458.391" cy="-33.734" r=".661" />
          <circle cx="458.391" cy="-35.057" r=".661" />
          <circle cx="494.109" cy="-9.922" r=".661" />
          <circle cx="494.109" cy="-11.245" r=".661" />
          <circle cx="471.62" cy="20.505" r=".661" />
          <circle cx="471.62" cy="19.182" r=".661" />
          <circle cx="472.943" cy="19.182" r=".661" />
          <circle cx="472.943" cy="17.859" r=".661" />
          <circle cx="474.266" cy="16.536" r=".661" />
          <circle cx="474.266" cy="15.214" r=".661" />
          <circle cx="475.589" cy="15.214" r=".661" />
          <circle cx="475.589" cy="13.891" r=".661" />
          <circle cx="476.911" cy="12.568" r=".661" />
          <circle cx="476.911" cy="11.273" r=".661" />
          <circle cx="478.235" cy="11.242" r=".661" />
          <circle cx="478.235" cy="9.941" r=".661" />
          <circle cx="479.557" cy="8.599" r=".661" />
          <circle cx="479.557" cy="7.276" r=".661" />
          <circle cx="480.88" cy="7.276" r=".661" />
          <circle cx="480.88" cy="5.953" r=".661" />
          <circle cx="482.203" cy="4.63" r=".661" />
          <circle cx="482.203" cy="3.335" r=".661" />
          <circle cx="483.527" cy="3.304" r=".661" />
          <circle cx="483.527" cy="2.003" r=".661" />
          <circle cx="486.172" cy="-.661" r=".661" />
          <circle cx="486.172" cy="-1.984" r=".661" />
          <circle cx="487.495" cy="-3.307" r=".661" />
          <circle cx="487.495" cy="-4.63" r=".661" />
          <circle cx="488.818" cy="-4.63" r=".661" />
          <circle cx="488.818" cy="-5.953" r=".661" />
          <circle cx="490.141" cy="-7.276" r=".661" />
          <circle cx="490.141" cy="-8.571" r=".661" />
          <circle cx="491.464" cy="-8.602" r=".661" />
          <circle cx="491.464" cy="-9.903" r=".661" />
          <circle cx="492.786" cy="-11.245" r=".661" />
          <circle cx="492.786" cy="-12.568" r=".661" />
          <circle cx="494.109" cy="-12.568" r=".661" />
          <circle cx="494.109" cy="-13.891" r=".661" />
          <circle cx="496.755" cy="-11.245" r=".661" />
          <circle cx="496.755" cy="-12.568" r=".661" />
          <circle cx="495.432" cy="-12.568" r=".661" />
          <circle cx="495.432" cy="-13.891" r=".661" />
          <circle cx="499.401" cy="-7.276" r=".661" />
          <circle cx="499.401" cy="-8.599" r=".661" />
          <circle cx="498.078" cy="-8.599" r=".661" />
          <circle cx="498.078" cy="-9.922" r=".661" />
          <circle cx="502.047" cy="-3.307" r=".661" />
          <circle cx="502.047" cy="-4.63" r=".661" />
          <circle cx="500.724" cy="-4.63" r=".661" />
          <circle cx="500.724" cy="-5.953" r=".661" />
          <circle cx="504.693" cy=".661" r=".661" />
          <circle cx="504.693" cy="-.661" r=".661" />
          <circle cx="503.37" cy="-.661" r=".661" />
          <circle cx="503.37" cy="-1.984" r=".661" />
          <circle cx="507.339" cy="4.63" r=".661" />
          <circle cx="507.339" cy="3.307" r=".661" />
          <circle cx="506.016" cy="3.307" r=".661" />
          <circle cx="506.016" cy="1.984" r=".661" />
          <circle cx="509.984" cy="8.599" r=".661" />
          <circle cx="509.984" cy="7.276" r=".661" />
          <circle cx="508.661" cy="7.276" r=".661" />
          <circle cx="508.661" cy="5.953" r=".661" />
          <circle cx="512.63" cy="12.568" r=".661" />
          <circle cx="512.63" cy="11.245" r=".661" />
          <circle cx="511.307" cy="11.245" r=".661" />
          <circle cx="511.307" cy="9.922" r=".661" />
          <circle cx="515.276" cy="16.536" r=".661" />
          <circle cx="515.276" cy="15.214" r=".661" />
          <circle cx="513.953" cy="15.214" r=".661" />
          <circle cx="513.953" cy="13.891" r=".661" />
          <circle cx="517.922" cy="20.505" r=".661" />
          <circle cx="517.922" cy="19.182" r=".661" />
          <circle cx="516.599" cy="19.182" r=".661" />
          <circle cx="516.599" cy="17.859" r=".661" />
          <circle cx="463.682" cy="-28.443" r=".661" />
          <circle cx="463.682" cy="-29.766" r=".661" />
          <circle cx="462.359" cy="-29.766" r=".661" />
          <circle cx="462.359" cy="-31.089" r=".661" />
          <circle cx="466.328" cy="-24.474" r=".661" />
          <circle cx="466.328" cy="-25.797" r=".661" />
          <circle cx="465.005" cy="-25.797" r=".661" />
          <circle cx="465.005" cy="-27.12" r=".661" />
          <circle cx="468.974" cy="-20.505" r=".661" />
          <circle cx="468.974" cy="-21.828" r=".661" />
          <circle cx="467.651" cy="-21.828" r=".661" />
          <circle cx="467.651" cy="-23.151" r=".661" />
          <circle cx="471.62" cy="-16.536" r=".661" />
          <circle cx="471.62" cy="-17.859" r=".661" />
          <circle cx="470.297" cy="-17.859" r=".661" />
          <circle cx="470.297" cy="-19.182" r=".661" />
          <circle cx="474.266" cy="-12.568" r=".661" />
          <circle cx="474.266" cy="-13.891" r=".661" />
          <circle cx="472.943" cy="-13.891" r=".661" />
          <circle cx="472.943" cy="-15.214" r=".661" />
          <circle cx="476.911" cy="-8.599" r=".661" />
          <circle cx="476.911" cy="-9.922" r=".661" />
          <circle cx="475.589" cy="-9.922" r=".661" />
          <circle cx="475.589" cy="-11.245" r=".661" />
          <circle cx="461.036" cy="-29.769" r=".661" />
          <circle cx="461.036" cy="-31.092" r=".661" />
          <circle cx="459.714" cy="-31.092" r=".661" />
          <circle cx="459.714" cy="-32.414" r=".661" />
          <circle cx="463.682" cy="-25.8" r=".661" />
          <circle cx="463.682" cy="-27.123" r=".661" />
          <circle cx="462.359" cy="-27.123" r=".661" />
          <circle cx="462.359" cy="-28.446" r=".661" />
          <circle cx="466.328" cy="-21.831" r=".661" />
          <circle cx="466.328" cy="-23.154" r=".661" />
          <circle cx="465.005" cy="-23.154" r=".661" />
          <circle cx="465.005" cy="-24.477" r=".661" />
          <circle cx="468.974" cy="-17.862" r=".661" />
          <circle cx="468.974" cy="-19.185" r=".661" />
          <circle cx="467.651" cy="-19.185" r=".661" />
          <circle cx="467.651" cy="-20.508" r=".661" />
          <circle cx="471.62" cy="-13.894" r=".661" />
          <circle cx="471.62" cy="-15.217" r=".661" />
          <circle cx="470.297" cy="-15.217" r=".661" />
          <circle cx="470.297" cy="-16.539" r=".661" />
          <circle cx="474.266" cy="-9.925" r=".661" />
          <circle cx="474.266" cy="-11.248" r=".661" />
          <circle cx="472.943" cy="-11.248" r=".661" />
          <circle cx="472.943" cy="-12.571" r=".661" />
          <circle cx="476.911" cy="-5.956" r=".661" />
          <circle cx="476.911" cy="-7.279" r=".661" />
          <circle cx="475.589" cy="-7.279" r=".661" />
          <circle cx="475.589" cy="-8.602" r=".661" />
          <circle cx="496.755" cy="-8.599" r=".661" />
          <circle cx="496.755" cy="-9.922" r=".661" />
          <circle cx="495.432" cy="-9.922" r=".661" />
          <circle cx="495.432" cy="-11.245" r=".661" />
          <circle cx="499.401" cy="-4.63" r=".661" />
          <circle cx="499.401" cy="-5.953" r=".661" />
          <circle cx="498.078" cy="-5.953" r=".661" />
          <circle cx="498.078" cy="-7.276" r=".661" />
          <circle cx="502.047" cy="-.661" r=".661" />
          <circle cx="502.047" cy="-1.984" r=".661" />
          <circle cx="500.724" cy="-1.984" r=".661" />
          <circle cx="500.724" cy="-3.307" r=".661" />
          <circle cx="504.693" cy="3.307" r=".661" />
          <circle cx="504.693" cy="1.984" r=".661" />
          <circle cx="503.37" cy="1.984" r=".661" />
          <circle cx="503.37" cy=".661" r=".661" />
          <circle cx="507.339" cy="7.276" r=".661" />
          <circle cx="507.339" cy="5.953" r=".661" />
          <circle cx="506.016" cy="5.953" r=".661" />
          <circle cx="506.016" cy="4.63" r=".661" />
          <circle cx="509.984" cy="11.245" r=".661" />
          <circle cx="509.984" cy="9.922" r=".661" />
          <circle cx="508.661" cy="9.922" r=".661" />
          <circle cx="508.661" cy="8.599" r=".661" />
          <circle cx="512.63" cy="15.214" r=".661" />
          <circle cx="512.63" cy="13.891" r=".661" />
          <circle cx="511.307" cy="13.891" r=".661" />
          <circle cx="511.307" cy="12.568" r=".661" />
          <circle cx="496.755" cy="-5.953" r=".661" />
          <circle cx="496.755" cy="-7.276" r=".661" />
          <circle cx="495.432" cy="-7.276" r=".661" />
          <circle cx="495.432" cy="-8.599" r=".661" />
          <circle cx="499.401" cy="-1.984" r=".661" />
          <circle cx="499.401" cy="-3.307" r=".661" />
          <circle cx="498.078" cy="-3.307" r=".661" />
          <circle cx="498.078" cy="-4.63" r=".661" />
          <circle cx="502.047" cy="1.984" r=".661" />
          <circle cx="502.047" cy=".661" r=".661" />
          <circle cx="500.724" cy=".661" r=".661" />
          <circle cx="500.724" cy="-.661" r=".661" />
          <circle cx="504.693" cy="5.953" r=".661" />
          <circle cx="504.693" cy="4.63" r=".661" />
          <circle cx="503.37" cy="4.63" r=".661" />
          <circle cx="503.37" cy="3.307" r=".661" />
          <circle cx="507.339" cy="9.922" r=".661" />
          <circle cx="507.339" cy="8.599" r=".661" />
          <circle cx="506.016" cy="8.599" r=".661" />
          <circle cx="506.016" cy="7.276" r=".661" />
          <circle cx="509.984" cy="13.891" r=".661" />
          <circle cx="509.984" cy="12.568" r=".661" />
          <circle cx="508.661" cy="12.568" r=".661" />
          <circle cx="508.661" cy="11.245" r=".661" />
          <circle cx="512.63" cy="17.859" r=".661" />
          <circle cx="512.63" cy="16.536" r=".661" />
          <circle cx="511.307" cy="16.536" r=".661" />
          <circle cx="511.307" cy="15.214" r=".661" />
          <circle cx="479.557" cy="-4.63" r=".661" />
          <circle cx="479.557" cy="-5.953" r=".661" />
          <circle cx="478.234" cy="-5.953" r=".661" />
          <circle cx="478.234" cy="-7.276" r=".661" />
          <circle cx="482.203" cy="-.661" r=".661" />
          <circle cx="482.203" cy="-1.984" r=".661" />
          <circle cx="480.88" cy="-1.984" r=".661" />
          <circle cx="480.88" cy="-3.307" r=".661" />
          <circle cx="483.526" cy=".661" r=".661" />
          <circle cx="515.276" cy="19.182" r=".661" />
          <circle cx="515.276" cy="17.859" r=".661" />
          <circle cx="513.953" cy="17.859" r=".661" />
          <circle cx="513.953" cy="16.536" r=".661" />
          <circle cx="516.599" cy="20.505" r=".661" />
          <circle cx="479.557" cy="-1.984" r=".661" />
          <circle cx="479.557" cy="-3.307" r=".661" />
          <circle cx="478.234" cy="-3.307" r=".661" />
          <circle cx="478.234" cy="-4.63" r=".661" />
          <circle cx="482.203" cy="1.984" r=".661" />
          <circle cx="482.203" cy=".661" r=".661" />
          <circle cx="480.88" cy=".661" r=".661" />
          <circle cx="480.88" cy="-.661" r=".661" />
          <circle cx="515.276" cy="20.505" r=".661" />
          <circle cx="513.953" cy="20.505" r=".661" />
          <circle cx="513.953" cy="19.182" r=".661" />
        </g>
        <g paintOrder="markers stroke fill" transform="translate(-418.042 30.427)">
          <circle cx="-50.932" cy="29.766" r=".661" />
          <circle cx="-49.609" cy="29.766" r=".661" />
          <circle cx="-48.286" cy="29.766" r=".661" />
          <circle cx="-46.964" cy="29.766" r=".661" />
          <circle cx="-45.641" cy="29.766" r=".661" />
          <circle cx="-44.318" cy="29.766" r=".661" />
          <circle cx="-42.995" cy="29.766" r=".661" />
          <circle cx="-41.672" cy="29.766" r=".661" />
          <circle cx="-40.349" cy="29.766" r=".661" />
          <circle cx="-39.026" cy="29.766" r=".661" />
          <circle cx="-37.703" cy="29.766" r=".661" />
          <circle cx="-36.38" cy="29.766" r=".661" />
          <circle cx="-35.057" cy="29.766" r=".661" />
          <circle cx="-68.13" cy="29.766" r=".661" />
          <circle cx="-66.807" cy="29.766" r=".661" />
          <circle cx="-65.484" cy="29.766" r=".661" />
          <circle cx="-64.161" cy="29.766" r=".661" />
          <circle cx="-62.839" cy="29.766" r=".661" />
          <circle cx="-61.516" cy="29.766" r=".661" />
          <circle cx="-60.193" cy="29.766" r=".661" />
          <circle cx="-58.87" cy="29.766" r=".661" />
          <circle cx="-57.547" cy="29.766" r=".661" />
          <circle cx="-56.224" cy="29.766" r=".661" />
          <circle cx="-54.901" cy="29.766" r=".661" />
          <circle cx="-53.578" cy="29.766" r=".661" />
          <circle cx="-52.255" cy="29.766" r=".661" />
          <circle cx="-85.328" cy="29.766" r=".661" />
          <circle cx="-84.005" cy="29.766" r=".661" />
          <circle cx="-82.682" cy="29.766" r=".661" />
          <circle cx="-81.359" cy="29.766" r=".661" />
          <circle cx="-80.036" cy="29.766" r=".661" />
          <circle cx="-78.714" cy="29.766" r=".661" />
          <circle cx="-77.391" cy="29.766" r=".661" />
          <circle cx="-76.068" cy="29.766" r=".661" />
          <circle cx="-74.745" cy="29.766" r=".661" />
          <circle cx="-73.422" cy="29.766" r=".661" />
          <circle cx="-72.099" cy="29.766" r=".661" />
          <circle cx="-70.776" cy="29.766" r=".661" />
          <circle cx="-69.453" cy="29.766" r=".661" />
          <circle cx="-102.526" cy="29.766" r=".661" />
          <circle cx="-101.203" cy="29.766" r=".661" />
          <circle cx="-99.88" cy="29.766" r=".661" />
          <circle cx="-98.557" cy="29.766" r=".661" />
          <circle cx="-97.234" cy="29.766" r=".661" />
          <circle cx="-95.911" cy="29.766" r=".661" />
          <circle cx="-94.589" cy="29.766" r=".661" />
          <circle cx="-93.266" cy="29.766" r=".661" />
          <circle cx="-91.943" cy="29.766" r=".661" />
          <circle cx="-90.62" cy="29.766" r=".661" />
          <circle cx="-89.297" cy="29.766" r=".661" />
          <circle cx="-87.974" cy="29.766" r=".661" />
          <circle cx="-86.651" cy="29.766" r=".661" />
          <circle cx="-119.724" cy="29.766" r=".661" />
          <circle cx="-118.401" cy="29.766" r=".661" />
          <circle cx="-117.078" cy="29.766" r=".661" />
          <circle cx="-115.755" cy="29.766" r=".661" />
          <circle cx="-114.432" cy="29.766" r=".661" />
          <circle cx="-113.109" cy="29.766" r=".661" />
          <circle cx="-111.786" cy="29.766" r=".661" />
          <circle cx="-110.464" cy="29.766" r=".661" />
          <circle cx="-109.141" cy="29.766" r=".661" />
          <circle cx="-107.818" cy="29.766" r=".661" />
          <circle cx="-106.495" cy="29.766" r=".661" />
          <circle cx="-105.172" cy="29.766" r=".661" />
          <circle cx="-103.849" cy="29.766" r=".661" />
          <circle cx="-136.922" cy="29.766" r=".661" />
          <circle cx="-135.599" cy="29.766" r=".661" />
          <circle cx="-134.276" cy="29.766" r=".661" />
          <circle cx="-132.953" cy="29.766" r=".661" />
          <circle cx="-131.63" cy="29.766" r=".661" />
          <circle cx="-130.307" cy="29.766" r=".661" />
          <circle cx="-128.984" cy="29.766" r=".661" />
          <circle cx="-127.661" cy="29.766" r=".661" />
          <circle cx="-126.339" cy="29.766" r=".661" />
          <circle cx="-125.016" cy="29.766" r=".661" />
          <circle cx="-123.693" cy="29.766" r=".661" />
          <circle cx="-122.37" cy="29.766" r=".661" />
          <circle cx="-121.047" cy="29.766" r=".661" />
          <circle cx="-154.12" cy="29.766" r=".661" />
          <circle cx="-152.797" cy="29.766" r=".661" />
          <circle cx="-151.474" cy="29.766" r=".661" />
          <circle cx="-150.151" cy="29.766" r=".661" />
          <circle cx="-148.828" cy="29.766" r=".661" />
          <circle cx="-147.505" cy="29.766" r=".661" />
          <circle cx="-146.182" cy="29.766" r=".661" />
          <circle cx="-144.859" cy="29.766" r=".661" />
          <circle cx="-143.536" cy="29.766" r=".661" />
          <circle cx="-142.214" cy="29.766" r=".661" />
          <circle cx="-140.891" cy="29.766" r=".661" />
          <circle cx="-139.568" cy="29.766" r=".661" />
          <circle cx="-138.245" cy="29.766" r=".661" />
          <circle cx="-171.318" cy="29.766" r=".661" />
          <circle cx="-169.995" cy="29.766" r=".661" />
          <circle cx="-168.672" cy="29.766" r=".661" />
          <circle cx="-167.349" cy="29.766" r=".661" />
          <circle cx="-166.026" cy="29.766" r=".661" />
          <circle cx="-164.703" cy="29.766" r=".661" />
          <circle cx="-163.38" cy="29.766" r=".661" />
          <circle cx="-162.057" cy="29.766" r=".661" />
          <circle cx="-160.734" cy="29.766" r=".661" />
          <circle cx="-159.411" cy="29.766" r=".661" />
          <circle cx="-158.089" cy="29.766" r=".661" />
          <circle cx="-156.766" cy="29.766" r=".661" />
          <circle cx="-155.443" cy="29.766" r=".661" />
          <circle cx="-188.516" cy="29.766" r=".661" />
          <circle cx="-187.193" cy="29.766" r=".661" />
          <circle cx="-185.87" cy="29.766" r=".661" />
          <circle cx="-184.547" cy="29.766" r=".661" />
          <circle cx="-183.224" cy="29.766" r=".661" />
          <circle cx="-181.901" cy="29.766" r=".661" />
          <circle cx="-180.578" cy="29.766" r=".661" />
          <circle cx="-179.255" cy="29.766" r=".661" />
          <circle cx="-177.932" cy="29.766" r=".661" />
          <circle cx="-176.609" cy="29.766" r=".661" />
          <circle cx="-175.286" cy="29.766" r=".661" />
          <circle cx="-173.964" cy="29.766" r=".661" />
          <circle cx="-172.641" cy="29.766" r=".661" />
          <circle cx="-205.714" cy="29.766" r=".661" />
          <circle cx="-204.391" cy="29.766" r=".661" />
          <circle cx="-203.068" cy="29.766" r=".661" />
          <circle cx="-201.745" cy="29.766" r=".661" />
          <circle cx="-200.422" cy="29.766" r=".661" />
          <circle cx="-199.099" cy="29.766" r=".661" />
          <circle cx="-197.776" cy="29.766" r=".661" />
          <circle cx="-196.453" cy="29.766" r=".661" />
          <circle cx="-195.13" cy="29.766" r=".661" />
          <circle cx="-193.807" cy="29.766" r=".661" />
          <circle cx="-192.484" cy="29.766" r=".661" />
          <circle cx="-191.161" cy="29.766" r=".661" />
          <circle cx="-189.839" cy="29.766" r=".661" />
          <circle cx="-222.911" cy="29.766" r=".661" />
          <circle cx="-221.589" cy="29.766" r=".661" />
          <circle cx="-220.266" cy="29.766" r=".661" />
          <circle cx="-218.943" cy="29.766" r=".661" />
          <circle cx="-217.62" cy="29.766" r=".661" />
          <circle cx="-216.297" cy="29.766" r=".661" />
          <circle cx="-214.974" cy="29.766" r=".661" />
          <circle cx="-213.651" cy="29.766" r=".661" />
          <circle cx="-212.328" cy="29.766" r=".661" />
          <circle cx="-211.005" cy="29.766" r=".661" />
          <circle cx="-209.682" cy="29.766" r=".661" />
          <circle cx="-208.359" cy="29.766" r=".661" />
          <circle cx="-207.036" cy="29.766" r=".661" />
          <circle cx="-240.109" cy="29.766" r=".661" />
          <circle cx="-238.786" cy="29.766" r=".661" />
          <circle cx="-237.464" cy="29.766" r=".661" />
          <circle cx="-236.141" cy="29.766" r=".661" />
          <circle cx="-234.818" cy="29.766" r=".661" />
          <circle cx="-233.495" cy="29.766" r=".661" />
          <circle cx="-232.172" cy="29.766" r=".661" />
          <circle cx="-230.849" cy="29.766" r=".661" />
          <circle cx="-229.526" cy="29.766" r=".661" />
          <circle cx="-228.203" cy="29.766" r=".661" />
          <circle cx="-226.88" cy="29.766" r=".661" />
          <circle cx="-225.557" cy="29.766" r=".661" />
          <circle cx="-224.234" cy="29.766" r=".661" />
          <circle cx="-246.724" cy="29.766" r=".661" />
          <circle cx="-245.401" cy="29.766" r=".661" />
          <circle cx="-244.078" cy="29.766" r=".661" />
          <circle cx="-242.755" cy="29.766" r=".661" />
          <circle cx="-241.432" cy="29.766" r=".661" />
          <circle cx="-263.922" cy="29.766" r=".661" />
          <circle cx="-262.599" cy="29.766" r=".661" />
          <circle cx="-261.276" cy="29.766" r=".661" />
          <circle cx="-259.953" cy="29.766" r=".661" />
          <circle cx="-258.63" cy="29.766" r=".661" />
          <circle cx="-257.307" cy="29.766" r=".661" />
          <circle cx="-255.984" cy="29.766" r=".661" />
          <circle cx="-254.661" cy="29.766" r=".661" />
          <circle cx="-253.339" cy="29.766" r=".661" />
          <circle cx="-252.016" cy="29.766" r=".661" />
          <circle cx="-250.693" cy="29.766" r=".661" />
          <circle cx="-249.37" cy="29.766" r=".661" />
          <circle cx="-248.047" cy="29.766" r=".661" />
          <circle cx="-281.12" cy="29.766" r=".661" />
          <circle cx="-279.797" cy="29.766" r=".661" />
          <circle cx="-278.474" cy="29.766" r=".661" />
          <circle cx="-277.151" cy="29.766" r=".661" />
          <circle cx="-275.828" cy="29.766" r=".661" />
          <circle cx="-274.505" cy="29.766" r=".661" />
          <circle cx="-273.182" cy="29.766" r=".661" />
          <circle cx="-271.859" cy="29.766" r=".661" />
          <circle cx="-270.536" cy="29.766" r=".661" />
          <circle cx="-269.214" cy="29.766" r=".661" />
          <circle cx="-267.891" cy="29.766" r=".661" />
          <circle cx="-266.568" cy="29.766" r=".661" />
          <circle cx="-265.245" cy="29.766" r=".661" />
          <circle cx="-298.318" cy="29.766" r=".661" />
          <circle cx="-296.995" cy="29.766" r=".661" />
          <circle cx="-295.672" cy="29.766" r=".661" />
          <circle cx="-294.349" cy="29.766" r=".661" />
          <circle cx="-293.026" cy="29.766" r=".661" />
          <circle cx="-291.703" cy="29.766" r=".661" />
          <circle cx="-290.38" cy="29.766" r=".661" />
          <circle cx="-289.057" cy="29.766" r=".661" />
          <circle cx="-287.734" cy="29.766" r=".661" />
          <circle cx="-286.411" cy="29.766" r=".661" />
          <circle cx="-285.089" cy="29.766" r=".661" />
          <circle cx="-283.766" cy="29.766" r=".661" />
          <circle cx="-282.443" cy="29.766" r=".661" />
          <circle cx="-315.516" cy="29.766" r=".661" />
          <circle cx="-314.193" cy="29.766" r=".661" />
          <circle cx="-312.87" cy="29.766" r=".661" />
          <circle cx="-311.547" cy="29.766" r=".661" />
          <circle cx="-310.224" cy="29.766" r=".661" />
          <circle cx="-308.901" cy="29.766" r=".661" />
          <circle cx="-307.578" cy="29.766" r=".661" />
          <circle cx="-306.255" cy="29.766" r=".661" />
          <circle cx="-304.932" cy="29.766" r=".661" />
          <circle cx="-303.609" cy="29.766" r=".661" />
          <circle cx="-302.286" cy="29.766" r=".661" />
          <circle cx="-300.964" cy="29.766" r=".661" />
          <circle cx="-299.641" cy="29.766" r=".661" />
          <circle cx="230.849" cy="29.766" r=".661" />
          <circle cx="232.172" cy="29.766" r=".661" />
          <circle cx="233.495" cy="29.766" r=".661" />
          <circle cx="234.818" cy="29.766" r=".661" />
          <circle cx="236.141" cy="29.766" r=".661" />
          <circle cx="237.463" cy="29.766" r=".661" />
          <circle cx="238.786" cy="29.766" r=".661" />
          <circle cx="240.109" cy="29.766" r=".661" />
          <circle cx="241.432" cy="29.766" r=".661" />
          <circle cx="242.755" cy="29.766" r=".661" />
          <circle cx="244.078" cy="29.766" r=".661" />
          <circle cx="245.401" cy="29.766" r=".661" />
          <circle cx="246.724" cy="29.766" r=".661" />
          <circle cx="213.651" cy="29.766" r=".661" />
          <circle cx="214.974" cy="29.766" r=".661" />
          <circle cx="216.297" cy="29.766" r=".661" />
          <circle cx="217.62" cy="29.766" r=".661" />
          <circle cx="218.943" cy="29.766" r=".661" />
          <circle cx="220.266" cy="29.766" r=".661" />
          <circle cx="221.588" cy="29.766" r=".661" />
          <circle cx="222.911" cy="29.766" r=".661" />
          <circle cx="224.234" cy="29.766" r=".661" />
          <circle cx="225.557" cy="29.766" r=".661" />
          <circle cx="226.88" cy="29.766" r=".661" />
          <circle cx="228.203" cy="29.766" r=".661" />
          <circle cx="229.526" cy="29.766" r=".661" />
          <circle cx="196.453" cy="29.766" r=".661" />
          <circle cx="197.776" cy="29.766" r=".661" />
          <circle cx="199.099" cy="29.766" r=".661" />
          <circle cx="200.422" cy="29.766" r=".661" />
          <circle cx="201.745" cy="29.766" r=".661" />
          <circle cx="203.068" cy="29.766" r=".661" />
          <circle cx="204.391" cy="29.766" r=".661" />
          <circle cx="205.713" cy="29.766" r=".661" />
          <circle cx="207.036" cy="29.766" r=".661" />
          <circle cx="208.359" cy="29.766" r=".661" />
          <circle cx="209.682" cy="29.766" r=".661" />
          <circle cx="211.005" cy="29.766" r=".661" />
          <circle cx="212.328" cy="29.766" r=".661" />
          <circle cx="179.255" cy="29.766" r=".661" />
          <circle cx="180.578" cy="29.766" r=".661" />
          <circle cx="181.901" cy="29.766" r=".661" />
          <circle cx="183.224" cy="29.766" r=".661" />
          <circle cx="184.547" cy="29.766" r=".661" />
          <circle cx="185.87" cy="29.766" r=".661" />
          <circle cx="187.193" cy="29.766" r=".661" />
          <circle cx="188.516" cy="29.766" r=".661" />
          <circle cx="189.838" cy="29.766" r=".661" />
          <circle cx="191.161" cy="29.766" r=".661" />
          <circle cx="192.484" cy="29.766" r=".661" />
          <circle cx="193.807" cy="29.766" r=".661" />
          <circle cx="195.13" cy="29.766" r=".661" />
          <circle cx="162.057" cy="29.766" r=".661" />
          <circle cx="163.38" cy="29.766" r=".661" />
          <circle cx="164.703" cy="29.766" r=".661" />
          <circle cx="166.026" cy="29.766" r=".661" />
          <circle cx="167.349" cy="29.766" r=".661" />
          <circle cx="168.672" cy="29.766" r=".661" />
          <circle cx="169.995" cy="29.766" r=".661" />
          <circle cx="171.318" cy="29.766" r=".661" />
          <circle cx="172.641" cy="29.766" r=".661" />
          <circle cx="173.963" cy="29.766" r=".661" />
          <circle cx="175.286" cy="29.766" r=".661" />
          <circle cx="176.609" cy="29.766" r=".661" />
          <circle cx="177.932" cy="29.766" r=".661" />
          <circle cx="144.859" cy="29.766" r=".661" />
          <circle cx="146.182" cy="29.766" r=".661" />
          <circle cx="147.505" cy="29.766" r=".661" />
          <circle cx="148.828" cy="29.766" r=".661" />
          <circle cx="150.151" cy="29.766" r=".661" />
          <circle cx="151.474" cy="29.766" r=".661" />
          <circle cx="152.797" cy="29.766" r=".661" />
          <circle cx="154.12" cy="29.766" r=".661" />
          <circle cx="155.443" cy="29.766" r=".661" />
          <circle cx="156.766" cy="29.766" r=".661" />
          <circle cx="158.088" cy="29.766" r=".661" />
          <circle cx="159.411" cy="29.766" r=".661" />
          <circle cx="160.734" cy="29.766" r=".661" />
          <circle cx="127.661" cy="29.766" r=".661" />
          <circle cx="128.984" cy="29.766" r=".661" />
          <circle cx="130.307" cy="29.766" r=".661" />
          <circle cx="131.63" cy="29.766" r=".661" />
          <circle cx="132.953" cy="29.766" r=".661" />
          <circle cx="134.276" cy="29.766" r=".661" />
          <circle cx="135.599" cy="29.766" r=".661" />
          <circle cx="136.922" cy="29.766" r=".661" />
          <circle cx="138.245" cy="29.766" r=".661" />
          <circle cx="139.568" cy="29.766" r=".661" />
          <circle cx="140.891" cy="29.766" r=".661" />
          <circle cx="142.213" cy="29.766" r=".661" />
          <circle cx="143.536" cy="29.766" r=".661" />
          <circle cx="110.463" cy="29.766" r=".661" />
          <circle cx="111.786" cy="29.766" r=".661" />
          <circle cx="113.109" cy="29.766" r=".661" />
          <circle cx="114.432" cy="29.766" r=".661" />
          <circle cx="115.755" cy="29.766" r=".661" />
          <circle cx="117.078" cy="29.766" r=".661" />
          <circle cx="118.401" cy="29.766" r=".661" />
          <circle cx="119.724" cy="29.766" r=".661" />
          <circle cx="121.047" cy="29.766" r=".661" />
          <circle cx="122.37" cy="29.766" r=".661" />
          <circle cx="123.693" cy="29.766" r=".661" />
          <circle cx="125.016" cy="29.766" r=".661" />
          <circle cx="126.338" cy="29.766" r=".661" />
          <circle cx="93.266" cy="29.766" r=".661" />
          <circle cx="94.588" cy="29.766" r=".661" />
          <circle cx="95.911" cy="29.766" r=".661" />
          <circle cx="97.234" cy="29.766" r=".661" />
          <circle cx="98.557" cy="29.766" r=".661" />
          <circle cx="99.88" cy="29.766" r=".661" />
          <circle cx="101.203" cy="29.766" r=".661" />
          <circle cx="102.526" cy="29.766" r=".661" />
          <circle cx="103.849" cy="29.766" r=".661" />
          <circle cx="105.172" cy="29.766" r=".661" />
          <circle cx="106.495" cy="29.766" r=".661" />
          <circle cx="107.818" cy="29.766" r=".661" />
          <circle cx="109.141" cy="29.766" r=".661" />
          <circle cx="76.068" cy="29.766" r=".661" />
          <circle cx="77.391" cy="29.766" r=".661" />
          <circle cx="78.713" cy="29.766" r=".661" />
          <circle cx="80.036" cy="29.766" r=".661" />
          <circle cx="81.359" cy="29.766" r=".661" />
          <circle cx="82.682" cy="29.766" r=".661" />
          <circle cx="84.005" cy="29.766" r=".661" />
          <circle cx="85.328" cy="29.766" r=".661" />
          <circle cx="86.651" cy="29.766" r=".661" />
          <circle cx="87.974" cy="29.766" r=".661" />
          <circle cx="89.297" cy="29.766" r=".661" />
          <circle cx="90.62" cy="29.766" r=".661" />
          <circle cx="91.943" cy="29.766" r=".661" />
          <circle cx="58.87" cy="29.766" r=".661" />
          <circle cx="60.193" cy="29.766" r=".661" />
          <circle cx="61.516" cy="29.766" r=".661" />
          <circle cx="62.838" cy="29.766" r=".661" />
          <circle cx="64.161" cy="29.766" r=".661" />
          <circle cx="65.484" cy="29.766" r=".661" />
          <circle cx="66.807" cy="29.766" r=".661" />
          <circle cx="68.13" cy="29.766" r=".661" />
          <circle cx="69.453" cy="29.766" r=".661" />
          <circle cx="70.776" cy="29.766" r=".661" />
          <circle cx="72.099" cy="29.766" r=".661" />
          <circle cx="73.422" cy="29.766" r=".661" />
          <circle cx="74.745" cy="29.766" r=".661" />
          <circle cx="41.672" cy="29.766" r=".661" />
          <circle cx="42.995" cy="29.766" r=".661" />
          <circle cx="44.318" cy="29.766" r=".661" />
          <circle cx="45.641" cy="29.766" r=".661" />
          <circle cx="46.963" cy="29.766" r=".661" />
          <circle cx="48.286" cy="29.766" r=".661" />
          <circle cx="49.609" cy="29.766" r=".661" />
          <circle cx="50.932" cy="29.766" r=".661" />
          <circle cx="52.255" cy="29.766" r=".661" />
          <circle cx="53.578" cy="29.766" r=".661" />
          <circle cx="54.901" cy="29.766" r=".661" />
          <circle cx="56.224" cy="29.766" r=".661" />
          <circle cx="57.547" cy="29.766" r=".661" />
          <circle cx="35.057" cy="29.766" r=".661" />
          <circle cx="36.38" cy="29.766" r=".661" />
          <circle cx="37.703" cy="29.766" r=".661" />
          <circle cx="39.026" cy="29.766" r=".661" />
          <circle cx="40.349" cy="29.766" r=".661" />
          <circle cx="17.859" cy="29.766" r=".661" />
          <circle cx="19.182" cy="29.766" r=".661" />
          <circle cx="20.505" cy="29.766" r=".661" />
          <circle cx="21.828" cy="29.766" r=".661" />
          <circle cx="23.151" cy="29.766" r=".661" />
          <circle cx="24.474" cy="29.766" r=".661" />
          <circle cx="25.797" cy="29.766" r=".661" />
          <circle cx="27.12" cy="29.766" r=".661" />
          <circle cx="28.443" cy="29.766" r=".661" />
          <circle cx="29.766" cy="29.766" r=".661" />
          <circle cx="31.089" cy="29.766" r=".661" />
          <circle cx="32.411" cy="29.766" r=".661" />
          <circle cx="33.734" cy="29.766" r=".661" />
          <circle cx=".661" cy="29.766" r=".661" />
          <circle cx="1.984" cy="29.766" r=".661" />
          <circle cx="3.307" cy="29.766" r=".661" />
          <circle cx="4.63" cy="29.766" r=".661" />
          <circle cx="5.953" cy="29.766" r=".661" />
          <circle cx="7.276" cy="29.766" r=".661" />
          <circle cx="8.599" cy="29.766" r=".661" />
          <circle cx="9.922" cy="29.766" r=".661" />
          <circle cx="11.245" cy="29.766" r=".661" />
          <circle cx="12.568" cy="29.766" r=".661" />
          <circle cx="13.891" cy="29.766" r=".661" />
          <circle cx="15.214" cy="29.766" r=".661" />
          <circle cx="16.536" cy="29.766" r=".661" />
          <circle cx="-16.536" cy="29.766" r=".661" />
          <circle cx="-15.214" cy="29.766" r=".661" />
          <circle cx="-13.891" cy="29.766" r=".661" />
          <circle cx="-12.568" cy="29.766" r=".661" />
          <circle cx="-11.245" cy="29.766" r=".661" />
          <circle cx="-9.922" cy="29.766" r=".661" />
          <circle cx="-8.599" cy="29.766" r=".661" />
          <circle cx="-7.276" cy="29.766" r=".661" />
          <circle cx="-5.953" cy="29.766" r=".661" />
          <circle cx="-4.63" cy="29.766" r=".661" />
          <circle cx="-3.307" cy="29.766" r=".661" />
          <circle cx="-1.984" cy="29.766" r=".661" />
          <circle cx="-.661" cy="29.766" r=".661" />
          <circle cx="-33.734" cy="29.766" r=".661" />
          <circle cx="-32.411" cy="29.766" r=".661" />
          <circle cx="-31.089" cy="29.766" r=".661" />
          <circle cx="-29.766" cy="29.766" r=".661" />
          <circle cx="-28.443" cy="29.766" r=".661" />
          <circle cx="-27.12" cy="29.766" r=".661" />
          <circle cx="-25.797" cy="29.766" r=".661" />
          <circle cx="-24.474" cy="29.766" r=".661" />
          <circle cx="-23.151" cy="29.766" r=".661" />
          <circle cx="-21.828" cy="29.766" r=".661" />
          <circle cx="-20.505" cy="29.766" r=".661" />
          <circle cx="-19.182" cy="29.766" r=".661" />
          <circle cx="-17.859" cy="29.766" r=".661" />
          <circle cx="512.63" cy="29.766" r=".661" />
          <circle cx="513.953" cy="29.766" r=".661" />
          <circle cx="515.276" cy="29.766" r=".661" />
          <circle cx="516.599" cy="29.766" r=".661" />
          <circle cx="517.922" cy="29.766" r=".661" />
          <circle cx="519.245" cy="29.766" r=".661" />
          <circle cx="520.568" cy="29.766" r=".661" />
          <circle cx="521.891" cy="29.766" r=".661" />
          <circle cx="523.213" cy="29.766" r=".661" />
          <circle cx="524.536" cy="29.766" r=".661" />
          <circle cx="525.859" cy="29.766" r=".661" />
          <circle cx="527.182" cy="29.766" r=".661" />
          <circle cx="528.505" cy="29.766" r=".661" />
          <circle cx="495.432" cy="29.766" r=".661" />
          <circle cx="496.755" cy="29.766" r=".661" />
          <circle cx="498.078" cy="29.766" r=".661" />
          <circle cx="499.401" cy="29.766" r=".661" />
          <circle cx="500.724" cy="29.766" r=".661" />
          <circle cx="502.047" cy="29.766" r=".661" />
          <circle cx="503.37" cy="29.766" r=".661" />
          <circle cx="504.693" cy="29.766" r=".661" />
          <circle cx="506.016" cy="29.766" r=".661" />
          <circle cx="507.338" cy="29.766" r=".661" />
          <circle cx="508.661" cy="29.766" r=".661" />
          <circle cx="509.984" cy="29.766" r=".661" />
          <circle cx="511.307" cy="29.766" r=".661" />
          <circle cx="478.234" cy="29.766" r=".661" />
          <circle cx="479.557" cy="29.766" r=".661" />
          <circle cx="480.88" cy="29.766" r=".661" />
          <circle cx="482.203" cy="29.766" r=".661" />
          <circle cx="483.526" cy="29.766" r=".661" />
          <circle cx="484.849" cy="29.766" r=".661" />
          <circle cx="486.172" cy="29.766" r=".661" />
          <circle cx="487.495" cy="29.766" r=".661" />
          <circle cx="488.818" cy="29.766" r=".661" />
          <circle cx="490.141" cy="29.766" r=".661" />
          <circle cx="491.463" cy="29.766" r=".661" />
          <circle cx="492.786" cy="29.766" r=".661" />
          <circle cx="494.109" cy="29.766" r=".661" />
          <circle cx="461.036" cy="29.766" r=".661" />
          <circle cx="462.359" cy="29.766" r=".661" />
          <circle cx="463.682" cy="29.766" r=".661" />
          <circle cx="465.005" cy="29.766" r=".661" />
          <circle cx="466.328" cy="29.766" r=".661" />
          <circle cx="467.651" cy="29.766" r=".661" />
          <circle cx="468.974" cy="29.766" r=".661" />
          <circle cx="470.297" cy="29.766" r=".661" />
          <circle cx="471.62" cy="29.766" r=".661" />
          <circle cx="472.943" cy="29.766" r=".661" />
          <circle cx="474.266" cy="29.766" r=".661" />
          <circle cx="475.588" cy="29.766" r=".661" />
          <circle cx="476.911" cy="29.766" r=".661" />
          <circle cx="443.838" cy="29.766" r=".661" />
          <circle cx="445.161" cy="29.766" r=".661" />
          <circle cx="446.484" cy="29.766" r=".661" />
          <circle cx="447.807" cy="29.766" r=".661" />
          <circle cx="449.13" cy="29.766" r=".661" />
          <circle cx="450.453" cy="29.766" r=".661" />
          <circle cx="451.776" cy="29.766" r=".661" />
          <circle cx="453.099" cy="29.766" r=".661" />
          <circle cx="454.422" cy="29.766" r=".661" />
          <circle cx="455.745" cy="29.766" r=".661" />
          <circle cx="457.068" cy="29.766" r=".661" />
          <circle cx="458.391" cy="29.766" r=".661" />
          <circle cx="459.713" cy="29.766" r=".661" />
          <circle cx="426.641" cy="29.766" r=".661" />
          <circle cx="427.963" cy="29.766" r=".661" />
          <circle cx="429.286" cy="29.766" r=".661" />
          <circle cx="430.609" cy="29.766" r=".661" />
          <circle cx="431.932" cy="29.766" r=".661" />
          <circle cx="433.255" cy="29.766" r=".661" />
          <circle cx="434.578" cy="29.766" r=".661" />
          <circle cx="435.901" cy="29.766" r=".661" />
          <circle cx="437.224" cy="29.766" r=".661" />
          <circle cx="438.547" cy="29.766" r=".661" />
          <circle cx="439.87" cy="29.766" r=".661" />
          <circle cx="441.193" cy="29.766" r=".661" />
          <circle cx="442.516" cy="29.766" r=".661" />
          <circle cx="409.443" cy="29.766" r=".661" />
          <circle cx="410.766" cy="29.766" r=".661" />
          <circle cx="412.088" cy="29.766" r=".661" />
          <circle cx="413.411" cy="29.766" r=".661" />
          <circle cx="414.734" cy="29.766" r=".661" />
          <circle cx="416.057" cy="29.766" r=".661" />
          <circle cx="417.38" cy="29.766" r=".661" />
          <circle cx="418.703" cy="29.766" r=".661" />
          <circle cx="420.026" cy="29.766" r=".661" />
          <circle cx="421.349" cy="29.766" r=".661" />
          <circle cx="422.672" cy="29.766" r=".661" />
          <circle cx="423.995" cy="29.766" r=".661" />
          <circle cx="425.318" cy="29.766" r=".661" />
          <circle cx="392.245" cy="29.766" r=".661" />
          <circle cx="393.568" cy="29.766" r=".661" />
          <circle cx="394.891" cy="29.766" r=".661" />
          <circle cx="396.213" cy="29.766" r=".661" />
          <circle cx="397.536" cy="29.766" r=".661" />
          <circle cx="398.859" cy="29.766" r=".661" />
          <circle cx="400.182" cy="29.766" r=".661" />
          <circle cx="401.505" cy="29.766" r=".661" />
          <circle cx="402.828" cy="29.766" r=".661" />
          <circle cx="404.151" cy="29.766" r=".661" />
          <circle cx="405.474" cy="29.766" r=".661" />
          <circle cx="406.797" cy="29.766" r=".661" />
          <circle cx="408.12" cy="29.766" r=".661" />
          <circle cx="375.047" cy="29.766" r=".661" />
          <circle cx="376.37" cy="29.766" r=".661" />
          <circle cx="377.693" cy="29.766" r=".661" />
          <circle cx="379.016" cy="29.766" r=".661" />
          <circle cx="380.338" cy="29.766" r=".661" />
          <circle cx="381.661" cy="29.766" r=".661" />
          <circle cx="382.984" cy="29.766" r=".661" />
          <circle cx="384.307" cy="29.766" r=".661" />
          <circle cx="385.63" cy="29.766" r=".661" />
          <circle cx="386.953" cy="29.766" r=".661" />
          <circle cx="388.276" cy="29.766" r=".661" />
          <circle cx="389.599" cy="29.766" r=".661" />
          <circle cx="390.922" cy="29.766" r=".661" />
          <circle cx="357.849" cy="29.766" r=".661" />
          <circle cx="359.172" cy="29.766" r=".661" />
          <circle cx="360.495" cy="29.766" r=".661" />
          <circle cx="361.818" cy="29.766" r=".661" />
          <circle cx="363.141" cy="29.766" r=".661" />
          <circle cx="364.463" cy="29.766" r=".661" />
          <circle cx="365.786" cy="29.766" r=".661" />
          <circle cx="367.109" cy="29.766" r=".661" />
          <circle cx="368.432" cy="29.766" r=".661" />
          <circle cx="369.755" cy="29.766" r=".661" />
          <circle cx="371.078" cy="29.766" r=".661" />
          <circle cx="372.401" cy="29.766" r=".661" />
          <circle cx="373.724" cy="29.766" r=".661" />
          <circle cx="340.651" cy="29.766" r=".661" />
          <circle cx="341.974" cy="29.766" r=".661" />
          <circle cx="343.297" cy="29.766" r=".661" />
          <circle cx="344.62" cy="29.766" r=".661" />
          <circle cx="345.943" cy="29.766" r=".661" />
          <circle cx="347.266" cy="29.766" r=".661" />
          <circle cx="348.588" cy="29.766" r=".661" />
          <circle cx="349.911" cy="29.766" r=".661" />
          <circle cx="351.234" cy="29.766" r=".661" />
          <circle cx="352.557" cy="29.766" r=".661" />
          <circle cx="353.88" cy="29.766" r=".661" />
          <circle cx="355.203" cy="29.766" r=".661" />
          <circle cx="356.526" cy="29.766" r=".661" />
          <circle cx="323.453" cy="29.766" r=".661" />
          <circle cx="324.776" cy="29.766" r=".661" />
          <circle cx="326.099" cy="29.766" r=".661" />
          <circle cx="327.422" cy="29.766" r=".661" />
          <circle cx="328.745" cy="29.766" r=".661" />
          <circle cx="330.068" cy="29.766" r=".661" />
          <circle cx="331.391" cy="29.766" r=".661" />
          <circle cx="332.713" cy="29.766" r=".661" />
          <circle cx="334.036" cy="29.766" r=".661" />
          <circle cx="335.359" cy="29.766" r=".661" />
          <circle cx="336.682" cy="29.766" r=".661" />
          <circle cx="338.005" cy="29.766" r=".661" />
          <circle cx="339.328" cy="29.766" r=".661" />
          <circle cx="316.839" cy="29.766" r=".661" />
          <circle cx="318.161" cy="29.766" r=".661" />
          <circle cx="319.484" cy="29.766" r=".661" />
          <circle cx="320.807" cy="29.766" r=".661" />
          <circle cx="322.13" cy="29.766" r=".661" />
          <circle cx="299.641" cy="29.766" r=".661" />
          <circle cx="300.964" cy="29.766" r=".661" />
          <circle cx="302.286" cy="29.766" r=".661" />
          <circle cx="303.609" cy="29.766" r=".661" />
          <circle cx="304.932" cy="29.766" r=".661" />
          <circle cx="306.255" cy="29.766" r=".661" />
          <circle cx="307.578" cy="29.766" r=".661" />
          <circle cx="308.901" cy="29.766" r=".661" />
          <circle cx="310.224" cy="29.766" r=".661" />
          <circle cx="311.547" cy="29.766" r=".661" />
          <circle cx="312.87" cy="29.766" r=".661" />
          <circle cx="314.193" cy="29.766" r=".661" />
          <circle cx="315.516" cy="29.766" r=".661" />
          <circle cx="282.443" cy="29.766" r=".661" />
          <circle cx="283.766" cy="29.766" r=".661" />
          <circle cx="285.089" cy="29.766" r=".661" />
          <circle cx="286.411" cy="29.766" r=".661" />
          <circle cx="287.734" cy="29.766" r=".661" />
          <circle cx="289.057" cy="29.766" r=".661" />
          <circle cx="290.38" cy="29.766" r=".661" />
          <circle cx="291.703" cy="29.766" r=".661" />
          <circle cx="293.026" cy="29.766" r=".661" />
          <circle cx="294.349" cy="29.766" r=".661" />
          <circle cx="295.672" cy="29.766" r=".661" />
          <circle cx="296.995" cy="29.766" r=".661" />
          <circle cx="298.318" cy="29.766" r=".661" />
          <circle cx="265.245" cy="29.766" r=".661" />
          <circle cx="266.568" cy="29.766" r=".661" />
          <circle cx="267.891" cy="29.766" r=".661" />
          <circle cx="269.214" cy="29.766" r=".661" />
          <circle cx="270.536" cy="29.766" r=".661" />
          <circle cx="271.859" cy="29.766" r=".661" />
          <circle cx="273.182" cy="29.766" r=".661" />
          <circle cx="274.505" cy="29.766" r=".661" />
          <circle cx="275.828" cy="29.766" r=".661" />
          <circle cx="277.151" cy="29.766" r=".661" />
          <circle cx="278.474" cy="29.766" r=".661" />
          <circle cx="279.797" cy="29.766" r=".661" />
          <circle cx="281.12" cy="29.766" r=".661" />
          <circle cx="248.047" cy="29.766" r=".661" />
          <circle cx="249.37" cy="29.766" r=".661" />
          <circle cx="250.693" cy="29.766" r=".661" />
          <circle cx="252.016" cy="29.766" r=".661" />
          <circle cx="253.339" cy="29.766" r=".661" />
          <circle cx="254.661" cy="29.766" r=".661" />
          <circle cx="255.984" cy="29.766" r=".661" />
          <circle cx="257.307" cy="29.766" r=".661" />
          <circle cx="258.63" cy="29.766" r=".661" />
          <circle cx="259.953" cy="29.766" r=".661" />
          <circle cx="261.276" cy="29.766" r=".661" />
          <circle cx="262.599" cy="29.766" r=".661" />
          <circle cx="263.922" cy="29.766" r=".661" />
        </g>
      </svg>
    </div>
  )
}

// callin useGSAP scope
export function getAnimationLinkedInLoopingTimeline(scope?: object | null) {

  const tl = gsap.timeline({ repeat: -1 })

  gsap.utils.toArray('.sprite-linkedin-circle', scope).forEach((el, i) => {

    const circleEl = el as SVGCircleElement;

    const nestedTl = gsap.timeline();

    //cx 5.289 185.121
    //cy 5.289 185.121

    const delay = (circleEl.cx.baseVal.value - 5.289) / (185.121 - 5.289)
      + (circleEl.cy.baseVal.value - 5.289) / (185.121 - 5.289);

    nestedTl
      .set(circleEl, { opacity: 0.5 }, 0)
      .set(circleEl, { opacity: 1 }, delay + 1)
      .set(circleEl, { opacity: 0.5 }, delay + 3)

    tl.add(nestedTl, 0);
  });

  tl.duration(5);

  return tl;

}

export function AnimationLinkedInSVG({ ref, width, height }: { ref?: RefObject<HTMLDivElement> | RefObject<null>, width?: string | number, height?: string | number }) {
  return (
    <div ref={ref} className="h-full">
      <svg id="sprite-linkedin" xmlns="http://www.w3.org/2000/svg" width={width} height={height} /* default w,h=719.622 */ viewBox="0.1 0.1 190.411 190.411" overflow={'hidden'}>
        <g fill="#fff" paintOrder="markers stroke fill" className="fill-foreground">
          <circle className="sprite-linkedin-circle" cx="58.181" cy="5.289" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="5.289" cy="15.868" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="5.289" cy="26.446" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="5.289" cy="37.024" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="5.289" cy="47.603" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="5.289" cy="58.181" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="5.289" cy="68.759" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="5.289" cy="79.338" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="5.289" cy="89.916" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="5.289" cy="100.494" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="5.289" cy="111.073" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="5.289" cy="121.651" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="5.289" cy="132.23" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="5.289" cy="142.808" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="5.289" cy="153.386" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="5.289" cy="163.965" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="15.868" cy="5.289" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="15.868" cy="15.868" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="15.868" cy="26.446" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="15.868" cy="37.024" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="15.868" cy="47.603" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="15.868" cy="58.181" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="15.868" cy="68.759" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="15.868" cy="79.338" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="15.868" cy="89.916" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="15.868" cy="100.494" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="15.868" cy="111.073" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="15.868" cy="121.651" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="15.868" cy="132.23" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="15.868" cy="142.808" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="15.868" cy="153.386" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="15.868" cy="163.965" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="15.868" cy="174.543" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="15.868" cy="185.121" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="26.446" cy="5.289" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="26.446" cy="15.868" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="26.446" cy="26.446" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="26.446" cy="37.024" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="26.446" cy="47.603" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="26.446" cy="58.181" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="26.446" cy="68.759" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="26.446" cy="79.338" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="26.446" cy="89.916" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="26.446" cy="100.494" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="26.446" cy="111.073" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="26.446" cy="132.23" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="26.446" cy="153.386" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="5.289" cy="174.543" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="26.446" cy="121.651" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="26.446" cy="142.808" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="26.446" cy="163.965" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="26.446" cy="174.543" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="26.446" cy="185.121" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="37.024" cy="5.289" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="37.024" cy="15.868" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="37.024" cy="26.446" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="37.024" cy="58.181" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="37.024" cy="68.759" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="37.024" cy="174.543" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="37.024" cy="185.121" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="47.603" cy="5.289" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="47.603" cy="15.868" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="47.603" cy="26.446" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="47.603" cy="58.181" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="47.603" cy="68.759" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="47.603" cy="174.543" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="47.603" cy="185.121" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="58.181" cy="15.868" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="58.181" cy="26.446" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="58.181" cy="37.024" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="58.181" cy="47.603" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="58.181" cy="58.181" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="58.181" cy="68.759" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="58.181" cy="89.916" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="58.181" cy="100.494" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="58.181" cy="121.651" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="58.181" cy="142.808" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="58.181" cy="163.965" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="58.181" cy="174.543" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="58.181" cy="185.121" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="68.759" cy="5.289" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="68.759" cy="15.868" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="68.759" cy="26.446" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="68.759" cy="37.024" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="68.759" cy="47.603" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="68.759" cy="58.181" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="68.759" cy="68.759" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="68.759" cy="79.338" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="68.759" cy="89.916" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="68.759" cy="100.494" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="68.759" cy="111.073" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="68.759" cy="121.651" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="68.759" cy="132.23" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="68.759" cy="142.808" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="68.759" cy="153.386" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="68.759" cy="163.965" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="68.759" cy="174.543" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="68.759" cy="185.121" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="79.338" cy="5.289" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="79.338" cy="15.868" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="79.338" cy="26.446" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="79.338" cy="37.024" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="79.338" cy="47.603" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="79.338" cy="58.181" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="79.338" cy="68.759" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="100.494" cy="68.759" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="79.338" cy="174.543" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="79.338" cy="185.121" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="89.916" cy="5.289" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="89.916" cy="15.868" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="89.916" cy="26.446" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="89.916" cy="37.024" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="89.916" cy="47.603" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="89.916" cy="58.181" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="89.916" cy="68.759" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="89.916" cy="174.543" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="89.916" cy="185.121" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="58.181" cy="153.386" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="58.181" cy="132.23" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="58.181" cy="111.073" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="58.181" cy="79.338" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="100.494" cy="5.289" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="100.494" cy="15.868" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="100.494" cy="26.446" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="100.494" cy="37.024" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="100.494" cy="47.603" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="100.494" cy="58.181" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="100.494" cy="174.543" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="100.494" cy="185.121" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="111.073" cy="5.289" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="111.073" cy="15.868" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="111.073" cy="26.446" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="111.073" cy="37.024" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="111.073" cy="47.603" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="111.073" cy="58.181" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="111.073" cy="68.759" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="111.073" cy="111.073" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="111.073" cy="100.494" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="111.073" cy="121.651" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="111.073" cy="132.23" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="111.073" cy="142.808" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="111.073" cy="153.386" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="111.073" cy="163.965" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="111.073" cy="174.543" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="111.073" cy="185.121" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="100.494" cy="111.073" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="100.494" cy="121.651" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="100.494" cy="132.23" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="100.494" cy="142.808" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="100.494" cy="153.386" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="100.494" cy="163.965" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="121.651" cy="5.289" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="121.651" cy="15.868" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="121.651" cy="26.446" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="121.651" cy="37.024" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="121.651" cy="47.603" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="121.651" cy="58.181" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="121.651" cy="68.759" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="121.651" cy="100.494" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="121.651" cy="111.073" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="121.651" cy="121.651" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="121.651" cy="132.23" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="121.651" cy="142.808" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="121.651" cy="153.386" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="121.651" cy="163.965" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="121.651" cy="174.543" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="121.651" cy="185.121" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="132.23" cy="5.289" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="132.23" cy="15.868" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="132.23" cy="26.446" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="132.23" cy="37.024" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="132.23" cy="47.603" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="132.23" cy="58.181" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="132.23" cy="68.759" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="132.23" cy="111.073" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="132.23" cy="121.651" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="132.23" cy="132.23" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="132.23" cy="142.808" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="132.23" cy="153.386" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="132.23" cy="163.965" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="132.23" cy="174.543" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="132.23" cy="185.121" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="142.808" cy="5.289" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="142.808" cy="15.868" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="142.808" cy="26.446" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="142.808" cy="37.024" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="142.808" cy="47.603" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="142.808" cy="58.181" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="142.808" cy="68.759" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="142.808" cy="174.543" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="142.808" cy="185.121" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="153.386" cy="5.289" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="153.386" cy="15.868" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="153.386" cy="26.446" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="153.386" cy="37.024" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="153.386" cy="47.603" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="153.386" cy="58.181" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="153.386" cy="68.759" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="153.386" cy="79.338" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="153.386" cy="174.543" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="153.386" cy="185.121" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="163.965" cy="5.289" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="163.965" cy="15.868" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="163.965" cy="26.446" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="163.965" cy="37.024" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="163.965" cy="47.603" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="163.965" cy="58.181" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="163.965" cy="68.759" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="163.965" cy="79.338" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="163.965" cy="111.073" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="163.965" cy="153.386" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="163.965" cy="163.965" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="163.965" cy="174.543" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="163.965" cy="185.121" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="174.543" cy="5.289" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="174.543" cy="15.868" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="174.543" cy="26.446" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="174.543" cy="37.024" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="174.543" cy="47.603" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="174.543" cy="58.181" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="174.543" cy="68.759" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="174.543" cy="79.338" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="174.543" cy="89.916" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="174.543" cy="100.494" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="174.543" cy="111.073" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="174.543" cy="121.651" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="174.543" cy="132.23" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="174.543" cy="142.808" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="163.965" cy="89.916" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="163.965" cy="100.494" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="163.965" cy="121.651" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="163.965" cy="132.23" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="163.965" cy="142.808" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="174.543" cy="153.386" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="174.543" cy="163.965" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="174.543" cy="174.543" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="174.543" cy="185.121" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="185.121" cy="15.868" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="185.121" cy="26.446" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="185.121" cy="37.024" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="185.121" cy="47.603" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="185.121" cy="58.181" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="185.121" cy="68.759" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="185.121" cy="79.338" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="185.121" cy="89.916" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="185.121" cy="100.494" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="185.121" cy="111.073" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="185.121" cy="121.651" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="185.121" cy="132.23" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="185.121" cy="142.808" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="185.121" cy="153.386" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="185.121" cy="163.965" r="5.289" />
          <circle className="sprite-linkedin-circle" cx="185.121" cy="174.543" r="5.289" />
        </g>
      </svg>
    </div>
  );
}

// callin useGSAP scope
export function getAnimationEmailLoopingTimeline(scope?: object | null) {

  const tl = gsap.timeline({ repeat: -1 })

  gsap.utils.toArray('.sprite-email-circle', scope).forEach((el, i) => {

    const circleEl = el as SVGCircleElement;

    const nestedTl = gsap.timeline();

    //cx 5.289 185.121
    //cy 5.289 185.121

    const delay = (circleEl.cx.baseVal.value - 5.289) / (185.121 - 5.289)
      + (circleEl.cy.baseVal.value - 5.289) / (185.121 - 5.289);

    nestedTl
      .set(circleEl, { opacity: 0.5 }, 0)
      .set(circleEl, { opacity: 1 }, delay + 1)
      .set(circleEl, { opacity: 0.5 }, delay + 3)

    tl.add(nestedTl, 0);
  });

  tl.duration(5);

  return tl;

}

export function AnimationEmailSVG({ ref, width, height }: { ref?: RefObject<HTMLDivElement> | RefObject<null>, width?: string | number, height?: string | number }) {
  return (
    <div ref={ref} className="h-full">
      <svg id="sprite-email" xmlns="http://www.w3.org/2000/svg" width={width} height={height} /* default w,h=719.622 */ viewBox="0.1 0.1 190.411 190.411" overflow={'hidden'}>
        <g fill="#fff" paintOrder="markers stroke fill" className="fill-foreground">
          <circle className="sprite-email-circle" cx="58.181" cy="5.289" r="5.289" />
          <circle className="sprite-email-circle" cx="5.289" cy="15.868" r="5.289" />
          <circle className="sprite-email-circle" cx="5.289" cy="26.446" r="5.289" />
          <circle className="sprite-email-circle" cx="5.289" cy="37.024" r="5.289" />
          <circle className="sprite-email-circle" cx="5.289" cy="47.603" r="5.289" />
          <circle className="sprite-email-circle" cx="5.289" cy="58.181" r="5.289" />
          <circle className="sprite-email-circle" cx="5.289" cy="68.759" r="5.289" />
          <circle className="sprite-email-circle" cx="5.289" cy="79.338" r="5.289" />
          <circle className="sprite-email-circle" cx="5.289" cy="89.916" r="5.289" />
          <circle className="sprite-email-circle" cx="5.289" cy="100.494" r="5.289" />
          <circle className="sprite-email-circle" cx="5.289" cy="111.073" r="5.289" />
          <circle className="sprite-email-circle" cx="5.289" cy="121.651" r="5.289" />
          <circle className="sprite-email-circle" cx="5.289" cy="132.23" r="5.289" />
          <circle className="sprite-email-circle" cx="5.289" cy="142.808" r="5.289" />
          <circle className="sprite-email-circle" cx="5.289" cy="153.386" r="5.289" />
          <circle className="sprite-email-circle" cx="5.289" cy="163.965" r="5.289" />
          <circle className="sprite-email-circle" cx="15.868" cy="5.289" r="5.289" />
          <circle className="sprite-email-circle" cx="15.868" cy="15.868" r="5.289" />
          <circle className="sprite-email-circle" cx="15.868" cy="26.446" r="5.289" />
          <circle className="sprite-email-circle" cx="15.868" cy="37.024" r="5.289" />
          <circle className="sprite-email-circle" cx="15.868" cy="47.603" r="5.289" />
          <circle className="sprite-email-circle" cx="15.868" cy="58.181" r="5.289" />
          <circle className="sprite-email-circle" cx="15.868" cy="68.759" r="5.289" />
          <circle className="sprite-email-circle" cx="15.868" cy="79.338" r="5.289" />
          <circle className="sprite-email-circle" cx="15.868" cy="89.916" r="5.289" />
          <circle className="sprite-email-circle" cx="15.868" cy="100.494" r="5.289" />
          <circle className="sprite-email-circle" cx="15.868" cy="111.073" r="5.289" />
          <circle className="sprite-email-circle" cx="15.868" cy="121.651" r="5.289" />
          <circle className="sprite-email-circle" cx="15.868" cy="132.23" r="5.289" />
          <circle className="sprite-email-circle" cx="15.868" cy="142.808" r="5.289" />
          <circle className="sprite-email-circle" cx="15.868" cy="153.386" r="5.289" />
          <circle className="sprite-email-circle" cx="15.868" cy="163.965" r="5.289" />
          <circle className="sprite-email-circle" cx="15.868" cy="174.543" r="5.289" />
          <circle className="sprite-email-circle" cx="15.868" cy="185.121" r="5.289" />
          <circle className="sprite-email-circle" cx="26.446" cy="5.289" r="5.289" />
          <circle className="sprite-email-circle" cx="26.446" cy="15.868" r="5.289" />
          <circle className="sprite-email-circle" cx="26.446" cy="26.446" r="5.289" />
          <circle className="sprite-email-circle" cx="26.446" cy="37.024" r="5.289" />
          <circle className="sprite-email-circle" cx="26.446" cy="68.759" r="5.289" />
          <circle className="sprite-email-circle" cx="26.446" cy="79.338" r="5.289" />
          <circle className="sprite-email-circle" cx="26.446" cy="89.916" r="5.289" />
          <circle className="sprite-email-circle" cx="26.446" cy="100.494" r="5.289" />
          <circle className="sprite-email-circle" cx="26.446" cy="111.073" r="5.289" />
          <circle className="sprite-email-circle" cx="26.446" cy="132.23" r="5.289" />
          <circle className="sprite-email-circle" cx="26.446" cy="153.386" r="5.289" />
          <circle className="sprite-email-circle" cx="5.289" cy="174.543" r="5.289" />
          <circle className="sprite-email-circle" cx="26.446" cy="121.651" r="5.289" />
          <circle className="sprite-email-circle" cx="26.446" cy="142.808" r="5.289" />
          <circle className="sprite-email-circle" cx="26.446" cy="163.965" r="5.289" />
          <circle className="sprite-email-circle" cx="37.024" cy="111.073" r="5.289" />
          <circle className="sprite-email-circle" cx="37.024" cy="121.651" r="5.289" />
          <circle className="sprite-email-circle" cx="37.024" cy="132.23" r="5.289" />
          <circle className="sprite-email-circle" cx="37.024" cy="142.808" r="5.289" />
          <circle className="sprite-email-circle" cx="37.024" cy="153.386" r="5.289" />
          <circle className="sprite-email-circle" cx="37.024" cy="163.965" r="5.289" />
          <circle className="sprite-email-circle" cx="47.603" cy="111.073" r="5.289" />
          <circle className="sprite-email-circle" cx="47.603" cy="132.23" r="5.289" />
          <circle className="sprite-email-circle" cx="47.603" cy="153.386" r="5.289" />
          <circle className="sprite-email-circle" cx="47.603" cy="121.651" r="5.289" />
          <circle className="sprite-email-circle" cx="47.603" cy="142.808" r="5.289" />
          <circle className="sprite-email-circle" cx="47.603" cy="163.965" r="5.289" />
          <circle className="sprite-email-circle" cx="26.446" cy="174.543" r="5.289" />
          <circle className="sprite-email-circle" cx="26.446" cy="185.121" r="5.289" />
          <circle className="sprite-email-circle" cx="37.024" cy="5.289" r="5.289" />
          <circle className="sprite-email-circle" cx="37.024" cy="15.868" r="5.289" />
          <circle className="sprite-email-circle" cx="37.024" cy="26.446" r="5.289" />
          <circle className="sprite-email-circle" cx="37.024" cy="47.603" r="5.289" />
          <circle className="sprite-email-circle" cx="37.024" cy="100.494" r="5.289" />
          <circle className="sprite-email-circle" cx="37.024" cy="174.543" r="5.289" />
          <circle className="sprite-email-circle" cx="37.024" cy="185.121" r="5.289" />
          <circle className="sprite-email-circle" cx="47.603" cy="5.289" r="5.289" />
          <circle className="sprite-email-circle" cx="47.603" cy="15.868" r="5.289" />
          <circle className="sprite-email-circle" cx="47.603" cy="26.446" r="5.289" />
          <circle className="sprite-email-circle" cx="47.603" cy="58.181" r="5.289" />
          <circle className="sprite-email-circle" cx="47.603" cy="47.603" r="5.289" />
          <circle className="sprite-email-circle" cx="47.603" cy="37.024" r="5.289" />
          <circle className="sprite-email-circle" cx="37.024" cy="37.024" r="5.289" />
          <circle className="sprite-email-circle" cx="47.603" cy="100.494" r="5.289" />
          <circle className="sprite-email-circle" cx="47.603" cy="174.543" r="5.289" />
          <circle className="sprite-email-circle" cx="47.603" cy="185.121" r="5.289" />
          <circle className="sprite-email-circle" cx="58.181" cy="15.868" r="5.289" />
          <circle className="sprite-email-circle" cx="58.181" cy="26.446" r="5.289" />
          <circle className="sprite-email-circle" cx="58.181" cy="37.024" r="5.289" />
          <circle className="sprite-email-circle" cx="58.181" cy="47.603" r="5.289" />
          <circle className="sprite-email-circle" cx="58.181" cy="58.181" r="5.289" />
          <circle className="sprite-email-circle" cx="58.181" cy="68.759" r="5.289" />
          <circle className="sprite-email-circle" cx="37.024" cy="89.916" r="5.289" />
          <circle className="sprite-email-circle" cx="58.181" cy="100.494" r="5.289" />
          <circle className="sprite-email-circle" cx="58.181" cy="121.651" r="5.289" />
          <circle className="sprite-email-circle" cx="58.181" cy="142.808" r="5.289" />
          <circle className="sprite-email-circle" cx="58.181" cy="163.965" r="5.289" />
          <circle className="sprite-email-circle" cx="58.181" cy="174.543" r="5.289" />
          <circle className="sprite-email-circle" cx="58.181" cy="185.121" r="5.289" />
          <circle className="sprite-email-circle" cx="68.759" cy="5.289" r="5.289" />
          <circle className="sprite-email-circle" cx="68.759" cy="15.868" r="5.289" />
          <circle className="sprite-email-circle" cx="68.759" cy="26.446" r="5.289" />
          <circle className="sprite-email-circle" cx="68.759" cy="37.024" r="5.289" />
          <circle className="sprite-email-circle" cx="68.759" cy="47.603" r="5.289" />
          <circle className="sprite-email-circle" cx="68.759" cy="58.181" r="5.289" />
          <circle className="sprite-email-circle" cx="68.759" cy="68.759" r="5.289" />
          <circle className="sprite-email-circle" cx="47.603" cy="89.916" r="5.289" />
          <circle className="sprite-email-circle" cx="68.759" cy="111.073" r="5.289" />
          <circle className="sprite-email-circle" cx="79.338" cy="111.073" r="5.289" />
          <circle className="sprite-email-circle" cx="68.759" cy="121.651" r="5.289" />
          <circle className="sprite-email-circle" cx="68.759" cy="132.23" r="5.289" />
          <circle className="sprite-email-circle" cx="89.916" cy="132.23" r="5.289" />
          <circle className="sprite-email-circle" cx="68.759" cy="142.808" r="5.289" />
          <circle className="sprite-email-circle" cx="68.759" cy="153.386" r="5.289" />
          <circle className="sprite-email-circle" cx="68.759" cy="163.965" r="5.289" />
          <circle className="sprite-email-circle" cx="68.759" cy="174.543" r="5.289" />
          <circle className="sprite-email-circle" cx="68.759" cy="185.121" r="5.289" />
          <circle className="sprite-email-circle" cx="79.338" cy="5.289" r="5.289" />
          <circle className="sprite-email-circle" cx="79.338" cy="15.868" r="5.289" />
          <circle className="sprite-email-circle" cx="79.338" cy="26.446" r="5.289" />
          <circle className="sprite-email-circle" cx="79.338" cy="37.024" r="5.289" />
          <circle className="sprite-email-circle" cx="79.338" cy="47.603" r="5.289" />
          <circle className="sprite-email-circle" cx="79.338" cy="58.181" r="5.289" />
          <circle className="sprite-email-circle" cx="79.338" cy="68.759" r="5.289" />
          <circle className="sprite-email-circle" cx="100.494" cy="68.759" r="5.289" />
          <circle className="sprite-email-circle" cx="79.338" cy="174.543" r="5.289" />
          <circle className="sprite-email-circle" cx="79.338" cy="185.121" r="5.289" />
          <circle className="sprite-email-circle" cx="89.916" cy="5.289" r="5.289" />
          <circle className="sprite-email-circle" cx="89.916" cy="15.868" r="5.289" />
          <circle className="sprite-email-circle" cx="89.916" cy="26.446" r="5.289" />
          <circle className="sprite-email-circle" cx="89.916" cy="37.024" r="5.289" />
          <circle className="sprite-email-circle" cx="89.916" cy="47.603" r="5.289" />
          <circle className="sprite-email-circle" cx="89.916" cy="58.181" r="5.289" />
          <circle className="sprite-email-circle" cx="89.916" cy="68.759" r="5.289" />
          <circle className="sprite-email-circle" cx="89.916" cy="174.543" r="5.289" />
          <circle className="sprite-email-circle" cx="89.916" cy="185.121" r="5.289" />
          <circle className="sprite-email-circle" cx="58.181" cy="153.386" r="5.289" />
          <circle className="sprite-email-circle" cx="58.181" cy="132.23" r="5.289" />
          <circle className="sprite-email-circle" cx="79.338" cy="121.651" r="5.289" />
          <circle className="sprite-email-circle" cx="79.338" cy="142.808" r="5.289" />
          <circle className="sprite-email-circle" cx="79.338" cy="163.965" r="5.289" />
          <circle className="sprite-email-circle" cx="89.916" cy="121.651" r="5.289" />
          <circle className="sprite-email-circle" cx="89.916" cy="142.808" r="5.289" />
          <circle className="sprite-email-circle" cx="89.916" cy="153.386" r="5.289" />
          <circle className="sprite-email-circle" cx="89.916" cy="163.965" r="5.289" />
          <circle className="sprite-email-circle" cx="79.338" cy="153.386" r="5.289" />
          <circle className="sprite-email-circle" cx="79.338" cy="132.23" r="5.289" />
          <circle className="sprite-email-circle" cx="58.181" cy="111.073" r="5.289" />
          <circle className="sprite-email-circle" cx="37.024" cy="79.338" r="5.289" />
          <circle className="sprite-email-circle" cx="100.494" cy="5.289" r="5.289" />
          <circle className="sprite-email-circle" cx="100.494" cy="15.868" r="5.289" />
          <circle className="sprite-email-circle" cx="100.494" cy="26.446" r="5.289" />
          <circle className="sprite-email-circle" cx="100.494" cy="37.024" r="5.289" />
          <circle className="sprite-email-circle" cx="100.494" cy="47.603" r="5.289" />
          <circle className="sprite-email-circle" cx="100.494" cy="58.181" r="5.289" />
          <circle className="sprite-email-circle" cx="100.494" cy="174.543" r="5.289" />
          <circle className="sprite-email-circle" cx="100.494" cy="185.121" r="5.289" />
          <circle className="sprite-email-circle" cx="111.073" cy="5.289" r="5.289" />
          <circle className="sprite-email-circle" cx="111.073" cy="15.868" r="5.289" />
          <circle className="sprite-email-circle" cx="111.073" cy="26.446" r="5.289" />
          <circle className="sprite-email-circle" cx="111.073" cy="37.024" r="5.289" />
          <circle className="sprite-email-circle" cx="111.073" cy="47.603" r="5.289" />
          <circle className="sprite-email-circle" cx="111.073" cy="58.181" r="5.289" />
          <circle className="sprite-email-circle" cx="111.073" cy="68.759" r="5.289" />
          <circle className="sprite-email-circle" cx="69.562" cy="79.338" r="5.289" />
          <circle className="sprite-email-circle" cx="80.14" cy="79.338" r="5.289" />
          <circle className="sprite-email-circle" cx="101.297" cy="79.338" r="5.289" />
          <circle className="sprite-email-circle" cx="90.718" cy="79.338" r="5.289" />
          <circle className="sprite-email-circle" cx="111.875" cy="79.338" r="5.289" />
          <circle className="sprite-email-circle" cx="121.651" cy="79.338" r="5.289" />
          <circle className="sprite-email-circle" cx="80.14" cy="89.916" r="5.289" />
          <circle className="sprite-email-circle" cx="101.297" cy="89.916" r="5.289" />
          <circle className="sprite-email-circle" cx="90.718" cy="89.916" r="5.289" />
          <circle className="sprite-email-circle" cx="111.875" cy="89.916" r="5.289" />
          <circle className="sprite-email-circle" cx="111.073" cy="121.651" r="5.289" />
          <circle className="sprite-email-circle" cx="111.073" cy="132.23" r="5.289" />
          <circle className="sprite-email-circle" cx="111.073" cy="142.808" r="5.289" />
          <circle className="sprite-email-circle" cx="111.073" cy="153.386" r="5.289" />
          <circle className="sprite-email-circle" cx="111.073" cy="163.965" r="5.289" />
          <circle className="sprite-email-circle" cx="111.073" cy="174.543" r="5.289" />
          <circle className="sprite-email-circle" cx="111.073" cy="185.121" r="5.289" />
          <circle className="sprite-email-circle" cx="100.494" cy="121.651" r="5.289" />
          <circle className="sprite-email-circle" cx="89.916" cy="111.073" r="5.289" />
          <circle className="sprite-email-circle" cx="100.494" cy="111.073" r="5.289" />
          <circle className="sprite-email-circle" cx="100.494" cy="132.23" r="5.289" />
          <circle className="sprite-email-circle" cx="100.494" cy="142.808" r="5.289" />
          <circle className="sprite-email-circle" cx="100.494" cy="153.386" r="5.289" />
          <circle className="sprite-email-circle" cx="100.494" cy="163.965" r="5.289" />
          <circle className="sprite-email-circle" cx="121.651" cy="5.289" r="5.289" />
          <circle className="sprite-email-circle" cx="121.651" cy="15.868" r="5.289" />
          <circle className="sprite-email-circle" cx="121.651" cy="26.446" r="5.289" />
          <circle className="sprite-email-circle" cx="121.651" cy="37.024" r="5.289" />
          <circle className="sprite-email-circle" cx="121.651" cy="47.603" r="5.289" />
          <circle className="sprite-email-circle" cx="121.651" cy="58.181" r="5.289" />
          <circle className="sprite-email-circle" cx="121.651" cy="68.759" r="5.289" />
          <circle className="sprite-email-circle" cx="121.651" cy="111.073" r="5.289" />
          <circle className="sprite-email-circle" cx="111.073" cy="111.073" r="5.289" />
          <circle className="sprite-email-circle" cx="121.651" cy="121.651" r="5.289" />
          <circle className="sprite-email-circle" cx="121.651" cy="132.23" r="5.289" />
          <circle className="sprite-email-circle" cx="121.651" cy="142.808" r="5.289" />
          <circle className="sprite-email-circle" cx="121.651" cy="153.386" r="5.289" />
          <circle className="sprite-email-circle" cx="121.651" cy="163.965" r="5.289" />
          <circle className="sprite-email-circle" cx="121.651" cy="174.543" r="5.289" />
          <circle className="sprite-email-circle" cx="121.651" cy="185.121" r="5.289" />
          <circle className="sprite-email-circle" cx="132.23" cy="5.289" r="5.289" />
          <circle className="sprite-email-circle" cx="132.23" cy="15.868" r="5.289" />
          <circle className="sprite-email-circle" cx="132.23" cy="26.446" r="5.289" />
          <circle className="sprite-email-circle" cx="132.23" cy="37.024" r="5.289" />
          <circle className="sprite-email-circle" cx="132.23" cy="47.603" r="5.289" />
          <circle className="sprite-email-circle" cx="132.23" cy="58.181" r="5.289" />
          <circle className="sprite-email-circle" cx="132.23" cy="68.759" r="5.289" />
          <circle className="sprite-email-circle" cx="132.23" cy="111.073" r="5.289" />
          <circle className="sprite-email-circle" cx="132.23" cy="121.651" r="5.289" />
          <circle className="sprite-email-circle" cx="132.23" cy="132.23" r="5.289" />
          <circle className="sprite-email-circle" cx="132.23" cy="142.808" r="5.289" />
          <circle className="sprite-email-circle" cx="132.23" cy="153.386" r="5.289" />
          <circle className="sprite-email-circle" cx="132.23" cy="163.965" r="5.289" />
          <circle className="sprite-email-circle" cx="132.23" cy="174.543" r="5.289" />
          <circle className="sprite-email-circle" cx="132.23" cy="185.121" r="5.289" />
          <circle className="sprite-email-circle" cx="142.808" cy="5.289" r="5.289" />
          <circle className="sprite-email-circle" cx="142.808" cy="15.868" r="5.289" />
          <circle className="sprite-email-circle" cx="142.808" cy="26.446" r="5.289" />
          <circle className="sprite-email-circle" cx="142.808" cy="37.024" r="5.289" />
          <circle className="sprite-email-circle" cx="142.808" cy="47.603" r="5.289" />
          <circle className="sprite-email-circle" cx="142.808" cy="58.181" r="5.289" />
          <circle className="sprite-email-circle" cx="142.808" cy="174.543" r="5.289" />
          <circle className="sprite-email-circle" cx="142.808" cy="185.121" r="5.289" />
          <circle className="sprite-email-circle" cx="153.386" cy="5.289" r="5.289" />
          <circle className="sprite-email-circle" cx="153.386" cy="15.868" r="5.289" />
          <circle className="sprite-email-circle" cx="153.386" cy="26.446" r="5.289" />
          <circle className="sprite-email-circle" cx="153.386" cy="37.024" r="5.289" />
          <circle className="sprite-email-circle" cx="153.386" cy="47.603" r="5.289" />
          <circle className="sprite-email-circle" cx="153.386" cy="79.338" r="5.289" />
          <circle className="sprite-email-circle" cx="153.386" cy="174.543" r="5.289" />
          <circle className="sprite-email-circle" cx="153.386" cy="185.121" r="5.289" />
          <circle className="sprite-email-circle" cx="163.965" cy="5.289" r="5.289" />
          <circle className="sprite-email-circle" cx="163.965" cy="15.868" r="5.289" />
          <circle className="sprite-email-circle" cx="163.965" cy="26.446" r="5.289" />
          <circle className="sprite-email-circle" cx="163.965" cy="37.024" r="5.289" />
          <circle className="sprite-email-circle" cx="163.965" cy="68.759" r="5.289" />
          <circle className="sprite-email-circle" cx="163.965" cy="79.338" r="5.289" />
          <circle className="sprite-email-circle" cx="163.965" cy="111.073" r="5.289" />
          <circle className="sprite-email-circle" cx="163.965" cy="153.386" r="5.289" />
          <circle className="sprite-email-circle" cx="163.965" cy="163.965" r="5.289" />
          <circle className="sprite-email-circle" cx="163.965" cy="174.543" r="5.289" />
          <circle className="sprite-email-circle" cx="163.965" cy="185.121" r="5.289" />
          <circle className="sprite-email-circle" cx="174.543" cy="5.289" r="5.289" />
          <circle className="sprite-email-circle" cx="174.543" cy="15.868" r="5.289" />
          <circle className="sprite-email-circle" cx="174.543" cy="26.446" r="5.289" />
          <circle className="sprite-email-circle" cx="174.543" cy="37.024" r="5.289" />
          <circle className="sprite-email-circle" cx="174.543" cy="47.603" r="5.289" />
          <circle className="sprite-email-circle" cx="174.543" cy="58.181" r="5.289" />
          <circle className="sprite-email-circle" cx="174.543" cy="68.759" r="5.289" />
          <circle className="sprite-email-circle" cx="174.543" cy="79.338" r="5.289" />
          <circle className="sprite-email-circle" cx="174.543" cy="89.916" r="5.289" />
          <circle className="sprite-email-circle" cx="174.543" cy="100.494" r="5.289" />
          <circle className="sprite-email-circle" cx="174.543" cy="111.073" r="5.289" />
          <circle className="sprite-email-circle" cx="174.543" cy="121.651" r="5.289" />
          <circle className="sprite-email-circle" cx="174.543" cy="132.23" r="5.289" />
          <circle className="sprite-email-circle" cx="174.543" cy="142.808" r="5.289" />
          <circle className="sprite-email-circle" cx="163.965" cy="89.916" r="5.289" />
          <circle className="sprite-email-circle" cx="163.965" cy="100.494" r="5.289" />
          <circle className="sprite-email-circle" cx="163.965" cy="121.651" r="5.289" />
          <circle className="sprite-email-circle" cx="163.965" cy="132.23" r="5.289" />
          <circle className="sprite-email-circle" cx="163.965" cy="142.808" r="5.289" />
          <circle className="sprite-email-circle" cx="174.543" cy="153.386" r="5.289" />
          <circle className="sprite-email-circle" cx="174.543" cy="163.965" r="5.289" />
          <circle className="sprite-email-circle" cx="142.808" cy="111.073" r="5.289" />
          <circle className="sprite-email-circle" cx="142.808" cy="153.386" r="5.289" />
          <circle className="sprite-email-circle" cx="142.808" cy="163.965" r="5.289" />
          <circle className="sprite-email-circle" cx="153.386" cy="89.916" r="5.289" />
          <circle className="sprite-email-circle" cx="153.386" cy="100.494" r="5.289" />
          <circle className="sprite-email-circle" cx="153.386" cy="111.073" r="5.289" />
          <circle className="sprite-email-circle" cx="153.386" cy="121.651" r="5.289" />
          <circle className="sprite-email-circle" cx="153.386" cy="132.23" r="5.289" />
          <circle className="sprite-email-circle" cx="153.386" cy="142.808" r="5.289" />
          <circle className="sprite-email-circle" cx="142.808" cy="89.916" r="5.289" />
          <circle className="sprite-email-circle" cx="142.808" cy="100.494" r="5.289" />
          <circle className="sprite-email-circle" cx="132.23" cy="100.494" r="5.289" />
          <circle className="sprite-email-circle" cx="142.808" cy="121.651" r="5.289" />
          <circle className="sprite-email-circle" cx="142.808" cy="132.23" r="5.289" />
          <circle className="sprite-email-circle" cx="142.808" cy="142.808" r="5.289" />
          <circle className="sprite-email-circle" cx="153.386" cy="153.386" r="5.289" />
          <circle className="sprite-email-circle" cx="153.386" cy="163.965" r="5.289" />
          <circle className="sprite-email-circle" cx="174.543" cy="174.543" r="5.289" />
          <circle className="sprite-email-circle" cx="174.543" cy="185.121" r="5.289" />
          <circle className="sprite-email-circle" cx="185.121" cy="15.868" r="5.289" />
          <circle className="sprite-email-circle" cx="185.121" cy="26.446" r="5.289" />
          <circle className="sprite-email-circle" cx="185.121" cy="37.024" r="5.289" />
          <circle className="sprite-email-circle" cx="185.121" cy="47.603" r="5.289" />
          <circle className="sprite-email-circle" cx="185.121" cy="58.181" r="5.289" />
          <circle className="sprite-email-circle" cx="185.121" cy="68.759" r="5.289" />
          <circle className="sprite-email-circle" cx="185.121" cy="79.338" r="5.289" />
          <circle className="sprite-email-circle" cx="185.121" cy="89.916" r="5.289" />
          <circle className="sprite-email-circle" cx="185.121" cy="100.494" r="5.289" />
          <circle className="sprite-email-circle" cx="185.121" cy="111.073" r="5.289" />
          <circle className="sprite-email-circle" cx="185.121" cy="121.651" r="5.289" />
          <circle className="sprite-email-circle" cx="185.121" cy="132.23" r="5.289" />
          <circle className="sprite-email-circle" cx="185.121" cy="142.808" r="5.289" />
          <circle className="sprite-email-circle" cx="185.121" cy="153.386" r="5.289" />
          <circle className="sprite-email-circle" cx="185.121" cy="163.965" r="5.289" />
          <circle className="sprite-email-circle" cx="185.121" cy="174.543" r="5.289" />
        </g>
      </svg>
    </div>
  );
}
