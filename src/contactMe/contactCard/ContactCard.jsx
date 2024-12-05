import React from 'react'
import "./contactCard.css"

const ContactCard = ({iconUrl, text, link}) => {
  return (
    <div className="contact-details-card">
        <div className="icon">
            <img src={iconUrl} alt={text} />
        </div>

        <p>{text}</p>
        {link && <a href={link} target="_blank" rel="noopener noreferrer">Click This Link</a>}
    </div>
  )
}

export default ContactCard