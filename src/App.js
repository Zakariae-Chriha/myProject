import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import AddBook from "./components/AddBook";
import BooksListCommunity from "./components/BooksListCommunity";
import Bookgoogle from "./components/bookgoogle";
import EmailForm from "./components/EmailForm";
import Profile from "./components/Profile";
import MyBooks from "./components/MyBooks";
import UpdateBook from "./components/UpdateBook";
import AuthState from "./context/AuthContext";
import Logout from "./components/Logout";
import UserBooks from "./components/userBooks";

function App() {
  return (
    <>
      <AuthState>
        <Header />
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-books" element={<MyBooks />} />
          <Route path="/update-book" element={<UpdateBook />} />
          <Route path="/update-book/:id" element={<UpdateBook />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/UserBooks" element={<UserBooks />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthState>
    </>
  );
}

export default App;
