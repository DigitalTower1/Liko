"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderSix from "@/layouts/headers/header-six";
import BigText from "@/components/big-text";
import FooterThree from "@/layouts/footers/footer-three";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import FaqArea from "@/components/faq/faq-area";

const FaqMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderSix />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div
            className="inner-bg"
            style={{
              backgroundImage:
                "url(/assets/img/home-01/team/team-details-bg.png)",
            }}
          >
            <main>
              {/* faq hero */}
              <div className="tm-hero-area tm-hero-ptb">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <span className="tm-hero-subtitle">Liko Studio</span>
                        <h4 className="tm-hero-title tp-char-animation">
                          FAQ Page
                        </h4>
                      </div>
                      <div className="tm-hero-text tp_title_anim">
                        <p>
                          Frequently asked question (FAQ)pages <br />
                          to find answars.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* faq hero */}

              {/* faq area */}
              <FaqArea/>
              {/* faq area */}

              {/* big text */}
              <BigText />
              {/* big text */}
            </main>

            {/* footer area */}
            <FooterThree />
            {/* footer area */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FaqMain;
