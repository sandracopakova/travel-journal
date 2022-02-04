import React from "react";
import locationLogo from "../images/location.svg";

export default function Destination(props) {
  return (
    <div className="destinations-item">
      <img src={`/img/${props.imageUrl}`} className="destinations-item__img" alt=""/>
      <div className="destinations-item__content destinations-content">
        <div className="destinations-content__texts destinations-content-header">
          <img src={locationLogo} alt="" className="" />
          <span className="destinations-content-header__location">{props.location}</span>
          <a href={props.googleMapsUrl} className="destinations-content-header__link">
            View on Google Maps
          </a>
        </div>
        <h2 className="destinations-content__heading">{props.title}</h2>
        <div className="destinations-content__dates">
          {props.startDate}
          <span>-</span>
          {props.endDate}
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
