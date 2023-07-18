import React from "react";
import "../App.css";
import locationIcon from "../assets/location-pin.png";

export default function cards(props) {
  return (
    <div>
      <div className="card">
        <img src={props.img} className="card--image" />
        <div className="card--text">
          <div className="card--location">
            <img
              src={locationIcon}
              alt=""
              srcset=""
              className="card--location--pin"
            />
            <p>{props.location}</p>
            <a href={props.gps}>View on Google Maps</a>
          </div>
          <h1 className="card--placeName">{props.title}</h1>
          <br />
          <h4>{props.date}</h4>
          <br />
          <p className="card--description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
