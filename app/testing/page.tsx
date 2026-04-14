import ContextWithMediaOne from "@/components/contextWithMedia/ContextWithMediaOne";
import CallToActionOne from "@/components/cta/CallToActionOne";
import StepsGuide from "@/components/stepsGuide/StepsGuide";
import React from "react";

function page() {
  return (
    <>
      <StepsGuide /> <ContextWithMediaOne />
      <CallToActionOne />
    </>
  );
}

export default page;
