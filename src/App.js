import { useState } from "react";
import Person from "./Components/Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const nameAlreadyAdded = persons.some((person) => person.name === newName);
//   const phoneAlreadyAdded = persons.some((person) => person.phone === newPhone);

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      phone: newPhone,
    };
    nameAlreadyAdded
      ? window.alert(`${newName} is already added to phonebook`)
    //   : phoneAlreadyAdded
    //   ? window.alert(`phone number ${newPhone} is already added to phonebook`)
      : setPersons(persons.concat(newPerson));

    setNewName("");
    setNewPhone("");
  };
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    console.log(event.target.value);
    setNewPhone(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <Person key={person.name} name={person.name} phone={person.phone} />
        ))}
      </div>
    </div>
  );
};

export default App;
