import { Autocomplete, Box, Button, Checkbox, Divider, FormControlLabel, MenuItem, Paper, Switch, TextField, Typography } from '@mui/material'
import React from 'react'
import '../components/drawer.css'
import { educationLevelLists } from '../library/educationLib'
import { stateList } from '../library/commonLib'
import { useResume } from '../contexts/resume-context'
import { Delete } from '@mui/icons-material'
import { DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'

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
            <TextField label="Full Name" name='fullname' value={resumeData.fullname} onChange={handleChange} fullWidth margin='normal'/>
            <Box className='personal-row-style'>
                <TextField label="Nationality" name='nationality' value={resumeData.nationality} onChange={handleChange} fullWidth/>
                <DatePicker label="Date of Birth" name='dateBirth' value={resumeData.dateBirth ? dayjs(resumeData.dateBirth) : null } onChange={(newValue)=>handleChange({target: { name: 'dateBirth', value: newValue}})} />
            </Box>
            <Box className='address-row-style'>
                <TextField label="City/Town" />
                <Autocomplete options={stateList} renderInput={(params) => <TextField {...params} label="State" name='state' value={resumeData.state} onChange={handleChange}></TextField>}/>
            </Box>
            <TextField label="Contact Number" name='contact' value={resumeData.contact} onChange={handleChange} fullWidth margin='dense'/>
            <TextField label="Email" name='email' value={resumeData.email} onChange={handleChange} fullWidth margin='dense'/>
            
            <Typography variant='h4' sx={{ marginTop: 3}}>Education</Typography>
            <Divider/>
            { resumeData.educationLists.map((eduItem, index) => (
                <Paper key={index} elevation={4} sx={{padding: 2, marginY: 2}}>
                    <TextField label="Institution Name" name='institutionName' value={eduItem.institutionName} onChange={(e) => handleEducationChange(index, e)} fullWidth/>
                    <Box className='address-row-style'>
                        <TextField label="Institution City/Town" />
                        <Autocomplete options={stateList} renderInput={(params) => <TextField {...params} label="Institution States"></TextField>}/>
                    </Box>
                    <TextField label="Education Level" name='educationLevel' onChange={(e) => handleEducationChange(index, e)} select defaultValue="" fullWidth >
                        {educationLevelLists.map((eduLevelItem) => (
                            <MenuItem key={eduLevelItem.id} value={eduLevelItem.value}>
                                {eduLevelItem.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField label="Field Study" name='fieldStudy' value={eduItem.fieldStudy} fullWidth sx={{ marginY: 1.5}}/>
                    <Box className='date-range-style'>
                        <DatePicker label="begin date" views={[ 'month', 'year']} format='MMMM YYYY' />
                        <DatePicker label="gradurate date" name='endDate' value={eduItem.endDate ? dayjs(eduItem.endDate) : null} onChange={(newValue) => handleEducationChange(index, {target: {name: 'endDate', value: newValue}})} disabled={eduItem.presentStudy} views={[ 'month', 'year']} format='MMMM YYYY' />
                        <FormControlLabel control={<Switch checked={eduItem.presentStudy} name='presentStudy' onChange={(e) => handleEducationChange(index, e)} /> } label="Present" labelPlacement='start'/>
                    </Box>
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

            <Typography variant='h4' sx={{ marginTop: 3}}>Technical Skills</Typography>
            <Divider/>
            {/* <Box className="skill-item-style" sx={{marginY: 2}}>
                <TextField label="skill" />
                <TextField label="level" select></TextField>
                <Button variant='contained'><Delete/></Button>
            </Box> */}
            <Button variant='outlined' sx={{width: '100%'}}>add item</Button>

            <Typography variant='h4' sx={{ marginTop: 3}}>Language</Typography>
            <Divider/>
            {/* <Box className="language-item-style" sx={{marginY: 2}}>
                <TextField label="language" />
                <TextField label="level" select></TextField>
                <Button variant='contained'><Delete/></Button>
            </Box> */}
            

            <Typography variant='h4' sx={{ marginTop: 3}}>Interest</Typography>
            <Divider/>

            <div className='drawer-bottom'>
                <Button type='submit' variant='contained'>save</Button>
            </div>
        </form>
    </div>
  )
}
