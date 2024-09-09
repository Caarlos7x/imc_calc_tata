import React from "react";
import { Dialog } from 'primereact/dialog';

interface CalcResultProps {
    imc: number;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    footerContent: React.ReactNode;
}

export default function CalcResult({ imc, visible, setVisible, footerContent }: CalcResultProps) {
    const getAlertMessage = () => {
        if (imc === 0) {
            return "Preencha os campos acima";
        } else if (imc < 18.5) {
            return (
                <>
                    Atenção! Você está abaixo do peso
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline w-6 h-6 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4A9.99 9.99 0 0112 2a9.99 9.99 0 016.938 17.062L12 22l-6.938-6.938z" />
                    </svg>
                </>
            );
        } else if (imc >= 18.5 && imc < 24.9) {
            return (
                <>
                    Bom trabalho! Seu IMC está normal
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline w-6 h-6 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </>
            );
        } else if (imc >= 25.0 && imc < 29.9) {
            return (
                <>
                    Atenção! Você está com sobrepeso
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline w-6 h-6 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m0-4h.01M12 19a9 9 0 100-18 9 9 0 000 18z" />
                    </svg>
                </>
            );
        } else if (imc >= 30.0 && imc < 34.9) {
            return (
                <>
                    Cuidado! Você está com obesidade Grau I
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline w-6 h-6 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </>
            );
        } else if (imc >= 35.0 && imc < 39.9) {
            return (
                <>
                    Cuidado! Você está com obesidade Grau II
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline w-6 h-6 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </>
            );
        }
    };
    
    
    return (
        <Dialog 
            className="imc-result"
            header={`Resultado do IMC é: ${imc}`} 
            visible={visible} 
            position="bottom" 
            style={{ width: '50vw' }} 
            onHide={() => setVisible(false)} 
            footer={footerContent} 
            draggable={false} 
            resizable={false}
        >
            {getAlertMessage()}
        </Dialog>
    );
}