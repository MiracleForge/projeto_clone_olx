import React, { ReactNode, ReactElement, AnchorHTMLAttributes } from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
type ActiveLinkProps = {
  href: string;
  children: ReactNode;
  icon: ReactElement;
} & LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

const ActiveLink = ({ href, children, icon, ...props }: ActiveLinkProps) => {
    const [isFooter, setIsFooter] = useState(true);
    const pathname = usePathname();
    const isActive = pathname === href;
  
    useEffect(() => {
      const handleScroll = () => {
        const scrolled = window.scrollY;
        setIsFooter(scrolled < 20);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <Link href={href} className='flex flex-col items-center ' {...props}>
        <span className={`absolute whitespace-nowrap text-base tracking-tighter opacity duration-1000 text-white font-semibold ${isActive ? 'translate-y-8 opacity-100' : 'translate-y-0 opacity-0'}`}>
          {children}
        </span>
        <span className={`duration-[1000ms] block rounded-full p-2 ${isActive ? '-translate-y-9 opacity-100 ' + (isFooter ? 'bg-white' : 'bg-PrussianBlue') : 'translate-y-0 text-white'}`}>
          <span className={`duration-[1000ms] text-center block text-3xl rounded-full ${isActive ? ' opacity-100 text-Cerulean bg-PrussianBlue ' + (isFooter ? 'bg-PrussianBlue p-3' : 'bg-white p-3') : 'translate-y-0 text-white'}`}>
            {icon}
          </span>
        </span>
      </Link>
    );
  };
  
  export default ActiveLink;