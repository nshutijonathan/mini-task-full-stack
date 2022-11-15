import React from "react";
import { Form, Button } from "react-bootstrap";
const CalculatorResult = () => {
  const submitHandler = () => {};
  return (
    <>
      <h1> Calculator </h1>;
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="number1">
          <Form.Label>First Value</Form.Label>
          <Form.Control
            type="number"
            placeholder="enter your First Value"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="number2">
          <Form.Label>Second Value </Form.Label>
          <Form.Control
            type="number"
            placeholder="enter your Second Value "
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Calculate
        </Button>
      </Form>
    </>
  );
};

export default CalculatorResult;
