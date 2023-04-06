import React, { useState } from "react";

// PersonList component
const PersonList = () => {
  const [persons, setPersons] = useState([{ name: "John", age: 25 }]);
  const [newPerson, setNewPerson] = useState({ name: "", age: "" });
  const handleAddPerson = () => {
    setPersons([...persons, newPerson]);
    setNewPerson({ name: "", age: "" });
  };
  const handleRemovePerson = (index) => {
    const newPersons = [...persons];
    newPersons.splice(index, 1);
    setPersons(newPersons);
  };

  return (
    <div>
      <h2>Person List</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>
                  <button onClick={() => handleRemovePerson(index)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <input
          type="text"
          value={newPerson.name}
          onChange={(e) => setNewPerson({ ...newPerson, name: e.target.value })}
          placeholder="Name"
        />
      </div>
      <div>
        <input
          type="text"
          value={newPerson.age}
          onChange={(e) => setNewPerson({ ...newPerson, age: e.target.value })}
          placeholder="Age"
        />
      </div>
      <button onClick={handleAddPerson}>Add Person</button>
    </div>
  );
};

export default PersonList;
