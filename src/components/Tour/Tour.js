import React, { Component } from "react";
import "./Tour.scss";

class Tour extends Component {
  //   state = {};

  render() {
    return (
      <article className="tour">
        <div className="img-container">
          <img
            src="https://images.pexels.com/photos/2440013/pexels-photo-2440013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="/"
          />
          <span className="close-btn">
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>city</h3>
          <h4>name</h4>
          <h5>
            info
            <span>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
            molestiae officiis asperiores nisi ad alias!
          </p>
        </div>
      </article>
    );
  }
}

export default Tour;
