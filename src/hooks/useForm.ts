import { useState } from "react";

export const useForm= <T extends Object>(initState: T) => {
    const [formData,setFormData]= useState(initState);

    const onChange= (field: keyof T, value: String)=>{
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    return{
        ...formData,
        form: formData,
        onChange,
    };
};