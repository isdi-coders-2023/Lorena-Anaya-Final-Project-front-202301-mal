import styled from 'styled-components';

export const CreateTranslationForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  min-width: 17rem;
  max-height: 34rem;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  font-family: 'SourceCodePro-Medium', sans-serif;
  color: #170f49;
  padding: 1rem;
  .inputs-container {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    font-size: 0.7rem;
    line-height: 21px;
    text-align: left;
    width: 11rem;
  }
  .input-box {
    height: 1.7rem;
    background-color: #d9d9d9;
    border: none;
    padding: 0.5rem;
    border-radius: 8px;
    font-size: 0.5rem;

    :focus {
      outline: none;
      border: 2px solid #275623;
      mix-blend-mode: normal;
    }

    :focus:required:invalid {
      border: 2px solid #f22a2a;
    }
  }
  .input-file__label {
    border: 2px #9ed299 solid;
    visibility: none;
    background-color: #9ed299;
    border-radius: 100px;
    font-family: 'SourceCodePro-Medium', sans-serif;
    font-style: normal;
    justify-content: center;
    align-items: center;
    align-content: flex-start;
    font-size: 0.7rem;
    text-align: center;
    min-width: 10rem;
    box-shadow: 0px 12px 12px #d9d9d9;
    color: #275623;
    padding: 0.3rem;
    margin-top: 0.7rem;

    :hover {
      cursor: pointer;
      border: 2px #9ed299 solid;
      background-color: #fafaff;
    }
  }

  @media (min-width: 664px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    max-width: 50rem;
    padding: 3rem;

    .input-container {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      font-size: 1rem;
      line-height: 21px;
      text-align: left;
    }
    .inputs-container {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      gap: 3rem;
    }
    .input-box {
      font-size: 0.8rem;
      height: 2.3rem;
      min-width: 13rem;
    }

    .input-file__label {
      border: 2px #9ed299 solid;
      visibility: none;
      background-color: #9ed299;
      border-radius: 100px;
      font-family: 'SourceCodePro-Medium', sans-serif;
      font-style: normal;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      font-size: 0.9rem;
      padding: 0.7rem;
      text-align: center;
      min-width: 10rem;
      box-shadow: 0px 12px 12px #d9d9d9;
      color: #275623;

      :hover {
        border: 2px #9ed299 solid;
        cursor: pointer;
        background-color: #fafaff;
      }
    }
  }
`;

export const UploadLogo = styled.img`
  width: 1rem;
  height: 1rem;
`;
