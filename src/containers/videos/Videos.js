import React, { Component } from 'react';
import { videos } from "../../portfolio";
import VideoCard from "../../components/videoCard/VideoCard.js";
import Collapsible from "../../components/collapse/Collapse";
import { Fade } from "react-reveal";

class Videos extends Component {
  render() {
    return (
      <div className="main" id="videos">
                <div className="videoProjects">
                    <Fade bottom duration={2000} distance="40px">
                        <Collapsible title="Example Videos"  >
                            <div className="educations-body-div">
                                {videos.data.map((video) => {
                                    return <VideoCard video={video} />;
                                })}
                            </div>
                        </Collapsible>
                    </Fade>
                </div>
      </div>
    );
  }
}

export default Videos;