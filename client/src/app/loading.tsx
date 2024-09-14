"use client";
import '../style/loader.css';
import { useState, useEffect } from 'react';

// Constantes para melhor legibilidade e manutenção do código
const MAX_PROGRESS = 99;
const PROGRESS_INCREMENT = 1;
const SIMULATION_INTERVAL = 100;

export default function Loading() {
    // Utilização de desestruturação para extrair progress e setProgress
    const [progress, setProgress] = useState(1);

    useEffect(() => {
        // Utilização de uma função separada para simular o progresso de carregamento
        const simulateLoading = () => {
            setProgress(prevProgress => {
                const nextProgress = prevProgress + PROGRESS_INCREMENT;
                // Limitar o progresso ao máximo definido
                return Math.min(nextProgress, MAX_PROGRESS);
            });
        };

        // Intervalo para simular o carregamento
        const interval = setInterval(simulateLoading, SIMULATION_INTERVAL);

        // Limpar o intervalo ao desmontar o componente
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">
 
            <div className="cat">
                <div className="ear ear--left"></div>
                <div className="ear ear--right"></div>
                <div className="face">
                    <div className="eye eye--left">
                        <div className="eye-pupil"></div>
                    </div>
                    <div className="eye eye--right">
                        <div className="eye-pupil"></div>
                    </div>
                    <div className="muzzle"></div>
                </div>
            </div>
        </div>
    );
}

