import React, { useState } from "react";
const SimpleInput = (props) => {
  //useState
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  //constant
  const enteredNameIsValid = enteredName !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
  //blur handler
  const nameInputBlurHandler = (e) => {
    setEnteredNameIsTouched(true);
  };

  ////name input field handler on every keystroke
  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  //form submit handler
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setEnteredNameIsTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    setEnteredName("");
    setEnteredNameIsTouched(false);
  };

  //set style according to conditions
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  //jsx code logics
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be Empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
