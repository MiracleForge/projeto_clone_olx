import React from 'react';
import InputClassAnimated from '@/app/components/inputs/InputClassAnimated';

export const RegisterForm = () => {
  return (
    <form action='' className='py-6 w-full drop-shadow-md space-y-12'>
        <InputClassAnimated label="CPF" type='text'/>
        <InputClassAnimated label="Email" type='text'/>
        <InputClassAnimated label="Senha" type='password'/>
        <InputClassAnimated label="Confirmar Senha" type='password'/>
    </form>
  )
}
