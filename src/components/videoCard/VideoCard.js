import React, { Component } from 'react';
import "./VideoCard.css";

class VideoCard extends Component {
  render() {
    const video = this.props.video;
    return (
        <div>
            <div>
                    <iframe 
                        width="560" height="315"
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
        </div>
    );
};
}

export default VideoCard;
