import React, { FC, ButtonHTMLAttributes } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import Link from 'next/link';
import { cn } from '@/app/hooks/utils';

// Define buttonVariants using cva
const buttonVariants = cva(
  'focus:ring focus:border-b-gray-900 font-bold rounded-lg text-sm text-center ',
  {
    variants: {
      variant: {
        default: 'text-white bg-PrussianBlue hover:bg-PictonBlue',
        RedButton: 'rounded bg-rose-600 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500',
        outline: 'bg-transparent border border-slate-200 hover:bg-slate-100',
        search: 'rounded-none hover:bg-slate-100 text-rickblack bg-white active:shadow-inner active:shadow-black w-auto h-12 lg:h-16 flex items-center justify-center gap-2 border-2 hover:border-4 border-gray-200 hover:border-PrussianBlue px-4',
        secondary: 'flex flex-row  justify-center items-center outline-1 rounded-full gap-x-2 hover:bg-PictonBlue'
      },
      size: {
        default: 'block w-full py-3 px-12',
        sm: 'px-12 py-3 w-[20rem] md:w-[28rem] lg:w-[20rem]',
        md: 'px-12 py-3'
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

// Define ButtonProps interface extending VariantProps
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  hasLink?: boolean; 
  url?: string
}

// Define ButtonComponent as a functional component
const ButtonComponent: FC<ButtonProps> = ({ className, size, variant, hasLink, url, ...props }) => {
  return (
    hasLink ? (
      <Link href={`${url}`} className='w-full h-full'>
        <button className={cn(buttonVariants({ variant, size, className }))} {...props}>
          <span className='w-full h-full'>Login com Email</span>
        </button>
      </Link>
    ) : (
      <button className={cn(buttonVariants({ variant, size, className }))} {...props} />
    )
  );
};

// Export ButtonComponent and buttonVariants
export { ButtonComponent, buttonVariants };
