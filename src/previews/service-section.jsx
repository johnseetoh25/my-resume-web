import React from 'react'
import '../previews/all-section-style.css'
import { Typography } from '@mui/material'
import ServiceCard from '../components/service-card'

export default function ServiceSection() {
  return (
    <div className='service-section-layout'>
      <Typography variant='h3' sx={{ textAlign: 'center'}}>What I'm doing?</Typography>
      <div className="service-card-listing-layout">
        {Array.from({length: 6}).map((_, index) => (
          <ServiceCard key={index}/>
        ))}
      </div>
    </div>
  )
}
