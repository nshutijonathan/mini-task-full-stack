import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Calculator = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const handleOperator = (e) => {
    setOperator(e.target.value);
  };
  const handleValue1 = (e) => {
    setValue1(e.target.value);
  };
  const handleValue2 = (e) => {
    setValue2(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (operator === "plus") {
      setResult(parseInt(value1) + parseInt(value2));
    } else if (operator === "minus") {
      setResult(parseInt(value1) - parseInt(value2));
    } else if (operator === "times") {
      setResult(parseInt(value1) * parseInt(value2));
    } else if (operator === "divide") {
      setResult(parseInt(value1) / parseInt(value2));
    }
  };
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (!authToken) {
      navigate("/");
    }
  });
  return (
    <>
      <h1> Calculator </h1>;
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="number1" className="col-xs-2">
          <Form.Label>First Value</Form.Label>
          <Form.Control
            type="number"
            placeholder="enter your First Value"
            required
            value={value1}
            onChange={handleValue1}
          ></Form.Control>
          <label for="operator">Choose operator:</label>
          <select name="operators" id="operators" onChange={handleOperator}>
            <option value=""></option>
            <option value="plus">+</option>
            <option value="minus">-</option>
            <option value="times">*</option>
            <option value="divide">/</option>
          </select>
          <br></br>
        </Form.Group>
        <Form.Group controlId="number2">
          <Form.Label>Second Value </Form.Label>
          <Form.Control
            type="number"
            placeholder="enter your Second Value "
            required
            value={value2}
            onChange={handleValue2}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Calculate
        </Button>
        {result ? <h1>{result}</h1> : ""}
        <Form.Group></Form.Group>
      </Form>
    </>
  );
};

export default Calculator;
