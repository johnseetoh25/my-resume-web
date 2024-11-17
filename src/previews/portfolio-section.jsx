import React from 'react'
import '../previews/all-section-style.css'
import { Typography } from '@mui/material'
import PortfolioTabs from '../components/portfolio-tabs'

export default function PortfolioSection() {
  return (
    <div className='portfolio-section-layout'>
      <Typography variant='h3' sx={{textAlign: 'center'}}>Portfolio</Typography>
      <PortfolioTabs/>
    </div>
  )
}
