import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RegisterPageLogo = styled.h2`
  font-family: 'Rubik-medium', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 56px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fafaff;
  @media (min-width: 600px) {
    font-size: 3rem;
  }
`;

export const RegisterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-direction: row;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;
  @media (min-width: 600px) {
    padding: 2rem;
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

export const AuthPageContainer = styled.section`
  background: #00a2a1;
  width: 100%;
  height: 100vh;
`;
export const LoginLink = styled(Link)`
  font-family: 'Rubik-Medium', sans-serif;
  font-style: normal;
  font-size: 1rem;
  line-height: 38px;
  text-align: center;
  justify-content: center;
  color: #fafaff;
  @media (min-width: 600px) {
    font-size: 1.7rem;
  }
`;
