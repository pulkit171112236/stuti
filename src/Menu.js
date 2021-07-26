import React from "react";
import { titles } from "./static/textdata.js";
import { audioFiles } from "./static/audiodata";

function Menu(props) {
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
  let currAudio = audioFiles[props.currSelection];
  console.log(currAudio);
  return (
    <figure className="player-container">
      <audio className="audio-player" controls src={currAudio}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </figure>
  );
}
export default Menu;
