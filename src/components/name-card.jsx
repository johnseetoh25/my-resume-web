import { Button, Card, CardContent, CardMedia } from '@mui/material'
import React from 'react'
import '../components/name-card.css'

export default function NameCardLayout() {
  return (
    <div style={{ position: 'relative' }}>
        <Card className='name-card-layout' sx={{borderRadius: 5}}>
            <CardMedia className='profile-photo'>
                photo
            </CardMedia>
            <CardContent className='profile-content'>
                <div className='intro-texts' style={{ padding: 10}}>
                    <div className='hello-text'>Hi, I'm</div>
                    <div className='name-text'>See Toh Yee Ding</div>
                </div>
                <div className="social-list"  style={{ padding: 10}}>
                    <Button variant='contained'>icon</Button>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}
