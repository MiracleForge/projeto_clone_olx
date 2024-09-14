// Layout.tsx
import React from 'react';
import Link from 'next/link';

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
<main className="md:p-4 w-full flex items-center flex-col">
    {children}
    <p className='pt-6 pb-4 px-3 md:px-0 text-xs md:text-sm lg:text-md text-center'>
        Ao continuar você concorda com nossos <Link href={'#'} className='text-PrussianBlue hover:text-Cerulean'>Termos de Uso</Link> 
        <br /> 
        e  
        <Link href={'https://sonnensoftware.com/politicas/privacidade'} className='text-PrussianBlue hover:text-Cerulean'> Políticas de Privacidade</Link>
    </p>
</main>

    );
}

export default AuthLayout;

