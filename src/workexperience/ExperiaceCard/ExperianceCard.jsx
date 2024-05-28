import React from 'react'
import "./experiaceCard.css"
import { Details } from '@mui/icons-material'
import { responsiveFontSizes } from '@mui/material'

const ExperianceCard = ({ details }) => {

  


  return (
    <div className="work-experiance-card">
      <h6>{details.title}</h6>

      <div className="work-duration">{details.date}</div>

      <ul>
        {details.responsible.map((item)=> (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExperianceCard