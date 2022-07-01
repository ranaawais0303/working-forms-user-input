import React, { useRef, useState } from "react";
const SimpleInput = (props) => {
  //useState
  const [enteredNameInput, setEnteredNameInput] = useState();
  //useRef
  const nameInputRef = useRef();

  const nameInputChangeHandler = (e) => {
    setEnteredNameInput(e.target.value);
  };
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    const inputName = nameInputRef.current.value;
    setEnteredNameInput("");
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredNameInput}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
