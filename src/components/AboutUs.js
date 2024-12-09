import Link from "next/link";
import { Fragment, memo, useMemo, useState } from "react";
import useWindowSize from "../useWindowSize";
import SectionContainer from "./SectionContainer";

const Experience = () => (
  <Fragment>
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa fa-briefcase" /> Experience
      </div>
    </div>
    {/* Experience Header Title Ends */}
    {/* Experience Content Starts */}
    <div className="resume-card-body experience">
      <div className="resume-card-body-container second-font">
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Front-End Web Expert - </span>Booz Allen Hamilton
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 2023 - Current
          </span>
          <p>
          Led the design and implementation of scalable, secure web-based applications for government clients, 
          completed a WordPress redesign in 3 months (75% faster than the previous timeline) and increased accessibility compliance by 20%.
          </p>
        </div>
        {/* Single Experience Ends */}
        <span className="separator" />
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Full Stack Engineer - </span>Littera Education
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 2022 - 2023
          </span>
          <p>
          Developed a reusable component library using React, Storybook, and Emotion to streamline 
          UI consistency across teams. Contributed to a tutoring platform serving over 50,000 students, 
          ensuring high code quality by maintaining 100% test coverage with a test-driven development (TDD) approach.
          </p>
        </div>
        {/* Single Experience Ends */}
        <span className="separator" />
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Software Engineer - </span>FortyAU
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 2021 - 2022
          </span>
          <p>
          Collaborated with three engineers to maintain WordPress sites for over 200 funeral homes, resolving over 
          50 high-priority bug tickets to significantly reduce client downtime. Contributed to an education platform 
          for the United Methodist Church, serving over 1,000 concurrent users, and mentored two junior developers while 
          delivering a high-priority standalone WordPress site through pair programming
          </p>
        </div>
        <span className="separator" />
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Front-End Web Developer (Contract) - </span>CorrDyn
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 2021 - 2022
          </span>
          <p>
          Created 10 reusable components for a React-based application serving an NFL agent, 
          integrating data from 22 professional football leagues. Optimized site interactions 
          and developed a mobile-friendly interface to improve cross-platform performance.
          </p>
        </div>
        <span className="separator" />
        <div className="resume-content">
          <h6 className="uppercase">
            <span>JavaScript Teacher/Coach - </span>Pivot Tech
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 2020 - 2021
          </span>
          <p>
          Taught adult students JavaScript fundamentals, React, Python, and Django, preparing 
          them for real-world coding challenges. Designed and delivered an industry-aligned curriculum, 
          focusing on asynchronous programming and modern frameworks.
          </p>
        </div>


        {/* Single Experience Ends */}
      </div>
    </div>
  </Fragment>
);
const Education = () => (
  <Fragment>
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa fa-graduation-cap" /> Education
      </div>
    </div>
    {/* Education Header Title Starts */}
    <div className="resume-card-body education">
      <div className="resume-card-body-container second-font">
        {/* Single Education Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Full Stack Development Certficate - </span>Nashville Software School
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 2020 - 2021
          </span>
          <p>
          Completed an intensive program focused on JavaScript, React, Python, 
          and Django, with an emphasis on building scalable, user-friendly applications.
          </p>
        </div>
        {/* Single Education Ends */}
        <span className="separator" />
        {/* Single Education Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Master's in Music Education - </span>Westminster Choir College
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 2013 - 2015
          </span>
          <p>
          Earned a graduate degree specializing in innovative teaching methods and music theory, 
          preparing students for creative and academic success.
          </p>
        </div>
        {/* Single Education Ends */}
        <span className="separator" />
        {/* Single Education Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Bachelor's in Piano Performance - </span>Hampton University
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 2007 - 2012
          </span>
          <p>
          Graduated with a strong foundation in classical piano performance, 
          music theory, and artistic collaboration.
          </p>
        </div>
        {/* Single Education Ends */}
      </div>
    </div>
  </Fragment>
);
const Skills = () => (
  <Fragment>
    {/* Skills Header Title Starts */}
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa fa-star" /> Skills
      </div>
    </div>
    {/* Skills Header Title Starts */}
    <div className="resume-card-body skills">
      <div className="resume-card-body-container second-font">
        <div className="row">
          {/* Skills Row Starts */}
          <div className="col s6">
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">html</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">javascript</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star-half-empty" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">css</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star-half-empty" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">react</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star-o" />{" "}
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">wordpress</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">typescript</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star-o" />{" "}
                <i className="fa fa-star-o" />
              </p>
            </div>
            <div className="resume-content">
              <h6 className="uppercase">jira</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star-o" />{" "}
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
          </div>
          {/* Skills Row Ends */}
          {/* Skills Row Starts */}
          <div className="col s6">
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">django</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star-half-empty" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">node.js</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />{" "}
                <i className="fa fa-star-half-empty" />{" "}
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">figma</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">aws</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Webflow</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Storybook</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />{" "}
                <i className="fa fa-star-half-empty" />{" "}
                <i className="fa fa-star-o" />
              </p>
            </div>
            <div className="resume-content">
              <h6 className="uppercase">mongo db</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />{" "}
                <i className="fa fa-star-half-empty" />{" "}
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
          </div>
          {/* Skills Row Ends */}
        </div>
      </div>
    </div>
  </Fragment>
);

