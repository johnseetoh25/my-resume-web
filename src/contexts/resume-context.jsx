import React, { createContext, useContext, useState } from 'react'

const ResumeContext = createContext();

export function ResumeProvider({children}) {
    const [formData, setFormData] = useState({});

    return (
        <ResumeContext.Provider value={{ formData, setFormData}}>
            {children}
        </ResumeContext.Provider>
    )
}

export function useResume() {
    return useContext(ResumeContext);
}
