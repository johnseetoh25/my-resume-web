import { Autocomplete, Box, Button, Divider, FormControlLabel, MenuItem, Paper, Switch, TextField, Typography } from '@mui/material'
import React from 'react'
import '../components/drawer.css'
import { educationLevelLists } from '../library/educationLib'
import { stateList } from '../library/commonLib'
import { useResume } from '../contexts/resume-context'
import { Delete, Photo } from '@mui/icons-material'
import { DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'

export default function DrawerLayout() {
    const {
        resumeData, 
        handleChange,
        handleEducationChange,
        handleSkillTypeChange,
        addEducationItem, 
        removeEducationItem, 
        addSkillTypeItem,
        removeSkillTypeItem,
        addSubSkillItem,
        removeSubSkillItem,
        addSkillItem,
        removeSkillItem,
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
            
            <Typography variant='h3' style={{ textDecoration: 'underline', textAlign: 'center'}}>Resume</Typography>
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
            { resumeData.skillTypeLists.map((skillTypeItem, skillTypeIndex) => (
                <Paper key={skillTypeIndex} className="skill-box-style" sx={{padding: 2, marginY: 2}}>
                    <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <TextField label="Skill Title" name='skillTypeTitle' value={skillTypeItem.skillTypeTitle} onChange={(e) => handleSkillTypeChange(skillTypeIndex, null, null, e)} sx={{ width: '60%'}}/>
                        <Button onClick={() => removeSkillTypeItem(skillTypeIndex)} disabled={resumeData.skillTypeLists.length <= 1} variant='contained'><Delete/></Button>
                    </Box>
                    <Divider sx={{ marginY: 2}}/>
                    <Box sx={{ border: '1px solid lightgray', padding: 1, borderRadius: 1}}>
                        { skillTypeItem.subSkillLists.map((subSkillItem, subSkillIndex) => (
                            <Box key={subSkillIndex} sx={{ marginBottom: 2}}>
                                <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <TextField label="Skill Subtitle" name='skillSubTitle' value={subSkillItem.skillSubTitle} onChange={(e) => handleSkillTypeChange(skillTypeIndex, subSkillIndex, null, e)}/>
                                    <Button onClick={() => removeSubSkillItem(skillTypeIndex, subSkillIndex)} disabled={skillTypeItem.subSkillLists.length <= 1} variant='none'><Delete/></Button>
                                </Box>
                                <Divider sx={{ marginY: 1}}/>
                                <div className="skill-item-list">
                                    {subSkillItem.skillItemList.map((item, itemIndex) => (
                                    <Box key={itemIndex}>
                                        <div className='picture-file-input'>
                                            <label className='picture-file-label' for='picture-file-id'>select a picture&thinsp;<Photo/></label>
                                            <input id='picture-file-id' type='file' accept="image/png, image/jpeg"/>
                                        </div>
                                        <TextField label="Skill Item" name='skillItemName' value={item.skillItemName} onChange={(e) => handleSkillTypeChange(skillTypeIndex, subSkillIndex, itemIndex, e)} sx={{ marginY: 1}} fullWidth/>
                                        <Button onClick={() => removeSkillItem(skillTypeIndex, subSkillIndex, itemIndex)} disabled={subSkillItem.skillItemList.length <= 1} variant='contained'><Delete/></Button>
                                    </Box>
                                    ))}
                                    <Button onClick={() => addSkillItem(skillTypeIndex, subSkillIndex)} variant='outlined' sx={{width: '100%'}}>add skill item</Button>
                                </div>
                            </Box>
                        ))}
                    </Box>
                    <Button onClick={() => addSubSkillItem(skillTypeIndex)} variant='outlined' sx={{width: '100%', marginTop: 2 }}>add sub title item</Button>
                </Paper>
            ))}
            <Button onClick={addSkillTypeItem} variant='outlined' sx={{width: '100%'}}>add item</Button>

            <Typography variant='h4' sx={{ marginTop: 3}}>Language</Typography>
            <Divider/>
            <Box className="language-item-style" sx={{marginY: 2}}>
                <TextField label="language" />
                <TextField label="level" select></TextField>
                <Button variant='contained'><Delete/></Button>
            </Box>
            

            <Typography variant='h4' sx={{ marginTop: 3}}>Interest</Typography>
            <Divider/>

            <div className='drawer-bottom'>
                <Button type='submit' variant='contained'>save</Button>
            </div>
        </form>
    </div>
  )
}
