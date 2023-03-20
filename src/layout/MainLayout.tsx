import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/NavBar/NavBar';
import {
  Footer,
  FooterInfo,
  Greeting,
  GreetingContainer,
  Header,
  Logo,
  LogOut,
  Welcoming,
} from './MainLayoutStyled';

const MainLayout = () => {
  return (
    <>
      <Header>
        <Logo src="/assets/logos/desktop-logo.png" alt="BTC365 Logo"></Logo>
        <GreetingContainer>
          <Greeting>Hello, Ana</Greeting>
          <Welcoming>Welcome back to your account.</Welcoming>
        </GreetingContainer>
        <NavBar />
        <LogOut src="/assets/icons/log-out.png" alt="Log out"></LogOut>
      </Header>
      <main style={{ height: '90%', background: '#fafaff' }}>
        <Outlet />
      </main>
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
