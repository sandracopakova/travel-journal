import React from "react";
import Navbar from "./components/Navbar";
import Destination from "./components/Destination";
import data from "./data";

export default function App() {
  const destinations = data.map((item) => {
    return (
      <Destination
        key={item.id}
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    );
  });
  return (
    <div className="wrapper">
      <div className="app">
        <Navbar />
        <div className="destinations">{destinations}</div>
      </div>
    </div>
  );
}
