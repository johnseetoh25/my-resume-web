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
        skillTypeLists: [{
            skillTypeTitle: '',
            subSkillLists: [{
                skillSubTitle: '',
                skillItemList: [
                   { skillPicture: '', skillItemName: '' }
                ]
            }]
        }],
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

    const handleSkillTypeChange = (skillTypeIndex, subSkillIndex, itemIndex, e) => {
        const { name, value } = e.target || e;
        setResumeData((prevData) => {
            const updatedSkillTypeLists = [...prevData.skillTypeLists];
            if (subSkillIndex === null) {
                // Update skillTypeTitle
                updatedSkillTypeLists[skillTypeIndex][name] = value;
            } else if (itemIndex === null) {
                // Update subSkillTitle
                updatedSkillTypeLists[skillTypeIndex].subSkillLists[subSkillIndex][name] = value;
            } else {
                // Update skillItem (skillPicture or skillItemName)
                updatedSkillTypeLists[skillTypeIndex].subSkillLists[subSkillIndex].skillItemList[itemIndex][name] = value;
            }
            return { ...prevData, skillTypeLists: updatedSkillTypeLists };
        });
    };

    // Action for adding and remove a item in Education section 
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

    // Action for adding and remove a item in Skills section 
    const addSkillTypeItem = () => {
        setResumeData(prevData => ({
            ...prevData,
            skillTypeLists: [ ...prevData.skillTypeLists, { skillTypeTitle: '', subSkillLists: [{ skillSubTitle: '', skillItemList: [{ skillPicture: '', skillItemName: '' }] }] } ]
        }));
    };

    const removeSkillTypeItem = (index) => {
        if (resumeData.skillTypeLists.length > 1) {
            setResumeData(prevData => {
                const updatedSkillType = prevData.skillTypeLists.filter((_, i) => i !== index);
                return { ...prevData, skillTypeLists: updatedSkillType };
            });
        }
    };

    const addSubSkillItem = (skillTypeIndex) => {
        setResumeData((prevData) => {
            const updatedSkillTypeLists = [...prevData.skillTypeLists];
            updatedSkillTypeLists[skillTypeIndex].subSkillLists.push({
                skillSubTitle: '',
                skillItemList: [{ skillPicture: '', skillItemName: '' }]
            });
            return { ...prevData, skillTypeLists: updatedSkillTypeLists}
        });
    };

    const removeSubSkillItem = (skillTypeIndex, subSkillIndex) => {
        setResumeData(prevData => {
            const updatedSkillTypeLists = [...prevData.skillTypeLists];
            const subSkillLists = updatedSkillTypeLists[skillTypeIndex].subSkillLists;

            if (subSkillLists.length > 1) {
                subSkillLists.splice(subSkillIndex, 1);
            }
            return { ...prevData, subSkillLists: updatedSkillTypeLists };
        });  
    }

    const addSkillItem = (skillTypeIndex, subSkillIndex) => {
        setResumeData((prevData) => {
            const updatedSkillTypeLists = [...prevData.skillTypeLists];
            updatedSkillTypeLists[skillTypeIndex].subSkillLists[subSkillIndex].skillItemList.push({
                skillPicture: '',
                skillItemName: ''
            });
            return { ...prevData, skillTypeLists: updatedSkillTypeLists };
        });
    };

    const removeSkillItem = (skillTypeIndex, subSkillIndex, itemIndex) => {
        setResumeData((prevData) => {
            const updatedSkillTypeLists = [...prevData.skillTypeLists];
            const skillItemList = updatedSkillTypeLists[skillTypeIndex].subSkillLists[subSkillIndex].skillItemList;
    
            if (skillItemList.length > 1) {
                skillItemList.splice(itemIndex, 1);
            }
            return { ...prevData, skillTypeLists: updatedSkillTypeLists };
        });
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
            }}
        >
            {children}
        </ResumeContext.Provider>
    )
}

