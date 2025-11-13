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
    projectsData,
  } = useContext(Context);
  const [length, setLength] = useState(null);
  useEffect(() => {
    setLength(projectsData.length);
  }, [projectsData]);

  return (
    <div
      className={`bl-panel-items ${showProject ? "bl-panel-items-show" : ""}`}
      id="bl-panel-work-items"
    >
      {projectsData.map((project) => (
        <div
          data-panel={`panel-${project.id}`}
          className={activeProject == project.id ? "bl-show-work" : ""}
          key={project.id}
        >
          <div className="row">
            {/* Project Main Content Starts */}
            <div className="col s12 l6 xl6 section-padding section-padding-right-none">
              <img
                className="responsive-img"
                src={`images/projects/project-${project.id}.jpg`}
                alt={project.title}
              />
            </div>
            {/* Project Main Content Ends */}
            {/* Project Details Starts */}
            <div className="col s12 l6 xl6 section-padding">
              <h3 className="font-weight-700 uppercase">{project.title}</h3>
              <ul className="project-details second-font">
                <li>
                  <i className="fa fa-file-text-o" />
                  <span className="font-weight-700"> Project Description </span>
                  :{" "}
                  <span className="font-weight-400">{project.description}</span>
                </li>
                {project.loginDetails && (
                  <li>
                    <i className="fa fa-user" />{" "}
                    <span className="font-weight-700"> Login Details</span> :{" "}
                    <span className="font-weight-400">
                      {project.loginDetails}
                    </span>
                  </li>
                )}
                <li>
                  <i className="fa fa-cogs" />{" "}
                  <span className="font-weight-700"> Used Technologies</span> :{" "}
                  <span className="font-weight-400 uppercase">
                    {project.technologies.join(", ")}
                  </span>
                </li>
              </ul>
              <hr />
              <div className="project-links">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    className="waves-effect waves-light btn font-weight-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Preview <i className="fa fa-external-link" />
                  </a>
                )}
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    className="waves-effect waves-light btn font-weight-700"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: "10px" }}
                  >
                    GitHub Repo <i className="fa fa-github" />
                  </a>
                )}
              </div>
            </div>
            {/* Project Details Ends */}
          </div>
        </div>
      ))}
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
