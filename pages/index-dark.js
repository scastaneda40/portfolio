import { memo, useContext, useEffect } from "react";
import Portfolio from "../src/components/Portfolio";
import { Context } from "../src/context/context";

import dynamic from "next/dynamic";
import GetInTouch from "../src/components/GetInTouch";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";

const ProjectDetails = dynamic(
  () => import("../src/components/ProjectDetails"),
  {
    ssr: false,
  }
);

const AboutUs = dynamic(() => import("../src/components/AboutUs"), {
  ssr: false,
});

const IndexDark = () => {
  const { nav } = useContext(Context);
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("blog");
  }, []);

  return (
    <Layout>
      <div className="main-picture men hide-on-med-and-down"></div>
      <div
        id="bl-main"
        className={`bl-main ${nav !== null ? "bl-expand-item" : ""}`}
      >
        {/* Top Left Section Starts */}
        <section className="topleft">
          <div className="bl-box row valign-wrapper">
            <div className="row valign-wrapper mb-0">
              <div className="title-heading">
                <div className="selector uppercase" id="selector">
                  <h3 className="ah-headline p-none m-none clip is-full-width">
                    <span className="font-weight-400">Hi There ! {`I'm`}</span>
                    <span className="my-name">Linda Smith</span>
                    <TypingAnimation />
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AboutUs dark />
        <Portfolio />
        <GetInTouch />
        <ProjectDetails />
      </div>
    </Layout>
  );
};
export default memo(IndexDark);
