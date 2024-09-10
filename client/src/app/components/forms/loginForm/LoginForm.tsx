"use client"
import React, { useState } from 'react';
import { Button } from '@/app/components/buttons/Buttons';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/../../public/assets/images/logos/logo-gatu.webp'

import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const FormLogin = () => {
    const [statusEye, setStatusEye] = useState(false);
    const [inputFocusState, setInputFocusState] = useState({
        email: false,
        password: false,
    });

    const handleEyeStatus = () => {
        setStatusEye(!statusEye);
    }

    const handleInputFocus = (inputName: string) => {
        setInputFocusState((prevState) => ({
            ...prevState,
            [inputName]: true,
        }));
    };

    const handleInputBlur = (inputName: string, e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setInputFocusState((prevState) => ({
                ...prevState,
                [inputName]: false,
            }));
        }
    };


    return (
    <section className='conteinerSection' aria-labelledby='Formulário de Login'>
        <div className='containerForms'>
            <h1 className='text-3xl line-clamp-3 text-PrussianBlue pt-6 md:pt-0 '>Faça Login para Anunciar</h1>
            <p className='whitespace-nowrap leading-9 text-xs items-center'>
                Faça Login na sua Conta Gatuu <span className='text-xl'>😉</span>
            </p>

            <div className='py-6 w-full  space-y-6  drop-shadow-md '>

                <a href="#" className="flex items-center bg-white mx-10 md:mx-28 lg:mx-auto lg:w-1/2 transition-colors duration-300 transform border rounded-xl hover:bg-PictonBlue"> 
                    <div className="px-4 py-2 ">
                        <svg className="w-6 h-6" viewBox="0 0 40 40">
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                        </svg>
                    </div>

                    <span className="w-5/6 px-4 py-3 text-center">Cadastre-se com o goolge</span>
                </a>

                <div className="flex items-center justify-between mt-4">
                    <span className="border-b w-16 md:w-28 ml-auto"></span>

                    <small className="text-xs text-center text-gray-500 uppercase mx-5 px-4">Login com email</small>

                    <span className=" border-b w-16 md:w-28 mr-auto"></span>
                </div>


                <form action='' className='py-6 w-full drop-shadow-md space-y-7'>
                    <div className='forms'>
                        <label htmlFor='email-input'>
                            <small
                                className={`absolute font-semibold text-md  duration-700 transition-all ${
                                    inputFocusState.email ? '-translate-y-12 text-lg text-PrussianBlue' : 'translate-y-0 text-gray-400 text-md'
                                }`}
                            >
                                Email:
                            </small>
                        </label>
                        <input
                            type='text'
                            id='email-input'
                            required
                            className='text-sm focus:outline-none w-full'
                            onFocus={() => handleInputFocus('email')}
                            onBlur={(e) => handleInputBlur('email', e)}
                        />
                    </div>
       

               
                    <div className='forms'>
                        <label htmlFor='password-input'>
                            <small
                                className={`absolute font-semibold   duration-700 transition-all ${
                                    inputFocusState.password ? '-translate-y-12 text-lg text-PrussianBlue' : 'translate-y-0 text-gray-400 text-md'
                                }`}
                            >
                                Senha:
                            </small>
                        </label>
                        <input
                            type={`${statusEye ? 'text' : 'password'}`}
                            id='password-input'
                            required
                            className='text-sm focus:outline-none w-full'
                            title='Digite sua senha'
                            onFocus={() => handleInputFocus('password')}
                            onBlur={(e) => handleInputBlur('password', e)}
                        />
                    <button type="button" onClick={handleEyeStatus}>
                        {statusEye ? <IoEyeOff /> : <IoEye />}
                    </button>
                    </div>

                </form>

                <div className='flex flex-row  justify-center space-x-10  md:space-x-24 lg:space-x-0 lg:justify-between items-center whitespace-nowrap text-xs md:text-sm w-1/2 mx-auto md:mx-40 lg:mx-auto'>
                    
                    <button className='space-x-2'>
                        <input type='checkbox' id='checkmarkCheckbox'></input>
                        <label htmlFor='checkmarkCheckbox'>Lembrar Senha</label>
                    </button>

                    <Link href={'#'} className='flex hover:text-Cerulean '>
                        Esqueceu sua Senha?
                    </Link>

                </div>
            </div>

            <Button size='md' aria-label='Search' type='submit'>
                Login in
            </Button>


            <span className='flex flex-row space-x-2 py-6 leading-10 '>
                <p className='text-sm'>Não Tem Uma Conta? </p>

                <Link href={'/register'} className='text-sm hover:text-Cerulean '>
                    Criar Conta
                </Link>
            </span>

            <p className='pt-6 pb-4 px-3 md:px-0 text-xs md:text-sm lg:text-md'>Ao continuar você concorda com nossos <Link href={'#'} className='text-PrussianBlue hover:text-Cerulean'>Termos de Uso</Link> <br /> e  <Link href={'https://sonnensoftware.com/politicas/privacidade'} className='text-PrussianBlue hover:text-Cerulean'>Politicas de Privacidade</Link></p>

        </div>

        <aside className='asideBar'>
            
            <Image
                src={Logo}
                alt='ClickTips Logo'
                height={80}
                width={80}
                className="mx-auto"
            />

            <h2 className='text-3xl '>Bem Vindo de Volta !</h2>
            <p className='text-sm leading-5 md:text-lg'>
                Lorem incididunt sint veniam mollit voluptate. Sunt sint tempor ad magna non do culpa ex laboris Lorem
                occaecat esse. Esse irure id non elit pariatur ad quis et duis anim ipsum aliqua ea.
            </p>

        </aside>
        
    </section>
    );
};

export default FormLogin;