import React, { useState } from "react";
const SimpleInput = (props) => {
  //useState
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  //constant
  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid = enteredEmail.includes("@");
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  //blur handler
  const nameInputBlurHandler = (e) => {
    setEnteredNameIsTouched(true);
  };
  const emailInputBlurHandler = (e) => {
    setEnteredEmailIsTouched(true);
  };

  //// input field handler on every keystroke
  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  //form submit handler
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setEnteredNameIsTouched(true);
    setEnteredEmailIsTouched(true);
    // if (!enteredNameIsValid) {
    //   return;
    // }

    setEnteredName("");
    setEnteredNameIsTouched(false);
    setEnteredEmail("");
    setEnteredEmailIsTouched(false);
  };

  //set style according to conditions
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputIsInvalid
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
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">email must be valid </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
