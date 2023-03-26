import {
  NavBarContainer,
  NavLinkProfile,
  NavLinkProjects,
} from './NavBarStyled';

export const AdminNavBar = () => {
  return (
    <>
      <NavBarContainer>
        <NavLinkProjects to={'/main/dashboard'}>
          <p>Projects</p>
        </NavLinkProjects>

        <NavLinkProfile to={'/admin/create'}>
          <p>New translation</p>
        </NavLinkProfile>
      </NavBarContainer>
    </>
  );
};
