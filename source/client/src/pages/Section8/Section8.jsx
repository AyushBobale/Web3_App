import "./Section8.css";

import React from "react";
import { TodoCard } from "../../components/TodoCard/TodoCard";

export const Section8 = () => {
  return (
    <div className="section-content">
      Section8
      <button className="btn-light"> Button light</button>
      <button className="btn-dark"> Button light</button>
      <TodoCard />
    </div>
  );
};
