import React from 'react';
import InputClassAnimated from '@/app/components/inputs/InputClassAnimated';

export const LoginForm = () => {
  return (
    <form action='' className='py-6 w-full drop-shadow-md space-y-12'>
        <InputClassAnimated label="Email" type='text'/>
        <InputClassAnimated label="Senha" type='password'/>
    </form>
  )
}
