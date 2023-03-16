import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LoginPageLogo = styled.h1`
  font-family: 'Rubik-medium', sans-serif;
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  font-size: 4rem;
  line-height: 56px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0.3rem;
  padding-top: 5rem;
  color: #fafaff;
  @media (min-width: 600px) {
    font-size: 6rem;
    padding: 2rem;
    padding-top: 6rem;
  }
`;

export const RegisterLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

export const RegisterLink = styled(Link)`
  font-family: 'Rubik-Medium', sans-serif;
  font-style: normal;
  font-size: 1.1rem;
  line-height: 38px;
  text-align: center;
  justify-content: center;
  color: #fafaff;
  @media (min-width: 600px) {
    font-size: 1.7rem;
  }
`;

export const RegisterLinkTitle = styled.h2`
  padding-top: 2rem;
  display: flex;
  text-align: center;
  justify-content: center;
  font-family: 'Rubik-Medium', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 21px;
  text-align: center;
  color: #fafaff;

  @media (min-width: 600px) {
    font-size: 1.7rem;
    padding-top: 2.3rem;
  }
`;
