import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const greeting = `Bonjour, ${name}!`;
    document.getElementById("greeting").textContent = greeting;
  };

  return (
    <div>
      <h1>Test Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name-field">Entrez votre nom :</label>
        <input
          type="text"
          id="name-field"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit" id="submit-btn">
          Valider
        </button>
      </form>
      <div id="greeting"></div>
    </div>
  );
};

export default App;
