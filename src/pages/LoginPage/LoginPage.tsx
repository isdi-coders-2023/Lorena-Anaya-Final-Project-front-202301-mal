import { LoginForm } from '../../features/auth/LoginForm';
import { AuthPageContainer } from '../RegisterPage/RegisterPageStyled';
import {
  LoginPageLogo,
  RegisterLink,
  RegisterLinkContainer,
  RegisterLinkTitle,
} from './LoginPageStyled';

export const LoginPage = () => {
  return (
    <AuthPageContainer>
      <LoginPageLogo>BTC365</LoginPageLogo>
      <LoginForm />
      <RegisterLinkContainer>
        <RegisterLinkTitle>Don{"'"}t have an account?</RegisterLinkTitle>
        <RegisterLink to={'/Register'}>Register here</RegisterLink>
      </RegisterLinkContainer>
    </AuthPageContainer>
  );
};
