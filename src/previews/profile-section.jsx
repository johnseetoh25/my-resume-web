import { Divider } from '@mui/material'
import React from 'react'
import '../previews/all-section-style.css'

export default function ProfileSection() {
  return (
    <div className="profile-section" style={{ paddingTop: '12%'}}>
      <div className="personal-summary">
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente quibusdam doloremque, at ratione quo vero adipisci eveniet quam eligendi quia velit aspernatur perferendis sequi vel iusto maxime consequatur quis!</p>
      </div>
      <Divider orientation='vertical' variant='middle' flexItem/>
      <div className="personal-bios"></div>
    </div>
  )
}
