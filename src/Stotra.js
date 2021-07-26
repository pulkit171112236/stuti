import React from "react";
import { titles, data } from "./static/textdata.js";

function Stotra(props) {
  let key = props.name;
  const title = titles[key] || "--स्तुति--";
  const stotra = data[key] || [];
  return (
    <div className="stotra">
      <div className="title">
        <h1 className="title-head">{title}</h1>
      </div>
      <div className="stotra-content">
        {stotra.map((verse) => {
          return <Verse verse={verse} />;
        })}
        <footer></footer>
      </div>
    </div>
  );
}

function Verse(props) {
  return (
    <div className="verse-item">
      <h3>{props.verse.first}</h3>
      <h3>{props.verse.second}</h3>
    </div>
  );
}

export default Stotra;
