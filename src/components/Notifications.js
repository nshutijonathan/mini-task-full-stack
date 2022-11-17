import React, { useState, useEffect } from "react";
import { Button, Toast } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Notifications = () => {
  const [show, setShow] = useState(false);
  let navigate = useNavigate();
  let photos = localStorage.getItem("photos");
  let texts = localStorage.getItem("texts");
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (!authToken) {
      navigate("/");
    }
  });
  return (
    <div className="container text-center">
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
        <Toast.Body>
          {photos || texts > 0 ? (
            <p>
              There are some new {photos} photos and {texts} texts that you
              might love!
            </p>
          ) : (
            <p>There are some new updates that you might love!</p>
          )}
        </Toast.Body>
      </Toast>
      <header className="App-header">
        <Button
          variant="primary"
          className="btn-sm"
          onClick={() => setShow(true)}
        >
          Get Notification
        </Button>
        <i className="fa fa-bell" aria-hidden="true">
          {photos > 0 ? photos : texts}
        </i>
      </header>
    </div>
  );
};

export default Notifications;
