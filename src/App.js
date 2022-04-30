import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
// import Profil from './components/Profil'
import AddBook from "./components/AddBook";
import BooksListCommunity from "./components/BooksListCommunity";
import Bookgoogle from "./components/Bookgoogle";
import EmailForm from "./components/EmailForm";
import Profil from "./components/Profil";

function App() {
  return (
    <div>
      <Header />

      <></>
      <>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/BooksListCommunity" element={<BooksListCommunity />} />
          <Route path="/Bookgoogle" element={<Bookgoogle />} />
          <Route path="/EmailForm" element={<EmailForm />} />
          <Route path="/AddBook" element={<AddBook />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
