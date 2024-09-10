import logo_sonnen_software from '@/../../public/assets/images/logos/logo-sonnen-software.png';
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {

  return (
    <footer className=" bottom-0 w-full text-gray-600 body-font border-t-[0.08rem] border-[#0000002e] bg-PrussianBlue pb-20 md:pb-0 " id="final">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" rel="noopener noreferrer" target="_blank">
      <Image src={logo_sonnen_software} alt="Logo da Sonnen" className="w-40" />
      </a>
      <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"> 2024 | Sonnen Software -
        <a href="https://x.com/sonnensoftware" className="text-gray-100 ml-1 hover:text-Cerulean" rel="noopener noreferrer" target="_blank">@SonnenSoftware</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="ml-3 text-white hover:text-Cerulean" href="https://facebook.com/sonnensoftware" rel="noopener noreferrer" target="_blank">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-white hover:text-Cerulean" href="https://x.com/sonnensoftware" rel="noopener noreferrer" target="_blank">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-white hover:text-Cerulean" href="https://instagram.com/sonnensoftware" rel="noopener noreferrer" target="_blank">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-white hover:text-Cerulean" href="https://linkedin.com/sonnensoftware" rel="noopener noreferrer" target="_blank">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
    <div className="flex justify-center items-center align-middle">
      <hr className="w-[40rem] h-auto border-PictonBlue"/>
      <p className="px-10 w-auto text-white font-medium">Mais Informações</p>
      <hr className="w-[40rem] h-auto border-PictonBlue"/>
    </div>
    <section className="px-10 py-10 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              <div>
                  <p className="font-semibold text-white">Links Importantes</p>
                  <div className="flex flex-col items-start mt-5 space-y-2">
                      <Link href="/" className="text-gray-300 transition-colors duration-300 hover:underline hover:text-Cerulean">Login</Link>
                      <Link href="#" className="text-gray-300 transition-colors duration-300 hover:underline hover:text-Cerulean">Registrar</Link>
                      <Link href="#" className="text-gray-300 transition-colors duration-300 hover:underline hover:text-Cerulean">Como Publicar um Anúncio</Link>
                      <a href="www.sonnensoftware.com" target="_blank" rel="noopener noreferrer" aria-label="Desenvolva seu site, ir para Sonnen Software" className="text-gray-300 transition-colors duration-300 hover:underline hover:text-Cerulean">Sonnen Software</a>
                  </div>
              </div>
              <div>
                  <p className="font-semibold text-white">Principais Categorias</p>
                  <div className="flex flex-col items-start mt-5 space-y-2">
                      <Link href="#" className="text-gray-300 transition-colors duration-300 hover:underline hover:text-Cerulean">Imóveis</Link>
                      <Link href="#" className="text-gray-300 transition-colors duration-300 hover:underline hover:text-Cerulean">Automóveis</Link>
                      <Link href="#" className="text-gray-300 transition-colors duration-300 hover:underline hover:text-Cerulean">Pets</Link>
                      <Link href="#" className="text-gray-300 transition-colors duration-300 hover:underline hover:text-Cerulean">Eletrodomésticos</Link>
                  </div>
              </div>
              <div>
                  <p className="font-semibold text-white">Políticas</p>
                  <div className="flex flex-col items-start mt-5 space-y-2">
                      <Link href="#" className="text-gray-300 transition-colors duration-300 hover:underline hover:text-Cerulean">Política de Privacidade</Link>
                  </div>
              </div>
              <div>
                  <p className="font-semibold text-white">Contato</p>
                  <div className="flex flex-col items-start mt-5 space-y-2">
                      <p className="text-gray-300">+55 (71) 99618-4966</p>
                      <p className="text-gray-300">sonnensoftware@outlook.com</p>
                  </div>
              </div>
          </div>
    </section>
  </footer>
  );
};

export default Footer;