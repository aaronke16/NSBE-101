import React from "react";
import "./Sidenav.css";

const Sidenav = ({ setFilter }) => {
  return (
    <div className="sideNav">
      <button onClick={() => setFilter("All")}>All Items</button>
      <button onClick={() => setFilter("Electronics")}>Electronics</button>
      <button onClick={() => setFilter("Clothing")}>Clothing</button>
      <button onClick={() => setFilter("Books")}>Books</button>
    </div>
  );
};

export default Sidenav;
