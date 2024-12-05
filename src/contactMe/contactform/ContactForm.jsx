import React, { useRef } from 'react';
import "./contactform.css";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify'; // Pastikan Anda sudah menginstall react-toastify

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sh7dk2d', 'template_rw7nij3', form.current, '5UAfZ7-xiiqEbXE39')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          toast.success('Message sent successfully!');
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Error sending message, please try again.');
        }
      );
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="contact-form-content">
        <form ref={form} onSubmit={sendEmail}>
          <div className="name-container">
            <input
              type="text"
              name="user_name"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
            />
          </div>
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={3}
            required
          />
          <button type="submit">SEND</button>
        </form>
        
      </div>
      
    </>
  );
}

export default ContactForm;
