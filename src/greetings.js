import React from "react";

function Greetings(props) {
  const message = `Hello, ${props.name}!`;

  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{message}</p>
    </div>
  );
}

export default Greetings;
