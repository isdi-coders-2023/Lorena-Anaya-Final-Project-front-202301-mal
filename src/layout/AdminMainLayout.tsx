import { Link, Outlet } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { AdminNavBar } from '../components/NavBar/AdminNavBar/AdminNavBar';

import { logoutUser } from '../features/auth/auth-slice';
import {
  Greeting,
  GreetingContainer,
  Header,
  Logo,
  LogOut,
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
        <GreetingContainer>
          <Greeting>Hello, Ana</Greeting>
          <Welcoming>Welcome back to your account.</Welcoming>
        </GreetingContainer>
        <AdminNavBar />
        <Link to={'/'} onClick={() => handleLogout()} data-testid="logout-btn">
          <LogOut src="/assets/icons/log-out.png" alt="Log out"></LogOut>
        </Link>
      </Header>
      <main style={{ height: '100vh', background: '#fafaff' }}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
