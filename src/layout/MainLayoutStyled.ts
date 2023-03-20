import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;

  background-color: #fafaff;
  border-top: 1px solid #d9d9d9;
`;

export const FooterInfo = styled.p`
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 8px;
  line-height: 32px;
  color: #0a142f;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  @media (min-width: 600px) {
    padding-left: 0.9rem;
    padding-right: 0.9rem;
  }
`;

export const Header = styled.header`
  display: flex;
  background-color: #fafaff;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`;

export const Logo = styled.img`
  width: 8rem;
  @media (min-width: 600px) {
    width: 15rem;
    padding-left: 2rem;
  }
`;

export const LogOut = styled.img`
  height: 2rem;
  width: 2rem;
  flex-direction: flex-end;
  @media (min-width: 600px) {
    height: 3rem;
    width: 3rem;
  }
`;

export const GreetingContainer = styled.section`
  display: none;
  @media (min-width: 903px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Greeting = styled.h1`
  display: none;
  @media (min-width: 903px) {
    font-family: 'Poppins-Bold', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 47px;
    line-height: 70px;
    display: flex;
    align-items: center;
    color: #161616;
  }
`;

export const Welcoming = styled.h2`
  display: none;
  @media (min-width: 903px) {
    font-family: 'Poppins-Regular', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    align-items: center;
    color: #161616;
  }
`;
