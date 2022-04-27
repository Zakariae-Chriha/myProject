import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Profil from "./components/Profil";
import AddBook from "./components/AddBook";
import BooksListCommunity from "./components/BooksListCommunity";

function App() {
  return (
    <div>
      <Header />
      <>
        <BooksListCommunity />
      </>
      <>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
