import styled from 'styled-components';

export const DashBoardPageTitle = styled.h1`
  font-family: 'Poppins-Bold';
  font-size: 2rem;
  color: #000000;
  padding-top: 2rem;
  padding-bottom: 2rem;

  padding-left: 2.6rem;
  @media (min-width: 440px) {
    font-size: 2.6rem;

    padding-left: 1rem;
  }
  @media (min-width: 664px) {
    font-size: 3rem;

    padding-left: 4rem;
  }
`;

export const DashboardPageContainer = styled.main`
  background-color: #fafaff;
  width: 100vw;
  height: 100vh;
`;
