import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Splash from "./components/Splash";
import Signup from "./components/Signup";
import Notifications from "./components/Notifications";
import Photos from "./components/Photos";
import Texts from "./components/Texts";
import Calculator from "./components/Calculator";
function App() {
  return (
    <Container>
      <main className="py-3">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/texts" element={<Texts />} />
          <Route path="/texts" element={<Calculator />} />
        </Routes>
      </main>
    </Container>
  );
}

export default App;
