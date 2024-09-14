import React from 'react'
import Image from 'next/image';
import Logo from '../../../../public/assets/images/logos/logo-gatu.webp';
import GoogleProviderButton from '@/app/components/auth/providerAuthButton/ProviderAuthButton';
import FacebookProviderButton from '@/app/components/auth/providerAuthButton/ProviderAuthButton';
import Link from 'next/link';
import { Button } from '../buttons/Buttons';
import { cn } from '@/app/hooks/utils';

interface AuthCardWrapperProps {
    children: React.ReactNode;
    mode: 'login' | 'register'
    title: string;
    firstParagraph: string;
    asideTitle: string;
    asideParagraph: string;
    socialButtons: boolean;
}

export const AuthCardWrapper = ({ children, title, firstParagraph, asideTitle, asideParagraph, socialButtons, mode = 'login' }: AuthCardWrapperProps) => {

    const renderSocialButtons = () => (
        <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 justify-center px-2'>
            <GoogleProviderButton
                providerLabel={mode === 'login' ? "Conecte com o Google" : "Cadastre-se com o Google"}
                providerName='Google'
                mode={mode}
            />
            <FacebookProviderButton
                providerLabel={mode === 'login' ? "Conecte com o Facebook" : "Cadastre-se com o Facebook"}
                providerName='Facebook'
                mode={mode}
            />
        </div>
    );

    return (
        <section className='flex flex-col md:flex-row h-auto w-auto xl:w-[89rem] justify-center'>
            <div className='w-full lg:W-1/3 xl:w-1/2 order-2 md:order-1 h-auto flex flex-col text-center space-y-2 items-center md:rounded-3xl lg:rounded-none md:rounded-l-3xl lg:rounded-l-3xl pt-0 md:pt-16 lg:pt-16 xl:pt-24 text-rickblack md:shadow-md md:shadow-Cerulean/20 border-t-2'>
                <h1 className='text-3xl line-clamp-3 text-PrussianBlue pt-6 md:pt-0 '>{title}</h1>
                <p className='whitespace-nowrap leading-9 text-xs items-center'>
                    {firstParagraph} <span className='text-xl'>😉</span>
                </p>

                <div className='py-2 w-full drop-shadow-md'>

                    {socialButtons && renderSocialButtons()}

                    <div className="flex items-center justify-between mt-4">
                        <span className="border-b w-16 md:w-28 ml-auto"></span>

                        <small className="text-xs text-center text-gray-500 uppercase mx-5 px-4">{ mode === 'login' ? "Login com Email" : "Registrar com Email" }</small>

                        <span className=" border-b w-16 md:w-28 mr-auto"></span>
                    </div>

                    {children}

                    {mode === 'login' &&
                        <div className='flex flex-row justify-center space-x-10 md:space-x-24 lg:space-x-0 lg:justify-between items-center whitespace-nowrap text-xs md:text-sm w-1/2 mx-auto md:mx-40 lg:mx-auto'>

                            <button className='space-x-2'>
                                <input type='checkbox' id='checkmarkCheckbox'></input>
                                <label htmlFor='checkmarkCheckbox'>Lembrar Senha</label>
                            </button>
                            <Link href={'#'} className='flex hover:text-Cerulean '>
                                Esqueceu sua Senha?
                            </Link>
                        </div>
                    }

                    <Button size='md' aria-label='Search' type='submit' className={cn("my-3")}>
                        Login in
                    </Button>

                    {mode === 'login' &&
                             <div className='flex flex-row justify-center space-x-2 py-6 leading-10 '>
                             <p className='text-sm'>Não Tem Uma Conta? </p>
             
                             <Link href={'/register'} className='text-sm hover:text-Cerulean '>
                                 Criar Conta
                             </Link>
                         </div>
                    }
             

                </div>
            </div>

            <aside className='flex flex-col order-1 md:order-2 w-full md:w-1/3 h-auto text-center py-6 md:pt-16 lg:pt-16 xl:pt-24 md:hidden lg:block space-y-4 md:space-y-8 items-center justify-center px-10 rounded-r-none md:rounded-r-3xl border-l-[1px] border-Cerulean bg-gradient-to-r from-PrussianBlue to-Cerulean '>

                <Image
                    src={Logo}
                    alt='Gatuu Logo'
                    height={80}
                    width={80}
                    className="mx-auto"
                />

                <h2 className='text-3xl '>{asideTitle}</h2>
                <p className='text-sm leading-5 md:text-lg'>
                    {asideParagraph}
                </p>

            </aside>
        </section>
    )
}
