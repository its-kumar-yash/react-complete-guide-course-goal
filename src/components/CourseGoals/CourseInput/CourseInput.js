import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.notValid ? 'red' : 'black'};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.notValid ? 'red' : '#ccc'};
    background: ${props => props.notValid ? '#ffd7d7' : 'transparent'}
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  /* Dynamic Styling */

  ${'' /* &.invalid input {
    border-color: red;
    background: rgb(240, 190, 190);
  }

  &.invalid label {
    color: red;
  } */}
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    //Reseting Input
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // Empty String Detected
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* dynamic styling */}
      <FormControl notValid = {!isValid}>
        <label>Course Goal</label>
        <input
          // Conditional Styling
          // style={{
          //   borderColor: !isValid ? "red" : "#ccc",
          //   background: !isValid ? "salmon" : "transparent",
          // }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
