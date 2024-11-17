import { Avatar, Box, Button, Divider, Paper, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import '../previews/all-section-style.css'
import { GitHub, Home, LinkedIn, LocationCity, Mail, Phone } from '@mui/icons-material'

export default function ContactSection() {
  const avatarStyle = { height: 50, width: 50, bgcolor: '#252525'};

  return (
    <div className='contact-section-layout'>
      <Paper className='contact-paper-style' elevation={0} sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)', color: 'black'}}>
        <Typography variant='h5' sx={{textAlign: 'center'}}>Contact Me</Typography>
        <Box sx={{ display: 'flex'}}>
          <div className="contact-list">
            <div className="contact-item"><Avatar sx={avatarStyle}><Mail/></Avatar>&emsp;Email</div>
            <div className="contact-item"><Tooltip title='Hometown' placement='top' arrow><Avatar sx={avatarStyle}><Home/></Avatar></Tooltip> &emsp;Hometown</div>
            <div className="contact-item"><Avatar sx={avatarStyle}><Phone/></Avatar>&emsp;Contact</div>
            <div className="contact-item"><Avatar sx={avatarStyle}><LocationCity/></Avatar>&emsp;Address</div>
            <div className="contact-item"><Avatar sx={avatarStyle}><LinkedIn/></Avatar>&emsp;LinkedIn</div>
            <div className="contact-item-none"></div>
            <div className="contact-item"><Avatar sx={avatarStyle}><GitHub/></Avatar>&emsp;GitHub</div>
          </div>
          <Divider orientation='vertical' variant='middle' flexItem />
          <div className="contact-form">
            <TextField label='Name' variant='outlined' margin='dense' fullWidth />
            <TextField label='Company Name' variant='outlined' margin='dense' fullWidth />
            <TextField label='Contact NO.' variant='outlined' margin='dense'fullWidth />
            <TextField label='Email' variant='outlined' margin='dense' fullWidth/>
            <Button variant='contained'>Send</Button>
          </div>
        </Box>
      </Paper>
    </div>
  )
}
