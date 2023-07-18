import React from "react";
import "../App.css";
import Card from "./Cards";
import dataArray from "./data";

export default function cardsSetter() {
  const dataElements = dataArray.map((data) => {
    // console.log(data.location);
    return (
      <Card
        key={data.id}
        location={data.location}
        title={data.title}
        date={data.date}
        description={data.description}
        img={data.img}
        gps={data.gps}
      />
    );
  });

  return dataElements;
}
