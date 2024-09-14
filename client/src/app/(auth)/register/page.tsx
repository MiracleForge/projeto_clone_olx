import type { Metadata } from 'next'
import { AuthCardWrapper } from '@/app/components/auth/AuthCardWrapper';
import { RegisterForm } from '@/app/components/auth/registerForm/RegisterForm';

export const metadata: Metadata = {
  title: 'Criação de Conta - Registre-se Agora'
}

const Register: React.FC = () => {
  return (
    <AuthCardWrapper
      title="Crie sua Conta Agora - Junte-se à Gatuu"
      firstParagraph="Crie sua conta Gatuu rapidamente"
      asideTitle="Bem-vindo de Volta à Gatuu"
      asideParagraph="Estamos ansiosos para tê-lo de volta"
      mode='register'
      socialButtons
    >
     <RegisterForm/>
    </AuthCardWrapper>
  );
};

export default Register;