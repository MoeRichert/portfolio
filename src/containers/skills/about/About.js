import React from "react";
import "./About.css";
import { aboutme } from "../../../portfolio";
import { Fade } from "react-reveal";
import InterpMoe from "./InterpMoe";

export default function About(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="about-main" id="greeting">
        <div className="aboutme-main">
          <div className="aboutme-text-div" style={{ color: theme.secondaryText }}>
            <div>
              <p className="aboutme-text-p line1">
                {aboutme.line1}
              </p>
              <p className="aboutme-text-p line1">
                {aboutme.line2}
              </p>
            </div>
          </div>
          <div className="aboutme-image-div">
            <InterpMoe theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
