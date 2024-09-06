import { useState } from "react";
import FormField from "@/components/FormField";
import CalcResult from "@/components/CalcResult";
import Image from 'next/image';


export default function CalcImc() {
    const [weight, setWeight] = useState<string>('');
    const [height, setHeight] = useState<string>('');
    const [imc, setImc] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const footerContent = (
        <div>
        </div>
    );
    function calculateImc() {
        const weightNum = parseFloat(weight);
        const heightNum = parseInt(height, 10) / 100;
        
        if (isNaN(weightNum) || isNaN(heightNum) || heightNum === 0) {
            setErrorMessage('Preencha os campos corretamente');
            setImc(0);
            setVisible(false);
            setWeight('');
            setHeight('');
            return;
        }

        const result = Number((weightNum / (heightNum * heightNum)).toFixed(2));
        setImc(result);
        setVisible(true);
        setErrorMessage('');
    }

    return (
        <section className="imc-calc flex justify-center items-center min-h-screen p-4">
            <div className="calculator max-w-lg w-full bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <div className="header-imc flex justify-between items-center mb-6">
                    <h1 className="imc-calc-title text-2xl sm:text-3xl md:text-4xl font-bold">Calculadora IMC</h1>
                    <Image className="imc-img-header" src="/img/health-header.png" alt="IMC" width={50} height={50} priority />
                </div>
                <div className="imc-calc-input-content flex flex-col md:flex-row gap-4 mb-6">
                    <div className="weight w-full md:w-1/2">
                        <FormField label="Peso" state={weight} funcState={setWeight} />
                    </div>
                    <div className="height w-full md:w-1/2">
                        <FormField label="Altura (cm)" state={height} funcState={setHeight} />
                    </div>
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button className="imc-btn-calc" onClick={calculateImc}>Calcular</button>

                <p className="imc-calc-result mt-4 text-center text-lg font-semibold">Resultado: {imc}</p>
            </div>
            <CalcResult imc={imc} visible={visible} setVisible={setVisible} footerContent={footerContent} />
        </section>
    );
}