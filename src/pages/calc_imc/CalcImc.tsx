import { useState } from "react";
import FormField from "@/components/FormField";
import ImcTable from "@/components/ImcTable";
import ShimmerButton from "@/components/magicui/shimmer-button";

export default function CalcImc() {

    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [imc, setImc] = useState<number>(0);

    function calculateImc() {
        let result = Number((weight / (height * height)).toFixed(2));
        setImc(result);
    }

    const alert = () => {
        if (imc === 0) {
            return "Preencha os campos acima";
        } else
        if (imc < 18.5) {
            return "mago réi";
        } else if (imc >= 18.5 && imc < 24.9) {
            return "normal";
        } else if (imc >= 25.0 && imc < 29.9) {
            return "Tata, você ta uma gordinha suculenta";
        } else if (imc >= 30.0 && imc < 34.9) {
            return "Nossa, Tata ta com obesidade Grau I";
        } else if (imc >= 35.0 && imc < 39.9) {
            return "Nossa, Tata ta com obesidade Grau II";
        } else {
            return "obesidade Grau Thais Carla";
        }
    }


    return (
        <section className="imc-calc">
            <div className="calculator">
                <h1 className="imc-calc-title">Cálculo do IMC</h1>
                <FormField label="Peso" state={weight} funcState={setWeight} />
                <FormField label="Altura" state={height} funcState={setHeight} />
                <ShimmerButton className="shadow-2xl imc-calc-btn" onClick={calculateImc}>
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                        Calcular
                    </span>
                </ShimmerButton>
                {/* <button className="imc-calc-btn" onClick={calculateImc}>Calcular</button> */}
                <p className="imc-calc-result">Resultado: {imc} <br />  {alert()}!</p>
                <ImcTable />
            </div>
        </section>
    )
}