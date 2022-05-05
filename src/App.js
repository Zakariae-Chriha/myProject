import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import AddBook from "./components/AddBook";
import BooksListCommunity from "./components/BooksListCommunity";
import Bookgoogle from "./components/Bookgoogle";
import EmailForm from "./components/EmailForm";
import Profil from "./components/Profil";
import MyBooks from "./components/MyBooks";
import UpdateBook from "./components/UpdateBook";
import AuthState from "./context/AuthContext";
function App() {
  return (
    <>
      <Header />
      <AuthState>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/books-list-community"
            element={<BooksListCommunity />}
          />
          <Route path="/bookgoogle" element={<Bookgoogle />} />
          <Route path="/emailform" element={<EmailForm />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/profile" element={<Profil />} />
          <Route path="/my-books" element={<MyBooks />} />
          <Route path="/update-book" element={<UpdateBook />} />
          <Route path="/logout" element={<Login />} />
        </Routes>
      </AuthState>
    </>
  );
}

export default App;
