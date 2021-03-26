import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";
import Auburn from "./Auburn";
import WISC from "./WISC";

function GetSvg(props) {
  if (props.logo === "wisc")
    return <WISC />;
  return <Auburn />;
}

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <div key={degree.logo_path} className="degree-card">
        <Flip left duration={2000}>
          <div className="card-img" style={{backgroundColor: theme.compImgHighlight}}>
            <GetSvg logo={degree.logo_path}/>
          </div>
        </Flip>
        <Fade right duration={2000} distance="40px">
          <div className="card-body">
            <div
              className="body-header"
              style={{ backgroundColor: theme.headerColor }}
            >
              <div className="body-header-title">
                <h2 className="card-title" style={{ color: theme.text }}>
                  {degree.title}
                </h2>
                <h3 className="card-subtitle" style={{ color: theme.text }}>
                  {degree.subtitle}
                </h3>
              </div>
              <div className="body-header-duration">
                <h3 className="duration" style={{ color: theme.text }}>
                  {degree.duration}
                </h3>
              </div>
            </div>
            <div className="body-content">
              {degree.descriptions.map((sentence) => {
                return (
                  <p key={sentence} className="content-list" style={{ color: theme.text }}>
                    {sentence}
                  </p>
                );
              })}
              <a
                href={degree.website_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="visit-btn"
                  style={{ backgroundColor: theme.headerColor }}
                >
                  <p className="btn" style={{ color: theme.text }}>
                    Visit Website
                  </p>
                </div>
              </a>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default DegreeCard;
