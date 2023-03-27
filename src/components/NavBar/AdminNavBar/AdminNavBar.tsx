import {
  NavBarContainer,
  NavLinkProfile,
  NavLinkProjects,
} from '../NavBarStyled';

export const AdminNavBar = () => {
  return (
    <>
      <NavBarContainer>
        <NavLinkProjects to={'/admin/dashboard'}>
          <p>Projects</p>
        </NavLinkProjects>

        <NavLinkProfile to={'/admin/create'}>
          <p>Assign</p>
        </NavLinkProfile>
      </NavBarContainer>
    </>
  );
};
