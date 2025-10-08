"use client";
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

import Wrapper from "@/layouts/wrapper";
import HeaderSix from "@/layouts/headers/header-six";
import FooterThree from "@/layouts/footers/footer-three";
import PortfolioSliderHomeEleven from "@/components/portfolio/slider/portfolio-slider-home-eleven";
// internal imports

const HomeElevenMain = () => {
  useScrollSmooth();
  return (
    <Wrapper>
      {/* header area start */}
      <HeaderSix />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio slider start */}
            <PortfolioSliderHomeEleven />
            {/* portfolio slider end */}
          </main>

          {/* footer area */}
          <FooterThree />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeElevenMain;
