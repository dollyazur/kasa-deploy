import React, { useState } from "react";
import "../Collapse/collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="collapse__title">{title}</h2>
        <button className="collapse__button">{isOpen ? "▲" : "▼"}</button>
      </div>
      <div className={`collapse__content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
