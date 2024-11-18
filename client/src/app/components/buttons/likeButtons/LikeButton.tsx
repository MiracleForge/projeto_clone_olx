'use client'
import React from 'react';
import { LuHeart } from 'react-icons/lu';

const handleAnimationButton = (e:  React.MouseEvent<HTMLButtonElement>): void => {
    const button = e.currentTarget;
    button.classList.add('animate-ping', 'text-red-200');
    button.disabled = true;

    setTimeout(() => {
        button.classList.remove('animate-ping',);
    }, 500);
};

const LikeButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>): React.JSX.Element => {

    return (
        <button onClick={handleAnimationButton} className='hover:text-red-400 disabled:hover:text-red-200 z-20 p-2 hover:cursor-pointer bg-clip-content rounded-full'
        type='button'
        {...props}
        >
            <LuHeart/>
        </button>
  )
}

export default LikeButton;
