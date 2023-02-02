import { useState } from "react";
import "./SearchBar.css";
function SearchBar({ onSubmit }) {
  //1. create a new piece of state
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    //prevent the default behavior
    event.preventDefault();
    onSubmit(term);
  };

  //2. create an event handleer to watch for the 'onChange' events
  const handleChange = (event) => {
    //3. When the 'onChange' event fires, get the value from the input
    // Take that value from the input and use it to update your state
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      {/* form event handler detects users hiting enter key */}
      <form onSubmit={handleFormSubmit}>
        <label>Query Here</label>
        {/* 5. pass your value to the input as the value prop */}
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}
export default SearchBar;
