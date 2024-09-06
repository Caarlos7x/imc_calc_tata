import React from 'react';

interface FormFieldProps {
    label: string;
    state: string;
    funcState: React.Dispatch<React.SetStateAction<string>>;
}

export default function FormField(props: FormFieldProps) {
    return (
        <div className="flex imc-forms-input">
            <label className="imc-forms-label">{props.label}</label>
            <input
                className="border p-1"
                type="text"
                value={props.state}
                onChange={(evt) => props.funcState(evt.target.value)}
            />
        </div>
    );
}