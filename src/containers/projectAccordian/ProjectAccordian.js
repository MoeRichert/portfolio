import React, { Component } from "react";
import { videos } from "../../portfolio";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import ProjectsData from "../../shared/opensource/projects.json";
import VideoCard from "../../components/videoCard/VideoCard.js";
import "./ProjectAccordian.css";
import { Accordion, Panel } from "baseui/accordion";

class ProjectAccordian extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="project-accord">
        <Accordion onChange={({ expanded }) => console.log(expanded)}>
              <Panel
                className="accord-panel"
                title="Repositories"
              >
                <div className="repo-cards-div-main">
                  {ProjectsData.data.map((repo) => {
                    return <GithubRepoCard repo={repo} theme={theme} key={repo.name} />;
                  })}
                </div>
                <Button
                  text={"More Projects"}
                  className="project-button"
                  href="https://github.com/moerichert"
                  newTab={true}
                  theme={theme}
                />
              </Panel>
              <Panel
                className="accord-panel"
                title="Example Videos"
              >
                    {videos.data.map((video) => {
                        return <VideoCard key={video.title} video={video} />;
                    })}
                    
              </Panel>
        </Accordion>
      </div>
    );
  }
}

export default ProjectAccordian;