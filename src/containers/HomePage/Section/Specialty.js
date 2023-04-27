import React, { Component } from "react";
import { connect } from "react-redux";

import Slider from "react-slick";

class Specialty extends Component {
  render() {
    return (
      <div className="section-share section-specialty">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Chuyen khoa pho bien</span>
            <button className="btn-section">xem them</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Co xuong khop 1</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Co xuong khop 2</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Co xuong khop 3</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Co xuong khop 4</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Co xuong khop 5</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty" />
                <div>Co xuong khop 6</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

export default connect(mapStateToProps)(Specialty);
