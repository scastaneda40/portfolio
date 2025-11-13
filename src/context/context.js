import { createContext, useCallback, useReducer } from "react";

const type = {
  NAV: "NAV",
  COLOR: "COLOR",
  SHOWPROJECT: "SHOWPROJECT",
  ACTIVEPROJECT: "ACTIVEPROJECT",
};

const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case type.NAV:
      return {
        ...state,
        nav: action.payload,
      };
    case type.COLOR:
      return {
        ...state,
        color: action.payload,
      };
    case type.SHOWPROJECT:
      return {
        ...state,
        showProject: !state.showProject,
      };
    case type.ACTIVEPROJECT:
      return {
        ...state,
        activeProject: action.payload,
      };
    default:
      return state;
  }
};

const State = (props) => {
  const initialState = {
    nav: null,
    color: "goldrenrod",
    showProject: false,
    activeProject: null,
    projectsData: [
      {
        id: 1,
        title: "Memento App",
        description:
          "Memento° is a cross-platform memory-wall experience for web and Apple Vision Pro (VisionOS), enabling users to capture, arrange, and relive cherished memories in immersive 3D space. It features a spatial wall interface for drag-and-drop placement of 'mementos' and persistent pose memory across sessions. The app also includes dynamic reordering/deletion of mementos and an automated build pipeline for rapid iteration.",
        technologies: ["Three.js", "WebSpatial", "React.js", "Vercel", "Vite"],
        liveLink: "https://apps.apple.com/us/app/memento/id6753330008",
        codeLink: null, // Private repository
      },
      {
        id: 2,
        title: "3D Asset Viewer",
        description:
          "The 3D Asset Viewer is an interactive React + TypeScript web application built with Vite, providing a performant interface for browsing, visualizing, and simulating operations on 3D models. It allows users to browse and filter sample 3D assets, preview models in an interactive 3D scene, and adjust level of detail and simulate compression. The project demonstrates scalable management of 3D content and interaction with 3D rendering libraries.",
        technologies: [
          "React",
          "TypeScript",
          "Vite",
          "@react-three/fiber",
          "@react-three/drei",
          "Three.js",
        ],
        liveLink: "https://3d-asset-murex.vercel.app/",
        codeLink: "https://github.com/scastaneda40/3d-asset",
      },
      {
        id: 3,
        title: "StreamLab",
        description:
          "StreamLab is a simulated media-processing dashboard, providing a user-friendly interface to manage and monitor a simulated media pipeline. It demonstrates key concepts in distributed systems, asynchronous processing, and modern web development, showcasing job lifecycle management and real-time status updates. The application is a full-stack solution with a React frontend and Node.js Express backend, leveraging AWS services for robust and scalable operations.",
        technologies: [
          "React.js",
          "TypeScript",
          "Vite",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "AWS SDK v3",
          "Amazon DynamoDB",
          "Amazon S3",
          "Amazon SQS",
        ],
        liveLink: "https://streamlab.onrender.com/",
        codeLink: "https://github.com/scastaneda40/StreamLab",
      },
      {
        id: 4,
        title: "Streaming Issue Dashboard",
        description:
          "This project is a sophisticated issue tracking dashboard for IT teams to manage and triage issues across various streaming platforms. It features comprehensive issue listing, advanced filtering and sorting, detailed issue views, and full issue lifecycle management including creation, updates, comments, and deletion. The application also includes a basic authentication system and a responsive user interface.",
        loginDetails: "Test Login: username `admin`, password `password`",
        technologies: [
          "Next.js",
          "React",
          "TypeScript",
          "Chakra UI",
          "Tailwind CSS",
          "Apollo Client",
          "Node.js",
          "Apollo Server",
          "Express.js",
          "GraphQL",
        ],
        liveLink: "https://chipper-nasturtium-05fed4.netlify.app/",
        codeLink:
          "https://github.com/scastaneda40/streaming-issue-dashboard-frontend",
      },
      {
        id: 5,
        title: "AI Image Generator App",
        description:
          "This project is an AI Image Generator App. It allows users to generate images based on text prompts using artificial intelligence. The application provides a user-friendly interface for inputting descriptions and receiving unique, AI-generated visuals.",
        technologies: [
          "React",
          "Node.js",
          "Express",
          "OpenAI API",
          "Cloudinary",
        ],
        liveLink: "https://imagify-virid.vercel.app/",
        codeLink: "https://github.com/scastaneda40/imagify",
      },
      {
        id: 6,
        title: "WebGPU Particles: GPU vs. CPU Simulation",
        description:
          "This project demonstrates a particle simulation running on both the CPU (JavaScript) and the GPU (WebGPU), highlighting the performance benefits of offloading computation to the GPU. It's designed to be a learning resource for frontend engineers transitioning into WebGPU. Features: GPU Compute (particle physics simulation executed entirely on the GPU using WebGPU compute shaders), CPU Fallback (option to run the same particle physics on the CPU using JavaScript for comparison), Interactive UI (controls for toggling between GPU/CPU, adjusting particle count, and simulation iterations), FPS Counter (real-time frames per second display), Responsive Canvas (the simulation canvas automatically resizes to fit the display).",
        technologies: [
          "WebGPU",
          "WGSL (WebGPU Shading Language)",
          "TypeScript",
          "Vite",
        ],
        liveLink: "https://webgpu-particles-ten.vercel.app/",
        codeLink: "https://github.com/scastaneda40/WebGPU-Particles",
      },
    ],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSection = useCallback((value) => {
    dispatch({
      type: type.NAV,
      payload: value,
    });
  }, []);

  const closeSection = useCallback(() => {
    dispatch({
      type: type.NAV,
      payload: null,
    });
  }, []);

  const getColor = useCallback((value) => {
    let color = localStorage.getItem("color");
    document.documentElement.style.setProperty(
      "--main-color",
      color ? color : value
    );
    dispatch({
      type: type.COLOR,
      payload: color ? color : value,
    });
  }, []);

  const colorChange = useCallback((value) => {
    document.documentElement.style.setProperty("--main-color", value);
    localStorage.setItem("color", value);
    dispatch({
      type: type.COLOR,
      payload: value,
    });
  }, []);

  // Project view
  const showProjectFunction = useCallback(() => {
    dispatch({
      type: type.SHOWPROJECT,
    });
  }, []);

  const activeProjectFunction = useCallback((value) => {
    dispatch({
      type: type.ACTIVEPROJECT,
      payload: value,
    });
  }, []);

  const { color, nav, activeProject, showProject, projectsData } = state;

  return (
    <Context.Provider
      value={{
        openSection: openSection,
        closeSection: closeSection,
        nav,
        colorChange: colorChange,
        getColor: getColor,
        color,
        // project
        showProjectFunction: showProjectFunction,
        activeProjectFunction: activeProjectFunction,
        activeProject,
        showProject,
        projectsData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;

export { Context };
