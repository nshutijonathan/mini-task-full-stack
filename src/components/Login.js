import React from "react";
import { Form, Button } from "react-bootstrap";
const Login = ({
  location,
  history,
  title,
  setEmail,
  setPassword,
  handleAction,
}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    handleAction();
  };
  return (
    <>
      <h1> {title} Form </h1>;
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="enter your email"
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>password </Form.Label>
          <Form.Control
            type="password"
            placeholder="enter your password"
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          {title}
        </Button>
      </Form>
    </>
  );
};

export default Login;
