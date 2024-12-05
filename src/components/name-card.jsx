import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material'
import React from 'react'
import '../components/name-card.css'
import { GitHub, LinkedIn } from '@mui/icons-material'

export default function NameCardLayout() {
  const SocialMediaButtonStyle = {
    color: 'white', textTransform: 'none'
  }

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
            </CardContent>
            <CardActions className='name-card-footer'>
                <div className="social-media-list">
                    <Button startIcon={<LinkedIn/>} sx={SocialMediaButtonStyle}>seetohyeeding0325</Button>
                    <Button startIcon={<GitHub/>} sx={SocialMediaButtonStyle}>johnseetoh25</Button>
                </div>
            </CardActions>
        </Card>
    </div>
  )
}
