import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ErrorPageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
`;

export const ErrorTitle = styled.h1`
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 8rem;
  text-align: center;
  color: #000000;
`;

export const ErrorSubtitle = styled.h2`
  font-family: 'Poppins-Regular', sans-serif;
  font-size: 3rem;
  color: #000000;
  text-align: center;
`;

export const GoBackButton = styled(Link)`
  margin-top: 1.3rem;
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 1.1rem;
  text-align: center;
  min-width: 12rem;
  min-height: 8rem;
  border: none;
  color: #fafaff;
  margin-bottom: 2rem;
  background: #00a2a1;
  box-shadow: 6px 12px 12px 0px rgba(74, 58, 255, 0.18);
  border-radius: 56px;
  text-decoration: none;
  padding: 1rem;
  :hover {
    cursor: pointer;
    border: 2px #00a2a1 solid;
    background-color: #fafaff;
    color: #00a2a1;
  }

  @media (min-width: 664px) {
    font-size: 1.3rem;
    min-height: 3.5rem;
    margin-top: 6rem;
  }
`;
