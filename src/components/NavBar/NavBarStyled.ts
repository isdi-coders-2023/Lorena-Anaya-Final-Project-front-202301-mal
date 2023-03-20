import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: #000000;
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 0.6rem;

  text-align: center;
  align-items: center;
  @media (min-width: 618px) {
    font-size: 1.2rem;
  }
`;

export const NavLinkProfile = styled(Link)`
  background-color: rgba(121, 178, 225, 0.37);
  color: #000000;
  font-family: 'Rubik-Medium', sans-serif;
  text-decoration: none;
  padding: 0.4rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  @media (min-width: 618px) {
    padding: 2rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
  }
`;

export const NavLinkProjects = styled(Link)`
  background-color: #00a2a1;
  color: #000000;
  font-family: 'Rubik-Medium', sans-serif;
  text-decoration: none;
  padding: 0.4rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  @media (min-width: 618px) {
    padding: 2rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
  }
`;
