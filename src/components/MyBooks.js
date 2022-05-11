import 'react-toastify/dist/ReactToastify.min.css'
import '../styles/BooksListCommunity.css'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react'
import { Spinner } from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import MyBooksCard from '../components/MyBooksCard'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useLocation } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { AuthContext } from '../context/AuthContext'

function MyBooks() {
  const { user, loggedIn } = useContext(AuthContext)
  //stats
  const [title, setTitle] = useState('')
  const [authors, setAuthors] = useState('')
  const [description, setDesription] = useState('')
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(false)
  const [cards, setCards] = useState([])
  const location = useLocation()
  const [publisher, setPublisher] = useState('')
  const [preice, setPreice] = useState('')
  const [preiceType, setPreiceType] = useState('')
  const [userImageUrl, setUserImageUrl] = useState('')
  const params = useParams()

  useEffect(() => {
    getAllBooks()
    getBookdetails()
  }, [])

  const getBookdetails = async () => {
    let result = await fetch(
      `https://communitybook.herokuapp.com/read/${params.id}`
    )
    result = await result.json()
    setTitle(result.title)
    setAuthors(result.authors)
    setUserImageUrl(result.userImageUrl)
    setCategory(result.category)
    setDesription(result.description)
    setPreice(result.preice)
    setPreiceType(result.preiceType)
    setPublisher(result.publisher)
  }

  // fetch
  const getAllBooks = () => {
    setLoading(true)
    axios
      .get(
        `https://communitybook.herokuapp.com/read?category=${category}&userid=${user._id}`
      )
      .then((response) => {
        setCards(response.data)
        setLoading(false)
      })

      .catch((Error) => console.log(Error))
  }

  // const updateBooks = (id) => {
  //   axios.put(`https://communitybook.herokuapp.com/update/${id}`, {
  //     userImage: userImageUrl,
  //     title: title,
  //     authors: authors,
  //     description: description,
  //     preice: preice,
  //     preiceType: preiceType,
  //     publisher: publisher,
  //   })
  //   getAllBooks()
  // }

  const deletebooks = (id) => {
    axios.delete(`https://communitybook.herokuapp.com/delete/${id}`)
    getAllBooks()
  }

  const handleCards = () => {
    if (loading) {
      return (
        <div className='d-flex justify-content-center '>
          <Spinner style={{ width: '3rem', height: '3rem' }} />
        </div>
      )
    } else {
      const items = cards.map((item, i) => {
        return (
          <div className='col-lg-4 mb-3' key={item._id}>
            <MyBooksCard
              userImage={item.userImage}
              title={item.title}
              publisher={item.publisher}
              preice={item.preice}
              authors={item.authors}
              description={item.description}
              preiceType={item.preiceType}
            />
            <div className='row'>
              <div className='col mt-2 d-flex justify-content-center  '>
                <Link to={`/update-book/${item._id}`}>
                  <button>
                    Update
                    <EditIcon />
                  </button>
                  {/*onClick={() => updateBooks(item._id)}> */}
                  {/* </button> */}
                </Link>
              </div>
              <div className='col mt-2 d-flex justify-content-center   '>
                <button onClick={() => deletebooks(item._id)}>
                  Delete <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
        )
      })
      return (
        <div className='container my-5'>
          <div className='row'>{items}</div>
        </div>
      )
    }
  }
  return (
    <div className='w-100 h-100'>
      {handleCards()}
      <div>{location.pathname !== '/' ? <BackButton /> : ''}</div>
    </div>
  )
}

export default MyBooks
