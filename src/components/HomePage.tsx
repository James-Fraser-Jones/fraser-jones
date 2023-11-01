import { Link } from "react-router-dom";

import Banner from "./Banner";
import ProjectLink from "./ProjectLink";
import Content from "./Content";

import { ThemeContext, themes } from "../themes";

export default function Home() {
  return (
    <div>
      <Banner heading="James Fraser-Jones" subHeading="Software Engineer" subSubHeading="Birmingham, UK" />
      <Content>

        <ThemeContext.Provider value={themes.circuit}>
          <ProjectLink title="Circuit" to="projects/circuit">
            <p>
              An experimental circuit-diagram generator and evaluator for the Lambda calculus
            </p>
          </ProjectLink>
        </ThemeContext.Provider>
        
        <ThemeContext.Provider value={themes.frequency}>
          <ProjectLink title="Frequency" to="projects/frequency">
            <p>
              Frequency generator and experimentation with music theory concepts
            </p>
          </ProjectLink>
        </ThemeContext.Provider>

        <Link className="border-solid border-2 rounded-lg border-gray-400 p-4 block shadow-lg" to={`/`}>
          <p className="text-gray-400 text-center">
            more projects coming soon..
          </p>
        </Link>
        
      </Content>
    </div>
  );
}