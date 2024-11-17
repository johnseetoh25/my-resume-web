import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import { Typography } from '@mui/material'
import React from 'react'

export default function ExperienceTimeline() {
  return (
    <div>
        <Timeline>
            <TimelineItem>
                <TimelineOppositeContent>March 2022 - April 2023</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography>Company A</Typography>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum earum ipsam quidem molestias dolor tempora ipsa, necessitatibus natus deleniti cumque beatae? Perspiciatis delectus sapiente, minus facere deserunt quam quas saepe?</p>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    </div>
  )
}
