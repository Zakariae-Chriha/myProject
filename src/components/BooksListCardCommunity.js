import React, { useState } from 'react'
import { Card, CardTitle, CardImg, CardBody, Button, Modal } from 'reactstrap'
const BooksListCardCommunity = ({
  userImage,
  title,
  authors,
  description,
  category,
  preice,
}) => {
  // States
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <Card style={{ width: '233px' }} className='m-auto '>
      <CardImg
        top
        style={{ width: '100%', height: '233px' }}
        src={userImage}
        alt={title}
      />
      <CardBody>
        <CardTitle className='card-title'>{title}</CardTitle>
        <Button onClick={toggle}>More info</Button>
      </CardBody>
      <Modal isOpen={modal} toggle={toggle}>
        <div className='modal-header d-flex justify-content-center'>
          <h5 className='modal-title text-center' id='exampleModalLabel'>
            {title}
          </h5>
          <button
            aria-label='Close'
            className='close'
            type='button'
            onClick={toggle}>
            <span aria-hidden={true}>X</span>
          </button>
        </div>
        <div className='modal-body'>
          <div className='d-flex justify-content-between ml-3'>
            <img src={userImage} alt={title} style={{ height: '233px' }} />
            <div>
              <p>Authors : {authors}</p>
            </div>
          </div>
          <div className='mt-3'>{description}</div>
        </div>
      </Modal>
    </Card>
  )
}

export default BooksListCardCommunity
