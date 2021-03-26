import React, { Component } from "react";
import { videos } from "../../portfolio";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import ProjectsData from "../../shared/opensource/projects.json";
import VideoCard from "../../components/videoCard/VideoCard.js";
import "./ProjectAccordian.css";
import { Accordion, Card } from "react-bootstrap";

class ProjectAccordian extends Component {
    render() {
    const theme = this.props.theme;
    return (
      <div className="project-accord">
        <Accordion>
                <Card
                    className="accord-panel"
                    title="Repositories"
                >
                    <Accordion.Toggle as={Card.Header} eventKey="0" style={{backgroundColor: theme.headerColor}}>
                        Repositories
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0"  style={{backgroundColor: theme.compImgHighlight}}>
                        <Card className="repo-cards-div-main"  style={{backgroundColor: theme.compImgHighlight}} >
                            {ProjectsData.data.map((repo) => {
                                return <GithubRepoCard repo={repo} theme={theme} key={repo.name} />;
                            })}
                        </Card>
                    </Accordion.Collapse>
                </Card>
                <Card
                    className="accord-panel"
                    title="Example Videos"
                >
                    <Accordion.Toggle as={Card.Header} eventKey="1" style={{backgroundColor: theme.headerColor}}>
                        Example Videos
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1">
                        <Card style={{backgroundColor: theme.compImgHighlight}} >
                            {videos.data.map((video) => {
                                return <VideoCard key={video.title} video={video} />;
                            })}
                        </Card>
                    </Accordion.Collapse>
                </Card>
        </Accordion>
      </div>
    );
  }
}

export default ProjectAccordian;

