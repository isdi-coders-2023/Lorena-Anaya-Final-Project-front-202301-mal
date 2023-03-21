import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const FormTitle = styled.h1`
  font-family: 'Rubik-Medium', sans-serif;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 47px;
  color: #fafaff;

  @media (min-width: 600px) {
    font-size: 2.8rem;
  }
`;

export const FormSubtitle = styled.h2`
  padding-top: 1.5rem;
  display: flex;
  text-align: center;
  justify-content: center;
  font-family: 'Rubik-Medium', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 21px;
  text-align: center;
  color: #030303;
  margin-bottom: 1.5rem;
  @media (min-width: 600px) {
    font-size: 1.7rem;
    padding-top: 2.3rem;
    margin-bottom: 2rem;
  }
`;

export const RegisterFormStyled = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  min-width: 17rem;
  min-height: 33rem;
  background-color: #fafaff;
  border-radius: 20px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  .inputs-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
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

  @media (min-width: 664px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    max-width: 40rem;
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
    }
    .inputs-container {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      gap: 4rem;
    }
    .input-box {
      height: 2.3rem;
      min-width: 13rem;
    }
  }
`;

export const FormButton = styled.button`
  margin-top: 1.3rem;
  background-color: #9ed299;
  border-radius: 100px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 26px;
  text-align: center;
  min-width: 8rem;
  min-height: 2.5rem;
  border: none;
  box-shadow: 0px 3px 12px rgba(74, 58, 255, 0.18);
  color: #275623;
  margin-bottom: 2rem;

  :hover {
    cursor: pointer;
    border: 2px #9ed299 solid;

    background-color: #fafaff;
  }

  @media (min-width: 664px) {
    font-size: 1.5rem;
    margin-top: 2rem;
  }
`;

export const FeedBackComponent = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  color: #275623;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 30px;
  text-align: center;

  .happy-emoticon {
    width: 1.4rem;
    height: 1.4rem;
  }
  @media (min-width: 664px) {
    font-size: 1.25rem;
    margin-top: 2rem;
    padding-bottom: 1rem;
  }
`;

export const ErrorFeedbackComponent = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  color: #f22a2a;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 30px;
  text-align: center;
  .sad-emoticon {
    width: 1.4rem;
    height: 1.4rem;
  }
  @media (min-width: 664px) {
    font-size: 1.25rem;
    margin-top: 2rem;
    padding-bottom: 1rem;
  }
`;
