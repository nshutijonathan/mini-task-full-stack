import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const Splash = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      navigate("/notifications");
    }
    if (!authToken) {
      navigate("/login");
    }
  };
  return (
    <div className="d-grid gap-2 text-center">
      <Button variant="primary" className="btn-sm" onClick={handleClick}>
        Continue
      </Button>
    </div>
  );
};

export default Splash;
