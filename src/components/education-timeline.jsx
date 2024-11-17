import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import { Typography } from '@mui/material'
import React from 'react'

export default function EducationTimeline() {
  return (
    <div>
        <Timeline>
            <TimelineItem>
                <TimelineOppositeContent>December 2019 -</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography>University</Typography>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusamus quaerat rerum. Consectetur tempore nihil, consequuntur ullam dolore, minus excepturi aliquam doloremque, recusandae vero officia sint sit et fuga impedit?</p>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    </div>
  )
}
