import styled from 'styled-components';

export const LoginFormStyled = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  min-width: 17rem;
  min-height: 17rem;
  background-color: #fafaff;
  border-radius: 20px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  margin-top: 3rem;
  .inputs-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-family: 'Rubik-Light', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 21px;
    text-align: left;
    color: #030303;
    width: 11rem;
  }
  .input-box {
    height: 1.5rem;
    background-color: #d9d9d9;
    border: none;
    padding: 0.5rem;
    border-radius: 8px;

    :focus {
      outline: none;
      border: 2px solid #275623;
      mix-blend-mode: normal;
    }

    :focus:required:invalid {
      border: 2px solid #f22a2a;
    }
  }

  @media (min-width: 534px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    min-width: 32rem;
    margin-top: 0rem;
    .input-container {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      font-family: 'Rubik-Light', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 1.5rem;
      line-height: 21px;
      text-align: left;
      color: #030303;
      width: 17rem;
    }
    .inputs-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 3rem;
    }
    .input-box {
      height: 2.3rem;
      min-width: 13rem;
    }
  }
`;
