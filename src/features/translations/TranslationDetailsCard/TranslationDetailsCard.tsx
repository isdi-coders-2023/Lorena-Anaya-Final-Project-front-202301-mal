import {
  InfoContainer,
  Property,
  PropertyInfo,
  TranslationCardContainer,
  TranslationDetailsCardStyled,
} from './TranslationDetailsCardStyled';

export const TranslationDetailsCard = () => {
  return (
    <>
      <TranslationCardContainer>
        <TranslationDetailsCardStyled>
          <InfoContainer>
            <Property role="paragraph">Booking ref.</Property>
            <PropertyInfo role="paragraph">TS1</PropertyInfo>
          </InfoContainer>

          <InfoContainer>
            <Property role="paragraph">Due date:</Property>
            <PropertyInfo role="paragraph">24/03/2023</PropertyInfo>
          </InfoContainer>

          <InfoContainer>
            <Property role="paragraph">Source:</Property>
            <PropertyInfo role="paragraph">English</PropertyInfo>
          </InfoContainer>

          <InfoContainer>
            <Property role="paragraph">Target:</Property>
            <PropertyInfo role="paragraph">Spanish</PropertyInfo>
          </InfoContainer>

          <InfoContainer>
            <Property role="paragraph">Nº of words:</Property>
            <PropertyInfo role="paragraph">574</PropertyInfo>
          </InfoContainer>

          <InfoContainer>
            <Property role="paragraph">Status:</Property>
            <PropertyInfo role="paragraph">Pending</PropertyInfo>
          </InfoContainer>

          <InfoContainer>
            <Property role="paragraph">Doc to translate:</Property>
            <PropertyInfo role="paragraph">Download</PropertyInfo>
          </InfoContainer>

          <InfoContainer>
            <Property role="paragraph">Doc translated:</Property>
            <PropertyInfo role="paragraph">Upload</PropertyInfo>
          </InfoContainer>
        </TranslationDetailsCardStyled>
      </TranslationCardContainer>
    </>
  );
};
