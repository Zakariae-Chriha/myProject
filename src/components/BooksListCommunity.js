import 'react-toastify/dist/ReactToastify.min.css'
import '../styles/BooksListCommunity.css'
import { Carousel } from 'react-bootstrap'
import React, { useState, useEffect, useContext } from 'react'
import { Spinner } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import slide5 from '../assets/woman-3435842_1920.jpg'
import slide2 from '../assets/to-learn-3653430_1920.jpg'
import slide6 from '../assets/college-student-4369850_1920.jpg'
import { AuthContext } from '../context/AuthContext'

import BooksListCardCommunity from '../components/BooksListCardCommunity'

function BooksListCommunity() {
  //stats
  const [selectedCategory, setSelectedCategory] = useState('')
  const [loading, setLoading] = useState(false)
  const [cards, setCards] = useState([])
  const categories = [
    'Poems',
    'Western',
    'History',
    'Non-Fiction',
    'Fairy-Tale',
    'Fiction',
    'Novel',
    'Romance',
    'Myth',
  ]
  console.log('selectedCategory', selectedCategory)
  // console.log('loading: ', loading)
  console.log('cards: ', cards)

  useEffect(() => {
    getBooks()
  }, [selectedCategory])

  // fetch
  const getBooks = () => {
    setLoading(true)
    axios
      .get(`http://localhost:8000/read?category=${selectedCategory}`)
      .then((response) => {
        setCards(response.data)
        setLoading(false)
      })
      .catch((Error) => console.log(Error))
  }
  // Main Show Case
  const mainHeader = () => {
    return (
      <div className='row'>
        <div className='side-left col-2 d-flex justify-content-center align-items-center flex-column '>
          <h3>Category</h3>
          {categories.map((category) => (
            <button
              className='btn'
              key={category}
              onClick={() => setSelectedCategory(category)}>
              {category}
            </button>
          ))}
        </div>

        <div className='side-right col '>
          <Carousel variant='dark'>
            <Carousel.Item>
              <img className='d-block w-100' src={slide5} alt='First slide' />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100 h-100'
                src={slide2}
                alt='Second slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={slide6} alt='Third slide' />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
  const handleCards = () => {
    if (loading) {
      return (
        <div className='d-flex justify-content-center mt-3'>
          <Spinner style={{ width: '3rem', height: '3rem' }} />
        </div>
      )
    } else {
      const items =
        cards.length > 0 &&
        cards.map((item) => {
          return (
            <div className='col-lg-4 mb-3' key={item._id}>
              <BooksListCardCommunity
                userImage={item.userImage}
                title={item.title}
                publisher={item.publisher}
                preice={item.preice}
                authors={item.authors}
                description={item.description}
                preiceType={item.preiceType}
              />

              <div className='col mt-2 d-flex justify-content-center me-10  '>
                <Link to='/EmailForm'>
                  <button>Send Email</button>
                </Link>
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
  const navigate = useNavigate()
  const { loggedIn } = useContext(AuthContext)

  if (!loggedIn)
    navigate('/login', { state: { nextPage: '/books-list-community' } })
  return (
    <div className='w-100 h-100'>
      {mainHeader()}
      {handleCards()}
      {cards.length === 0 && loading === false && (
        <>
          <div className='NoResults'>
            Sorry{' '}
            <span role='img' aria-label='sad'>
              <p>&#128577;</p>
            </span>
            , we couldn't find any results for: {selectedCategory}
            <br />
          </div>
          <div className='NoResultsP'>
            <ul className='NoResultsList'>
              <li>Please double-check the spelling.</li>
              <li>Try other categories.</li>
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

export default BooksListCommunity
