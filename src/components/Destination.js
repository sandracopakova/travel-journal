import React from "react";
import locationLogo from "../images/location.svg";

export default function Destination(props) {
  return (
    <div className="destination">
      <img src={`/img/${props.imageUrl}`} className="destination__img" alt="" />
      <div className="destination__texts">
        <div className="destination__location">
          <img src={locationLogo} className="destination__icon" alt="" />
          <span className="destination__country">{props.location}</span>
          <a href={props.googleMapsUrl} className="destination__link">
            Google Maps
          </a>
        </div>
        <h2 className="destination__title">{props.title}</h2>
        <div className="destination__period">
          {props.startDate}
          <span>&nbsp;–&nbsp;</span>
          {props.endDate}
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
