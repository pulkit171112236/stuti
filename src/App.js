import React, { useState } from "react";
import Stotra from "./Stotra.js";
import Menu from "./Menu.js";

function App() {
  // const home = "shivashtakam"
  // const home = "achyutashtakam"
  const [home, setHome] = useState("achyutashtakam");
  document.addEventListener("click", (e) => handleClick(e, setHome));
  return (
    <div className="page">
      <Menu currSelection={home} />
      <Stotra name={home} />
    </div>
  );
}
export default App;

const handleClick = (e, setHome) => {
  if (e.target.className === "menu-item") {
    setHome(e.target.id);
  }
};
