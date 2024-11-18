import React, { useState } from "react";
import "./accordion.css";
import imageDown from "./images/down-arrow.svg";
import imageUp from "./images/up-chevron.svg";

export default function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={isOpen ? "active" : "default"} onClick={handleIsOpen}>
        {title}
        {isOpen ? (
          <img src={imageUp} width="15px" className="img" alt="arow up" />
        ) : (
          <img src={imageDown} width="15px" className="img" alt="arow down" />
        )}
      </div>

      {isOpen && <div className="content">{content}</div>}
    </div>
  );
}
