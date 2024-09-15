'use client';
import React, { useState } from 'react';
import { IoEye, IoEyeOff, IoCloseCircleSharp } from 'react-icons/io5';

interface InputAnimatedProps {
    label: string;
    type: 'text' | 'password';
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    error?: string;
}

export const InputClassAnimated = ({
    label,
    type = 'text',
    value,
    onChange,
    onBlur,
    error
}: InputAnimatedProps) => {
    const [statusEye, setStatusEye] = useState(false);
    const [inputFocusState, setInputFocusState] = useState<boolean>(false);

    const handleEyeStatus = () => {
        setStatusEye(!statusEye);
    }

    const handleInputFocus = () => {
        setInputFocusState(true);
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setInputFocusState(false);
        onBlur(e);
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
                type={statusEye ? 'text' : type} 
                id={label}
                value={value}
                onChange={onChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
                className='text-sm focus:outline-none w-full pr-10'
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
            {error && (
                <span className='text-red-500 text-xs mt-1 absolute -bottom-6 flex items-center space-x-3 gap-x-2'>
                    <IoCloseCircleSharp /> {error}
                </span>
            )}
        </div>
    )
}

export default InputClassAnimated;
