import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Logout = () => {
  let navigate = useNavigate();

  useEffect(() => {
    sessionStorage.removeItem("Auth Token");
    toast.success("logged out!");
    navigate("/login");
  });
  return <ToastContainer />;
};

export default Logout;
