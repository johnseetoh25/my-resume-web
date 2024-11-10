import { Button, Divider, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import '../components/drawer.css'

export default function DrawerLayout() {
    const [resumeData, setResumeData] = useState({
        firstname: '',
        lastname: '',
        contact: '',
        email: '',
        educationLists: [{
            collegeName: ''
        }]

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setResumeData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleEducationChange = (index, e) => {
        const { name, value } = e.target;
        setResumeData(prevData => {
            const updatedEducation = [...prevData.educationLists];
            updatedEducation[index] = {
                ...updatedEducation[index],
                [name]: value
            };
            return { ...prevData, educationLists: updatedEducation };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(resumeData);
    };

    const addEducationItem = () => {
        setResumeData(prevData => ({
            ...prevData,
            educationLists: [...prevData.educationLists, { collegeName: ''}]
        }))
    }

    const removeEducationItem = (index) => {
        // remove all but one item still here
        if (resumeData.educationLists.length > 1) {
            setResumeData(prevData => {
                const updatedEducation = prevData.educationLists.filter((_, i) => i !== index);
                return { ...prevData, educationLists: updatedEducation };
            })
        }
    };
  
    return (
    <div className='drawer-layout-style'>
        <form onSubmit={handleSubmit}>
            <Typography variant='h3'>Personal Info</Typography>
            <TextField label="Frist Name" name='firstname' value={resumeData.firstname} onChange={handleChange} fullWidth/>
            <TextField label="Last Name" name='lastname'  value={resumeData.lastname} onChange={handleChange} fullWidth/>
            <TextField label="Contact Number" name='contact' value={resumeData.contact} onChange={handleChange} fullWidth/>
            <TextField label="Email" name='email' value={resumeData.email} onChange={handleChange} fullWidth/>
        
            <Typography variant='h4'>Education</Typography>
            <Divider/>
            {resumeData.educationLists.map((eduItem, index) => (
                <Paper key={index} sx={{padding: 2}}>
                    <TextField label="Colllege/Unversity Name" name='collegeName' value={eduItem.collegeName} onChange={(e) => handleEducationChange(index, e)} fullWidth/>
                    <Button onClick={() => removeEducationItem(index)} disabled={resumeData.educationLists.length <= 1}>remove</Button>
                </Paper>
            ))}
            <Button onClick={addEducationItem} variant='outlined' sx={{width: '100%'}}>add item</Button>
            
            <div className='drawer-bottom'>
                <Button type='submit' variant='contained'>save</Button>
            </div>
        </form>
    </div>
  )
}
