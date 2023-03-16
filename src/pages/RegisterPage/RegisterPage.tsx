import { RegisterForm } from '../../features/auth/RegisterForm';
import { RegisterLink } from '../LoginPage/LoginPageStyled';
import { RegisterHeader, RegisterPageLogo } from './RegisterPageStyled';

export const RegisterPage = () => {
  return (
    <>
      <RegisterHeader>
        <RegisterPageLogo>BTC365</RegisterPageLogo>
        <RegisterLink to={'/'}>Go back to login</RegisterLink>
      </RegisterHeader>
      <RegisterForm />
    </>
  );
};
