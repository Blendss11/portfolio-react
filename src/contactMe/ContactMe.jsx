import React from 'react'
import "./contactme.css"
import ContactCard from './contactCard/ContactCard'
import ContactForm from './contactform/ContactForm'

const ContactMe = () => {
  return (
   <section className='contact-container' id='Contact'>
    <h5>Contact Me</h5>

    <div className="contact-content">
        <div style={{ flex: 1 }}>
        <ContactCard
    iconUrl="./assets/images/logo/email.png"
    text="salmansalim006@gmail.com"
    link=""
/>
<ContactCard
    iconUrl="./assets/images/logo/github.svg"
    text="https://github.com/Blendss11"
    link=""
/>
<ContactCard
    iconUrl="./assets/tool/port.png"
    text="See My Portfolio PDF"
    link="https://drive.google.com/file/d/18En4JAAC5EVsR4bROSIs2j3owFjDkq1g/view?usp=sharing"
/>

        </div>
        <div style={{ flex: 1 }}>
            <ContactForm/>
        </div>
    </div>
    
   </section>
  )
}

export default ContactMe