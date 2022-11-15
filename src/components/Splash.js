import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Splash = () => {
  let navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      navigate("/");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, []);
  return <div>Welcome</div>;
};

export default Splash;
