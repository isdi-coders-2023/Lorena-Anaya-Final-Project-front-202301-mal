import { Link, Outlet } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { NavBar } from '../components/NavBar/TranslatorNavBar/TranslatorNavBar';
import { logoutUser } from '../features/auth/auth-slice';
import { Header, Logo, LogOut, Main } from './MainLayoutStyled';

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
    </>
  );
};

export default MainLayout;
