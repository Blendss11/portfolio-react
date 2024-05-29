import React from 'react'

const SertifikatCard = ({ details, image}) => {
  return (
    <div className="serti-experience-card">
    <h6>{details.title}</h6>
    <div className="serti-duration">{details.date}</div>
    <img src={image} alt={details.title} />
    <ul>
      {details.description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
  )
}

export default SertifikatCard