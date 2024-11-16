import Link from 'next/link';
import React from 'react'

interface ProviderAuthButtonProps {
    providerLabel: string;
    mode?: 'register' | 'login';
    providerName: 'Google' | 'Facebook'
    link?: string;
};

const getProviderSVG = (providerName: 'Google' | 'Facebook') => {
    switch (providerName) {
        case 'Google':

            return (
                <svg className="w-6 h-6" viewBox="0 0 40 40">
                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                    <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                    <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                </svg>
            );

            break;
        case 'Facebook':

            return (
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#4267B2" d="M22.675,0H1.325C0.593,0,0,0.593,0,1.325v21.351C0,23.407,0.593,24,1.325,24h11.495v-9.294H9.689v-3.622h3.131V8.413c0-3.1,1.893-4.788,4.659-4.788c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.794,0.715-1.794,1.763v2.31h3.588l-0.467,3.622h-3.12V24h6.116c0.73,0,1.324-0.593,1.324-1.324V1.325C24,0.593,23.407,0,22.675,0z" />
                </svg>
            );
            break;
    }
}

export const ProviderAuthButton = ({ providerLabel, providerName }: ProviderAuthButtonProps) => {
    return (
        <button className=" block w-[20rem] md:w-[28rem] lg:w-[20rem] rounded bg-white px-12 py-3 text-base font-normal text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500">
            <Link href={"#"} className="item-center flex  text-center justify-center space-x-3">
                {getProviderSVG(providerName)}
                <span >{providerLabel}</span>
            </Link>
        </button>
    )
}
export default ProviderAuthButton;
