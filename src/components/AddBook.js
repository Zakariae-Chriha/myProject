import React from 'react'
import { useState, useEffect } from 'react'

import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/AddBook.css'

function AddBook() {
  const [title, setTitle] = useState('')
  const [authors, setAuthors] = useState('')
  const [description, setDesription] = useState('')
  const [preice, setPreice] = useState('')
  const [preiceType, setPreiceType] = useState('')
  const [bookslist, setBookslist] = useState('')
  const [newBooks, setNewBooks] = useState('')
  const [category, setCategory] = useState('')
  const [publisher, setPublisher] = useState('')
  const [userImage, setUserImage] = useState({ file: null })
  const [userImageUrl, setUserImageUrl] = useState('')

  useEffect(() => {
    getAllBooks()
  }, [])

  const getAllBooks = () => {
    axios
      .get('http://localhost:8000/read')
      .then((response) => setBookslist(response.data))
      .catch((Error) => console.log(Error))
  }

  const updateBooks = (id) => {
    axios.put(`http://localhost:8000/update/${id}`, {
      userImage: userImageUrl,
      title: title,
      authors: authors,
      description: description,
      preice: preice,
    })
    getAllBooks()
  }

  const deletebooks = (id) => {
    axios.delete(`http://localhost:8000/delete/${id}`)
    getAllBooks()
  }

  const onFileChange = (e) => {
    const formData = new FormData()
    formData.append('profile_pic', e.target.files[0])

    axios
      .post('http://localhost:8000/upload-profile-pic', formData, {})
      .then((res) => {
        setUserImageUrl(res.data)
      })
      .catch((err) => console.log(err))
  }

  // upload picture and add book

  const handelClick = async () => {
    axios
      .post('http://localhost:8000/insert', {
        userImage: userImageUrl,
        title: title,
        authors: authors,
        description: description,
        category: category,
        publisher: publisher,
        preice: preice,
        preiceType: preiceType,
      })
      .then((response) => {
        console.log(response)
        getAllBooks()
      })
      .catch((Error) => console.log(Error))
  }
  return (
    <div className='containerAdd row'>
      <div className='addBook1 col'>
        <div className='formgroup'>
          <label className='formgroup-label'>Titel :</label>
          <div className='formgroup-input'>
            <input
              className='formcontrol'
              maxLength='65'
              placeholder='title'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <br />
          <div className='formgroup'>
            <label className='formgroup-label'>authors :</label>
            <div className='formgroup-input'>
              <input
                id='postad-authors'
                name='authors'
                className='formcontrol'
                type='text'
                maxLength='65'
                placeholder='authors'
                onChange={(e) => setAuthors(e.target.value)}
              />
            </div>
            <br />
          </div>
        </div>
        <label className='formgroup-label'>category :</label>
        <div className='formgroup-input'>
          <div
            className='formgroup-input-inline text-only'
            id='categorySection'>
            <span id='postad-category-path' className='choose-category'></span>
            <select
              aria-label='choose varieties for books'
              value={category}
              onChange={(e) => setCategory(e.target.value)}>
              <option>choose varieties for books</option>
              <option value='Poems'>Poems</option>
              <option value='Western'>Western</option>
              <option value='History'>History</option>
              <option value='Non-Fiction'>Non-Fiction</option>
              <option value='Drama'>Drama</option>
              <option value='Fairy-tale'>Fairy-tale</option>
              <option value='Fiction'>Fiction"</option>
              <option value='Novel'>Novel</option>
              <option value='Romance'>Romance</option>
              <option value='Myth'>Myth</option>
            </select>
          </div>
          <br />
        </div>
        <div className='formgroup-input-inline'>
          <label className='formgroup-label'>Preice :</label>
          <br />
          <input
            id='pstad-price'
            name='priceAmount'
            className=' formcontrol pricefield'
            type='text'
            maxLength='8'
            placeholder='price'
            onChange={(e) => setPreice(e.target.value)}
          />
          <span className='price-suffix-label'>,00 EUR</span>
          <select
            id='priceType'
            name='priceType'
            value={preiceType}
            onChange={(e) => setPreiceType(e.target.value)}>
            <option value='FIXED'>FIXED</option>
            <option value='NEGOTIABLE'>NEGOTIABLE</option>
            <option value='GIVE_AWAY'>GIVE_AWAY</option>
          </select>
        </div>
        <br />
        <div className='formgroup'>
          <label className='formgroup-label'>description :</label>
          <div className='formgroup-input'>
            <textarea
              id='pstad-descrptn'
              name='description'
              className='j-hidden-sbmt'
              rows='5'
              cols='30'
              placeholder='description'
              onChange={(e) => setDesription(e.target.value)}></textarea>
            <small id='pstad-dscrptn-lngth'>
              Du hast noch <var>4000</var> Zeichen übrig
            </small>
          </div>
        </div>
        <label className='formgroup-label'>publisher :</label>
        <div className='formgroup-input'>
          <input
            id='postad-publisher'
            name='au'
            className='formcontrol'
            type='text'
            maxLength='65'
            placeholder='publisher'
            onChange={(e) => setPublisher(e.target.value)}
          />
        </div>
        <br />
        <div className='formgroup'>
          <label className='formgroup-label'>Image :</label>
          <input
            type='file'
            name='profile_pic'
            id='fileinput'
            onChange={onFileChange}
          />
        </div>
        <br />
        <button
          id='pstad-submit'
          className='button'
          type='submit'
          onClick={handelClick}>
          <span>Anzeige aufgeben</span>
        </button>
      </div>

      <div className='addBook2 col'>
        <img src='' alt='' />
      </div>
    </div>
  )
}

export default AddBook
