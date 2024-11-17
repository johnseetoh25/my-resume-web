import { Card, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material'
import React from 'react'
import '../components/portfolio-card.css'
import { Photo, Theaters } from '@mui/icons-material'

export default function PortfolioCard() {
  return (
    <Card>
        <CardMedia className='portfolio-media-layout'><Photo/>/<Theaters/></CardMedia>
        <CardContent>
            <Typography variant='h5'>Portfolio Name</Typography>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, illum! Ut consectetur nostrum eum odio. Maxime impedit aut voluptatibus saepe sunt nisi quis incidunt laudantium error distinctio. Numquam, repellat eos.</p>
            <Stack direction='row' sx={{ gap: 1, flexWrap: 'wrap'}}>
              <Chip label={'Web Design'}/>
              <Chip label={'React'}/>
              <Chip label={'HarmonyOS'}/>      
            </Stack>
        </CardContent>
    </Card>
  )
}
