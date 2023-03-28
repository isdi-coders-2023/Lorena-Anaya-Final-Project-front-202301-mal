import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CreateLink = styled(Link)`
  font-size: 25px;
  font-family: 'Rubik-Medium', sans-serif;
  color: #030303;
  text-decoration: none;
  text-align: center;
`;

export const AddIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;

export const TopSectionContainer = styled.section`
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
  @media (min-width: 664px) {
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 0rem;
  }
`;
