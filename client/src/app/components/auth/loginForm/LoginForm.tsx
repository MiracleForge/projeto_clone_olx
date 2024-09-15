'use client'
import React, { useState } from 'react';
import InputClassAnimated from '@/app/components/inputs/InputClassAnimated';
import * as z from 'zod';
import { LoginSchema } from '../../../../../schemas';

export const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [formErrors, setFormErrors] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prevState => ({ ...prevState, [id]: value }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { id } = e.target;
        const result = LoginSchema.safeParse(formData);

        if (!result.success) {
            const errors = result.error.format();
            setFormErrors({
                email: errors.email?._errors.join(', ') || '',
                password: errors.password?._errors.join(', ') || ''
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const result = LoginSchema.safeParse(formData);

        if (!result.success) {
            const errors = result.error.format();
            setFormErrors({
                email: errors.email?._errors.join(', ') || '',
                password: errors.password?._errors.join(', ') || ''
            });
        } else {
            setFormErrors({ email: '', password: '' });
            console.log('Form data is valid', formData);
            // Aqui você pode enviar os dados do formulário para seu servidor ou API
        }
    };

    return (
        <form onSubmit={handleSubmit} className='py-6 w-full drop-shadow-md space-y-12'>
            <div>
                <InputClassAnimated
                    label="email"
                    type='text'
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={formErrors.email}
                />
            </div>
            <div>
                <InputClassAnimated
                    label="password"
                    type='password'
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={formErrors.password}
                />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    );
};

export default LoginForm;
