import React from "react";

export default function Destination(props) {
  return (
    <div className="destionation__item">
      <img src={`/img/${props.imageUrl}`} className="destination__item--img" />
      <div>
        <div>
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
