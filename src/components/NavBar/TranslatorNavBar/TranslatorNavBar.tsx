import {
  NavBarContainer,
  NavLinkProfile,
  NavLinkProjects,
} from '../NavBarStyled';

export const NavBar = () => {
  return (
    <>
      <NavBarContainer>
        <NavLinkProjects to={'/main/dashboard'}>
          <p>Projects</p>
        </NavLinkProjects>

        <NavLinkProfile to={'/main/enquiries'}>
          <p>Enquiries</p>
        </NavLinkProfile>
      </NavBarContainer>
    </>
  );
};
