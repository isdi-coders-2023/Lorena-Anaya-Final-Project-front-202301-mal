import styled from 'styled-components';

export const TranslationsListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  @media (min-width: 720px) {
    gap: 3rem;
    padding: 2rem;
    justify-content: left;
  }
`;

export const TranslationsFeedbackComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1.4rem;
  padding-top: 3rem;
  gap: 10px;
  width: 19rem;
  height: 11rem;
  background: #ffffff;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  border-radius: 26px;
  font-family: 'SourceCodePro-Regular', sans-serif;
  font-size: 1rem;
  display: flex;

  color: #000000;
  @media (min-width: 600px) {
    width: 50rem;
    padding: 4rem;
    margin-left: 2rem;
    font-size: 1.3rem;
  }
`;
