import React, { createContext, useContext, useState } from 'react'

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({children}) => {
    const [resumeData, setResumeData] = useState({
        firstname: '',
        lastname: '',
        contact: '',
        email: '',
        educationLists: [{
            institutionName: '',
            institutionLocation: '',
            educationLevel: '',
            fieldStudy: ''
        }],
        skillLists: [{
            skill: '', level: ''
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

    const addEducationItem = () => {
        setResumeData(prevData => ({
            ...prevData,
            educationLists: [...prevData.educationLists, { institutionName: '', educationLevel: '' }]
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(resumeData);
    };


    return (
        <ResumeContext.Provider 
            value={{ 
                resumeData,
                handleChange,
                handleEducationChange,
                addEducationItem,
                removeEducationItem,
                handleSubmit
            }}
        >
            {children}
        </ResumeContext.Provider>
    )
}

