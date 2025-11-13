import { memo, useCallback, useContext, useEffect } from "react";
import { Context } from "../context/context";
import { directionHover } from "../utils";
import SectionContainer from "./SectionContainer";

const Portfolio = () => {
  const { showProjectFunction, activeProjectFunction, projectsData } =
    useContext(Context);
  useEffect(() => {
    directionHover();
  }, []);

  const activeShowProject = useCallback((value) => {
    showProjectFunction();
    activeProjectFunction(value);
  }, []);

  return (
    <SectionContainer
      sectionName="work"
      title={{ first: "my ", last: "portfolio" }}
    >
      <div className="bl-content">
        {/* Main Heading Starts */}
        <div className="container page-title center-align">
          <h2 className="center-align">
            <span data-hover="my">my </span>{" "}
            <span data-hover="portfolio"> portfolio</span>
          </h2>
        </div>
        {/* Main Heading Ends */}
        <div className="container">
          {/* Divider Starts */}
          <div className="divider center-align">
            <span className="outer-line" />
            <span className="fa fa-suitcase" aria-hidden="true" />
            <span className="outer-line" />
          </div>
          <div className="row center-align da-thumbs" id="bl-work-items">
            {projectsData.map((project) => (
              <div
                className="col s12 m6 l6 xl4"
                data-panel={`panel-${project.id}`}
                key={project.id}
              >
                <a href="#" onClick={() => activeShowProject(project.id)}>
                  <img
                    className="responsive-img"
                    src={`images/projects/project-${project.id}.jpg`}
                    alt={project.title}
                  />
                  <div className="valign-wrapper">
                    <span className="font-weight-700 uppercase">
                      {project.title}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default memo(Portfolio);
