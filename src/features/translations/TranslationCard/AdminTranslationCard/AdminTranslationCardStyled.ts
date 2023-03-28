import styled from 'styled-components';

export const DeleteIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

export const CardTopContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;

export const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  :hover {
    cursor: pointer;
  }
`;
