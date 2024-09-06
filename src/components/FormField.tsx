interface FormFieldProps {
    label: string,
    state: any,
    funcState: any,
}


export default function FormField(props: FormFieldProps) {
    return (
        <div className="flex imc-forms-input">
            <label className="w-[60px]">{props.label}</label>
            <input className="border p-1" value={props.state} onChange={(evt) => props.funcState(evt.target.value)} />
        </div>
    );
}