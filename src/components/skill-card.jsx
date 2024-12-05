import { Photo } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Collapse, List, ListItem, ListItemText, ListSubheader, Typography } from '@mui/material'
import React from 'react'
import '../components/skill-card.css'

function SkillItem(){
    return (
        <div className='skill-item-layout'>
            <div className="item-icon-logo"></div>
            <div className="item-name">React</div>
        </div>
    )
}

export default function SkillCard() {
  return (
    <div>
        <Card className='skill-card-layout'>
            <CardMedia className='skill-card-media'><Photo/>
            <div className="skill-title">Web Development</div>
            </CardMedia>
            <CardContent sx={{paddingTop: 3}}>
                <Typography variant='subTitle'><span>|</span>front-end framework</Typography>
                <div className="skill-listing-layout">
                    <SkillItem/>
                    <SkillItem/>
                    <SkillItem/>
                    <SkillItem/>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}
