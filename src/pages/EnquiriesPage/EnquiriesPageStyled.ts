import styled from 'styled-components';

export const EnquiriesSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 19.5rem;
  height: 19rem;
  background: #ffffff;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  border-radius: 26px;
  align-content: center;
  justify-content: center;
  margin-left: 2rem;
  padding: 1.5rem;

  @media (min-width: 520px) {
    width: 30rem;
    padding: 2rem;
    height: 19rem;
    gap: 2rem;
  }
  @media (min-width: 800px) {
    width: 50rem;
    padding: 4rem;
    height: 20rem;
    gap: 2rem;
  }
`;

export const EnquiriesText = styled.p`
  font-family: 'SourceCodePro-Regular', sans-serif;
  font-size: 0.8rem;
  color: #000000;
  line-height: 30px;
  .phone-number {
    color: rgb(0, 140, 161);
    text-decoration: underline;
  }
  .email {
    color: rgb(0, 140, 161);
    text-decoration: underline;
  }
  @media (min-width: 520px) {
    font-size: 1.1rem;
  }
  @media (min-width: 800px) {
    font-size: 1.3rem;
  }
`;

export const WarningText = styled.p`
  font-family: 'SourceCodePro-Medium', sans-serif;
  font-size: 0.7rem;
  color: red;

  line-height: 30px;
  text-align: center;
  @media (min-width: 520px) {
    font-size: 1.1rem;
  }
  @media (min-width: 800px) {
    font-size: 1.3rem;
  }
`;
