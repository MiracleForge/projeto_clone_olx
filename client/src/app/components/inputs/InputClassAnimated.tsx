'use client';
import React, { useState } from 'react';
import { IoEye, IoEyeOff, IoCloseCircleSharp } from 'react-icons/io5';

interface InputAnimatedProps {
    label: string;
    type: 'text' | 'password'
}

export const InputClassAnimated = ({ label, type = 'text' }: InputAnimatedProps) => {
    const [statusEye, setStatusEye] = useState(false);
    const [inputFocusState, setInputFocusState] = useState<boolean>(false);
    const [isValueEmpty, setValueEmpty] = useState(false);
    const [isTouched, setIsTouched] = useState(false);

    const handleEyeStatus = () => {
        setStatusEye(!statusEye);
    }

    const handleInputFocus = () => {
        setInputFocusState(true);
        setIsTouched(true);
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setInputFocusState(false);
            setValueEmpty(true);
        } else {
            setValueEmpty(false);
        }
    };

    return (
        <div className='flex relative items-center border-2 rounded-xl bg-white mx-10 md:mx-28 lg:mx-auto lg:w-1/2 h-12 p-2'>
            <label htmlFor={label}>
                <small
                    className={`absolute font-semibold text-md duration-700 transition-all ${inputFocusState ? '-translate-y-12 text-lg text-PrussianBlue' : 'translate-y-0 text-gray-400 text-md'}`}
                >
                    {label}
                </small>
            </label>
            <input
                type={statusEye ? 'text' : type} // Use o estado do ícone para alternar entre 'text' e 'password'
                id={label}
                required
                className='text-sm focus:outline-none w-full pr-10'
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />

            {type === 'password' && (
                <button
                    type='button'
                    className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500'
                    onClick={handleEyeStatus}
                >
                    {statusEye ? <IoEyeOff /> : <IoEye />}
                </button>
            )}
           {isValueEmpty && isTouched && (
                <span className='text-red-500 text-xs mt-1 absolute -bottom-6 flex items-center space-x-3 gap-x-2'> <IoCloseCircleSharp/> Preencha o campo {label}</span>
            )}
        </div>
    )
}

export default InputClassAnimated;
