import React, { useState } from "react";
const useInput = (validateValue) => {
  //state
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  ///constants
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  //// input field handler on every keystroke
  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  //blur handler
  const valueBlurHandler = (e) => {
    setIsTouched(true);
  };

  //reset function
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};
export default useInput;
