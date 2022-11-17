import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Login = ({ title, setEmail, setPassword, handleAction }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    handleAction();
  };
  let found;
  const checkRoute = (value) => {
    value === "Login" ? (found = "register") : (found = "login");
  };
  checkRoute(title);
  return (
    <>
      <h1> {title} Form </h1>;
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            required
            placeholder="enter your email"
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>password </Form.Label>
          <Form.Control
            type="password"
            placeholder="enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          {title}
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Or
          <Link to={"/" + found.toLowerCase()}>
            <strong>{found.toUpperCase()}</strong>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Login;
