import React from 'react'
import '../components/service-card.css'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Photo } from '@mui/icons-material'

export default function ServiceCard() {
  return (
    <div>
        <Card className='service-card-layout'>
            <CardContent className='service-card-content'>
                <Typography variant='h4'>Web Developer</Typography>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa aperiam amet dolore nostrum incidunt totam? Sequi porro distinctio, ipsam repudiandae reprehenderit debitis culpa laborum recusandae corrupti? Quasi sunt libero consectetur.</p>
            </CardContent>
            <CardMedia className='service-card-media'>
                <Photo/>
            </CardMedia>
        </Card>
    </div>
  )
}
