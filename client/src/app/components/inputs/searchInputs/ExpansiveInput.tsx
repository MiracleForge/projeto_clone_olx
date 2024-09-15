'use client'
import React, { useState, useRef, useEffect } from 'react'
import { FaSearch } from "react-icons/fa";

export const ExpansiveInput = () => {
    const [isInputExpanded, setExpansion] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null); 
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (inputRef.current && buttonRef.current) {
                const target = event.target as Node;
                if (!inputRef.current.contains(target) && !buttonRef.current.contains(target)) {
                    if (inputValue.trim() === '') {
                        setExpansion(false);
                    }
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [inputValue]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    
    const handleButtonClick = () => {
        if (inputValue.trim() === '') {
            setExpansion(prev => !prev);
        }
    };

    return (
        <div className="relative flex items-center cursor-pointer">
            <label htmlFor="searchProducts" className='sr-only'>Procurar na Gatu</label>

            <input
                ref={inputRef}
                className={`transition-all duration-300 ease-in-out outline-none text-xs py-2 rounded-sm shadow placeholder-black focus:ring-2 focus:ring-rose-600 focus:border-rose-600 ${
                    isInputExpanded ? 'w-36 lg:w-[15rem] xl:w-72 px-3 bg-gray-100 text-black opacity-100' : 'w-0 px-0 bg-gray-100 hover:bg-gray-200 text-transparent opacity-0'
                }`}
                type="text"
                placeholder="Pesquisar na Gatu"
                id='searchProducts'
                name='searchProducts'
                aria-expanded={isInputExpanded}
                aria-label="Pesquisar na Gatu"
                tabIndex={0}
                autoComplete='text'
                value={inputValue}
                onChange={handleInputChange}
            />

            <button
                ref={buttonRef}
                onClick={handleButtonClick}
                aria-label={isInputExpanded ? "Fechar pesquisa" : "Abrir pesquisa"}
                className={`${isInputExpanded ? '' : 'hover:bg-gray-200 hover:text-gray-600 shadow'} cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-2 text-gray-400 bg-gray-100 p-2 rounded-sm`}
            >
                <FaSearch />
            </button>
        </div>
    )
}
