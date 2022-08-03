import React from "react";
import "./Container.css";
import Current from "./Current";
import Forecast from "./Forecast";
import Search from "./Search";

export default function Container() {
  return (
    <div className="container">
      <Search />
      <Current />
      <Forecast />
    </div>
  );
}
