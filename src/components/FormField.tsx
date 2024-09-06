interface FormFieldProps {
    label: string;
    state: number;
    funcState: React.Dispatch<React.SetStateAction<number>>;
}

export default function FormField(props: FormFieldProps) {
    return (
        <div className="flex imc-forms-input">
            <label className="w-[60px]">{props.label}</label>
            <input
                className="border p-1"
                type="number"
                value={props.state}
                onChange={(evt) => props.funcState(Number(evt.target.value))}
            />
        </div>
    );
}
