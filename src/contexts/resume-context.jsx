import dayjs from 'dayjs';
import React, { createContext, useContext, useState } from 'react'

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({children}) => {
    const [resumeData, setResumeData] = useState({
        fullname: '',
        nationality: '',
        dateBirth: null,
        cityTown: '',
        state: '',
        contact: '',
        email: '',
        educationLists: [{
            institutionName: '',
            institutionCity: '',
            institutionState: '',
            educationLevel: '',
            fieldStudy: '',
            beginDate: null,            
            endDate: null,
            presentStudy: false,
        }],
        skillLists: [{
            skill: '', level: ''
        }]
    });

    const handleChange = (e) => {
        const { name, value } = e.target || e;
        setResumeData(prevData => ({
            ...prevData,
            [name] : name === "dateBirth" ? dayjs(value).toJSON()
                   : value
        }));
    };

    const handleEducationChange = (index, e) => {
        const { name, value, checked, type } = e.target || e;
        setResumeData(prevData => {
            const updatedEducation = [...prevData.educationLists];
            updatedEducation[index] = {
                ...updatedEducation[index],
                [name] : type === "checkbox" ? checked 
                       : name === "endDate" ? dayjs(value).toJSON()
                       : value
            };
            return { ...prevData, educationLists: updatedEducation };
        });
    };

    const addEducationItem = () => {
        setResumeData(prevData => ({
            ...prevData,
            educationLists: [...prevData.educationLists, { institutionName: '', institutionLocation: '', educationLevel: '', fieldStudy: '', endDate: null, presentStudy: false }]
        }));
    };

    const removeEducationItem = (index) => {
        // remove all but one item still here
        if (resumeData.educationLists.length > 1) {
            setResumeData(prevData => {
                const updatedEducation = prevData.educationLists.filter((_, i) => i !== index);
                return { ...prevData, educationLists: updatedEducation };
            });
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

