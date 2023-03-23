import { Header, Logo } from '../../../layout/MainLayoutStyled';
import {
  ErrorPageContainer,
  ErrorSubtitle,
  ErrorTitle,
  GoBackButton,
} from '../ErrorPagesStyled';

export const ServerErrorPage = () => {
  return (
    <>
      <Header>
        <Logo src="/assets/logos/desktop-logo.png" alt="BTC365 Logo"></Logo>
      </Header>
      <ErrorPageContainer>
        <ErrorTitle>Oopss!</ErrorTitle>
        <ErrorSubtitle>
          Something went wrong. Pleasy try again later.
        </ErrorSubtitle>
        <GoBackButton to={'/main/dashboard'}>Go back</GoBackButton>
      </ErrorPageContainer>
    </>
  );
};
