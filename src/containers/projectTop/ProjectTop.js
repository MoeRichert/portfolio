import React from "react";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import "./ProjectTop.css";

import Vulture from "./Vulture";
import Box from "./Box"

export default function ProjectTop(props) {
  const theme = props.theme;
  return (
        <div className="basic-projects">
            <div className="projects-heading-div">
                <Fade bottom duration={2000} distance="40px">
                    <div className="projects-heading-img-div">
                        <Box />
                    </div>
                </Fade>
              <div className="projects-heading-text-div">
                <Fade bottom duration={2000} distance="40px">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
                <Vulture theme={theme} />
                </Fade>
              </div>
            </div>
        </div>
        );
}