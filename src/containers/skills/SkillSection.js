import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import MoeAdventureImg from "./MoeAdventureImg";
import CatfishImg from "./CatImg";
import CartImg from "./CartImg";
import RatImg from "./RatImg";
import MoeDevImg from "./MoeDevImg";
import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "MoeAdventureImg")
    return <MoeAdventureImg theme={props.theme} />;
  else if (props.fileName === "CatImg")
    return <CatfishImg theme={props.theme} />;
  else if (props.fileName === "CartImg")
    return <CartImg theme={props.theme} />;
  else if (props.fileName === "MoeDevImg")
    return <MoeDevImg theme={props.theme} />;
  else if (props.fileName === "RatImg")
    return <RatImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div key={skill.title} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p key={skillSentence}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
