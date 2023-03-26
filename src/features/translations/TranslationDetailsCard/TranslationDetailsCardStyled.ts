import styled from 'styled-components';

export const TranslationCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1231px) {
    margin-top: 1.5rem;
    justify-content: flex-start;
    flex-direction: row;
    align-content: flex-start;
    margin-left: 2rem;
  }
`;

export const TranslationDetailsCardStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  padding-top: 2.2rem;
  gap: 1.4rem;
  width: 19rem;
  height: 25rem;
  background: #ffffff;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  border-radius: 26px;

  .input-file__label {
    color: #275623;
    border: 2px #9ed299 solid;
    background-color: transparent;
    font-family: 'Poppins-Medium', sans-serif;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    box-shadow: 0px 12px 12px #d9d9d9;
    justify-content: center;
    width: 10rem;
    :hover {
      cursor: pointer;
      border: 2px #9ed299 solid;
      background-color: #fafaff;
    }
  }

  @media (min-width: 900px) {
    display: flex;
    flex-direction: column;
    min-width: 34rem;
    gap: 1.7rem;
    padding: 3rem;
    min-height: 25rem;
    margin-left: 3rem;
  }
`;

export const Property = styled.p`
  font-family: 'SourceCodePro-Bold', sans-serif;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  color: #030303;
  @media (min-width: 777px) {
    font-size: 1.2rem;
  }
`;

export const PropertyInfo = styled.p`
  font-family: 'SourceCodePro-Regular', sans-serif;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  color: #030303;
  @media (min-width: 900px) {
    font-size: 1.2rem;
  }
`;

export const InfoContainer = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  @media (min-width: 900px) {
    font-size: 1.1rem;
  }
`;

export const DownloadLink = styled.a`
  color: #275623;
`;

export const UploadButton = styled.button`
  border: 2px #9ed299 solid;
  padding: 0.5rem;
  background-color: #9ed299;
  border-radius: 100px;
  font-family: 'Poppins-Medium', sans-serif;

  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 1rem;
  text-align: center;

  box-shadow: 0px 12px 12px #d9d9d9;
  color: #275623;

  :hover {
    cursor: pointer;
    border: 2px #9ed299 solid;
    background-color: #fafaff;
  }
`;

export const UploadButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const UploadContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 1rem;
  @media (min-width: 1231px) {
    justify-content: flex-start;
    margin-left: 10rem;
  }

  width: 19rem;
  height: 12rem;

  border-radius: 26px;
  .input-file__label {
    color: #275623;
    border: 2px #9ed299 solid;
    background-color: transparent;
    font-family: 'Poppins-Medium', sans-serif;
    font-size: 1rem;
    display: flex;
    align-items: center;
    box-shadow: 0px 12px 12px #d9d9d9;
    justify-content: center;

    :hover {
      cursor: pointer;
      border: 2px #9ed299 solid;
      background-color: #fafaff;
    }
  }

  @media (min-width: 777px) {
    display: flex;
    flex-direction: column;
    min-width: 28rem;
    gap: 1.5rem;

    min-height: 15rem;
  }
`;

export const UploadText = styled.p`
  font-family: 'SourceCodePro-Bold', sans-serif;
  font-size: 1rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #030303;

  @media (min-width: 777px) {
    font-size: 1.2rem;
  }
`;
