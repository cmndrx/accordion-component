import React, { useState } from "react";

const AccordianItem = ({ num, title, curOpen, setCurOpen, children }) => {
  const isOpen = num === curOpen;
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => setCurOpen(num)}
    >
      <p className="number">{num < 9 ? `0${num}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
};

export default AccordianItem;
