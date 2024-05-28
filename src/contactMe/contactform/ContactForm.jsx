import React from 'react'
import "./contactform.css"

const ContactForm = () => {
  return (
   <div className="contact-form-content">
    <form>
        <div className="name-container">
            <input type="text" name='firstName' placeholder='FirstName'/>
            <input type="text" name='firstName' placeholder='FirstName'/>
        </div>
        <input type="text"name='Email' placeholder='Email' />
        <textarea type='text' name="message" id="" placeholder='Message' rows={3}></textarea>

        <button>SEND</button>
    </form>
   </div>
  )
}

export default ContactForm