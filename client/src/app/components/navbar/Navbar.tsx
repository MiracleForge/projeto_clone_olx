"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo_gato from '@/../../public//assets/images/logos/logo-gatu.webp';
import { IoIosArrowDown } from "react-icons/io";
import { linksNavbar, productCategories } from '../../../../public/dynamicData/Interfaces';
import useGeoLocalization from '@/app/hooks/useGeoLocationHook';

const Navbar = () => {
  const { userCoord, userLocation, loading, error } = useGeoLocalization();
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);
  const [selectedState, setSelectedState] = useState<string>("");

  const renderNavbarLinks = () => (
    <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8">
      {linksNavbar.map(link => (
        <li className='flex items-center' key={link.id}>
          <Link
            href={`/${link.link.toLowerCase()}`}
            title={link.link}
            aria-label={`Link para ${link.link}`}
            className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
          >
            {link.link}
          </Link>
          {link.hasOptions && (
            <button
              onClick={() => setMegaMenuOpen(prev => !prev)}
              id="mega-menu-full-dropdown-button"
              aria-controls="mega-menu-full-dropdown"
              aria-expanded={isMegaMenuOpen}
              className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
            >
              <IoIosArrowDown className={`text-[0.8rem] ms-3 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          )}
        </li>
      ))}
    </ul>
  );

  const renderMegaMenu = () => (
    <div
      id="mega-menu-full-dropdown"
      className="w-full mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 absolute top-12"
      aria-labelledby="mega-menu-full-dropdown-button"
    >
      <div className="grid px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
        <ul>
          {productCategories.map(category => (
            <li key={category.id}>
              <Link
                href={`/${category.name.toLowerCase()}`}
                title={category.name}
                aria-label={`Categoria de produto ${category.name}`}
                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">{category.name}</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Descrição de {category.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <nav className="relative flex flex-col justify-between items-center w-full p-2 bg-white border-gray-200 dark:border-gray-600 dark:bg-black">
      <div className="flex justify-between items-center w-full">
        {/* Imagem alinhada à esquerda */}
        <div className="flex items-center">
          <Link href="/" aria-label="Ir para a página inicial" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={logo_gato} alt="Logo da Gatu" className="w-10 h-10" />
          </Link>
          <div className="flex items-center space-x-2 xl:ml-12">
            <div className="flex bg-gray-100 p-1 w-72 lg:w-52 xl:w-72 xl:space-x-4 rounded-sm">
              <input className="bg-gray-100 outline-none text-xs w-36 xl:w-72" type="text" placeholder="Pesquisar na Gatu" />
            </div>
            <div className="flex py-2 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
              <select name="state" id="state" className="bg-transparent">
                <option id="0" label="Brasil" value="brasil">Brasil</option>
              </select>
            </div>
          </div>
        </div>

        {/* Links e pesquisa alinhados à direita */}
        <div className="flex items-center space-x-6">
          <button
            onClick={() => setMegaMenuOpen(prev => !prev)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-between text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full"
            aria-expanded={isMegaMenuOpen}
            aria-label={isMegaMenuOpen ? 'Fechar menu' : 'Abrir menu principal'}
          >
            <span className="sr-only">Abrir menu principal</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          <div
            id="mega-menu-full"
            className="hidden md:flex items-center justify-between w-full md:w-auto md:order-1"
            aria-labelledby="mega-menu-full-dropdown-button"
          >
            {renderNavbarLinks()}
          </div>
        </div>
      </div>

      {isMegaMenuOpen && renderMegaMenu()}
      {/* <pre>{JSON.stringify(userLocation?.results, null, 2)}</pre> */}
    </nav>
  );
};

export default Navbar;
