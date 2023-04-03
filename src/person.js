import React from "react";

function Person(props) {
  const { name, age } = props;

  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Name: {name}</p>
      <p style={{ fontSize: "1rem", color: "#666" }}>Age: {age}</p>
    </div>
  );
}

export default Person;
