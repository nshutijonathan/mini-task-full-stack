import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      navigate("/");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, [navigate]);
  return <div>Home</div>;
};

export default Home;
