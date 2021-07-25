import React from "react";
import { titles, data } from "./static/data.js";

function Stotra(props) {
  let key = props.name;
  if (!data[key]) return <h1>Error</h1>;
  const title = titles[key];
  const stotra = data[key];
  return (
    <div className="stotra">
      <h1 className="title">{title}</h1>
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
