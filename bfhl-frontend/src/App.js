import React, { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [jsonInput, setJsonInput] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleSubmit = async () => {
    try {
      const parsedJson = JSON.parse(jsonInput);
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsedJson),
      });

      const data = await response.json();
      setResponseData(data);
    } catch (err) {
      setError("Invalid JSON Input");
    }
  };

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setSelectedFilters((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  return (
    <div>
      <h1>BFHL Frontend</h1>
      <input
        type="text"
        placeholder='Enter JSON {"data": ["A", "1", "B"]}'
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {responseData && (
        <div>
          <h2>Response</h2>
          <select multiple onChange={handleFilterChange}>
            <option value="alphabets">Alphabets</option>
            <option value="numbers">Numbers</option>
            <option value="highest_alphabet">Highest Alphabet</option>
          </select>

          <div>
            {selectedFilters.includes("alphabets") && (
              <p>Alphabets: {JSON.stringify(responseData.alphabets)}</p>
            )}
            {selectedFilters.includes("numbers") && (
              <p>Numbers: {JSON.stringify(responseData.numbers)}</p>
            )}
            {selectedFilters.includes("highest_alphabet") && (
              <p>Highest Alphabet: {JSON.stringify(responseData.highest_alphabet)}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
