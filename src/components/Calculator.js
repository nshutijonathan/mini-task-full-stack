import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
const Calculator = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const handleOperator = (e) => {
    setOperator(e.target.value);
  };
  const handleValue1 = (e) => {
    setValue1(parseInt(e.target.value));
  };
  const handleValue2 = (e) => {
    setValue2(parseInt(e.target.value));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (operator === "plus") {
      setResult(value1 + value2);
    } else if (operator === "minus") {
      setResult(value1 + value2);
    } else if (operator === "times") {
      setResult(value1 * value2);
    } else if (operator === "divide") {
      setResult(value1 / value2);
    }
  };
  return (
    <>
      {console.log("result", value1, value1, operator, result)}
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
        {result ? <h1>{+result}</h1> : ""}
        <Form.Group></Form.Group>
      </Form>
    </>
  );
};

export default Calculator;
