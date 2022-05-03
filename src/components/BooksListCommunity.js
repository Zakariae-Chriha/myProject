import 'react-toastify/dist/ReactToastify.min.css'
import '../styles/BooksListCommunity.css'
import { Carousel, Table } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { Spinner } from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import slide1 from '../assets/a-book-5178205_1920.jpg'
import slide2 from '../assets/book-2948634_1280.png'
import slide3 from '../assets/books-1281581_1920.jpg'

import BooksListCardCommunity from '../components/BooksListCardCommunity'

function BooksListCommunity() {
  //stats
  const [selectedCategory, setSelectedCategory] = useState('')
  const [loading, setLoading] = useState(false)
  const [cards, setCards] = useState([])

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
              <img className='d-block w-100' src={slide1} alt='First slide' />
              <Carousel.Caption>
                <h1
                  className='display-2 text-center text-white mb-3'
                  style={{ zIndex: 2 }}>
                  Read Books For Free
                </h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100 h-100'
                src={slide2}
                alt='Second slide'
              />
              <Carousel.Caption>
                <h1
                  className='display-2 text-center text-white mb-3'
                  style={{ zIndex: 2 }}>
                  Read Books For Free
                </h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={slide3} alt='Third slide' />
              <Carousel.Caption>
                <h1
                  className='display-2 text-center text-white mb-3'
                  style={{ zIndex: 2 }}>
                  Gave-away Or Sale
                </h1>
              </Carousel.Caption>
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
      const items = cards.map((item) => {
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
  return (
    <div className='w-100 h-100'>
      {mainHeader()}
      {handleCards()}
    </div>
  )
}

export default BooksListCommunity
