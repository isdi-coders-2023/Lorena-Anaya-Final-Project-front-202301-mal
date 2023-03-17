import { RegisterForm } from '../../features/auth/RegisterForm';

import {
  AuthPageContainer,
  LoginLink,
  RegisterHeader,
  RegisterPageLogo,
} from './RegisterPageStyled';

export const RegisterPage = () => {
  return (
    <AuthPageContainer>
      <RegisterHeader>
        <RegisterPageLogo>BTC365</RegisterPageLogo>
        <LoginLink to={'/'}>Go back to login</LoginLink>
      </RegisterHeader>
      <RegisterForm />
    </AuthPageContainer>
  );
};
