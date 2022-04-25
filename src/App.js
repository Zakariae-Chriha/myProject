import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import LoginScreen from "./LoginScreen/LoginScreen";

function App() {
  return (
    <div>
      <Home/>
      <>
        <Routes>
          <Route path="/Home" element={<Home />} />

          <Route path="/Contact" element={<Contact />} />
          <Route path="/LoginScreen " element={<LoginScreen />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
