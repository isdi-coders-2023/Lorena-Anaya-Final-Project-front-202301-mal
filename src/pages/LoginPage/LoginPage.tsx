import { LoginForm } from '../../features/auth/LoginForm';
import {
  LoginPageLogo,
  RegisterLink,
  RegisterLinkContainer,
  RegisterLinkTitle,
} from './LoginPageStyled';

export const LoginPage = () => {
  return (
    <>
      <LoginPageLogo>BTC365</LoginPageLogo>
      <LoginForm />
      <RegisterLinkContainer>
        <RegisterLinkTitle>Don{"'"}t have an account?</RegisterLinkTitle>
        <RegisterLink to={'/Register'}>Register here</RegisterLink>
      </RegisterLinkContainer>
    </>
  );
};
