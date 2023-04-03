import React, { useState } from "react";
import Person from "./person";

function PersonList(props) {
  const { people } = props;
  const [newPerson, setNewPerson] = useState({ name: "", age: "" });

  const handleNameChange = (event) => {
    setNewPerson({ ...newPerson, name: event.target.value });
  };

  const handleAgeChange = (event) => {
    setNewPerson({ ...newPerson, age: event.target.value });
  };

  const handleAddPerson = () => {
    props.onAddPerson(newPerson);
    setNewPerson({ name: "", age: "" });
  };

  const handleRemovePerson = (personId) => {
    props.onRemovePerson(personId);
  };

  const renderPeople = () => {
    return people ? (
      <>
        {people.map((person) => (
          <Person
            name={person.name}
            age={person.age}
            onRemove={() => handleRemovePerson(person.id)}
          />
        ))}
      </>
    ) : (
      <tr>
        <td colSpan="2">No people to display</td>
      </tr>
    );
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h2>People</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderPeople()}
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Name"
                  value={newPerson.name}
                  onChange={handleNameChange}
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Age"
                  value={newPerson.age}
                  onChange={handleAgeChange}
                />
              </td>
              <td>
                <button onClick={handleAddPerson}>Add Person</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PersonList;
