import React, { useEffect, useRef, useState } from "react";
const SimpleInput = (props) => {
  //useRef
  const nameInputRef = useRef();
  //useState
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  //UseEffect
  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("Name input is valid!");
    }
  }, [enteredNameIsValid]);
  ////name input field handler
  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
    console.log(e.target.value);
  };

  //form submit handler
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setEnteredNameIsTouched(true);

    //check validity
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    // const enteredValue = nameInputRef.current.value;
    setEnteredName("");
    console.log(enteredName);
  };

  //set style according to conditions
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  //jsx code logics
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
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
