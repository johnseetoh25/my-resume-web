import { Box, Button, Divider, FormControlLabel, MenuItem, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import '../components/drawer.css'
import { educationLevelLists } from '../library/educationLib'
import { useResume } from '../contexts/resume-context'
import { CheckBox, Delete } from '@mui/icons-material'
import { DatePicker } from '@mui/x-date-pickers'

export default function DrawerLayout() {
    const {
        resumeData, 
        handleChange,
        handleEducationChange, 
        addEducationItem, 
        removeEducationItem, 
        handleSubmit
    } = useResume();
  
    return (
    <div className='drawer-layout-style'>
        <form onSubmit={handleSubmit}>
            <Typography variant='h3'>Personal Info</Typography>
            <TextField label="Frist Name" name='firstname' value={resumeData.firstname} onChange={handleChange} fullWidth margin='normal'/>
            <TextField label="Last Name" name='lastname'  value={resumeData.lastname} onChange={handleChange} fullWidth margin='dense'/>
            <TextField label="Contact Number" name='contact' value={resumeData.contact} onChange={handleChange} fullWidth margin='dense'/>
            <TextField label="Email" name='email' value={resumeData.email} onChange={handleChange} fullWidth margin='dense'/>
            
            <Typography variant='h4' sx={{ marginTop: 3}}>Education</Typography>
            <Divider/>
            {resumeData.educationLists.map((eduItem, index) => (
                <Paper key={index} elevation={4} sx={{padding: 2, marginY: 2}}>
                    <TextField label="Institution Name" name='institutionName' value={eduItem.institutionName} onChange={(e) => handleEducationChange(index, e)} fullWidth/>
                    <TextField label="Education Level" name='educationLevel' onChange={(e) => handleEducationChange(index, e)} select defaultValue="" fullWidth margin='normal'>
                        {educationLevelLists.map((eduLevelItem) => (
                            <MenuItem key={eduLevelItem.id} value={eduLevelItem.value}>
                                {eduLevelItem.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <DatePicker label="begin date" views={[ 'month', 'year']} format='MMMM YYYY' sx={{ marginY: 1}} slotProps={{ textField: { helperText: 'MM YYYY'} }}/>
                    <DatePicker label="gradurate date" views={[ 'month', 'year']} format='MMMM YYYY' sx={{ marginY: 1}} slotProps={{ textField: { helperText: 'MM YYYY'} }} />
                    <FormControlLabel control={<CheckBox/>} label="present"/>
                    <Button onClick={() => removeEducationItem(index)} disabled={resumeData.educationLists.length <= 1}>remove</Button>
                </Paper>
            ))}
            <Button onClick={addEducationItem} variant='outlined' sx={{width: '100%'}}>add item</Button>
            
            <Typography variant='h4' sx={{ marginTop: 3}}>Work Experience</Typography>
            <Divider/>
            <Paper sx={{padding: 2, marginY: 2}}>
                <TextField label="Job Title" fullWidth/>
                <TextField label="Employer" fullWidth/>
                <TextField label="Location" fullWidth/>
            </Paper>
            <Button variant='outlined' sx={{width: '100%'}}>add item</Button>

            <Typography variant='h4' sx={{ marginTop: 3}}>Skills</Typography>
            <Divider/>
            <Box className="skill-item-style" sx={{marginY: 2}}>
                <TextField label="skill" />
                <TextField label="level" select></TextField>
                <Button variant='contained'><Delete/></Button>
            </Box>
            <Button variant='outlined' sx={{width: '100%'}}>add item</Button>

            <Typography variant='h4' sx={{ marginTop: 3}}>Language</Typography>
            <Divider/>

            <Typography variant='h4' sx={{ marginTop: 3}}>Interest</Typography>
            <Divider/>

            <div className='drawer-bottom'>
                <Button type='submit' variant='contained'>save</Button>
            </div>
        </form>
    </div>
  )
}
