import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { experience } from "../../portfolio.js";
import { Accordion, Card } from "react-bootstrap";


class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord"   >
        <Accordion>
            {experience.sections.map((section) => {
                return (
                <Card
                    className="accord-panel"
                    title={section["title"]}
                    key={section["title"]}
                >
                    <Accordion.Toggle as={Card.Header} eventKey={section["id"]} style={{backgroundColor: theme.headerColor}}>
                        {section["title"]}
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey={section["id"]}>
                        <Card className="expCard" style={{backgroundColor: theme.compImgHighlight}} >
                            {section["experiences"].map((experience) => {
                                return (
                                    <ExperienceCard key={experience.title} experience={experience} theme={theme} />
                                );
                            })}
                        </Card>
                    </Accordion.Collapse>
                </Card>
                )
            })}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
