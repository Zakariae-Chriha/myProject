import '../styles/EmailForm.css'

import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

function EmailForm() {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault()
    if (!email || !subject || !message) {
      return toast.error('Please fill email, subject and message')
    }
    try {
      setLoading(true)
      const { data } = await axios.post(`/api/email`, {
        email,
        subject,
        message,
      })
      setLoading(false)
      toast.success(data.message)
    } catch (err) {
      setLoading(false)
      toast.error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      )
    }
  }
  return (
    <div className='container'>
      <ToastContainer position='bottom-center' limit={1} />
      <div className='contact-parent'>
        <div className='contact-child child1'></div>
        <div className='contact-child child2'>
          <form onSubmit={submitHandler}>
            <div className='inside-contact'>
              <h2>Send Email</h2>
              <h3></h3>
              <p> Email*</p>
              <input
                id='txt_email'
                Required='required'
                onChange={(e) => setEmail(e.target.value)}
                type='email'
              />
              <br />
              <br />
              <br />

              <p>subject *</p>
              <input
                id='subject'
                type='text'
                onChange={(e) => setSubject(e.target.value)}
              />
              <br />
              <br />
              <br />

              <p>Message *</p>
              <textarea
                id='message'
                onChange={(e) => setMessage(e.target.value)}
                Required='required'></textarea>
              <br />
              <br />
              <br />

              <input type='submit' id='btn_send' value='SEND' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EmailForm
