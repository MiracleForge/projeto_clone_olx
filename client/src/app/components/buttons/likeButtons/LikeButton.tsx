import React from 'react'
import { LuHeart } from 'react-icons/lu';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

};

const handleAnimationButton = (e: React.MouseEvent): void => {
    const button = e.currentTarget;
    button.classList.add('animate-ping');

    setTimeout(() => {
        button.classList.remove('animate-ping')
    }, 500);
};

const LikeButton = ({...props}: ButtonProps): React.JSX.Element => {

    return (
        <button onClick={handleAnimationButton} className='hover:text-red-400'
        type="button"
        {...props}
        >
            <LuHeart/>
        </button>
  )
}

export default LikeButton
