import React, { useState } from "react";
import Stotra from "./Stotra.js";
import Menu from "./Menu.js";

function App() {
  const [home, setHome] = useState("omnamahshivay");
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
  let el = e.target;
  if (el.className === "menu-item") {
    setHome(el.id);
    el.parentElement.classList.remove("menu-list-active");
  } else if (el.className === "title-head") {
    document.querySelector(".menu-list").classList.add("menu-list-active");
  }
};
