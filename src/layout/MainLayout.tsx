import { Link, Outlet } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { NavBar } from '../components/NavBar/TranslatorNavBar/TranslatorNavBar';
import { logoutUser } from '../features/auth/auth-slice';
import {
  Footer,
  FooterInfo,
  Greeting,
  GreetingContainer,
  Header,
  Logo,
  LogOut,
  Main,
  Welcoming,
} from './MainLayoutStyled';

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    sessionStorage.removeItem('accessToken');
    dispatch(logoutUser());
  };
  return (
    <>
      <Header>
        <Logo src="/assets/logos/desktop-logo.png" alt="BTC365 Logo"></Logo>
        <NavBar />
        <Link to={'/'} onClick={() => handleLogout()} data-testid="logout-btn">
          <LogOut src="/assets/icons/log-out.png" alt="Log out"></LogOut>
        </Link>
      </Header>
      <Main style={{ background: '#fafaff' }}>
        <Outlet />
      </Main>
      <Footer>
        <FooterInfo role="paragraph">info@btc365.net</FooterInfo>
        <FooterInfo role="paragraph">
          {' '}
          © 2023 BTC365. All rights reserved
        </FooterInfo>
        <FooterInfo role="paragraph">+34 951196122</FooterInfo>
      </Footer>
    </>
  );
};

export default MainLayout;
