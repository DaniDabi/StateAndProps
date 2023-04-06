import React from "react";

function Greetings(props) {
  const message = `Hello, ${props.name}!`;

  return (
    <div>
      <p className="greetings">{message}</p>
    </div>
  );
}

export default Greetings;
