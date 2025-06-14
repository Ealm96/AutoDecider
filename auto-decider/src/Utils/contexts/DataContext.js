import { createContext, useState } from "react";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [formData, setFormData] = useState(null);

    const updateFormData = (data) => {
        setFormData(data);
    };

    return (
        <DataContext.Provider value={{ formData, updateFormData }}>
            {children}
        </DataContext.Provider>
    );
};


export default DataContext;
