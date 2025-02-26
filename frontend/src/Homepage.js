import React, { useState } from "react";
import Sidenav from "./Sidenav";

const items = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "T-shirt", category: "Clothing" },
  { id: 3, name: "Smartphone", category: "Electronics" },
  { id: 4, name: "Jeans", category: "Clothing" },
  { id: 5, name: "JavaScript Book", category: "Books" },
];

const Homepage = () => {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" ? items : items.filter(item => item.category === filter);

  return (
    <div style={{ display: "flex" }}>
      <Sidenav setFilter={setFilter} />

      <div style={{ marginLeft: "260px", padding: "20px", flex: 1 }}>
        <h1>{filter}</h1>
        <ul>
          {filteredItems.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Homepage;
