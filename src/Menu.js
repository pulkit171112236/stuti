import React, { useState, useEffect } from "react";
import { titles } from "./static/data.js";
import achyutashtakam from "./media/Achyutashtakam.mp3";
import madhurashtakam from "./media/Madhurashtakam Vande Guru Paramparaam Sooryagayathri & Raghuram Manikandan.mp3";
import rudrashtakam from "./media/Uma Mohan Rudrashtakam.mp3";
import haristotram from "./media/G. Gayathri Devi, S. Saindhavi, Shruti Shree Hari Stotram.mp3";
import shivtandavstotram from "./media/Uma Mohan Shiva Tandava Stotram.mp3";
import shriramchandrakripalu from "./media/Sri Ramachandra Kripalu Vande Guru Paramparaam Sooryagayathri.mp3";
import shivashtakam from "./media/Sivashtakam Vande Guru Paramparaam Rahul Vellal.mp3";

const ref = {
  achyutashtakam,
  madhurashtakam,
  rudrashtakam,
  shriramchandrakripalu,
  shivashtakam,
};

function Menu(props) {
  //   const name = props.currSelection;
  var currSelection = props.currSelection;
  const titleArr = [];
  for (let key in titles) titleArr.push(key);
  return (
    <div className="menu">
      <Player currSelection={currSelection} />
      <div className="menu-list">
        {titleArr.map((name) => {
          const title = titles[name];
          return <Title name={name} title={title} />;
        })}
      </div>
    </div>
  );
}
function Title(props) {
  return (
    <p className="menu-item" id={props.name}>
      {props.title}
    </p>
  );
}
function Player(props) {
  return (
    <figure className="player-container">
      <audio className="audio-player" controls src={ref[props.currSelection]}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </figure>
  );
}
export default Menu;
