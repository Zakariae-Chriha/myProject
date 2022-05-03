import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import Login from './components/Login'
import AddBook from './components/AddBook'
import BooksListCommunity from './components/BooksListCommunity'
import Bookgoogle from './components/Bookgoogle'
import EmailForm from './components/EmailForm'
import Profile from './components/Profile'
import MyBooks from './components/MyBooks'
import UpdateBook from './components/UpdateBook'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/books-list-community' element={<BooksListCommunity />} />
        <Route path='/bookgoogle' element={<Bookgoogle />} />
        <Route path='/emailform' element={<EmailForm />} />
        <Route path='/add-book' element={<AddBook />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/my-books' element={<MyBooks />} />
        <Route path='/update-book' element={<UpdateBook />} />
        <Route path='/logout' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
