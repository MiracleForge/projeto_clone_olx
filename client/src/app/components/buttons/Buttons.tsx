import React, { FC, ButtonHTMLAttributes } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/app/hooks/utils';


// Define buttonVariants using cva
const buttonVariants = cva(
  'focus:ring focus:border-b-gray-900 font-bold rounded-lg text-sm text-center ',
  {
    variants: {
      variant: {
        default: 'text-white bg-PrussianBlue hover:bg-PictonBlue',
        outline: 'bg-transparent border border-slate-200 hover:bg-slate-100',
        search: 'rounded-none hover:bg-slate-100 text-rickblack bg-white active:shadow-inner active:shadow-black w-auto h-12 lg:h-16 flex items-center justify-center gap-2 border-2 hover:border-4 border-gray-200 hover:border-PrussianBlue px-4',
        secondary: 'flex flex-row  justify-center items-center outline-1 rounded-full gap-x-2 hover:bg-PictonBlue'
      },
      size: {
        default: 'px-2 lg:px-4 py-3',
        sm: 'h-9 px-2 rounded-full',
        md: 'h-12 px-9 rounded-full'
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

// Define ButtonProps interface extending VariantProps
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

// Define buttonTest component as a functional component
const Button: FC<ButtonProps> = ({ className, size, variant, ...props}) => {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} {...props}/>
  );
};

// Export ButtonTest and buttonVariants
export { Button, buttonVariants };