import { useState } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Splash from "./components/Splash";
import Login from "./components/Login";
import Notifications from "./components/Notifications";
import Photos from "./components/Photos";
import Texts from "./components/Texts";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";
import Logout from "./components/Logout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/notifications");
          toast.success("success");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            toast.error("Email Already in Use");
          }
          if (error.code == "auth/weak-password") {
            toast.error("Weak password");
          }
        });
    }
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          toast.success("success");
          navigate("/notifications");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            toast.error("Please check the Password");
          }
          if (error.code === "auth/user-not-found") {
            toast.error("Please check the Email");
          }
        });
    }
  };
  return (
    <>
      <ToastContainer />
      <Header />
      <Container>
        <main className="py-3">
          <Routes>
            <Route
              path="/login"
              element={
                <Login
                  title="Login"
                  setEmail={setEmail}
                  setPassword={setPassword}
                  handleAction={() => handleAction(1)}
                />
              }
            />
            <Route
              path="/register"
              element={
                <Login
                  title="Register"
                  setEmail={setEmail}
                  setPassword={setPassword}
                  handleAction={() => handleAction(2)}
                />
              }
            />
            <Route path="/logout" element={<Logout />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/texts" element={<Texts />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/" element={<Splash />} />
          </Routes>
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default App;
