"use client"
import React, { useState, useEffect, FormEvent } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from '@/app/components/buttons/Buttons';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/favicon.ico';

import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const RegisterForm = () => {
    const [statusEye, setStatusEye] = useState({
      passwordEye: false,
      confirmEye: false});

    const [inputFocusState, setInputFocusState] = useState({
        email: false,
        apelido: false,
        password: false,
        confirm: false,
    });

    const [passwordStatus, setPasswordStatus] = useState({
      passwordValue: '',
      confirmValue: '',
      arePasswordsEqual: false,
    });

    {/* Captcha event*/ }
    const [captcha, setCaptcha] = useState <string | null>();
  
    const isPasswordValid =
    passwordStatus.passwordValue === passwordStatus.confirmValue &&
    passwordStatus.passwordValue &&
    passwordStatus.passwordValue.length >= 8 && // Mínimo de 8 caracteres
    /[A-Z]/.test(passwordStatus.passwordValue) && // Pelo menos uma maiúscula
    /[a-z]/.test(passwordStatus.passwordValue) && // Pelo menos uma minúscula
    /\d/.test(passwordStatus.passwordValue) && // Pelo menos um número
    /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(passwordStatus.passwordValue);

    useEffect(() => {
      if (isPasswordValid ) {
        setPasswordStatus((prevStatus) => ({
          ...prevStatus,
          arePasswordsEqual: true,
        }));
      } else {
        setPasswordStatus((prevStatus) => ({
          ...prevStatus,
          arePasswordsEqual: false,
        }));
      }
    }, [passwordStatus.passwordValue, passwordStatus.confirmValue]);
    

    const handleEyeStatus = (field: 'passwordEye' | 'confirmEye') => {
      setStatusEye((prevState) => ({
          ...prevState,
          [field]: !prevState[field],
      }));
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

    const onSubmit = (event: FormEvent) => {
      event.preventDefault();
      console.log(captcha)
      if (captcha) {
        console.log('client sive verified')
      }
    }


    return (
    <section className='conteinerSection' aria-labelledby='Formulário de Login'>
        <div className='containerForms'>
            <h1 className='text-3xl line-clamp-3 text-PrussianBlue pt-6 md:pt-0 '>Crie sua Conta no Click Tips</h1>
            <p className='whitespace-nowrap leading-9 text-xs items-center'>
                É grátis, começa agora e descubra novas mémorias<span className='text-xl'>😉</span>
            </p>

            <div className='py-6 w-full    drop-shadow-md '>

                <a href="#" className="flex items-center bg-white mx-10 md:mx-28 lg:mx-auto lg:w-1/2 transition-colors duration-300 transform border rounded-xl hover:bg-PictonBlue"> 
                    <div className="px-4 py-2 ">
                        <svg className="w-6 h-6" viewBox="0 0 40 40">
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                        </svg>
                    </div>

                    <span className="w-5/6 px-4 py-3 text-center">Entre com o google</span>
                </a>

                <div className="flex items-center justify-between mt-4">
                    <span className="border-b w-16 md:w-28 ml-auto"></span>

                    <small className="text-xs text-center text-gray-500 uppercase mx-0 px-4">ou Registre
                        com seu email</small>

                    <span className="border-b w-16 md:w-28 mr-auto"></span>
                </div>


                <form action='' className='py-6 w-full  space-y-7' role='form' onSubmit={onSubmit}>
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
                          type='email'
                          id='email-input'
                          name='email-input'
                         
                          className='text-sm focus:outline-none w-full'
                          onFocus={() => handleInputFocus('email')}
                          onBlur={(e) => handleInputBlur('email', e)}
                      />
                    </div>

                <div className='forms'>
                    <label htmlFor='apelido-input'>
                        <small
                            className={`absolute font-semibold text-md  duration-700 transition-all ${
                                inputFocusState.apelido ? '-translate-y-12 text-lg text-PrussianBlue' : 'translate-y-0 text-gray-400 text-md'
                            }`}
                        >
                            Apelido:
                        </small>
                    </label>
                    <input
                        type='text'
                        id='apelido-input'
                        name='apelido-input'
                       
                        className='text-sm focus:outline-none w-full'
                        onFocus={() => handleInputFocus('apelido')}
                        onBlur={(e) => handleInputBlur('apelido', e)}
                    />
                </div>
                {/* A lógica a seguir parece estranha, mas funciona da seguinte maneira: 
                    - Se pelo menos um dos campos (password ou confirm) possui um valor (true) e as senhas são diferentes, a borda é definida como 'border-red-600'.
                    - Se pelo menos um dos campos (password ou confirm) possui um valor (true) e as senhas são iguais ou ambos os campos estão vazios, a borda é definida como 'border-green-600'.
                    - Se ambos os campos estão vazios, nenhuma classe de borda é aplicada, garantindo que nenhuma borda seja exibida.
                */}
                <div className={`forms transition-colors ${(passwordStatus.passwordValue || passwordStatus.confirmValue) && !passwordStatus.arePasswordsEqual ? 'border-red-600' : (passwordStatus.passwordValue || passwordStatus.confirmValue) ? 'border-green-600' : ''}`}>
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
                        type={`${statusEye.passwordEye ? 'text' : 'password'}`}
                        id='password-input'
                        value={passwordStatus.passwordValue}
                        onChange={(e) => setPasswordStatus((prevStatus) => ({ ...prevStatus, passwordValue: e.target.value }))}
                        name='password-input'
                       
                        className='text-sm focus:outline-none w-full'
                        onFocus={() => handleInputFocus('password')}
                        onBlur={(e) => handleInputBlur('password', e)}
                    />

                    <button type="button" onClick={() => handleEyeStatus('passwordEye')}>
                        {statusEye.passwordEye ? <IoEyeOff /> : <IoEye />}
                    </button>
                </div>
                <small className='text-pretty  text-center text-[10px] md:text-xs text-gray-500'>Sua senha precisa conter números, letras maiusculas e minusculas</small>

                <div className={`forms ${(passwordStatus.passwordValue || passwordStatus.confirmValue) && !passwordStatus.arePasswordsEqual ? 'border-red-600' : (passwordStatus.passwordValue || passwordStatus.confirmValue) ? 'border-green-600' : ''}`}>
                    <label htmlFor='comfirm-input'>
                        <small
                            className={`absolute font-semibold  duration-700 transition-all ${
                                inputFocusState.confirm ? '-translate-y-12 text-lg text-PrussianBlue' : 'translate-y-0 text-gray-400 text-md'
                            }`}
                        >
                            Confirme sua senha:
                        </small>
                    </label>
                    <input
                        type={`${statusEye.confirmEye ? 'text' : 'password'}`}
                        id='confirm-input'
                        name='confirm-input'
                        value={passwordStatus.confirmValue}
                        onChange={(e) => setPasswordStatus((prevStatus) => ({ ...prevStatus, confirmValue: e.target.value }))}
                       
                        className='text-sm focus:outline-none w-full'
                        onFocus={() => handleInputFocus('confirm')}
                        onBlur={(e) => handleInputBlur('confirm', e)}
                    />

                    <button type="button" onClick={() => handleEyeStatus('confirmEye')}>
                        {statusEye.confirmEye ? <IoEyeOff /> : <IoEye />}
                    </button>
                  </div>
{/*
                  <div className="flex justify-center">
                      <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} onChange={setCaptcha}/>
                  </div>
                      */}

                  <Button type='submit'>
                        Crie sua Conta
                  </Button>
                </form>
             </div>
        
            <span className='flex flex-row space-x-2 py-6 leading-10 text-sm'>
                <p >Já possue uma conta? </p>
                <Link href={'/login'} className='hover:text-Cerulean text-PrussianBlue'> Faça Login
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

            <h2 className='text-3xl '>Bem Vindo a ClickTips !</h2>
            <p className='text-sm leading-5 md:text-lg'>
                Lorem incididunt sint veniam mollit voluptate. Sunt sint tempor ad magna non do culpa ex laboris Lorem
                occaecat esse. Esse irure id non elit pariatur ad quis et duis anim ipsum aliqua ea.
            </p>

        </aside>
        
    </section>
    );
};

export default RegisterForm;