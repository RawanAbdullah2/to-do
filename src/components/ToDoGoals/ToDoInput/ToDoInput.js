import React, { useState } from "react";
import Button from "../../UI/button/Button";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";

const FormControl =styled.form`
  margin: 0.5rem 2.2rem;
& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  padding-top: 2.5rem;
  color:${(props=>props.invalid?'red':'black' )}; }
& input {
  width: 90%;
  border: 1px solid ${(props=>props.invalid?'red':'#8b005d')};
  font: inherit;
  line-height: 2.25rem;
  padding: 0 0.25rem;
  margin-bottom: 0.5rem;
  background-color:${(props=>props.invalid?'rgb(250, 196, 196)':'transparent')} ;
}
& div {
 display: flex;}
 @media (max-width:768px){
  & div {
    display: block;}
 }
& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;}

`;

const ToDoInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue(" ");
  };
  return (
    <div>
      <FormControl invalid={!isValid}>
        <label>Course Goal:</label>
        <div>
          <input
            type="text"
            value={enteredValue}
            onChange={goalInputChangeHandler}
          />
          <Button type="submit" onClick={formSubmitHandler}>
            <FaCheck />
          </Button>
        </div>
      </FormControl>
    </div>
  );
};

export default ToDoInput;
