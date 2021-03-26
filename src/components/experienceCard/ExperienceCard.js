import React, { Component } from "react";
import "./ExperienceCard.css";
import Auburn from "./Auburn";
import MP from "./MP";
import BREC from "./BREC";
import Colman from "./Colman";
import D20 from "./D20";
import GBOS from "./GBOS";
import SERC from "./SERC";
import SV from "./SV";
import Tt from "./Tt";
import Usfs from "./Usfs";

function GetSvg(props) {
  if (props.logo === "MP")
    return <MP />;
  else if (props.logo === "BREC")
    return <BREC />;
  else if (props.logo === "colman")
    return <Colman />;
  else if (props.logo === "d20")
    return <D20 />;
  else if (props.logo === "GBOS")
    return <GBOS />;
  else if (props.logo === "SERC")
    return <SERC />;
  else if (props.logo === "SV")
    return <SV />;
  else if (props.logo === "tt")
    return <Tt />;
  else if (props.logo === "usfs")
    return <Usfs />;
  return <Auburn />;
}

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    return (
      <div
        className="experience-card"
        style={{ backgroundColor: theme.body, border: `1px solid ${experience["color"]}` }}
      >
        <div className="experience-card-logo-div" style={{backgroundColor: theme.compImgHighlight}}>
          <GetSvg logo={experience.logo_path} />
        </div>
        <div className="experience-card-body-div">
          <div className="experience-card-header-div">
            <div className="experience-card-heading-left">
              <h3
                className="experience-card-title"
                style={{ color: theme.text }}
              >
                {experience["title"]}
              </h3>
              <p
                className="experience-card-company"
                style={{ color: theme.text }}
              >
                <a
                  href={experience["company_url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.jHighlight }}
                >
                  {experience["company"]}
                </a>
              </p>
            </div>
            <div className="experience-card-heading-right">
              <p
                className="experience-card-duration"
                style={{ color: theme.secondaryText }}
              >
                {experience["duration"]}
              </p>
              <p
                className="experience-card-location"
                style={{ color: theme.secondaryText }}
              >
                {experience["location"]}
              </p>
            </div>
          </div>
          <p
            className="experience-card-description"
            style={{ color: theme.text }}
          >
            {experience["description"]}
          </p>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
