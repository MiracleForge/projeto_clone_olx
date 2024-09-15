import React from 'react'
import GoogleProviderButton from '../../auth/providerAuthButton/ProviderAuthButton';
import FacebookProviderButton from '../../auth/providerAuthButton/ProviderAuthButton';
import { ButtonComponent } from '../../buttons/Buttons';
import { roboto } from '@/app/fonts/font/Fonts';
import Link from 'next/link';
const HomeHero = () => {
    return (
        <section style={roboto.style}
            className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
        >
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r from-white/95 to-white/25"></div>
            <div
                className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
            ></div>

            <div
                className="relative mx-left max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 h-full"
            >
                <div className="max-w-xl text-left">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Descubra e Compartilhe

                        <strong className="block font-extrabold text-rose-700 text-pretty"> Sua chance de conectar e negociar</strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                        Encontre novos usos para seus itens e junte-se a uma comunidade vibrante de trocas e oportunidades.
                    </p>

                    <div className="mt-8 flex flex-wrap flex-col gap-4 text-center">
                        <GoogleProviderButton mode='login' providerLabel='Continue com o Google' providerName='Google' />
                        <FacebookProviderButton mode='login' providerLabel='Continue com o Facebook' providerName='Facebook' />

                        <ButtonComponent variant={'RedButton'} size={'sm'}>
                            Login com Email
                        </ButtonComponent>

                        <div className='space-x-2 flex items-center'>
                            <input type="checkbox" name="stayLogged" id="stayLogged" className='' />
                            <label htmlFor="stayLogged">Permanecer Logado</label>
                            <Link href={'#'} className='hover:underline underline-offset-1'>Esqueci minha senha</Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HomeHero