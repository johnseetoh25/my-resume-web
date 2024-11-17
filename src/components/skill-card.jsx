import { Photo } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Collapse, List, ListItem, ListItemText, ListSubheader, Typography } from '@mui/material'
import React from 'react'
import '../components/skill-card.css'

export default function SkillCard() {
  return (
    <div>
        <Card className='skill-card-layout'>
            <CardMedia className='skill-card-media'><Photo/></CardMedia>
            <CardContent>
                <Typography variant='h6'>Skill List Title</Typography>
                <List>
                    <ListItem>
                        <ListItemText>foundational</ListItemText>
                    </ListItem>
                    <Collapse>
                        <List component="div">
                            <ListItem><ListItemText>HTML</ListItemText></ListItem>
                        </List>
                    </Collapse>
                </List>
            </CardContent>
        </Card>
    </div>
  )
}
