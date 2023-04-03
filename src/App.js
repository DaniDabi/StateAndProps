import React from "react";
import Greetings from "./greetings";
import PersonList from "./personlist";
import Counter from "./counter";
import "./App.css";

function App() {
  return (
    <>
      <div className="greetings">
        <Greetings name="John" />
        <Greetings name="Mary" />
        <Greetings name="Alex" />
        <Greetings name="Sarah" />
      </div>
      <div>
        <PersonList />
      </div>
      <div>
        <Counter />
      </div>
    </>
  );
}

export default App;
