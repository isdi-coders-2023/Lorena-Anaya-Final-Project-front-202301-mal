import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitFormButton = styled.button`
  margin-top: 1.3rem;
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 1.1rem;
  text-align: center;
  min-width: 8rem;
  min-height: 3rem;
  border: none;
  color: #fafaff;
  margin-bottom: 2rem;
  background: #00a2a1;
  box-shadow: 6px 12px 12px 0px rgba(74, 58, 255, 0.18);
  border-radius: 56px;
  :hover {
    cursor: pointer;
    border: 2px #00a2a1 solid;
    background-color: #fafaff;
    color: #00a2a1;
  }

  @media (min-width: 664px) {
    font-size: 1.3rem;
    min-height: 3.5rem;
    margin-top: 2rem;
  }
`;
