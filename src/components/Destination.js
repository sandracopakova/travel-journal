import React from "react";
import locationLogo from "../images/location.svg";

export default function Destination(props) {
  return (
    <div className="destinations-list__item">
      <img src={`/img/${props.imageUrl}`} className="destinations-list__item--img" />
      <div>
        <div className="destinations-list__item--texts">
          <img src={locationLogo} alt="" className="" />
          <span className="destinations-list__item--texts--location">{props.location}</span>
          <a href={props.googleMapsUrl} className="destinations-list__item--texts--link">View on Google Maps</a>
        </div>
        <h2>{props.title}</h2>
        <div className="destinations-list__item--dates">
          {props.startDate}
          <span>-</span>
          {props.endDate}
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
