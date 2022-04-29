import 'react-toastify/dist/ReactToastify.min.css'
import '../styles/BooksListCommunity.css'

import React, { useState, useEffect } from 'react'
import { Spinner } from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

import BooksListCardCommunity from '../components/BooksListCardCommunity'

function BooksListCommunity() {
  //stats
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(false)
  const [cards, setCards] = useState([])

  useEffect(() => {
    getAllBooks()
  }, [])

  console.log('loading: ', loading)
  console.log('cards: ', cards)

  // fetch
  const getAllBooks = () => {
    setLoading(true)

    axios
      .get(`http://localhost:8000/read?category=${category}`)
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
        <div className='main-image cal d-flex justify-content-center align-items-center flex-column'>
          {/* Overlay */}
          <div className='filter'></div>
          <h1
            className='display-2 text-center text-white mb-3'
            style={{ zIndex: 2 }}>
            GIVE_AWAY Or sale
          </h1>
          <div style={{ width: '60%', zIndex: 2 }}></div>
          <div className='main-image col d-flex justify-content-between align-items-center flex-row'>
            <button
              className='btn'
              value={category}
              onChange={() => setCategory('Poems')}>
              {' '}
              Poems{' '}
            </button>
            <button
              className='btn'
              value={category}
              onChange={() => setCategory('Western')}>
              Western{' '}
            </button>
            <button
              className='btn'
              value={category}
              onChange={() => setCategory('History')}>
              History{' '}
            </button>
            <button
              className='btn'
              value={category}
              onChange={() => setCategory('Non-fiction')}>
              Non-fiction{' '}
            </button>
            <button
              className='btn'
              value={category}
              onChange={() => setCategory('Fairy-tale')}>
              {' '}
              Fairy-tale{' '}
            </button>
            <button
              className='btn'
              value={category}
              onChange={() => setCategory('Fiction')}>
              Fiction{' '}
            </button>
            <button
              className='btn'
              value={category}
              onChange={() => setCategory('Novel ')}>
              Novel{' '}
            </button>
            <button
              className='btn'
              value={category}
              onChange={() => setCategory('Romance')}>
              Romance{' '}
            </button>
            <button
              className='btn'
              value={category}
              onClick={() => setCategory('Myth')}>
              Myth{' '}
            </button>
          </div>
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
      const items = cards.map((item, i) => {
        return (
          <div className='col-lg-4 mb-3' key={item.id}>
            <BooksListCardCommunity
              userImage={item.userImage}
              title={item.title}
              publisher={item.publisher}
              preice={item.preice}
              authors={item.authors}
              description={item.description}
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
