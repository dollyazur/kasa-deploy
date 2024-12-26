import React, { useState } from "react";
import "../Collapse/collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="collapse__title">{title}</h2>
        <button
          className={`collapse__button ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div className={`collapse__content ${isOpen ? "open" : ""}`}>
        <div className="collapse__text">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;
