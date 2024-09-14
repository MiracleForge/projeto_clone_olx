import type { Metadata } from 'next'
import { AuthCardWrapper } from '@/app/components/auth/AuthCardWrapper';
import { LoginForm } from '@/app/components/auth/loginForm/LoginForm';

export const metadata: Metadata = {
  title: 'Login'
}

const Login: React.FC = () => {
  return (
    <AuthCardWrapper
    title="Faça Login para Anunciar"
    firstParagraph="Faça Login na sua Conta Gatuu"
    asideTitle="Seja bem vindo de Volta"
    asideParagraph="Estavamos esperando seu retorno"
    mode='login'
    socialButtons
>
    <LoginForm />
</AuthCardWrapper>
  );
};

export default Login;