import React, { useState } from "react";

export default function VehiclesEstimate() {
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState([
    { value: "stine", label: "Stine" },
    { value: "steve", label: "Steve" },
    { value: "jim", label: "Jim" },
    { value: "john", label: "John" },
    { value: "jane", label: "Jane" },
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <form>
        <label htmlFor="car-make">Choose a car Make:</label>
        <input
          type="text"
          placeholder="Search for a make"
          value={searchTerm}
          onChange={handleSearch}
        />
        <br />
        <select name="make" id="make">
          {filteredOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="car-model">Choose a car Model:</label>
        <input
          type="text"
          placeholder="Search for a model"
          value={searchTerm}
          onChange={handleSearch}
        />
        <br />
        <select name="model" id="model">
          {filteredOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}