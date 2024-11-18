import React from "react";
import AccordionItem from "./AccordionItem";
import { list } from "./list";

export default function Accordion() {
  return (
    <div className="container">
      {list.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}
