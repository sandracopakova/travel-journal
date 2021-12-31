import React from "react";
import locationLogo from "../images/location.svg";

export default function Destination(props) {
  return (
    <div className="destinations-list__item">
      <img src={`/img/${props.imageUrl}`} className="destinations-list__item--img" />
      <div>
        <div className="destinations-list__item--texts">
          <img src={locationLogo} alt="" className=""/>
          {props.location}
          {props.googleMapsUrl}
        </div>
        <h2>{props.title}</h2>
        <div>
          {props.startDate}
          {props.endDate}
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
