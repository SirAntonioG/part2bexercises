import { useState } from "react";
import Person from "./Components/Person";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const alreadyAdded = persons.some((person) => person.name === newName);

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
    };
    alreadyAdded
      ? window.alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(newPerson));

    setNewName("");
  };
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <Person key={person.name} name={person.name} />
        ))}
      </div>
    </div>
  );
};

export default App;
