import styled from 'styled-components';

export const TranslationCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 777px) {
    justify-content: flex-start;
    margin-left: 10rem;
  }
`;

export const TranslationDetailsCardStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  padding-top: 2.2rem;
  gap: 1.2rem;
  width: 19rem;
  height: 28rem;
  background: #ffffff;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  border-radius: 26px;
  @media (min-width: 777px) {
    display: flex;
    flex-direction: column;
    min-width: 38rem;
    gap: 1.5rem;
    padding: 3rem;
    min-height: 31rem;
  }
`;

export const Property = styled.p`
  font-family: 'SourceCodePro-Bold', sans-serif;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  color: #030303;
  @media (min-width: 777px) {
    font-size: 1.5rem;
  }
`;

export const PropertyInfo = styled.p`
  font-family: 'SourceCodePro-Medium', sans-serif;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  color: #030303;
  @media (min-width: 777px) {
    font-size: 1.5rem;
  }
`;

export const InfoContainer = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  @media (min-width: 777px) {
    font-size: 1.3rem;
  }
`;

export const DownloadLink = styled.a`
  color: #275623;
`;
