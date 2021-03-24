import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectTop from "../../containers/projectTop/ProjectTop";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./Projects.css";
import ProjectAccordian from "../../containers/projectAccordian/ProjectAccordian"

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <ProjectTop theme={theme} />
            <Fade bottom duration={2000} distance="40px">
                <ProjectAccordian theme={theme} />
            </Fade>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
