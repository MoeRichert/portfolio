import React, { Component } from 'react';
import "./VideoCard.css";
import { Fade } from "react-reveal";

class VideoCard extends Component {
  render() {
    const video = this.props.video;
    return (
        <div className="video-card-div" >
            <Fade bottom duration={2000} distance="40px">
                <div className="videoWrap" >
                        <iframe 
                            width="100%" height="100%"
                            src={video.link}
                            frameBorder="0"
                            allow="accelerometer;
                                   autoplay;
                                   encrypted-media;
                                   gyroscope;
                                   picture-in-picture"
                            allowFullScreen
                            title={video.title}>
                        </iframe>
                    </div>
            </Fade>
        </div>
    );
};
}

export default VideoCard;
