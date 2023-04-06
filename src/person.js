import React from "react";

function Person(props) {
  const { name, age } = props;

  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
        Name: {name} {"---"} Age: {age}
      </p>
    </div>
  );
}

export default Person;
