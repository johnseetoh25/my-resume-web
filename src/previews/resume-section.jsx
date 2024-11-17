import React from 'react'
import '../previews/all-section-style.css'
import { Button, Paper, Typography } from '@mui/material'
import { Download } from '@mui/icons-material'
import ExperienceTimeline from '../components/experience-timeline'
import EducationTimeline from '../components/education-timeline'
import SkillCard from '../components/skill-card'

export default function ResumeSection() {
  return (
    <div className='resume-section-layout'>
      <Typography variant='h3' sx={{textAlign: 'center'}}>Resume</Typography>
      <div className="resume-grid-layout">
        <Paper sx={{gridColumn: 'span 2', padding: 2}}>
          <Typography variant='h4' sx={{textAlign: 'center'}}>Skills</Typography>
          <div className="skill-card-listing-layout">
            <SkillCard/>
            <SkillCard/>
            <SkillCard/>
            <SkillCard/>
          </div>
        </Paper>
        <Paper sx={{ padding: 2 }}>
          <Typography variant='h4' sx={{textAlign: 'center'}}>Education</Typography>
          <EducationTimeline/>
        </Paper>
        <Paper sx={{ gridRow: 'span 2', padding: 2 }}>
          <Typography variant='h4' sx={{textAlign: 'center'}}>Experience</Typography>
          <ExperienceTimeline/>
        </Paper>
        
        <Paper sx={{ padding: 2 }}>
          <Typography variant='h4' sx={{textAlign: 'center'}}>Language</Typography>
        </Paper>
        <Paper >
          <Typography variant='h4'></Typography>
        </Paper>
      </div>
      <Button variant='contained' startIcon={<Download/>} sx={{ textTransform: 'none'}}>Download CV</Button>
    </div>
  )
}
