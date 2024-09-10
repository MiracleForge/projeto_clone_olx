import type { Metadata } from 'next'
import RegisterForm from '@/app/components/forms/registerForm/RegisterForm';
export const metadata: Metadata = {
  title: 'Register'
}
const Register: React.FC = () => {
  return (
    <main className="w-full h-full my-0 md:my-10 mx-auto">
        <RegisterForm/>
    </main>
  );
};

export default Register;