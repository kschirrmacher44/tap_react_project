import React, { useEffect, useState } from "react";
import { validate } from "../utility/validators";
import "./Input.css";

const Input = (props) => {
  const [inputState, setInputState] = useState({
    value: "",
    isValid: false,
    isTouched: false,
  });

  const { onInput } = props;

  const changeHandler = (event) => {
    const value = event.target.value;
    setInputState({
      ...inputState,
      value,
      isValid: validate(value, props.validators),
    });
  };

  useEffect(() => {
    onInput(inputState.value, inputState.isValid);
  }, [inputState.value, inputState.isValid, onInput]);

  const touchHandler = () => {
    return setInputState({
      ...inputState,
      isTouched: true,
    });
  };

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        value={inputState.value}
        onChange={changeHandler}
        onBlur={touchHandler}
      />
      {!inputState.isValid && inputState.isTouched && (
        <p className="errorText">{props.errorText}</p>
      )}
    </div>
  );
};

export default Input;
