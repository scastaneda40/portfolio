import { memo, useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import { LocalVideo } from "./ItemDetailsContent";

import dynamic from "next/dynamic";

const ProjectSlider = dynamic(() => import("./ItemDetailsContent"), {
  ssr: false,
});

const ProjectDetails = () => {
  const {
    activeProject,
    showProject,
    showProjectFunction,
    activeProjectFunction,
  } = useContext(Context);
  const [length, setLength] = useState(null);
  useEffect(() => {
    setLength(document.querySelectorAll("#bl-panel-work-items>div").length);
  }, []);

  return (
    <div
      className={`bl-panel-items ${showProject ? "bl-panel-items-show" : ""}`}
      id="bl-panel-work-items"
    >
      {/* Project Starts */}
      <div
        data-panel="panel-1"
        className={activeProject == 1 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img
              className="responsive-img"
              src="images/projects/imagifydetail.jpg"
              alt="project"
            />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Imagify: AI Image Generation App</h3>
            <ul className="project-details second-font">
              {/* <li>
                <i className="fa fa-user" />
                <span className="font-weight-700"> Purpose </span>:{" "}
                <span className="font-weight-400 uppercase">Personal Project</span>
              </li> */}
              <li>
                <i className="fa fa-file-text-o" />
                <span className="font-weight-700"> Project Description </span>:{" "}
                <span className="font-weight-400">This weekend project allowed me to explore AI while touching on a diverse tech stack from frontend to backend. Featuring secure payments, user authentication, and a responsive UI, the app showcases generative AI capabilities, deployed via Vercel and Render.</span>
              </li>
              {/* <li>
                <i className="fa fa-calendar-o" />
                <span className="font-weight-700"> Start Date </span>:{" "}
                <span className="font-weight-400 uppercase">02/09/2022</span>
              </li>
              <li>
                <i className="fa fa-calendar-check-o" />
                <span className="font-weight-700"> End Date </span>:{" "}
                <span className="font-weight-400 uppercase">02/08/2023</span>
              </li> */}
              <li>
                <i className="fa fa-cogs" />{" "}
                <span className="font-weight-700"> Used Technologies</span> :{" "}
                <span className="font-weight-400 uppercase">
                  react, node.js, tailwind css, bcrypt, jwt, stripe
                </span>
              </li>
            </ul>
            <hr />
            <a
              href="https://imagify-virid.vercel.app/"
              className="waves-effect waves-light btn font-weight-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Preview <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-2"
        className={activeProject == 2 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          {/* <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img
              className="responsive-img"
              src="images/projects/elevateddetail.jpg"
              alt="project"
            />
          </div> */}
           <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <div className="videocontainer">
              {activeProject == 2 && (
                <iframe
                  className="youtube-video"
                  src="https://www.youtube.com/embed/q2dRAjYCSqk?si=yP0N8KSN4V3XYvpJ"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen=""
                />
              )}
            </div>
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Music Studio Web Design</h3>
            <ul className="project-details second-font">
              {/* <li>
                <i className="fa fa-user" />
                <span className="font-weight-700"> Purpose </span>:{" "}
                <span className="font-weight-400 uppercase">Web Design for a Client</span>
              </li> */}
               <li>
                <i className="fa fa-file-text-o" />
                <span className="font-weight-700"> Project Description </span>:{" "}
                <span className="font-weight-400">I built a professional website for a music studio client using a Webflow template, incorporating customizations to align with their branding and functional needs. The site features a dynamic layout, seamless navigation, and a booking system tailored to enhance the client’s online presence and user experience.</span>
              </li>
              <li>
                <i className="fa fa-cogs" />{" "}
                <span className="font-weight-700"> Used Technologies</span> :{" "}
                <span className="font-weight-400 uppercase">
                  webflow template (customized), html, css, javascript, seo optimization,
                  responsive design, e-commerce
                </span>
              </li>
            </ul>
            <hr />
            <a
              href="https://www.getelevatednow.com/"
              className="waves-effect waves-light btn font-weight-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Preview <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-3"
        className={activeProject == 3 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <div className="videocontainer">
              {activeProject == 3 && (
                <iframe
                  className="youtube-video"
                  src="https://www.youtube.com/embed/IfEHgBgf3cM?si=z6vplkGBFwuAVjBF"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen=""
                />
              )}
            </div>
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Realtor Web Design</h3>
            <ul className="project-details second-font">
              {/* <li>
                <i className="fa fa-user" />
                <span className="font-weight-700"> Purpose </span>:{" "}
                <span className="font-weight-400 uppercase">Web Design for a client</span>
              </li> */}
              <li>
                <i className="fa fa-file-text-o" />
                <span className="font-weight-700"> Project Description </span>:{" "}
                <span className="font-weight-400">I created a modern website for my realtor client using a Webflow template, enhanced with customizations to showcase their property listings and services. The site includes an intuitive layout, responsive design, and integrated contact features to streamline client inquiries and elevate their online presence.</span>
              </li>
              {/* <li>
                <i className="fa fa-calendar-o" />
                <span className="font-weight-700"> Start Date </span>:{" "}
                <span className="font-weight-400 uppercase">02/09/2022</span>
              </li>
              <li>
                <i className="fa fa-calendar-check-o" />
                <span className="font-weight-700"> End Date </span>:{" "}
                <span className="font-weight-400 uppercase">02/08/2023</span>
              </li> */}
              <li>
                <i className="fa fa-cogs" />{" "}
                <span className="font-weight-700"> Used Technologies</span> :{" "}
                <span className="font-weight-400 uppercase">
                webflow template (customized), html, css, javascript, seo optimization, responsive design, e-commerce                </span>
              </li>
            </ul>
            <hr />
            <a
              href="https://www.ketherealtor.com/"
              className="waves-effect waves-light btn font-weight-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Preview <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      <nav>
        {/* Previous Work Icon Starts */}
        <span
          className="control-button bl-previous-work"
          onClick={() =>
            activeProjectFunction(activeProject == 1 ? 1 : activeProject - 1)
          }
        >
          <i className="fa fa-angle-left" />
        </span>
        {/* Previous Work Icon Ends */}
        {/* Close Work Icon Starts */}
        <img
          alt="close"
          src="images/close-btn.png"
          className="control-button bl-icon-close"
          onClick={() => {
            showProjectFunction();
            activeProjectFunction(null);
          }}
        />
        {/* Close Work Icon Ends */}
        {/* Next Work Icon Starts */}
        <span
          className="control-button bl-next-work"
          onClick={() =>
            activeProjectFunction(
              activeProject == length ? 1 : activeProject + 1
            )
          }
        >
          <i className="fa fa-angle-right" />
        </span>
        {/* Previous Work Icon Ends */}
      </nav>
      {/* Portfolio Navigation Ends */}
    </div>
  );
};
export default memo(ProjectDetails);