const AboutUs = ({ dark }) => {
  const [active, setActive] = useState(0);
  const { width } = useWindowSize();

  const activeState = useMemo(() => ({ active, setActive }), [active]);

  return (
    <SectionContainer
      sectionName="About"
      title={{ first: "About", last: "ME" }}
    >
      <div className="bl-content">
        {/* Main Heading Starts */}
        <div className="container page-title custom-page-title">
          <h2 className="center-align">
            <span>About</span> <span>Me</span>
          </h2>
        </div>
        {/* Main Heading Ends */}
        <div className="container infos">
          {/* Divider Starts */}
          <div className="divider center-align">
            <span className="outer-line" />
            <span className="fa fa-vcard" aria-hidden="true" />
            <span className="outer-line" />
          </div>
          {/* Divider Ends */}
          {/* Personal Informations Starts */}
          <div className="row">
            {/* Picture Starts */}
            <div className="col s12 m4 profile-picture show-on-medium-and-down section-padding">
              <img
                src="images/men.jpg"
                className="responsive-img my-picture"
                alt="My Photo"
              />
            </div>
            {/* Picture Ends */}
            <div className="col s12 m8 l12 xl12 personal-info section-padding">
              <h6 className="uppercase">
                <i className="fa fa-user" /> Bio
              </h6>
              <div className="col m12 l12 xl9 p-none">
                <p className="second-font">
              <p>Hi there! I’m Stephen, a front-end software engineer with a twist—I started my career as a music educator with a Master’s degree in Music Education. These days, I channel that same creativity and attention to detail into crafting sleek, user-friendly web applications with React, JavaScript, and TypeScript.</p>

<p>From designing accessible websites for government clients to building dynamic component libraries, I thrive on turning ideas into functional, scalable solutions. Collaboration is my thing, whether it’s with designers, developers, or cross-functional teams.</p>

<p>When I’m not coding, you can find me creating music, exploring new tech tools, or soaking up the vibrant energy of Los Angeles. My approach combines artistry with engineering to deliver digital experiences that truly resonate.</p>

                </p>
              </div>
              <div className="col s12 m12 l6 p-none">
  <ul className="second-font list-1">
    <li style={{ marginTop: "20px" }}>
      <a href="/StephenCastanedaDevRes.pdf" className="btn font-weight-700" download>
        Download Resume <i className="fa fa-file-pdf-o" />
      </a>
    </li>
  </ul>
</div>

              <div className="col s12 m12 l6 p-none">
                <ul className="second-font list-2">
                  <li>
                    <span className="font-weight-700">Phone: </span>310-901-9100
                  </li>
                  <li>
                    <span className="font-weight-700">Location: </span>
                    Los Angeles, California
                  </li>
                  <li>
                    <span className="font-weight-700">Email: </span>
                    stephen.castaneda40@gmail.com
                  </li>
                </ul>
              </div>
             
              {/* <Link href={`/blog-${dark ? "dark" : "light"}`}>
                <a className="btn btn-blog font-weight-700">
                  My Blog <i className="fa fa-edit" />
                </a>
              </Link> */}
            </div>
          </div>
          {/* Personal Informations Ends */}
        </div>
        {/* Resume Starts */}
        <div className="resume-container">
          <div className="container">
            <p style={{ display: "none" }}>{width}</p>
            <div className="valign-wrapper row">
              {/* Resume Menu Starts */}
              <div className="resume-list col l4 section-padding">
                <div
                  className={`resume-list-item ${
                    activeState.active === 0 ? "is-active" : ""
                  }`}
                  data-index={0}
                  id="resume-list-item-0"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(0)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <i className="fa fa-briefcase" /> Experience
                    </h6>
                  </div>
                </div>
                <div
                  className={`resume-list-item ${
                    activeState.active === 1 ? "is-active" : ""
                  }`}
                  data-index={1}
                  id="resume-list-item-1"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(1)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <i className="fa fa-graduation-cap" /> Education
                    </h6>
                  </div>
                </div>
                <div
                  className={`resume-list-item ${
                    activeState.active === 2 ? "is-active" : ""
                  }`}
                  data-index={2}
                  id="resume-list-item-2"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(2)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <i className="fa fa-star" /> Skills
                    </h6>
                  </div>
                </div>
              </div>
              {/* Resume Menu Ends */}
              {/* Resume Content Starts */}
              {width < 800 ? (
                <div className="col s12 m12 l8 resume-cards-container section-padding">
                  <div className="resume-cards">
                    <div className="resume-card resume-card-0">
                      <Experience />
                    </div>
                    <div className="resume-card resume-card-1">
                      <Education />
                    </div>
                    <div className="resume-card resume-card-2">
                      <Skills />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col s12 m12 l8 resume-cards-container section-padding">
                  <div className="resume-cards">
                    {/* Experience Starts */}
                    <div
                      className={`resume-card resume-card-0 ${
                        activeState.active == 0
                          ? "front"
                          : activeState.active == 2
                          ? "back"
                          : "back-back"
                      }`}
                      onClick={() => activeState.setActive(0)}
                      data-index={0}
                    >
                      <Experience />
                    </div>
                    {/* Experience Ends */}
                    {/* Education Starts */}
                    <div
                      className={`resume-card resume-card-1 ${
                        active == 1
                          ? "front"
                          : active == 0
                          ? "back"
                          : "back-back"
                      }`}
                      data-index={1}
                      onClick={() => activeState.setActive(1)}
                    >
                      <Education />
                    </div>
                    {/* Education Ends */}
                    {/* Skills Starts */}
                    <div
                      className={`resume-card resume-card-2 ${
                        active == 2
                          ? "front"
                          : active == 1
                          ? "back"
                          : "back-back"
                      }`}
                      data-index={2}
                      onClick={() => activeState.setActive(2)}
                    >
                      <Skills />
                    </div>
                    {/* Skills Ends */}
                  </div>
                </div>
              )}

              {/* Resume Content Ends */}
            </div>
          </div>
        </div>
        {/* Resume Ends */}
        {/* Fun Facts Starts */}
        <div className="container badges">
          <div className="row">
            {/* Fact Badge Item Starts */}
            <div className="col s12 m4 l4 center-align">
              <h3>
                <i className="fa fa-briefcase" />
                <span className="font-weight-900">5+</span>
              </h3>
              <h6 className="uppercase font-weight-700">Years Experience</h6>
            </div>
            {/* Fact Badge Item Ends */}
            {/* Fact Badge Item Starts */}
            <div className="col s12 m4 l4 center-align">
              <h3>
                <i className="fa fa-handshake-o" />
                <span className="font-weight-900">89+</span>
              </h3>
              <h6 className="uppercase font-weight-700">Done Projects</h6>
            </div>
            {/* Fact Badge Item Ends */}
            {/* Fact Badge Item Starts */}
            <div className="col s12 m4 l4 center-align">
              <h3>
                <i className="fa fa-heart-o" />
                <span className="font-weight-900">77+</span>
              </h3>
              <h6 className="uppercase font-weight-700">Happy customers</h6>
            </div>
            {/* Fact Badge Item Ends */}
          </div>
        </div>
        {/* Fun Facts Ends */}
      </div>
    </SectionContainer>
  );
};
export default memo(AboutUs);
