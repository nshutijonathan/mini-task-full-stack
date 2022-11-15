import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Toast } from "react-bootstrap";
const Notifications = () => {
  const [show, setShow] = useState(false);
  const [texts, setTexts] = useState(0);
  useEffect(() => {
    let value = localStorage.getItem("texts");
    setTexts(value);
  });
  return (
    <div className="container">
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
        animation
        style={{
          position: "absolute",
          top: 20,
          right: 20,
        }}
      >
        <Toast.Header>
          <img src="" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Notification</strong>
          <small>12 mins ago</small>
        </Toast.Header>
        <Toast.Body>{`There are some new ${texts} texts that you might love!`}</Toast.Body>
      </Toast>
      <header className="App-header">
        <img src="" className="App-logo" alt="logo" />
        <Button onClick={() => setShow(true)}>Get Notification</Button>
      </header>
    </div>
  );
};

export default Notifications;
