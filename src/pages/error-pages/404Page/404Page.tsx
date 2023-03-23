import { Header, Logo } from '../../../layout/MainLayoutStyled';
import {
  ErrorPageContainer,
  ErrorSubtitle,
  ErrorTitle,
  GoBackButton,
} from '../ErrorPagesStyled';

export const NotFoundPage = () => {
  return (
    <>
      <Header>
        <Logo src="/assets/logos/desktop-logo.png" alt="BTC365 Logo"></Logo>
      </Header>
      <ErrorPageContainer>
        <ErrorTitle>404</ErrorTitle>
        <ErrorSubtitle>
          Sorry, the page you were looking for doesn’t exists.
        </ErrorSubtitle>
        <GoBackButton to={'/main/dashboard'}>Go back</GoBackButton>
      </ErrorPageContainer>
    </>
  );
};
