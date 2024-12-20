import React from 'react'
import GoogleProviderButton from '../../auth/providerAuthButton/ProviderAuthButton';
import FacebookProviderButton from '../../auth/providerAuthButton/ProviderAuthButton';
import { ButtonComponent } from '../../buttons/Buttons';
import { roboto } from '@/app/fonts/font/Fonts';
import Link from 'next/link';

interface HeroProps extends React.ComponentProps<'section'> {
    headingH1: string;
    subHeading: string;
    description: string;
    showButtons: boolean;
};

const HomeHero = ({title, headingH1, subHeading, description, showButtons,...props}: HeroProps) => {

    return (
        <section
            {...props}
            style={roboto.style}
            className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"  aria-labelledby="hero-title" aria-describedby="hero-description" itemScope
            itemType='https://schema.org/WebPage'
        >
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r from-white/95 to-white/25"></div>
            <div
                className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
            ></div>

            <div
                className="relative mx-4 md:mx-0 max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 h-full"
            >
                <div className="max-w-xl text-left">
                    <h1 className="text-3xl font-extrabold sm:text-5xl" id="hero-title" itemProp='headline'>
                        {headingH1}
                        <strong className="block font-extrabold text-rose-700 text-pretty">
                        {subHeading}
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed" id="hero-description" itemProp='description'>
                        {description}
                    </p>

                    <div className="mt-8 flex flex-wrap flex-col gap-4 text-center sm:text-left">
                        <GoogleProviderButton mode='login' providerLabel='Continue com o Google' providerName='Google'  aria-label="Continue com o Google"/>
                        <FacebookProviderButton mode='login' providerLabel='Continue com o Facebook' providerName='Facebook' aria-label="Continue com o Facebook" />

                        <ButtonComponent variant={'RedButton'} size={'sm'} hasLink url={`/login`} aria-label="Ir para a página de login"/>

                        {/* TODO: FAZER COMPONENT DE LOGIN POR EMAIL, E SUBSTITUIR ESSE TRECHO DE CÓDIGO*/}
                        <div className='space-x-10 flex items-center text-[14px]'>
                            <span className='space-x-1'>
                                <input type="checkbox" name="stayLogged" id="stayLogged" className='' />
                                <label htmlFor="stayLogged">Permanecer Logado</label>
                            </span>
                            <Link href={'#'} className='hover:underline underline-offset-1' aria-label="Recuperar senha">
                                <span>Recuperar senha</span>
                            </Link>
                        </div>
                        {/* TODO: FAZER COMPONENT DE LOGIN POR EMAIL, E SUBSTITUIR ESSE TRECHO DE CÓDIGO*/}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHero
